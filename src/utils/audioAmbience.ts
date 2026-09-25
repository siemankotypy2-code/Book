/**
 * Web Audio API synthesizer for ambient background sounds during reading
 * No external audio files needed - pure client-side procedural synthesis.
 */

class SoundGenerator {
  private ctx: AudioContext | null = null;
  private currentType: string | null = null;
  private gainNode: GainNode | null = null;
  private noiseNode: AudioNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private intervalId: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public play(type: 'rain' | 'library' | 'campfire', volume: number = 0.3) {
    this.stop();
    this.initContext();
    if (!this.ctx) return;

    this.currentType = type;
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(volume, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);

    if (type === 'rain') {
      this.startRainSound();
    } else if (type === 'library') {
      this.startLibraryHum();
    } else if (type === 'campfire') {
      this.startCampfireSound();
    }
  }

  public setVolume(volume: number) {
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setTargetAtTime(Math.max(0, Math.min(1, volume)), this.ctx.currentTime, 0.1);
    }
  }

  public stop() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.noiseNode) {
      try {
        (this.noiseNode as AudioBufferSourceNode).stop?.();
        this.noiseNode.disconnect();
      } catch {
        // ignore
      }
      this.noiseNode = null;
    }
    if (this.filterNode) {
      this.filterNode.disconnect();
      this.filterNode = null;
    }
    if (this.gainNode) {
      this.gainNode.disconnect();
      this.gainNode = null;
    }
    this.currentType = null;
  }

  public isPlaying(): boolean {
    return this.currentType !== null;
  }

  public getCurrentType(): string | null {
    return this.currentType;
  }

  // Pink noise generator for gentle rain
  private startRainSound() {
    if (!this.ctx || !this.gainNode) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
      b6 = white * 0.115926;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    // Filter to simulate soft raindrops on a window
    this.filterNode = this.ctx.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.filterNode.frequency.setValueAtTime(850, this.ctx.currentTime);

    noise.connect(this.filterNode);
    this.filterNode.connect(this.gainNode);
    noise.start();
    this.noiseNode = noise;
  }

  // Deep brown noise for calm focus / quiet library
  private startLibraryHum() {
    if (!this.ctx || !this.gainNode) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 0.6;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    this.filterNode = this.ctx.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.filterNode.frequency.setValueAtTime(320, this.ctx.currentTime);

    noise.connect(this.filterNode);
    this.filterNode.connect(this.gainNode);
    noise.start();
    this.noiseNode = noise;
  }

  // Soft fireplace rumble with occasional subtle crackles
  private startCampfireSound() {
    if (!this.ctx || !this.gainNode) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.015 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 0.5;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    this.filterNode = this.ctx.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.filterNode.frequency.setValueAtTime(280, this.ctx.currentTime);

    noise.connect(this.filterNode);
    this.filterNode.connect(this.gainNode);
    noise.start();
    this.noiseNode = noise;

    // Simulate occasional crackle
    this.intervalId = window.setInterval(() => {
      if (!this.ctx || !this.gainNode || Math.random() > 0.4) return;
      const crackleOsc = this.ctx.createOscillator();
      const crackleGain = this.ctx.createGain();
      crackleOsc.type = 'triangle';
      crackleOsc.frequency.setValueAtTime(100 + Math.random() * 400, this.ctx.currentTime);
      crackleGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      crackleGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04);
      crackleOsc.connect(crackleGain);
      crackleGain.connect(this.gainNode);
      crackleOsc.start();
      crackleOsc.stop(this.ctx.currentTime + 0.05);
    }, 400);
  }
}

export const ambientSound = new SoundGenerator();
