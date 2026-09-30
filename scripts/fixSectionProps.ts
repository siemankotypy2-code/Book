import * as fs from 'fs';

const files = [
  { path: 'src/data/chapterFortyNineData.ts', chName: 'chapterFortyNine' },
  { path: 'src/data/chapterFiftyData.ts', chName: 'chapterFifty' },
  { path: 'src/data/chapterFiftyOneData.ts', chName: 'chapterFiftyOne' },
  { path: 'src/data/chapterFiftyTwoData.ts', chName: 'chapterFiftyTwo' },
  { path: 'src/data/chapterFiftyThreeData.ts', chName: 'chapterFiftyThree' }
];

for (const f of files) {
  let content = fs.readFileSync(f.path, 'utf-8');
  
  // Parse chapter object from file
  const chapterMatch = content.match(new RegExp(`export const ${f.chName}: Chapter = ({[\\s\\S]*?});\\n?$`));
  if (!chapterMatch) {
    console.error(`Could not match chapter in ${f.path}`);
    continue;
  }
  
  const chapterObj = JSON.parse(chapterMatch[1]);
  chapterObj.sections = chapterObj.sections.map((sec: any, idx: number) => {
    let category: 'wstep' | 'teoria' | 'studium-przypadku' | 'neuronauka' | 'cwiczenia' | 'podsumowanie' = 'teoria';
    if (idx === 0) category = 'wstep';
    else if (idx === 2 || sec.caseStudyRef) category = 'studium-przypadku';
    else if (idx === 17 || sec.exerciseRef) category = 'cwiczenia';
    else if (idx === 22 || sec.title.includes('MIKROSKOP')) category = 'neuronauka';
    else if (idx === chapterObj.sections.length - 1 || sec.title.includes('SYNTEZA')) category = 'podsumowanie';

    const words = (sec.paragraphs || []).join(' ').split(/\s+/).length;
    const readingTimeMinutes = Math.max(3, Math.ceil(words / 150));

    return {
      ...sec,
      category,
      readingTimeMinutes
    };
  });

  const updatedChapterJson = JSON.stringify(chapterObj, null, 2);
  const updatedContent = content.replace(
    new RegExp(`export const ${f.chName}: Chapter = {[\\s\\S]*?};\\n?$`),
    `export const ${f.chName}: Chapter = ${updatedChapterJson};`
  );

  fs.writeFileSync(f.path, updatedContent, 'utf-8');
  console.log(`Updated ${f.path} sections with category and readingTimeMinutes`);
}
