
import { Theme, ExamVariant, Section, QuestionType } from './types.ts';

interface TaskData {
  title: string;
  instructions: string;
  type: QuestionType;
  questions: { text: string; correctAnswer?: string; options?: string[]; points: number }[];
  options?: string[];
}

const themeData: Record<string, Record<string, TaskData[]>> = {
  'theme-1': { // THE MEDIA (PRINT & PRESS)
    v1: [
      {
        title: 'I. Lexical Collocations',
        instructions: 'Complete the following 12 sentences with appropriate media collocations (e.g., press release, front-line):',
        type: 'gap_fill',
        options: ['press release', 'circulation', 'broadsheet', 'front-line', 'headline', 'exclusive', 'source', 'censorship', 'editorial', 'freelance', 'tabloid', 'feature'],
        questions: [
          { text: 'The company issued a official _______ to clarify the situation.', correctAnswer: 'press release', points: 2 },
          { text: 'The _______ of the newspaper has declined due to the internet.', correctAnswer: 'circulation', points: 2 },
          { text: 'Quality newspapers are often referred to as _______ publications.', correctAnswer: 'broadsheet', points: 2 },
          { text: 'She is a brave _______ reporter covering the conflict.', correctAnswer: 'front-line', points: 2 },
          { text: 'The morning _______ shocked the entire nation.', correctAnswer: 'headline', points: 2 },
          { text: 'Our channel has an _______ interview with the champion.', correctAnswer: 'exclusive', points: 2 },
          { text: 'The journalist refused to name their anonymous _______.', correctAnswer: 'source', points: 2 },
          { text: 'Heavy government _______ restricted the flow of information.', correctAnswer: 'censorship', points: 2 },
          { text: 'The _______ discussed the ethics of modern journalism.', correctAnswer: 'editorial', points: 2 },
          { text: 'He works as a _______ journalist for several magazines.', correctAnswer: 'freelance', points: 2 },
          { text: 'People who like gossip usually buy a _______ newspaper.', correctAnswer: 'tabloid', points: 2 },
          { text: 'The Sunday edition includes a 5-page _______ on art.', correctAnswer: 'feature', points: 2 }
        ]
      },
      {
        title: 'II. Classification of Materials',
        instructions: 'Match the printed materials with their definitions:',
        type: 'matching',
        options: ['a. A small book with information about a product', 'b. A list of items you can buy', 'c. A daily publication of news', 'd. A periodic publication with stories and photos', 'e. A small folded paper with advertisements'],
        questions: [
          { text: 'Brochure', correctAnswer: 'a', points: 2 },
          { text: 'Catalogue', correctAnswer: 'b', points: 2 },
          { text: 'Journal', correctAnswer: 'd', points: 2 },
          { text: 'Leaflet', correctAnswer: 'e', points: 2 },
          { text: 'Daily', correctAnswer: 'c', points: 2 }
        ]
      },
      {
        title: 'III. Vocabulary Writing',
        instructions: 'List and explain the following media-related article types:',
        type: 'sentence_writing',
        questions: [
          { text: 'Define and give an example of an "Op-ed" piece.', points: 5 },
          { text: 'Describe the purpose of an "Obituary" in a newspaper.', points: 5 },
          { text: 'Explain what a "Letters to the Editor" section is for.', points: 5 },
          { text: 'What characterizes a "Human-interest story"?', points: 5 }
        ]
      },
      {
        title: 'IV. Contextual Usage',
        instructions: 'Write 3 academic sentences about printed media using the terms: "syndicated", "muckraking", and "byline".',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "syndicated":', points: 8 },
          { text: 'Sentence using "muckraking":', points: 8 },
          { text: 'Sentence using "byline":', points: 8 }
        ]
      },
      {
        title: 'V. Formal Definition',
        instructions: 'Provide a formal definition for "Checkbook Journalism".',
        type: 'definition',
        questions: [{ text: 'Define: Checkbook Journalism', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Media Phrasal Verbs',
        instructions: 'Complete these 12 sentences using media-related phrasal verbs (e.g., track down, bring out):',
        type: 'gap_fill',
        options: ['track down', 'bring out', 'pick up on', 'blow up', 'run into', 'leaf through', 'gloss over', 'go through', 'lay out', 'print off', 'read up on', 'break out'],
        questions: [
          { text: 'It took weeks to _______ the witness for the story.', correctAnswer: 'track down', points: 2 },
          { text: 'The publisher will _______ the new edition next month.', correctAnswer: 'bring out', points: 2 },
          { text: 'Media outlets often _______ small mistakes and magnify them.', correctAnswer: 'pick up on', points: 2 },
          { text: 'The scandal began to _______ in the tabloid press.', correctAnswer: 'blow up', points: 2 },
          { text: 'While researching, I _______ some old archives.', correctAnswer: 'run into', points: 2 },
          { text: 'I like to _______ the paper while having coffee.', correctAnswer: 'leaf through', points: 2 },
          { text: 'Politicians often try to _______ their failures in interviews.', correctAnswer: 'gloss over', points: 2 },
          { text: 'We need to _______ the final draft before publishing.', correctAnswer: 'go through', points: 2 },
          { text: 'The designers have to _______ the front page carefully.', correctAnswer: 'lay out', points: 2 },
          { text: 'Could you _______ the latest copy of the report?', correctAnswer: 'print off', points: 2 },
          { text: 'I spent all night _______ the latest media laws.', correctAnswer: 'read up on', points: 2 },
          { text: 'News of the riot began to _______ on social media first.', correctAnswer: 'break out', points: 2 }
        ]
      },
      {
        title: 'II. Legal Terms in Media',
        instructions: 'Provide definitions for the following legal media concepts:',
        type: 'definition',
        questions: [
          { text: 'Libel', points: 4 },
          { text: 'Slander', points: 4 },
          { text: 'Defamation', points: 4 },
          { text: 'Privacy Laws', points: 4 },
          { text: 'Public Domain', points: 4 }
        ]
      },
      {
        title: 'III. Conceptual Differences',
        instructions: 'Explain the difference between these media concepts:',
        type: 'comparison',
        questions: [
          { text: 'Off the record vs. On the record', points: 10 },
          { text: 'Mainstream media vs. Alternative media', points: 10 }
        ]
      },
      {
        title: 'IV. Sentence Transformation',
        instructions: 'Rewrite the following sentences using the word "Sensationalist":',
        type: 'sentence_writing',
        questions: [
          { text: 'Original: The newspaper focuses on scandals to sell more copies.', points: 8 }
        ]
      },
      {
        title: 'V. Matching Expressions',
        instructions: 'Match these journalistic idioms with their meanings:',
        type: 'matching',
        options: ['a. To keep information secret', 'b. To publish a story before anyone else', 'c. To speak publicly about something secret', 'd. A very exciting news story', 'e. News that is not important'],
        questions: [
          { text: 'Get a scoop', correctAnswer: 'b', points: 2 },
          { text: 'Sit on a story', correctAnswer: 'a', points: 2 },
          { text: 'Blow the whistle', correctAnswer: 'c', points: 2 },
          { text: 'Blockbuster', correctAnswer: 'd', points: 2 },
          { text: 'Soft news', correctAnswer: 'e', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Academic Media Vocabulary',
        instructions: 'Complete these 12 sentences with advanced academic terms related to Press & Media:',
        type: 'gap_fill',
        options: ['gatekeeping', 'agenda-setting', 'spin doctor', 'paparazzi', 'citizen journalism', 'infotainment', 'yellow journalism', 'muckraking', 'bias', 'objectivity', 'credibility', 'press junket'],
        questions: [
          { text: 'The process of _______ determines what news reaches the public.', correctAnswer: 'gatekeeping', points: 2 },
          { text: 'Media has an _______ function, deciding what topics are important.', correctAnswer: 'agenda-setting', points: 2 },
          { text: 'The politician hired a _______ to handle the PR disaster.', correctAnswer: 'spin doctor', points: 2 },
          { text: 'Celebrities are often hounded by the aggressive _______.', correctAnswer: 'paparazzi', points: 2 },
          { text: 'Social media has accelerated the rise of _______.', correctAnswer: 'citizen journalism', points: 2 },
          { text: 'Many news programs are criticized for becoming mere _______.', correctAnswer: 'infotainment', points: 2 },
          { text: 'History remembers _______ for its extreme sensationalism.', correctAnswer: 'yellow journalism', points: 2 },
          { text: 'The era of _______ exposed corporate greed in the early 20th century.', correctAnswer: 'muckraking', points: 2 },
          { text: 'Journalists must avoid personal _______ in their reporting.', correctAnswer: 'bias', points: 2 },
          { text: 'Absolute _______ is the goal of every professional newsroom.', correctAnswer: 'objectivity', points: 2 },
          { text: 'Once lost, a news organization\'s _______ is hard to regain.', correctAnswer: 'credibility', points: 2 },
          { text: 'Critics were invited to a lavish _______ to promote the movie.', correctAnswer: 'press junket', points: 2 }
        ]
      },
      {
        title: 'II. Metaphorical Language',
        instructions: 'Explain the metaphorical meaning of these media-related expressions:',
        type: 'definition',
        questions: [
          { text: '"The fourth estate"', points: 5 },
          { text: '"Watchdog journalism"', points: 5 },
          { text: '"Gutter press"', points: 5 },
          { text: '"Echo chamber"', points: 5 }
        ]
      },
      {
        title: 'III. Extended Writing',
        instructions: 'Write a short paragraph (4-5 sentences) discussing the impact of "Digital Saturation" on traditional print newspapers.',
        type: 'sentence_writing',
        questions: [
          { text: 'Discuss "Digital Saturation" impact:', points: 15 }
        ]
      },
      {
        title: 'IV. Advanced Matching',
        instructions: 'Match these professional terms with their definitions:',
        type: 'matching',
        options: ['a. A journalist embedded with military units', 'b. News stories distributed to many outlets', 'c. A short, catchy part of a speech', 'd. A press conference location', 'e. The chief editor of a paper'],
        questions: [
          { text: 'Embed', correctAnswer: 'a', points: 2 },
          { text: 'Syndicate', correctAnswer: 'b', points: 2 },
          { text: 'Sound bite', correctAnswer: 'c', points: 2 },
          { text: 'Editor-in-chief', correctAnswer: 'e', points: 2 },
          { text: 'Press box', correctAnswer: 'd', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Compare the ethical implications of "Embedded Journalism" versus "Independent War Correspondence".',
        type: 'comparison',
        questions: [
          { text: 'Embedded vs. Independent War Correspondence', points: 10 }
        ]
      }
    ]
  },
  'theme-2': { // MEDICAL LANGUAGE
    v1: [
      {
        title: 'I. Medical Collocations',
        instructions: 'Fill the 12 gaps with appropriate medical collocations:',
        type: 'gap_fill',
        options: ['diagnosis', 'prognosis', 'treatment', 'symptoms', 'chronic', 'acute', 'relapse', 'remission', 'immune', 'epidemic', 'vaccination', 'prescription'],
        questions: [
          { text: 'The doctor confirmed the _______ after several blood tests.', correctAnswer: 'diagnosis', points: 2 },
          { text: 'The patient\'s _______ for a full recovery looks excellent.', correctAnswer: 'prognosis', points: 2 },
          { text: 'What is the most effective _______ for this condition?', correctAnswer: 'treatment', points: 2 },
          { text: 'Fatigue and fever are common _______ of this virus.', correctAnswer: 'symptoms', points: 2 },
          { text: 'He suffers from _______ back pain due to an old injury.', correctAnswer: 'chronic', points: 2 },
          { text: 'The patient was admitted with _______ appendicitis.', correctAnswer: 'acute', points: 2 },
          { text: 'After three months of health, he suffered a sudden _______.', correctAnswer: 'relapse', points: 2 },
          { text: 'Fortunately, the cancer is now in _______.', correctAnswer: 'remission', points: 2 },
          { text: 'Vitamin C is known to help boost the _______ system.', correctAnswer: 'immune', points: 2 },
          { text: 'The city is currently facing a flu _______.', correctAnswer: 'epidemic', points: 2 },
          { text: 'Universal _______ has eradicated many childhood diseases.', correctAnswer: 'vaccination', points: 2 },
          { text: 'You need a _______ to purchase these strong painkillers.', correctAnswer: 'prescription', points: 2 }
        ]
      },
      {
        title: 'II. Hospital Departments',
        instructions: 'List 5 common hospital departments and briefly explain what they treat:',
        type: 'sentence_writing',
        questions: [
          { text: 'Department 1:', points: 4 },
          { text: 'Department 2:', points: 4 },
          { text: 'Department 3:', points: 4 },
          { text: 'Department 4:', points: 4 },
          { text: 'Department 5:', points: 4 }
        ]
      },
      {
        title: 'III. Matching Terms',
        instructions: 'Match these medical terms with their definitions:',
        type: 'matching',
        options: ['a. Not harmful in effect', 'b. A fake medicine for psychological effect', 'c. High blood pressure', 'd. Loss of sensation', 'e. A disease-causing organism'],
        questions: [
          { text: 'Benign', correctAnswer: 'a', points: 2 },
          { text: 'Placebo', correctAnswer: 'b', points: 2 },
          { text: 'Hypertension', correctAnswer: 'c', points: 2 },
          { text: 'Anesthesia', correctAnswer: 'd', points: 2 },
          { text: 'Pathogen', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'IV. Contextual Sentences',
        instructions: 'Write 3 sentences using "convalesce", "sedentary", and "hereditary" in a medical context.',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence with "convalesce":', points: 8 },
          { text: 'Sentence with "sedentary":', points: 8 },
          { text: 'Sentence with "hereditary":', points: 8 }
        ]
      },
      {
        title: 'V. Short Definition',
        instructions: 'Define the term "Inpatient".',
        type: 'definition',
        questions: [{ text: 'Define: Inpatient', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Medical Phrasal Verbs',
        instructions: 'Complete these 12 sentences with medical phrasal verbs:',
        type: 'gap_fill',
        options: ['come down with', 'pass out', 'get over', 'fight off', 'pull through', 'throw up', 'pass away', 'black out', 'clog up', 'wear off', 'flare up', 'carry out'],
        questions: [
          { text: 'I think I am starting to _______ a cold.', correctAnswer: 'come down with', points: 2 },
          { text: 'The heat made her _______ in the middle of the street.', correctAnswer: 'pass out', points: 2 },
          { text: 'It took him months to _______ the severe infection.', correctAnswer: 'get over', points: 2 },
          { text: 'Healthy food helps your body _______ bacteria.', correctAnswer: 'fight off', points: 2 },
          { text: 'The surgery was difficult, but he managed to _______.', correctAnswer: 'pull through', points: 2 },
          { text: 'Food poisoning often makes people _______.', correctAnswer: 'throw up', points: 2 },
          { text: 'Sadly, the elderly patient _______ during the night.', correctAnswer: 'pass away', points: 2 },
          { text: 'He suffered a head injury and began to _______.', correctAnswer: 'black out', points: 2 },
          { text: 'Too much cholesterol can _______ your arteries.', correctAnswer: 'clog up', points: 2 },
          { text: 'The effect of the painkiller will _______ in four hours.', correctAnswer: 'wear off', points: 2 },
          { text: 'Arthritis can _______ when the weather changes.', correctAnswer: 'flare up', points: 2 },
          { text: 'Surgeons _______ hundreds of operations every week.', correctAnswer: 'carry out', points: 2 }
        ]
      },
      {
        title: 'II. Defining Procedures',
        instructions: 'Provide definitions for these 5 common medical procedures:',
        type: 'definition',
        questions: [
          { text: 'Biopsy', points: 4 },
          { text: 'Triage', points: 4 },
          { text: 'Quarantine', points: 4 },
          { text: 'Hospice', points: 4 },
          { text: 'Amputation', points: 4 }
        ]
      },
      {
        title: 'III. Contrastive Analysis',
        instructions: 'Explain the lexical differences between these pairs:',
        type: 'comparison',
        questions: [
          { text: 'Communicable vs. Non-communicable diseases', points: 10 },
          { text: 'Over-the-counter (OTC) vs. Prescription-only medicine', points: 10 }
        ]
      },
      {
        title: 'IV. Sentence Construction',
        instructions: 'Use the term "Malignant" in a sentence describing a serious medical condition.',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence with "Malignant":', points: 8 }
        ]
      },
      {
        title: 'V. Matching Prefixes',
        instructions: 'Match these medical prefixes with their meanings:',
        type: 'matching',
        options: ['a. Heart', 'b. Stomach', 'c. Blood', 'd. Nerve', 'e. Skin'],
        questions: [
          { text: 'Cardio-', correctAnswer: 'a', points: 2 },
          { text: 'Gastro-', correctAnswer: 'b', points: 2 },
          { text: 'Hema-', correctAnswer: 'c', points: 2 },
          { text: 'Neuro-', correctAnswer: 'd', points: 2 },
          { text: 'Derma-', correctAnswer: 'e', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Advanced Pathology Vocabulary',
        instructions: 'Complete 12 sentences with advanced medical terms:',
        type: 'gap_fill',
        options: ['morbidity', 'mortality', 'prevalence', 'incidence', 'asymptomatic', 'comorbidity', 'etiology', 'pathogenesis', 'palliative', 'iatrogenic', 'nosocomial', 'prophylactic'],
        questions: [
          { text: 'The _______ rate of the disease is higher in urban areas.', correctAnswer: 'morbidity', points: 2 },
          { text: 'A low _______ rate suggests the treatment is working.', correctAnswer: 'mortality', points: 2 },
          { text: 'The _______ of obesity has risen globally.', correctAnswer: 'prevalence', points: 2 },
          { text: 'The _______ of new infections peaked last week.', correctAnswer: 'incidence', points: 2 },
          { text: 'Some carriers are _______ and show no signs of illness.', correctAnswer: 'asymptomatic', points: 2 },
          { text: 'Diabetes is a common _______ in elderly heart patients.', correctAnswer: 'comorbidity', points: 2 },
          { text: 'Scientists are still studying the _______ of the new virus.', correctAnswer: 'etiology', points: 2 },
          { text: 'Understanding the _______ helps in developing drugs.', correctAnswer: 'pathogenesis', points: 2 },
          { text: 'The patient received _______ care to manage pain.', correctAnswer: 'palliative', points: 2 },
          { text: 'An _______ injury is one caused by medical treatment.', correctAnswer: 'iatrogenic', points: 2 },
          { text: 'Sterilization is vital to prevent _______ infections.', correctAnswer: 'nosocomial', points: 2 },
          { text: 'Taking vitamins can be a _______ measure against illness.', correctAnswer: 'prophylactic', points: 2 }
        ]
      },
      {
        title: 'II. Medical Metaphor & Idioms',
        instructions: 'Explain the meaning of these medical-origin idioms in general English:',
        type: 'definition',
        questions: [
          { text: '"A bitter pill to swallow"', points: 5 },
          { text: '"Give someone a clean bill of health"', points: 5 },
          { text: '"Just what the doctor ordered"', points: 5 },
          { text: '"Under the knife"', points: 5 }
        ]
      },
      {
        title: 'III. Essayist Writing',
        instructions: 'Discuss the ethical challenges of "Placebo-controlled trials" in clinical research.',
        type: 'sentence_writing',
        questions: [
          { text: 'Placebo-controlled trials ethics:', points: 15 }
        ]
      },
      {
        title: 'IV. Matching Medical Specialists',
        instructions: 'Match the specialist with their area of expertise:',
        type: 'matching',
        options: ['a. Feet and ankles', 'b. Mental health', 'c. Eye disorders', 'd. Ear, nose, and throat', 'e. Pregnancy and childbirth'],
        questions: [
          { text: 'Podiatrist', correctAnswer: 'a', points: 2 },
          { text: 'Psychiatrist', correctAnswer: 'b', points: 2 },
          { text: 'Ophthalmologist', correctAnswer: 'c', points: 2 },
          { text: 'Otolaryngologist', correctAnswer: 'd', points: 2 },
          { text: 'Obstetrician', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Compare "Alternative Medicine" with "Evidence-based Medicine" from a lexical perspective.',
        type: 'comparison',
        questions: [
          { text: 'Alternative vs. Evidence-based Medicine', points: 10 }
        ]
      }
    ]
  },
  'theme-3': { // TECHNOLOGY & ITS IMPACT
    v1: [
      {
        title: 'I. Basic Tech Collocations',
        instructions: 'Fill the 12 gaps with technology collocations:',
        type: 'gap_fill',
        options: ['high-tech', 'cutting-edge', 'state-of-the-art', 'user-friendly', 'broadband', 'wireless', 'streaming', 'software', 'hardware', 'cybersecurity', 'cloud', 'digital'],
        questions: [
          { text: 'Japan is known for its _______ manufacturing sector.', correctAnswer: 'high-tech', points: 2 },
          { text: 'They are doing _______ research in AI.', correctAnswer: 'cutting-edge', points: 2 },
          { text: 'The new laboratory has _______ equipment.', correctAnswer: 'state-of-the-art', points: 2 },
          { text: 'The interface is very _______ and intuitive.', correctAnswer: 'user-friendly', points: 2 },
          { text: 'Most homes now have high-speed _______ connections.', correctAnswer: 'broadband', points: 2 },
          { text: 'I prefer using a _______ mouse for my laptop.', correctAnswer: 'wireless', points: 2 },
          { text: 'Movies and music are now mostly consumed via _______.', correctAnswer: 'streaming', points: 2 },
          { text: 'We need to update the _______ to fix the bugs.', correctAnswer: 'software', points: 2 },
          { text: 'The computer _______ includes the monitor and CPU.', correctAnswer: 'hardware', points: 2 },
          { text: 'Companies are investing more in _______ to prevent leaks.', correctAnswer: 'cybersecurity', points: 2 },
          { text: 'I store all my files in the _______ for easy access.', correctAnswer: 'cloud', points: 2 },
          { text: 'We are living in the _______ age.', correctAnswer: 'digital', points: 2 }
        ]
      },
      {
        title: 'II. Common Hardware',
        instructions: 'List 5 computer peripherals and explain their primary function:',
        type: 'sentence_writing',
        questions: [
          { text: 'Peripheral 1:', points: 4 },
          { text: 'Peripheral 2:', points: 4 },
          { text: 'Peripheral 3:', points: 4 },
          { text: 'Peripheral 4:', points: 4 },
          { text: 'Peripheral 5:', points: 4 }
        ]
      },
      {
        title: 'III. Matching Tech Concepts',
        instructions: 'Match these tech concepts with their definitions:',
        type: 'matching',
        options: ['a. Unwanted emails', 'b. Malicious software', 'c. Secret code for access', 'd. A set of rules for data', 'e. The physical parts of a computer'],
        questions: [
          { text: 'Spam', correctAnswer: 'a', points: 2 },
          { text: 'Malware', correctAnswer: 'b', points: 2 },
          { text: 'Password', correctAnswer: 'c', points: 2 },
          { text: 'Protocol', correctAnswer: 'd', points: 2 },
          { text: 'Hardware', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'IV. Contextual Sentences',
        instructions: 'Write 3 sentences using "obsolescence", "disruptive", and "integrated" in a tech context.',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence with "obsolescence":', points: 8 },
          { text: 'Sentence with "disruptive":', points: 8 },
          { text: 'Sentence with "integrated":', points: 8 }
        ]
      },
      {
        title: 'V. Short Definition',
        instructions: 'Define the term "Bandwidth".',
        type: 'definition',
        questions: [{ text: 'Define: Bandwidth', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Phrasal Verbs in Tech',
        instructions: 'Complete 12 sentences with technology phrasal verbs:',
        type: 'gap_fill',
        options: ['log in', 'back up', 'shut down', 'boot up', 'scroll down', 'go offline', 'hack into', 'plug in', 'wipe out', 'set up', 'zoom in', 'key in'],
        questions: [
          { text: 'You must _______ to access your private account.', correctAnswer: 'log in', points: 2 },
          { text: 'Always _______ your files to an external drive.', correctAnswer: 'back up', points: 2 },
          { text: 'Please _______ your computer before leaving.', correctAnswer: 'shut down', points: 2 },
          { text: 'It takes a minute for the system to _______.', correctAnswer: 'boot up', points: 2 },
          { text: 'You need to _______ to find the footer of the page.', correctAnswer: 'scroll down', points: 2 },
          { text: 'The servers will _______ for maintenance tonight.', correctAnswer: 'go offline', points: 2 },
          { text: 'Criminals tried to _______ the central bank database.', correctAnswer: 'hack into', points: 2 },
          { text: 'Make sure to _______ the charger if the battery is low.', correctAnswer: 'plug in', points: 2 },
          { text: 'A virus can _______ all the data on your hard drive.', correctAnswer: 'wipe out', points: 2 },
          { text: 'I need to _______ my new smart home devices.', correctAnswer: 'set up', points: 2 },
          { text: 'You can _______ on the image to see more detail.', correctAnswer: 'zoom in', points: 2 },
          { text: 'Please _______ your 4-digit code now.', correctAnswer: 'key in', points: 2 }
        ]
      },
      {
        title: 'II. Defining Cyber-Threats',
        instructions: 'Define these 5 security-related tech terms:',
        type: 'definition',
        questions: [
          { text: 'Phishing', points: 4 },
          { text: 'Firewall', points: 4 },
          { text: 'Encryption', points: 4 },
          { text: 'Ransomware', points: 4 },
          { text: 'Trojans', points: 4 }
        ]
      },
      {
        title: 'III. Contrastive Tech Analysis',
        instructions: 'Explain the difference between these concepts:',
        type: 'comparison',
        questions: [
          { text: 'Virtual Reality (VR) vs. Augmented Reality (AR)', points: 10 },
          { text: 'Open-source vs. Proprietary software', points: 10 }
        ]
      },
      {
        title: 'IV. Sentence Construction',
        instructions: 'Use the term "Scalability" in a sentence about cloud computing.',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence with "Scalability":', points: 8 }
        ]
      },
      {
        title: 'V. Matching File Types',
        instructions: 'Match these extensions with their file types:',
        type: 'matching',
        options: ['a. Image', 'b. Executable', 'c. Compressed', 'd. Audio', 'e. Document'],
        questions: [
          { text: '.jpg', correctAnswer: 'a', points: 2 },
          { text: '.exe', correctAnswer: 'b', points: 2 },
          { text: '.zip', correctAnswer: 'c', points: 2 },
          { text: '.mp3', correctAnswer: 'd', points: 2 },
          { text: '.docx', correctAnswer: 'e', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Advanced Digital Transformation',
        instructions: 'Complete 12 sentences with advanced tech terminology:',
        type: 'gap_fill',
        options: ['algorithm', 'big data', 'automation', 'cryptocurrency', 'metaverse', 'biometrics', 'nanotechnology', 'quantum', 'interoperability', 'latency', 'bandwidth', 'encryption'],
        questions: [
          { text: 'The social media _______ determines what you see.', correctAnswer: 'algorithm', points: 2 },
          { text: 'Companies use _______ to predict consumer behavior.', correctAnswer: 'big data', points: 2 },
          { text: 'Industrial _______ has replaced many manual jobs.', correctAnswer: 'automation', points: 2 },
          { text: 'Bitcoin is the most famous type of _______.', correctAnswer: 'cryptocurrency', points: 2 },
          { text: 'Tech giants are investing in the _______ for social VR.', correctAnswer: 'metaverse', points: 2 },
          { text: 'Facial recognition is a form of _______.', correctAnswer: 'biometrics', points: 2 },
          { text: '_______ involves manipulating matter at an atomic scale.', correctAnswer: 'nanotechnology', points: 2 },
          { text: '_______ computing promises to solve complex math fast.', correctAnswer: 'quantum', points: 2 },
          { text: '_______ allows different systems to communicate.', correctAnswer: 'interoperability', points: 2 },
          { text: 'High _______ can cause lag in online gaming.', correctAnswer: 'latency', points: 2 },
          { text: 'Streaming 4K video requires significant _______.', correctAnswer: 'bandwidth', points: 2 },
          { text: 'End-to-end _______ ensures private messaging.', correctAnswer: 'encryption', points: 2 }
        ]
      },
      {
        title: 'II. Technological Idioms',
        instructions: 'Explain the meaning of these tech-origin idioms:',
        type: 'definition',
        questions: [
          { text: '"On the same wavelength"', points: 5 },
          { text: '"Get your wires crossed"', points: 5 },
          { text: '"Push someone\'s buttons"', points: 5 },
          { text: '"A cog in the machine"', points: 5 }
        ]
      },
      {
        title: 'III. Academic Critical Writing',
        instructions: 'Evaluate the impact of "Technological Unemployment" on the future of the global labor market.',
        type: 'sentence_writing',
        questions: [
          { text: 'Technological Unemployment evaluation:', points: 15 }
        ]
      },
      {
        title: 'IV. Matching Tech Eras',
        instructions: 'Match the technology with its defining era:',
        type: 'matching',
        options: ['a. Industrial Revolution', 'b. Digital Age', 'c. Space Age', 'd. Information Age', 'e. AI Era'],
        questions: [
          { text: 'Steam Engine', correctAnswer: 'a', points: 2 },
          { text: 'Smartphone', correctAnswer: 'b', points: 2 },
          { text: 'Satellite', correctAnswer: 'c', points: 2 },
          { text: 'Internet', correctAnswer: 'd', points: 2 },
          { text: 'ChatGPT', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the concept of "Digital Divide" and its socio-economic consequences.',
        type: 'comparison',
        questions: [
          { text: 'Digital Divide analysis', points: 10 }
        ]
      }
    ]
  },
  'theme-4': { // STUDY & LEARNING
    v1: [
      {
        title: 'I. Academic Collocations',
        instructions: 'Complete these 12 sentences with essential academic collocations:',
        type: 'gap_fill',
        options: ['curriculum', 'assignment', 'literacy', 'tuition', 'semester', 'lecture', 'seminar', 'tutorial', 'faculty', 'syllabus', 'scholarship', 'plagiarism'],
        questions: [
          { text: 'The university _______ is revised every five years to include modern topics.', correctAnswer: 'curriculum', points: 2 },
          { text: 'I stayed up all night to finish my history _______.', correctAnswer: 'assignment', points: 2 },
          { text: 'Digital _______ is a vital skill in the modern job market.', correctAnswer: 'literacy', points: 2 },
          { text: 'The _______ fees for international students are quite high.', correctAnswer: 'tuition', points: 2 },
          { text: 'Final exams take place at the end of the _______.', correctAnswer: 'semester', points: 2 },
          { text: 'The professor gave a fascinating _______ on classical architecture.', correctAnswer: 'lecture', points: 2 },
          { text: 'Small group _______ sessions allow for in-depth discussion.', correctAnswer: 'seminar', points: 2 },
          { text: 'My math _______ helps me understand difficult equations.', correctAnswer: 'tutorial', points: 2 },
          { text: 'The _______ of Law is located in the oldest building on campus.', correctAnswer: 'faculty', points: 2 },
          { text: 'Check the _______ for a list of required reading materials.', correctAnswer: 'syllabus', points: 2 },
          { text: 'She was awarded a full _______ because of her athletic talents.', correctAnswer: 'scholarship', points: 2 },
          { text: 'The student was expelled for committing _______ in his thesis.', correctAnswer: 'plagiarism', points: 2 }
        ]
      },
      {
        title: 'II. Degree Hierarchy Listing',
        instructions: 'List 5 academic degrees and describe their professional significance:',
        type: 'sentence_writing',
        questions: [
          { text: 'Degree 1 (e.g. Associate):', points: 4 },
          { text: 'Degree 2:', points: 4 },
          { text: 'Degree 3:', points: 4 },
          { text: 'Degree 4:', points: 4 },
          { text: 'Degree 5:', points: 4 }
        ]
      },
      {
        title: 'III. Simple Sentences',
        instructions: 'Write 3 simple sentences discussing your favorite "study habit":',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence 1:', points: 8 },
          { text: 'Sentence 2:', points: 8 },
          { text: 'Sentence 3:', points: 8 }
        ]
      },
      {
        title: 'IV. Educational Vocabulary Listing',
        instructions: 'Write down 5 nouns specifically related to "Examination" or "Assessment":',
        type: 'sentence_writing',
        questions: [
          { text: 'Assessment vocabulary list:', points: 10 }
        ]
      },
      {
        title: 'V. Formal Definition',
        instructions: 'Provide an academic definition for "Undergraduate".',
        type: 'definition',
        questions: [{ text: 'Define: Undergraduate', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Academic Phrasal Verbs',
        instructions: 'Complete 12 sentences using phrasal verbs for education contexts:',
        type: 'gap_fill',
        options: ['sail through', 'fall behind', 'catch up', 'hand in', 'drop out', 'buckle down', 'scrape through', 'pore over', 'pick up', 'brush up on', 'get across', 'talk over'],
        questions: [
          { text: 'She is so smart she will _______ her final exams.', correctAnswer: 'sail through', points: 2 },
          { text: 'If you miss too many classes, you will _______.', correctAnswer: 'fall behind', points: 2 },
          { text: 'I need to _______ with my reading over the weekend.', correctAnswer: 'catch up', points: 2 },
          { text: 'Remember to _______ your essay before Friday.', correctAnswer: 'hand in', points: 2 },
          { text: 'Sadly, 10% of students _______ during the first year.', correctAnswer: 'drop out', points: 2 },
          { text: 'It is time to _______ and start studying for finals.', correctAnswer: 'buckle down', points: 2 },
          { text: 'I didn\'t study much, so I only managed to _______.', correctAnswer: 'scrape through', points: 2 },
          { text: 'Scholars often _______ ancient manuscripts for hours.', correctAnswer: 'pore over', points: 2 },
          { text: 'You can _______ a lot of vocabulary by reading widely.', correctAnswer: 'pick up', points: 2 },
          { text: 'I need to _______ my French before my trip to Paris.', correctAnswer: 'brush up on', points: 2 },
          { text: 'The lecturer found it hard to _______ the complex theory.', correctAnswer: 'get across', points: 2 },
          { text: 'Let’s _______ the group project ideas together.', correctAnswer: 'talk over', points: 2 }
        ]
      },
      {
        title: 'II. Educational Matching',
        instructions: 'Match the following terms with their precise lexical definitions:',
        type: 'matching',
        options: ['a. A long essay on a particular subject', 'b. A formal talk given to a group', 'c. A short intensive course', 'd. A fixed period of study', 'e. The study of teaching methods'],
        questions: [
          { text: 'Dissertation', correctAnswer: 'a', points: 2 },
          { text: 'Presentation', correctAnswer: 'b', points: 2 },
          { text: 'Workshop', correctAnswer: 'c', points: 2 },
          { text: 'Term', correctAnswer: 'd', points: 2 },
          { text: 'Pedagogy', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'III. Sentence Completion',
        instructions: 'Complete these academic sentences meaningfully:',
        type: 'sentence_writing',
        questions: [
          { text: 'The most effective way to improve "critical thinking" is...', points: 8 },
          { text: 'One major advantage of "distance learning" is...', points: 8 }
        ]
      },
      {
        title: 'IV. Definition Writing',
        instructions: 'Write concise definitions for these 5 study methodologies:',
        type: 'definition',
        questions: [
          { text: 'Mnemonics', points: 4 },
          { text: 'Mind-mapping', points: 4 },
          { text: 'The Pomodoro Technique', points: 4 },
          { text: 'Active Recall', points: 4 },
          { text: 'Spaced Repetition', points: 4 }
        ]
      },
      {
        title: 'V. Conceptual Comparison',
        instructions: 'Explain the difference between a "Lecture" and a "Seminar".',
        type: 'comparison',
        questions: [{ text: 'Lecture vs Seminar', points: 10 }]
      }
    ],
    v3: [
      {
        title: 'I. Academic Metaphors & Idioms',
        instructions: 'Complete 12 sentences with metaphorical academic expressions:',
        type: 'gap_fill',
        options: ['ivory tower', 'climb the ladder', 'gold mine', 'bridge the gap', 'learning curve', 'springboard', 'fertile ground', 'light bulb moment', 'seeds of knowledge', 'fountain of wisdom', 'academic rigor', 'pedagogical approach'],
        questions: [
          { text: 'Academics are often accused of living in an _______.', correctAnswer: 'ivory tower', points: 2 },
          { text: 'A good education helps you _______ of career success.', correctAnswer: 'climb the ladder', points: 2 },
          { text: 'The university archive is a _______ for historians.', correctAnswer: 'gold mine', points: 2 },
          { text: 'This program aims to _______ between theory and practice.', correctAnswer: 'bridge the gap', points: 2 },
          { text: 'The new software has a very steep _______.', correctAnswer: 'learning curve', points: 2 },
          { text: 'A Master\'s degree can be a _______ to a PhD.', correctAnswer: 'springboard', points: 2 },
          { text: 'The debate provided _______ for new research ideas.', correctAnswer: 'fertile ground', points: 2 },
          { text: 'Everything became clear during my _______.', correctAnswer: 'light bulb moment', points: 2 },
          { text: 'Primary school is where the _______ are sown.', correctAnswer: 'seeds of knowledge', points: 2 },
          { text: 'The elderly professor was seen as a _______.', correctAnswer: 'fountain of wisdom', points: 2 },
          { text: 'The course is known for its intense _______.', correctAnswer: 'academic rigor', points: 2 },
          { text: 'The school adopts a modern _______.', correctAnswer: 'pedagogical approach', points: 2 }
        ]
      },
      {
        title: 'II. Definition Writing',
        instructions: 'Provide definitions for these sophisticated academic terms:',
        type: 'definition',
        questions: [
          { text: 'Tenure', points: 4 },
          { text: 'Alumnus', points: 4 },
          { text: 'Doctorate', points: 4 },
          { text: 'Compendium', points: 4 },
          { text: 'Empiricism', points: 4 }
        ]
      },
      {
        title: 'III. Extended Written Response',
        instructions: 'Write a short paragraph evaluating the concept of "Lifelong Learning" in the digital age:',
        type: 'sentence_writing',
        questions: [{ text: 'Paragraph on Lifelong Learning:', points: 15 }]
      },
      {
        title: 'IV. Jargon Matching',
        instructions: 'Match the following research-related terms:',
        type: 'matching',
        options: ['a. Evaluation by experts in the same field', 'b. A list of sources used in research', 'c. A summary of a research paper', 'd. A teaching assistant role', 'e. The study of the nature of knowledge'],
        questions: [
          { text: 'Peer review', correctAnswer: 'a', points: 2 },
          { text: 'Bibliography', correctAnswer: 'b', points: 2 },
          { text: 'Abstract', correctAnswer: 'c', points: 2 },
          { text: 'Sabbatical', correctAnswer: 'd', points: 2 },
          { text: 'Epistemology', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the semantic and practical differences between "Digital Literacy" and "Information Literacy":',
        type: 'comparison',
        questions: [{ text: 'Digital vs Information Literacy', points: 10 }]
      }
    ]
  },
  'theme-5': { // WORK: COLLOCATIONS & SLANG
    v1: [
      {
        title: 'I. Workplace Collocations',
        instructions: 'Complete these 12 sentences with work-related collocations:',
        type: 'gap_fill',
        options: ['resign', 'bonus', 'overtime', 'pension', 'promotion', 'redundant', 'vacancy', 'career path', 'workload', 'deadline', 'commute', 'internship'],
        questions: [
          { text: 'He decided to _______ from the company to start his own business.', correctAnswer: 'resign', points: 2 },
          { text: 'Employees who meet their targets receive a year-end _______.', correctAnswer: 'bonus', points: 2 },
          { text: 'I had to work _______ to finish the project on time.', correctAnswer: 'overtime', points: 2 },
          { text: 'The company contributes to a private _______ scheme.', correctAnswer: 'pension', points: 2 },
          { text: 'She is hoping for a _______ after her successful year.', correctAnswer: 'promotion', points: 2 },
          { text: 'Twenty workers were made _______ after the factory closed.', correctAnswer: 'redundant', points: 2 },
          { text: 'The HR department has advertised a new _______ for a manager.', correctAnswer: 'vacancy', points: 2 },
          { text: 'Mapping out your _______ is essential for long-term success.', correctAnswer: 'career path', points: 2 },
          { text: 'The recent increase in my _______ is causing stress.', correctAnswer: 'workload', points: 2 },
          { text: 'We must meet the _______ to satisfy the client.', correctAnswer: 'deadline', points: 2 },
          { text: 'My daily _______ to the city takes about 45 minutes.', correctAnswer: 'commute', points: 2 },
          { text: 'Graduates often apply for an _______ to gain experience.', correctAnswer: 'internship', points: 2 }
        ]
      },
      {
        title: 'II. Benefits Listing',
        instructions: 'List 5 common workplace "perks" or benefits and describe their value:',
        type: 'sentence_writing',
        questions: [
          { text: 'Benefit 1:', points: 4 },
          { text: 'Benefit 2:', points: 4 },
          { text: 'Benefit 3:', points: 4 },
          { text: 'Benefit 4:', points: 4 },
          { text: 'Benefit 5:', points: 4 }
        ]
      },
      {
        title: 'III. Formal Sentence Writing',
        instructions: 'Write sentences using formal recruitment terminology:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "curriculum vitae":', points: 8 },
          { text: 'Sentence using "headhunter":', points: 8 },
          { text: 'Sentence using "shortlist":', points: 8 }
        ]
      },
      {
        title: 'IV. Office Environment Listing',
        instructions: 'Write 5 nouns related to modern office physical environments or equipment:',
        type: 'sentence_writing',
        questions: [
          { text: 'List 5 office terms:', points: 10 }
        ]
      },
      {
        title: 'V. Simple Definition',
        instructions: 'Define the term "Full-time" employment.',
        type: 'definition',
        questions: [{ text: 'Define: Full-time', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Workplace Phrasal Verbs',
        instructions: 'Complete these 12 sentences using phrasal verbs for work contexts:',
        type: 'gap_fill',
        options: ['take over', 'burn out', 'fill in for', 'call off', 'carry out', 'draw up', 'get ahead', 'keep up with', 'lay off', 'step down', 'take on', 'hand over'],
        questions: [
          { text: 'The new manager will _______ next Monday.', correctAnswer: 'take over', points: 2 },
          { text: 'Working 80 hours a week will make you _______ quickly.', correctAnswer: 'burn out', points: 2 },
          { text: 'Could you _______ me while I am at the dentist?', correctAnswer: 'fill in for', points: 2 },
          { text: 'The meeting was _______ because the CEO was ill.', correctAnswer: 'call off', points: 2 },
          { text: 'He has to _______ a series of complicated tasks.', correctAnswer: 'carry out', points: 2 },
          { text: 'I need to _______ a new contract for the client.', correctAnswer: 'draw up', points: 2 },
          { text: 'You need ambition if you want to _______ in this industry.', correctAnswer: 'get ahead', points: 2 },
          { text: 'It is hard to _______ the latest industry trends.', correctAnswer: 'keep up with', points: 2 },
          { text: 'The airline had to _______ 200 pilots last year.', correctAnswer: 'lay off', points: 2 },
          { text: 'The director decided to _______ after the scandal.', correctAnswer: 'step down', points: 2 },
          { text: 'We are looking to _______ three new designers.', correctAnswer: 'take on', points: 2 },
          { text: 'I will _______ my responsibilities to the new assistant.', correctAnswer: 'hand over', points: 2 }
        ]
      },
      {
        title: 'II. Slang Matching',
        instructions: 'Match the following office slang terms with their meanings:',
        type: 'matching',
        options: ['a. To work very late at night', 'b. To stop working for the day', 'c. A job with no chance of promotion', 'd. Boring, repetitive work', 'e. To talk about work during leisure time'],
        questions: [
          { text: 'Burn the midnight oil', correctAnswer: 'a', points: 2 },
          { text: 'Call it a day', correctAnswer: 'b', points: 2 },
          { text: 'Dead-end job', correctAnswer: 'c', points: 2 },
          { text: 'Drudgery', correctAnswer: 'd', points: 2 },
          { text: 'Talk shop', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'III. Workplace Etiquette Completion',
        instructions: 'Complete the sentences regarding professional behavior:',
        type: 'sentence_writing',
        questions: [
          { text: 'In a formal meeting, it is important to...', points: 8 },
          { text: 'Professional networking involves...', points: 8 }
        ]
      },
      {
        title: 'IV. Definition Writing',
        instructions: 'Provide definitions for these workplace slang terms:',
        type: 'definition',
        questions: [
          { text: 'Cubicle', points: 4 },
          { text: 'Graveyard shift', points: 4 },
          { text: 'Golden handshake', points: 4 },
          { text: 'Pink slip', points: 4 },
          { text: 'Glass ceiling', points: 4 }
        ]
      },
      {
        title: 'V. Conceptual Comparison',
        instructions: 'Explain the difference between "Blue-collar" and "White-collar" workers.',
        type: 'comparison',
        questions: [{ text: 'Blue-collar vs White-collar', points: 10 }]
      }
    ],
    v3: [
      {
        title: 'I. Workplace Metaphors',
        instructions: 'Complete 12 sentences with metaphorical workplace expressions:',
        type: 'gap_fill',
        options: ['rat race', 'climb the ladder', 'think outside the box', 'ball is in your court', 'cut corners', 'level playing field', 'hit the ground running', 'learn the ropes', 'move the goalposts', 'show someone the door', 'slack off', 'get the boot'],
        questions: [
          { text: 'I am tired of the _______ and want to live in the country.', correctAnswer: 'rat race', points: 2 },
          { text: 'She worked hard to _______ in the corporate world.', correctAnswer: 'climb the ladder', points: 2 },
          { text: 'We need to _______ to find a solution to this problem.', correctAnswer: 'think outside the box', points: 2 },
          { text: 'I have made my offer, now the _______.', correctAnswer: 'ball is in your court', points: 2 },
          { text: 'Never _______ when it comes to safety regulations.', correctAnswer: 'cut corners', points: 2 },
          { text: 'Small businesses need a _______ to compete with giants.', correctAnswer: 'level playing field', points: 2 },
          { text: 'The new hire managed to _______ from day one.', correctAnswer: 'hit the ground running', points: 2 },
          { text: 'It takes about a month for a new employee to _______.', correctAnswer: 'learn the ropes', points: 2 },
          { text: 'Every time I finish, they _______ and add more work.', correctAnswer: 'move the goalposts', points: 2 },
          { text: 'The security guard had to _______.', correctAnswer: 'show someone the door', points: 2 },
          { text: 'Managers hate it when employees _______ on Fridays.', correctAnswer: 'slack off', points: 2 },
          { text: 'If you are late again, you will _______.', correctAnswer: 'get the boot', points: 2 }
        ]
      },
      {
        title: 'II. Advanced Corporate Definition Writing',
        instructions: 'Define these complex organizational concepts:',
        type: 'definition',
        questions: [
          { text: 'Telecommuting', points: 4 },
          { text: 'Whistle-blowing', points: 4 },
          { text: 'Constructive dismissal', points: 4 },
          { text: 'Corporate culture', points: 4 },
          { text: 'Human capital', points: 4 }
        ]
      },
      {
        title: 'III. Critical Writing Piece',
        instructions: 'Write a short paragraph analyzing the impact of the "Gig Economy" on modern worker security:',
        type: 'sentence_writing',
        questions: [{ text: 'Analytical paragraph on Gig Economy:', points: 15 }]
      },
      {
        title: 'IV. Buzzword Matching',
        instructions: 'Match these modern corporate buzzwords with their definitions:',
        type: 'matching',
        options: ['a. Combined power greater than the sum of parts', 'b. To reduce the number of employees', 'c. The most important fact or result', 'd. Working together to achieve something', 'e. New ways of doing things'],
        questions: [
          { text: 'Synergy', correctAnswer: 'a', points: 2 },
          { text: 'Downsize', correctAnswer: 'b', points: 2 },
          { text: 'Bottom line', correctAnswer: 'c', points: 2 },
          { text: 'Collaboration', correctAnswer: 'd', points: 2 },
          { text: 'Innovation', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the concept of "Work-life Balance" and its evolution in modern society.',
        type: 'comparison',
        questions: [{ text: 'Work-life Balance analysis', points: 10 }]
      }
    ]
  },
  'theme-6': { // WORK: BUSINESS & MONEY
    v1: [
      {
        title: 'I. Financial Collocations',
        instructions: 'Fill the 12 gaps with business and money collocations:',
        type: 'gap_fill',
        options: ['savings', 'bankrupt', 'profit', 'investment', 'currency', 'debt', 'interest', 'revenue', 'expenses', 'budget', 'overdrawn', 'mortgage'],
        questions: [
          { text: 'It is important to put some money into a _______ account.', correctAnswer: 'savings', points: 2 },
          { text: 'The company went _______ during the economic crisis.', correctAnswer: 'bankrupt', points: 2 },
          { text: 'The annual _______ of the firm was over 1 million dollars.', correctAnswer: 'profit', points: 2 },
          { text: 'Real estate is generally considered a safe _______.', correctAnswer: 'investment', points: 2 },
          { text: 'The dollar is the most widely traded _______ in the world.', correctAnswer: 'currency', points: 2 },
          { text: 'He is struggling to pay off his massive credit card _______.', correctAnswer: 'debt', points: 2 },
          { text: 'The bank charges a high _______ rate on loans.', correctAnswer: 'interest', points: 2 },
          { text: 'Total _______ increased by 20% this quarter.', correctAnswer: 'revenue', points: 2 },
          { text: 'We need to cut down our business _______ this year.', correctAnswer: 'expenses', points: 2 },
          { text: 'I have to stick to a strict monthly _______ to save money.', correctAnswer: 'budget', points: 2 },
          { text: 'My account is _______ because I spent too much.', correctAnswer: 'overdrawn', points: 2 },
          { text: 'Most people take out a _______ to buy a house.', correctAnswer: 'mortgage', points: 2 }
        ]
      },
      {
        title: 'II. Payment Methods Listing',
        instructions: 'List 5 common ways to pay for goods and services and describe their mechanics:',
        type: 'sentence_writing',
        questions: [
          { text: 'Method 1 (e.g. Wire Transfer):', points: 4 },
          { text: 'Method 2:', points: 4 },
          { text: 'Method 3:', points: 4 },
          { text: 'Method 4:', points: 4 },
          { text: 'Method 5:', points: 4 }
        ]
      },
      {
        title: 'III. Business Sentences',
        instructions: 'Write 3 sentences about "Entrepreneurship" using business vocabulary:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "startup":', points: 8 },
          { text: 'Sentence using "venture":', points: 8 },
          { text: 'Sentence using "market share":', points: 8 }
        ]
      },
      {
        title: 'IV. Banking Vocabulary Listing',
        instructions: 'Write 5 nouns related to different types of bank accounts or financial services:',
        type: 'sentence_writing',
        questions: [
          { text: 'Banking vocabulary list:', points: 10 }
        ]
      },
      {
        title: 'V. Simple Definition',
        instructions: 'Define the term "Loan" in a financial context.',
        type: 'definition',
        questions: [{ text: 'Define: Loan', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Business Phrasal Verbs',
        instructions: 'Complete 12 sentences with business phrasal verbs:',
        type: 'gap_fill',
        options: ['set up', 'go under', 'branch out', 'close down', 'pay back', 'rip off', 'save up', 'take out', 'rip up', 'put down', 'run up', 'buy out'],
        questions: [
          { text: 'She wants to _______ her own catering company.', correctAnswer: 'set up', points: 2 },
          { text: 'Many small shops will _______ if taxes increase.', correctAnswer: 'go under', points: 2 },
          { text: 'The firm decided to _______ into international markets.', correctAnswer: 'branch out', points: 2 },
          { text: 'They had to _______ the branch due to low sales.', correctAnswer: 'close down', points: 2 },
          { text: 'I will _______ the money as soon as I get paid.', correctAnswer: 'pay back', points: 2 },
          { text: 'That shop is a ______; they charge double the price.', correctAnswer: 'rip off', points: 2 },
          { text: 'I am trying to _______ for a new car.', correctAnswer: 'save up', points: 2 },
          { text: 'I need to _______ a loan from the bank.', correctAnswer: 'take out', points: 2 },
          { text: 'The boss decided to _______ the old contract.', correctAnswer: 'rip up', points: 2 },
          { text: 'You have to _______ a deposit to reserve the item.', correctAnswer: 'put down', points: 2 },
          { text: 'Don\'t _______ a huge bill on your credit card.', correctAnswer: 'run up', points: 2 },
          { text: 'The tech giant decided to _______ the smaller rival.', correctAnswer: 'buy out', points: 2 }
        ]
      },
      {
        title: 'II. Economic Indicators Matching',
        instructions: 'Match the following economic terms with their definitions:',
        type: 'matching',
        options: ['a. General increase in prices', 'b. Percentage of people without jobs', 'c. Total value of goods produced by a country', 'd. Taxes on imported goods', 'e. A period of economic decline'],
        questions: [
          { text: 'Inflation', correctAnswer: 'a', points: 2 },
          { text: 'Unemployment', correctAnswer: 'b', points: 2 },
          { text: 'GDP', correctAnswer: 'c', points: 2 },
          { text: 'Tariffs', correctAnswer: 'd', points: 2 },
          { text: 'Recession', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'III. Trade & Commerce Completion',
        instructions: 'Complete these sentences regarding international trade:',
        type: 'sentence_writing',
        questions: [
          { text: 'A "trade deficit" occurs when...', points: 8 },
          { text: '"Global supply chains" are vulnerable to...', points: 8 }
        ]
      },
      {
        title: 'IV. Definition Writing',
        instructions: 'Provide definitions for these 5 stock market terms:',
        type: 'definition',
        questions: [
          { text: 'Dividend', points: 4 },
          { text: 'Shareholder', points: 4 },
          { text: 'Bull market', points: 4 },
          { text: 'Bear market', points: 4 },
          { text: 'Portfolio', points: 4 }
        ]
      },
      {
        title: 'V. Conceptual Comparison',
        instructions: 'Explain the difference between "Assets" and "Liabilities".',
        type: 'comparison',
        questions: [{ text: 'Assets vs Liabilities', points: 10 }]
      }
    ],
    v3: [
      {
        title: 'I. Financial Metaphors',
        instructions: 'Complete 12 sentences with money-related metaphorical expressions:',
        type: 'gap_fill',
        options: ['break the bank', 'cost an arm and a leg', 'nest egg', 'pennies from heaven', 'tighten your belt', 'born with a silver spoon', 'in the red', 'in the black', 'bottomless pit', 'rainy day', 'pay through the nose', 'feel the pinch'],
        questions: [
          { text: 'We can afford a nice meal, it won\'t _______.', correctAnswer: 'break the bank', points: 2 },
          { text: 'The repair on my car is going to _______.', correctAnswer: 'cost an arm and a leg', points: 2 },
          { text: 'She has a nice _______ for her retirement.', correctAnswer: 'nest egg', points: 2 },
          { text: 'The inheritance was like _______.', correctAnswer: 'pennies from heaven', points: 2 },
          { text: 'The economy is bad, so we must _______.', correctAnswer: 'tighten your belt', points: 2 },
          { text: 'He never worked a day; he was _______.', correctAnswer: 'born with a silver spoon', points: 2 },
          { text: 'The company is _______ and might go bankrupt.', correctAnswer: 'in the red', points: 2 },
          { text: 'Finally, after two years, we are _______.', correctAnswer: 'in the black', points: 2 },
          { text: 'This old house is a _______ for money.', correctAnswer: 'bottomless pit', points: 2 },
          { text: 'Always save some money for a _______.', correctAnswer: 'rainy day', points: 2 },
          { text: 'You will _______ for high-speed internet here.', correctAnswer: 'pay through the nose', points: 2 },
          { text: 'Small businesses are starting to _______ of high taxes.', correctAnswer: 'feel the pinch', points: 2 }
        ]
      },
      {
        title: 'II. Advanced Financial Definition Writing',
        instructions: 'Define these 5 sophisticated business terms:',
        type: 'definition',
        questions: [
          { text: 'Venture capital', points: 4 },
          { text: 'Liquidity', points: 4 },
          { text: 'Fiscal policy', points: 4 },
          { text: 'Monetary easing', points: 4 },
          { text: 'Hostile takeover', points: 4 }
        ]
      },
      {
        title: 'III. Academic Critical Written Response',
        instructions: 'Evaluate the rise of "Cryptocurrencies" and their threat to central banking systems:',
        type: 'sentence_writing',
        questions: [{ text: 'Evaluation of Cryptocurrencies:', points: 15 }]
      },
      {
        title: 'IV. Investment Jargon Matching',
        instructions: 'Match these investment terms with their definitions:',
        type: 'matching',
        options: ['a. Spreading investments to reduce risk', 'b. A debt instrument issued by a state', 'c. The profit made on an investment', 'd. A fund that tracks a market index', 'e. Buying and selling assets quickly for profit'],
        questions: [
          { text: 'Diversification', correctAnswer: 'a', points: 2 },
          { text: 'Bond', correctAnswer: 'b', points: 2 },
          { text: 'Yield', correctAnswer: 'c', points: 2 },
          { text: 'Index fund', correctAnswer: 'd', points: 2 },
          { text: 'Speculation', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss "Corporate Social Responsibility (CSR)" versus "Shareholder Primacy".',
        type: 'comparison',
        questions: [{ text: 'CSR vs Shareholder Primacy', points: 10 }]
      }
    ]
  },
  'theme-7': { // ENVIRONMENT: VARIETIES
    v1: [
      {
        title: 'I. Ecological Collocations',
        instructions: 'Complete these 12 sentences with collocations related to habitats and ecosystems:',
        type: 'gap_fill',
        options: ['biodiversity', 'ecosystem', 'flora', 'fauna', 'indigenous', 'habitat', 'terrain', 'sanctuary', 'conservation', 'species', 'arid', 'lush'],
        questions: [
          { text: 'The rainforest is known for its incredible _______ of life.', correctAnswer: 'biodiversity', points: 2 },
          { text: 'Every organism plays a vital role in its local _______.', correctAnswer: 'ecosystem', points: 2 },
          { text: 'The regional _______ includes many rare mountain flowers.', correctAnswer: 'flora', points: 2 },
          { text: 'Researchers are studying the local _______ to understand bird migration.', correctAnswer: 'fauna', points: 2 },
          { text: 'These plants are _______ to the Australian outback.', correctAnswer: 'indigenous', points: 2 },
          { text: 'Loss of _______ is the biggest threat to the tiger population.', correctAnswer: 'habitat', points: 2 },
          { text: 'The rugged _______ made the expedition extremely difficult.', correctAnswer: 'terrain', points: 2 },
          { text: 'The island serves as a _______ for endangered sea turtles.', correctAnswer: 'sanctuary', points: 2 },
          { text: 'Global _______ efforts are needed to save the coral reefs.', correctAnswer: 'conservation', points: 2 },
          { text: 'Scientists have discovered a new _______ of deep-sea fish.', correctAnswer: 'species', points: 2 },
          { text: 'Cacti have adapted to survive in extremely _______ conditions.', correctAnswer: 'arid', points: 2 },
          { text: 'The valley was covered in _______ green vegetation.', correctAnswer: 'lush', points: 2 }
        ]
      },
      {
        title: 'II. Habitat Categorization',
        instructions: 'List 5 distinct types of natural habitats and provide a one-sentence description for each:',
        type: 'sentence_writing',
        questions: [
          { text: 'Habitat 1 (e.g. Wetlands):', points: 4 },
          { text: 'Habitat 2:', points: 4 },
          { text: 'Habitat 3:', points: 4 },
          { text: 'Habitat 4:', points: 4 },
          { text: 'Habitat 5:', points: 4 }
        ]
      },
      {
        title: 'III. Environmental Sentence Writing',
        instructions: 'Write 3 academic sentences regarding environmental variety using these terms:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "biosphere":', points: 8 },
          { text: 'Sentence using "microclimate":', points: 8 },
          { text: 'Sentence using "ecological niche":', points: 8 }
        ]
      },
      {
        title: 'IV. Nature Vocabulary Listing',
        instructions: 'List 5 nouns specifically related to "Marine Environments":',
        type: 'sentence_writing',
        questions: [{ text: 'Marine nouns list:', points: 10 }]
      },
      {
        title: 'V. Simple Definition',
        instructions: 'Define the term "Endemic" in a biological or environmental context.',
        type: 'definition',
        questions: [{ text: 'Define: Endemic', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Environmental Phrasal Verbs',
        instructions: 'Complete 12 sentences with phrasal verbs related to nature and ecology:',
        type: 'gap_fill',
        options: ['die out', 'cut down', 'wipe out', 'look after', 'phase out', 'use up', 'build up', 'end up', 'bring about', 'give off', 'clear up', 'spring up'],
        questions: [
          { text: 'Many rare species are at risk and might soon _______.', correctAnswer: 'die out', points: 2 },
          { text: 'We must stop people who _______ ancient forests illegally.', correctAnswer: 'cut down', points: 2 },
          { text: 'A single oil spill can _______ an entire local population of birds.', correctAnswer: 'wipe out', points: 2 },
          { text: 'Volunteers work hard to _______ the national parks.', correctAnswer: 'look after', points: 2 },
          { text: 'The government plans to _______ fossil fuel subsidies.', correctAnswer: 'phase out', points: 2 },
          { text: 'Humans _______ natural resources faster than they can regenerate.', correctAnswer: 'use up', points: 2 },
          { text: 'Toxic chemicals can _______ in the soil over many years.', correctAnswer: 'build up', points: 2 },
          { text: 'Plastic waste often _______ in the middle of the ocean.', correctAnswer: 'end up', points: 2 },
          { text: 'The new law aims to _______ positive environmental changes.', correctAnswer: 'bring about', points: 2 },
          { text: 'Rotting vegetation can _______ methane gas.', correctAnswer: 'give off', points: 2 },
          { text: 'It took months to _______ the debris after the storm.', correctAnswer: 'clear up', points: 2 },
          { text: 'New eco-friendly businesses began to _______ across the city.', correctAnswer: 'spring up', points: 2 }
        ]
      },
      {
        title: 'II. Defining Ecological Concepts',
        instructions: 'Provide formal, academic definitions for the following concepts:',
        type: 'definition',
        questions: [
          { text: 'Symbiosis', points: 4 },
          { text: 'Keystone species', points: 4 },
          { text: 'Bio-indicator', points: 4 },
          { text: 'Genetic pool', points: 4 },
          { text: 'Erosion', points: 4 }
        ]
      },
      {
        title: 'III. Contrastive Analysis',
        instructions: 'Explain the difference between these environmental variety concepts:',
        type: 'comparison',
        questions: [
          { text: 'Native vs. Invasive species', points: 10 },
          { text: 'Deciduous vs. Coniferous forests', points: 10 }
        ]
      },
      {
        title: 'IV. Sentence Construction',
        instructions: 'Use the term "Sustainable Harvesting" in a sentence about forest management.',
        type: 'sentence_writing',
        questions: [{ text: 'Sentence with "Sustainable Harvesting":', points: 8 }]
      },
      {
        title: 'V. Term Matching',
        instructions: 'Match the environmental variety terms with their definitions:',
        type: 'matching',
        options: ['a. A large naturally occurring community of flora and fauna', 'b. The study of the distribution of species', 'c. A place where an organism lives', 'd. The variety of life in the world', 'e. Long-term preservation of resources'],
        questions: [
          { text: 'Biome', correctAnswer: 'a', points: 2 },
          { text: 'Biogeography', correctAnswer: 'b', points: 2 },
          { text: 'Habitat', correctAnswer: 'c', points: 2 },
          { text: 'Biodiversity', correctAnswer: 'd', points: 2 },
          { text: 'Sustainability', correctAnswer: 'e', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Advanced Bio-Terminology',
        instructions: 'Complete 12 sentences with advanced environmental variety terminology:',
        type: 'gap_fill',
        options: ['biosphere', 'anthropocentric', 'monoculture', 'regenerative', 'reforestation', 'permaculture', 'carbon sink', 'desertification', 'estuary', 'archipelagos', 'topography', 'stratification'],
        questions: [
          { text: 'The _______ is the thin layer of Earth that supports life.', correctAnswer: 'biosphere', points: 2 },
          { text: 'Critics argue that our view of nature is too _______.', correctAnswer: 'anthropocentric', points: 2 },
          { text: 'Modern farming often relies on _______, which reduces soil health.', correctAnswer: 'monoculture', points: 2 },
          { text: 'We need _______ agriculture to restore the damaged land.', correctAnswer: 'regenerative', points: 2 },
          { text: 'Huge _______ projects are underway in the Amazon basin.', correctAnswer: 'reforestation', points: 2 },
          { text: '_______ designs aim to create self-sufficient ecosystems.', correctAnswer: 'permaculture', points: 2 },
          { text: 'The ocean acts as a massive _______ for CO2.', correctAnswer: 'carbon sink', points: 2 },
          { text: 'Climate change is accelerating _______ in sub-Saharan Africa.', correctAnswer: 'desertification', points: 2 },
          { text: 'An _______ is where freshwater and saltwater mix.', correctAnswer: 'estuary', points: 2 },
          { text: 'The Pacific Ocean is dotted with thousands of _______.', correctAnswer: 'archipelagos', points: 2 },
          { text: 'The _______ of the region dictates its local climate.', correctAnswer: 'topography', points: 2 },
          { text: 'Ecological _______ refers to the vertical layering of a forest.', correctAnswer: 'stratification', points: 2 }
        ]
      },
      {
        title: 'II. Environmental Metaphorical Language',
        instructions: 'Explain the meaning of these nature-origin metaphors in a general context:',
        type: 'definition',
        questions: [
          { text: '"An urban jungle"', points: 5 },
          { text: '"Back to nature"', points: 5 },
          { text: '"A sea change"', points: 5 },
          { text: '"Fresh air"', points: 5 }
        ]
      },
      {
        title: 'III. Extended Academic Paragraph',
        instructions: 'Write a short paragraph evaluating the importance of "Wilderness Preservation" in the 21st century:',
        type: 'sentence_writing',
        questions: [{ text: 'Evaluation of Wilderness Preservation:', points: 15 }]
      },
      {
        title: 'IV. Regional Variety Matching',
        instructions: 'Match the regional ecosystem with its characteristics:',
        type: 'matching',
        options: ['a. Treeless plain in the Arctic', 'b. Tropical grassland with scattered trees', 'c. Broad-leaved evergreen forest', 'd. High altitude coniferous forest', 'e. Semi-arid scrubland'],
        questions: [
          { text: 'Tundra', correctAnswer: 'a', points: 2 },
          { text: 'Savanna', correctAnswer: 'b', points: 2 },
          { text: 'Rainforest', correctAnswer: 'c', points: 2 },
          { text: 'Taiga', correctAnswer: 'd', points: 2 },
          { text: 'Steppe', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the concept of "Rewilding" versus traditional "Conservation Management".',
        type: 'comparison',
        questions: [{ text: 'Rewilding vs. Conservation Management', points: 10 }]
      }
    ]
  },
  'theme-8': { // ENVIRONMENT: PROBLEMS
    v1: [
      {
        title: 'I. Environmental Problem Collocations',
        instructions: 'Fill the 12 gaps with collocations related to environmental degradation:',
        type: 'gap_fill',
        options: ['global warming', 'ozone layer', 'carbon footprint', 'industrial waste', 'toxic fumes', 'deforestation', 'melting icecaps', 'renewable energy', 'fossil fuels', 'greenhouse gas', 'pollution', 'sustainability'],
        questions: [
          { text: 'Rising sea levels are a direct result of _______.', correctAnswer: 'global warming', points: 2 },
          { text: 'Chemicals once used in aerosols damaged the _______.', correctAnswer: 'ozone layer', points: 2 },
          { text: 'Every individual should try to reduce their _______.', correctAnswer: 'carbon footprint', points: 2 },
          { text: 'Factories must safely dispose of their _______.', correctAnswer: 'industrial waste', points: 2 },
          { text: 'Car exhausts release _______ into the city air.', correctAnswer: 'toxic fumes', points: 2 },
          { text: '_______ in the Amazon is destroying countless habitats.', correctAnswer: 'deforestation', points: 2 },
          { text: 'Polar bears are losing ground due to the _______.', correctAnswer: 'melting icecaps', points: 2 },
          { text: 'The transition to _______ is essential for the future.', correctAnswer: 'renewable energy', points: 2 },
          { text: 'Burning _______ is the main cause of CO2 emissions.', correctAnswer: 'fossil fuels', points: 2 },
          { text: 'Methane is a particularly potent _______.', correctAnswer: 'greenhouse gas', points: 2 },
          { text: 'Plastic _______ in the oceans has reached crisis levels.', correctAnswer: 'pollution', points: 2 },
          { text: 'Business practices must prioritize long-term _______.', correctAnswer: 'sustainability', points: 2 }
        ]
      },
      {
        title: 'II. Problem & Solution Listing',
        instructions: 'List 5 major environmental problems and suggest a practical lexical solution for each:',
        type: 'sentence_writing',
        questions: [
          { text: 'Problem 1 & Solution:', points: 4 },
          { text: 'Problem 2 & Solution:', points: 4 },
          { text: 'Problem 3 & Solution:', points: 4 },
          { text: 'Problem 4 & Solution:', points: 4 },
          { text: 'Problem 5 & Solution:', points: 4 }
        ]
      },
      {
        title: 'III. Contextual Sentences',
        instructions: 'Write 3 sentences regarding climate change using the following terms:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "unprecedented":', points: 8 },
          { text: 'Sentence using "catastrophic":', points: 8 },
          { text: 'Sentence using "mitigation":', points: 8 }
        ]
      },
      {
        title: 'IV. Disaster Vocabulary Listing',
        instructions: 'List 5 nouns specifically related to "Natural Disasters" caused by environmental shifts:',
        type: 'sentence_writing',
        questions: [{ text: 'Natural disaster nouns list:', points: 10 }]
      },
      {
        title: 'V. Simple Definition',
        instructions: 'Define the term "Eco-warrior" in a social context.',
        type: 'definition',
        questions: [{ text: 'Define: Eco-warrior', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Degradation Phrasal Verbs',
        instructions: 'Complete 12 sentences with phrasal verbs related to environmental problems:',
        type: 'gap_fill',
        options: ['heat up', 'run out of', 'use up', 'dispose of', 'throw away', 'cut back on', 'scale down', 'break down', 'give off', 'dry up', 'freeze over', 'wear away'],
        questions: [
          { text: 'The atmosphere continues to _______ due to emissions.', correctAnswer: 'heat up', points: 2 },
          { text: 'We will eventually _______ clean drinking water.', correctAnswer: 'run out of', points: 2 },
          { text: 'The modern lifestyle tends to _______ far too much energy.', correctAnswer: 'use up', points: 2 },
          { text: 'Hospitals must properly _______ medical waste.', correctAnswer: 'dispose of', points: 2 },
          { text: 'People should not _______ plastic bottles after one use.', correctAnswer: 'throw away', points: 2 },
          { text: 'We must _______ our consumption of red meat.', correctAnswer: 'cut back on', points: 2 },
          { text: 'Heavy industries need to _______ their production levels.', correctAnswer: 'scale down', points: 2 },
          { text: 'Plastic can take centuries to _______ in nature.', correctAnswer: 'break down', points: 2 },
          { text: 'Old cars _______ far more smoke than modern ones.', correctAnswer: 'give off', points: 2 },
          { text: 'Many lakes in the region are starting to _______.', correctAnswer: 'dry up', points: 2 },
          { text: 'The lake used to _______ every winter, but no longer.', correctAnswer: 'freeze over', points: 2 },
          { text: 'The coastline is starting to _______ due to rising tides.', correctAnswer: 'wear away', points: 2 }
        ]
      },
      {
        title: 'II. Defining Crisis Terms',
        instructions: 'Provide definitions for these 5 specific environmental crisis terms:',
        type: 'definition',
        questions: [
          { text: 'Acid rain', points: 4 },
          { text: 'Desertification', points: 4 },
          { text: 'Bioaccumulation', points: 4 },
          { text: 'Eutrophication', points: 4 },
          { text: 'Smog', points: 4 }
        ]
      },
      {
        title: 'III. Contrastive Problem Analysis',
        instructions: 'Explain the difference between these problematic pairs:',
        type: 'comparison',
        questions: [
          { text: 'Climate vs. Weather', points: 10 },
          { text: 'Conservation vs. Preservation', points: 10 }
        ]
      },
      {
        title: 'IV. Sentence Transformation',
        instructions: 'Rewrite the following sentence using the word "Unsustainable":',
        type: 'sentence_writing',
        questions: [{ text: 'Original: The way we use water cannot be continued forever.', points: 8 }]
      },
      {
        title: 'V. Expression Matching',
        instructions: 'Match these environmental idioms with their meanings:',
        type: 'matching',
        options: ['a. To be in a difficult situation', 'b. To stop an event or trend from progressing', 'c. The start of something very bad', 'd. To speak out about a secret problem', 'e. Not much of something left'],
        questions: [
          { text: 'In hot water', correctAnswer: 'a', points: 2 },
          { text: 'Stem the tide', correctAnswer: 'b', points: 2 },
          { text: 'Calm before the storm', correctAnswer: 'c', points: 2 },
          { text: 'Blow the whistle', correctAnswer: 'd', points: 2 },
          { text: 'Thin on the ground', correctAnswer: 'e', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Advanced Environmental Terminology',
        instructions: 'Complete 12 sentences with advanced terminology regarding environmental threats:',
        type: 'gap_fill',
        options: ['tipping point', 'ecological footprint', 'circular economy', 'greenwashing', 'sustainable development', 'externalities', 'resilience', 'mitigation', 'adaptation', 'biosphere', 'cryosphere', 'troposphere'],
        questions: [
          { text: 'Scientists fear we are reaching a _______ in the climate crisis.', correctAnswer: 'tipping point', points: 2 },
          { text: 'Measuring your _______ helps you see your impact.', correctAnswer: 'ecological footprint', points: 2 },
          { text: 'A _______ aims to eliminate waste by recycling everything.', correctAnswer: 'circular economy', points: 2 },
          { text: 'Be careful of _______; companies often pretend to be green.', correctAnswer: 'greenwashing', points: 2 },
          { text: 'We must strive for _______ that doesn\'t harm future generations.', correctAnswer: 'sustainable development', points: 2 },
          { text: 'Pollution is often considered one of the _______ of industry.', correctAnswer: 'externalities', points: 2 },
          { text: 'Building _______ means helping communities survive disasters.', correctAnswer: 'resilience', points: 2 },
          { text: 'Climate _______ involves reducing emissions at the source.', correctAnswer: 'mitigation', points: 2 },
          { text: 'Climate _______ involves preparing for future changes.', correctAnswer: 'adaptation', points: 2 },
          { text: 'Human activity is changing the very chemistry of the _______.', correctAnswer: 'biosphere', points: 2 },
          { text: 'The _______ is melting at an alarming rate.', correctAnswer: 'cryosphere', points: 2 },
          { text: 'Most of our weather occurs within the _______.', correctAnswer: 'troposphere', points: 2 }
        ]
      },
      {
        title: 'II. Environmental Idioms',
        instructions: 'Explain the metaphorical meaning of these "Atmospheric" idioms:',
        type: 'definition',
        questions: [
          { text: '"Under a cloud"', points: 5 },
          { text: '"Make waves"', points: 5 },
          { text: '"Break the ice"', points: 5 },
          { text: '"Clear the air"', points: 5 }
        ]
      },
      {
        title: 'III. Critical Evaluative Writing',
        instructions: 'Evaluate the effectiveness of "Carbon Offsetting" as a solution to global emissions in a short paragraph:',
        type: 'sentence_writing',
        questions: [{ text: 'Evaluation of Carbon Offsetting:', points: 15 }]
      },
      {
        title: 'IV. Global Agreement Matching',
        instructions: 'Match the environmental agreement with its focus:',
        type: 'matching',
        options: ['a. Ozone layer protection', 'b. Biodiversity conservation', 'c. Climate change and temperature limits', 'd. Hazardous waste trade', 'e. Endangered species trade'],
        questions: [
          { text: 'Montreal Protocol', correctAnswer: 'a', points: 2 },
          { text: 'Paris Agreement', correctAnswer: 'c', points: 2 },
          { text: 'Basel Convention', correctAnswer: 'd', points: 2 },
          { text: 'CITES', correctAnswer: 'e', points: 2 },
          { text: 'Convention on Biological Diversity', correctAnswer: 'b', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Compare the concepts of "Global Warming" and "Climate Change" from a lexical and scientific perspective.',
        type: 'comparison',
        questions: [{ text: 'Global Warming vs. Climate Change', points: 10 }]
      }
    ]
  },
  'theme-9': { // PERSONAL CHARACTER
    v1: [
      {
        title: 'I. Character Collocations',
        instructions: 'Complete these 12 sentences with personality-related collocations:',
        type: 'gap_fill',
        options: ['strong-willed', 'narrow-minded', 'quick-tempered', 'thick-skinned', 'self-confident', 'level-headed', 'easy-going', 'kind-hearted', 'soft-spoken', 'well-behaved', 'hard-working', 'open-minded'],
        questions: [
          { text: 'She is extremely _______ and never gives up on her goals.', correctAnswer: 'strong-willed', points: 2 },
          { text: 'It is hard to discuss new ideas with such a _______ person.', correctAnswer: 'narrow-minded', points: 2 },
          { text: 'He is _______ and often shouts when things go wrong.', correctAnswer: 'quick-tempered', points: 2 },
          { text: 'In politics, you need to be _______ to handle criticism.', correctAnswer: 'thick-skinned', points: 2 },
          { text: 'A _______ leader inspires trust in their team.', correctAnswer: 'self-confident', points: 2 },
          { text: 'She stayed _______ even when everyone else was panicking.', correctAnswer: 'level-headed', points: 2 },
          { text: 'My dad is very _______ and never gets stressed.', correctAnswer: 'easy-going', points: 2 },
          { text: 'The _______ volunteer spent her weekends helping others.', correctAnswer: 'kind-hearted', points: 2 },
          { text: 'He is _______ and rarely raises his voice.', correctAnswer: 'soft-spoken', points: 2 },
          { text: 'The children were surprisingly _______ during the long flight.', correctAnswer: 'well-behaved', points: 2 },
          { text: 'The success of the firm is due to _______ employees.', correctAnswer: 'hard-working', points: 2 },
          { text: 'Being _______ allows you to appreciate different cultures.', correctAnswer: 'open-minded', points: 2 }
        ]
      },
      {
        title: 'II. Character Categorization',
        instructions: 'List 5 pairs of opposite character traits (e.g. Introvert / Extrovert) and explain the difference:',
        type: 'sentence_writing',
        questions: [
          { text: 'Pair 1:', points: 4 },
          { text: 'Pair 2:', points: 4 },
          { text: 'Pair 3:', points: 4 },
          { text: 'Pair 4:', points: 4 },
          { text: 'Pair 5:', points: 4 }
        ]
      },
      {
        title: 'III. Contextual Sentences',
        instructions: 'Write 3 sentences about a person you admire using formal character vocabulary:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "integrity":', points: 8 },
          { text: 'Sentence using "conscientious":', points: 8 },
          { text: 'Sentence using "altruism":', points: 8 }
        ]
      },
      {
        title: 'IV. Virtue Vocabulary Listing',
        instructions: 'List 5 nouns that represent "Intellectual Virtues" (e.g. Wisdom):',
        type: 'sentence_writing',
        questions: [{ text: 'Intellectual virtue list:', points: 10 }]
      },
      {
        title: 'V. Simple Definition',
        instructions: 'Define the term "Introvert" in a psychological context.',
        type: 'definition',
        questions: [{ text: 'Define: Introvert', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Relationship Phrasal Verbs',
        instructions: 'Complete 12 sentences with phrasal verbs that describe personal interactions:',
        type: 'gap_fill',
        options: ['get on with', 'look up to', 'look down on', 'fall out with', 'make up with', 'show off', 'stand up for', 'take after', 'bring up', 'put up with', 'grow on', 'let down'],
        questions: [
          { text: 'I really _______ my colleagues in the new office.', correctAnswer: 'get on with', points: 2 },
          { text: 'Many young athletes _______ the world champion.', correctAnswer: 'look up to', points: 2 },
          { text: 'You shouldn\'t _______ people just because they are different.', correctAnswer: 'look down on', points: 2 },
          { text: 'I managed to _______ my brother after a big argument.', correctAnswer: 'fall out with', points: 2 },
          { text: 'Life is too short, you should _______ your friends.', correctAnswer: 'make up with', points: 2 },
          { text: 'He likes to _______ his expensive watch to everyone.', correctAnswer: 'show off', points: 2 },
          { text: 'You should always _______ what you believe is right.', correctAnswer: 'stand up for', points: 2 },
          { text: 'She really seems to _______ her mother in personality.', correctAnswer: 'take after', points: 2 },
          { text: 'My parents worked hard to _______ us properly.', correctAnswer: 'bring up', points: 2 },
          { text: 'I don\'t know how you _______ his constant complaining.', correctAnswer: 'put up with', points: 2 },
          { text: 'I didn\'t like him at first, but he began to _______ me.', correctAnswer: 'grow on', points: 2 },
          { text: 'Please don\'t _______ me; I am counting on you.', correctAnswer: 'let down', points: 2 }
        ]
      },
      {
        title: 'II. Defining Sophisticated Traits',
        instructions: 'Provide definitions for these 5 complex character adjectives:',
        type: 'definition',
        questions: [
          { text: 'Magnanimous', points: 4 },
          { text: 'Pretentious', points: 4 },
          { text: 'Stoic', points: 4 },
          { text: 'Gregarious', points: 4 },
          { text: 'Meticulous', points: 4 }
        ]
      },
      {
        title: 'III. Contrastive Analysis',
        instructions: 'Explain the difference between these character traits:',
        type: 'comparison',
        questions: [
          { text: 'Assertive vs. Aggressive', points: 10 },
          { text: 'Confident vs. Arrogant', points: 10 }
        ]
      },
      {
        title: 'IV. Sentence Construction',
        instructions: 'Use the term "Resilience" in a sentence about overcoming personal failure.',
        type: 'sentence_writing',
        questions: [{ text: 'Sentence with "Resilience":', points: 8 }]
      },
      {
        title: 'V. Opposite Matching',
        instructions: 'Match these character traits with their antonyms:',
        type: 'matching',
        options: ['a. Lazy', 'b. Shy', 'c. Cruel', 'd. Stupid', 'e. Selfish'],
        questions: [
          { text: 'Diligent', correctAnswer: 'a', points: 2 },
          { text: 'Out-going', correctAnswer: 'b', points: 2 },
          { text: 'Benevolent', correctAnswer: 'c', points: 2 },
          { text: 'Altruistic', correctAnswer: 'e', points: 2 },
          { text: 'Witty', correctAnswer: 'd', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Advanced Psychological Terminology',
        instructions: 'Complete 12 sentences with advanced character and personality terms:',
        type: 'gap_fill',
        options: ['introvert', 'extrovert', 'narcissist', 'empathetic', 'altruistic', 'conscientious', 'neuroticism', 'resilience', 'charismatic', 'manipulative', 'stoic', 'whimsical'],
        questions: [
          { text: 'A typical _______ prefers quiet environments to social gatherings.', correctAnswer: 'introvert', points: 2 },
          { text: 'The _______ politician loved the energy of the crowd.', correctAnswer: 'extrovert', points: 2 },
          { text: 'A _______ has an excessive interest in themselves.', correctAnswer: 'narcissist', points: 2 },
          { text: 'Being _______ means you can truly understand others\' pain.', correctAnswer: 'empathetic', points: 2 },
          { text: 'His _______ acts of charity were widely praised.', correctAnswer: 'altruistic', points: 2 },
          { text: 'A _______ student always finishes their work on time.', correctAnswer: 'conscientious', points: 2 },
          { text: 'High _______ can lead to feelings of anxiety and moodiness.', correctAnswer: 'neuroticism', points: 2 },
          { text: 'The _______ of the survivors was truly inspiring.', correctAnswer: 'resilience', points: 2 },
          { text: 'The speaker was so _______ that the crowd was mesmerized.', correctAnswer: 'charismatic', points: 2 },
          { text: 'People who are _______ often try to control others.', correctAnswer: 'manipulative', points: 2 },
          { text: 'He remained _______ even in the face of great tragedy.', correctAnswer: 'stoic', points: 2 },
          { text: 'She has a _______ personality and loves fairy tales.', correctAnswer: 'whimsical', points: 2 }
        ]
      },
      {
        title: 'II. Character Idioms & Metaphors',
        instructions: 'Explain the metaphorical meaning of these "Human Nature" idioms:',
        type: 'definition',
        questions: [
          { text: '"Heart of gold"', points: 5 },
          { text: '"Pain in the neck"', points: 5 },
          { text: '"Lone wolf"', points: 5 },
          { text: '"Wet blanket"', points: 5 }
        ]
      },
      {
        title: 'III. Extended Written Reflection',
        instructions: 'Write a short paragraph evaluating the role of "Emotional Intelligence" in modern professional success:',
        type: 'sentence_writing',
        questions: [{ text: 'Reflection on Emotional Intelligence:', points: 15 }]
      },
      {
        title: 'IV. Jargon Matching',
        instructions: 'Match the personality theory term with its definition:',
        type: 'matching',
        options: ['a. An inborn pattern of behavior', 'b. The habitual way an individual thinks', 'c. A deeply ingrained trait', 'd. A temporary emotional state', 'e. The total sum of individual traits'],
        questions: [
          { text: 'Temperament', correctAnswer: 'a', points: 2 },
          { text: 'Cognitive style', correctAnswer: 'b', points: 2 },
          { text: 'Disposition', correctAnswer: 'c', points: 2 },
          { text: 'Mood', correctAnswer: 'd', points: 2 },
          { text: 'Personality', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the semantic and psychological differences between "Character" and "Personality".',
        type: 'comparison',
        questions: [{ text: 'Character vs. Personality', points: 10 }]
      }
    ]
  },
  'theme-10': { // CLOTHING & APPEARANCE
    v1: [
      {
        title: 'I. Appearance Collocations',
        instructions: 'Complete these 12 sentences with collocations related to clothing and appearance:',
        type: 'gap_fill',
        options: ['formal attire', 'casual wear', 'dress code', 'fashion statement', 'outfit', 'wardrobe', 'accessories', 'well-groomed', 'scruffy', 'designer label', 'off-the-peg', 'tailor-made'],
        questions: [
          { text: 'The invitation specified that guests should wear _______.', correctAnswer: 'formal attire', points: 2 },
          { text: 'Fridays are usually reserved for _______ at the office.', correctAnswer: 'casual wear', points: 2 },
          { text: 'Most private schools have a strict _______ for students.', correctAnswer: 'dress code', points: 2 },
          { text: 'Her neon-colored hair was certainly a bold _______.', correctAnswer: 'fashion statement', points: 2 },
          { text: 'I need to find a matching pair of shoes for this _______.', correctAnswer: 'outfit', points: 2 },
          { text: 'She has a huge _______ full of vintage clothes.', correctAnswer: 'wardrobe', points: 2 },
          { text: 'The right _______ can transform a simple dress.', correctAnswer: 'accessories', points: 2 },
          { text: 'A _______ appearance is essential for an interview.', correctAnswer: 'well-groomed', points: 2 },
          { text: 'He looked quite _______ in his old, torn jeans.', correctAnswer: 'scruffy', points: 2 },
          { text: 'Some people only buy clothes with a famous _______.', correctAnswer: 'designer label', points: 2 },
          { text: 'I usually buy _______ clothes rather than having them made.', correctAnswer: 'off-the-peg', points: 2 },
          { text: 'He wore a _______ suit that fit him perfectly.', correctAnswer: 'tailor-made', points: 2 }
        ]
      },
      {
        title: 'II. Style Classification',
        instructions: 'List 5 distinct fashion styles (e.g., Bohemian) and describe their key lexical characteristics:',
        type: 'sentence_writing',
        questions: [
          { text: 'Style 1:', points: 4 },
          { text: 'Style 2:', points: 4 },
          { text: 'Style 3:', points: 4 },
          { text: 'Style 4:', points: 4 },
          { text: 'Style 5:', points: 4 }
        ]
      },
      {
        title: 'III. Contextual Usage',
        instructions: 'Write 3 sentences regarding physical appearance using these formal terms:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "unconventional":', points: 8 },
          { text: 'Sentence using "aesthetic":', points: 8 },
          { text: 'Sentence using "symmetrical":', points: 8 }
        ]
      },
      {
        title: 'IV. Accessories Listing',
        instructions: 'Write down 5 nouns specifically related to "Headwear or Footwear":',
        type: 'sentence_writing',
        questions: [{ text: 'Headwear/Footwear list:', points: 10 }]
      },
      {
        title: 'V. Formal Definition',
        instructions: 'Provide a formal definition for "Grooming".',
        type: 'definition',
        questions: [{ text: 'Define: Grooming', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Fashion Phrasal Verbs',
        instructions: 'Complete these 12 sentences with phrasal verbs related to clothes:',
        type: 'gap_fill',
        options: ['put on', 'take off', 'dress up', 'dress down', 'try on', 'wear out', 'go with', 'stand out', 'wrap up', 'kick off', 'throw on', 'zip up'],
        questions: [
          { text: 'It\'s cold outside, so _______ your warm coat.', correctAnswer: 'put on', points: 2 },
          { text: 'Please _______ your shoes before entering the house.', correctAnswer: 'take off', points: 2 },
          { text: 'They decided to _______ for the formal gala.', correctAnswer: 'dress up', points: 2 },
          { text: 'Many tech companies allow employees to _______.', correctAnswer: 'dress down', points: 2 },
          { text: 'I need to _______ these trousers before I buy them.', correctAnswer: 'try on', points: 2 },
          { text: 'Children often _______ their shoes very quickly.', correctAnswer: 'wear out', points: 2 },
          { text: 'Does this tie _______ my blue shirt?', correctAnswer: 'go with', points: 2 },
          { text: 'Her bright red hat made her _______ in the crowd.', correctAnswer: 'stand out', points: 2 },
          { text: 'You should _______ well if you go skiing.', correctAnswer: 'wrap up', points: 2 },
          { text: 'I can\'t wait to _______ my work boots after a long day.', correctAnswer: 'kick off', points: 2 },
          { text: 'She just had time to _______ a sweater and leave.', correctAnswer: 'throw on', points: 2 },
          { text: 'Can you help me _______ the back of this dress?', correctAnswer: 'zip up', points: 2 }
        ]
      },
      {
        title: 'II. Defining Textile Terms',
        instructions: 'Provide definitions for these 5 specific fabric or textile terms:',
        type: 'definition',
        questions: [
          { text: 'Synthetic', points: 4 },
          { text: 'Biodegradable', points: 4 },
          { text: 'Textile', points: 4 },
          { text: 'Linen', points: 4 },
          { text: 'Corduroy', points: 4 }
        ]
      },
      {
        title: 'III. Contrastive Appearance Analysis',
        instructions: 'Explain the difference between these clothing concepts:',
        type: 'comparison',
        questions: [
          { text: 'Tailored vs. Ready-to-wear', points: 10 },
          { text: 'Vintage vs. Retro', points: 10 }
        ]
      },
      {
        title: 'IV. Sentence Construction',
        instructions: 'Use the term "Scruffy" in a sentence describing a workplace situation.',
        type: 'sentence_writing',
        questions: [{ text: 'Sentence with "Scruffy":', points: 8 }]
      },
      {
        title: 'V. Dress Code Matching',
        instructions: 'Match these dress codes with their typical requirements:',
        type: 'matching',
        options: ['a. Tuxedos and ball gowns', 'b. Business suits and formal dresses', 'c. Smart trousers and collared shirts', 'd. Jeans and t-shirts', 'e. Traditional ethnic clothing'],
        questions: [
          { text: 'Black Tie', correctAnswer: 'a', points: 2 },
          { text: 'Business Formal', correctAnswer: 'b', points: 2 },
          { text: 'Smart Casual', correctAnswer: 'c', points: 2 },
          { text: 'Casual', correctAnswer: 'd', points: 2 },
          { text: 'National Dress', correctAnswer: 'e', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Fashion Metaphors & Idioms',
        instructions: 'Complete these 12 sentences with fashion-related metaphorical expressions:',
        type: 'gap_fill',
        options: ['fit like a glove', 'at the drop of a hat', 'keep it under your hat', 'wear the trousers', 'in someone else\'s shoes', 'off the cuff', 'handle with kid gloves', 'tighten your belt', 'roll up your sleeves', 'feather in your cap', 'old hat', 'bursting at the seams'],
        questions: [
          { text: 'The new job suits him perfectly; it _______.', correctAnswer: 'fit like a glove', points: 2 },
          { text: 'He is ready to travel _______.', correctAnswer: 'at the drop of a hat', points: 2 },
          { text: 'I have a secret, so please _______.', correctAnswer: 'keep it under your hat', points: 2 },
          { text: 'In their house, it\'s clear that she _______.', correctAnswer: 'wear the trousers', points: 2 },
          { text: 'You should try being _______ before you judge them.', correctAnswer: 'in someone else\'s shoes', points: 2 },
          { text: 'I wasn\'t prepared, so I spoke _______.', correctAnswer: 'off the cuff', points: 2 },
          { text: 'The situation is delicate, so _______.', correctAnswer: 'handle with kid gloves', points: 2 },
          { text: 'Prices are rising, so we must _______.', correctAnswer: 'tighten your belt', points: 2 },
          { text: 'There is a lot of work, so let\'s _______.', correctAnswer: 'roll up your sleeves', points: 2 },
          { text: 'Winning the award was a real _______.', correctAnswer: 'feather in your cap', points: 2 },
          { text: 'That technology is _______ now.', correctAnswer: 'old hat', points: 2 },
          { text: 'The stadium was _______ with fans.', correctAnswer: 'bursting at the seams', points: 2 }
        ]
      },
      {
        title: 'II. Advanced Fashion Terminology',
        instructions: 'Provide definitions for these sophisticated industry terms:',
        type: 'definition',
        questions: [
          { text: 'Haute couture', points: 4 },
          { text: 'Bespoke', points: 4 },
          { text: 'Avant-garde', points: 4 },
          { text: 'Prêt-à-porter', points: 4 },
          { text: 'Silhouette', points: 4 }
        ]
      },
      {
        title: 'III. Critical Sociological Writing',
        instructions: 'Write a short paragraph evaluating the impact of "Fast Fashion" on environmental sustainability:',
        type: 'sentence_writing',
        questions: [{ text: 'Evaluation of Fast Fashion:', points: 15 }]
      },
      {
        title: 'IV. Fabric & Pattern Matching',
        instructions: 'Match the textile term with its description:',
        type: 'matching',
        options: ['a. A soft, warm, natural fiber', 'b. A strong, coarse natural fiber', 'c. A smooth, glossy fabric', 'd. A pattern of crossing lines', 'e. A pattern of small dots'],
        questions: [
          { text: 'Wool', correctAnswer: 'a', points: 2 },
          { text: 'Canvas', correctAnswer: 'b', points: 2 },
          { text: 'Satin', correctAnswer: 'c', points: 2 },
          { text: 'Plaid', correctAnswer: 'd', points: 2 },
          { text: 'Polka dot', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the concept of "Personal Style" versus "Following Fashion Trends".',
        type: 'comparison',
        questions: [{ text: 'Personal Style vs. Trends', points: 10 }]
      }
    ]
  },
  'theme-11': { // RELATIONSHIP: FAMILY & FRIENDS
    v1: [
      {
        title: 'I. Relationship Collocations',
        instructions: 'Complete these 12 sentences with collocations related to family and friends:',
        type: 'gap_fill',
        options: ['close relative', 'distant cousin', 'immediate family', 'lifelong friend', 'mutual acquaintance', 'circle of friends', 'sibling rivalry', 'family gathering', 'strong bond', 'kindred spirit', 'broken home', 'extended family'],
        questions: [
          { text: 'I only invited my _______ to the small dinner party.', correctAnswer: 'immediate family', points: 2 },
          { text: 'She is a _______ whom I haven\'t seen in years.', correctAnswer: 'distant cousin', points: 2 },
          { text: 'He has been a _______ since we were in kindergarten.', correctAnswer: 'lifelong friend', points: 2 },
          { text: 'We met through a _______ at the wedding.', correctAnswer: 'mutual acquaintance', points: 2 },
          { text: 'She has a very large _______ that supports her.', correctAnswer: 'circle of friends', points: 2 },
          { text: 'The brothers had a lot of _______ when they were young.', correctAnswer: 'sibling rivalry', points: 2 },
          { text: 'Christmas is the time for a big _______ at our house.', correctAnswer: 'family gathering', points: 2 },
          { text: 'There is a _______ between the two sisters.', correctAnswer: 'strong bond', points: 2 },
          { text: 'I felt she was a _______ as soon as we met.', correctAnswer: 'kindred spirit', points: 2 },
          { text: 'He grew up in a _______ after his parents divorced.', correctAnswer: 'broken home', points: 2 },
          { text: 'My _______ includes many aunts, uncles, and cousins.', correctAnswer: 'extended family', points: 2 },
          { text: 'A _______ passed away, so I must attend the funeral.', correctAnswer: 'close relative', points: 2 }
        ]
      },
      {
        title: 'II. Family Roles Listing',
        instructions: 'List 5 distinct familial roles (e.g., Step-parent) and describe their lexical legal/social meaning:',
        type: 'sentence_writing',
        questions: [
          { text: 'Role 1:', points: 4 },
          { text: 'Role 2:', points: 4 },
          { text: 'Role 3:', points: 4 },
          { text: 'Role 4:', points: 4 },
          { text: 'Role 5:', points: 4 }
        ]
      },
      {
        title: 'III. Contextual Usage',
        instructions: 'Write 3 sentences about social connections using these terms:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "intimacy":', points: 8 },
          { text: 'Sentence using "camaraderie":', points: 8 },
          { text: 'Sentence using "solitude":', points: 8 }
        ]
      },
      {
        title: 'IV. Relationship Traits',
        instructions: 'Write down 5 adjectives specifically related to "Interpersonal Loyalty":',
        type: 'sentence_writing',
        questions: [{ text: 'Loyalty adjectives list:', points: 10 }]
      },
      {
        title: 'V. Simple Definition',
        instructions: 'Define the term "Nuclear Family".',
        type: 'definition',
        questions: [{ text: 'Define: Nuclear Family', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Relationship Phrasal Verbs',
        instructions: 'Complete 12 sentences with phrasal verbs for family and friendship:',
        type: 'gap_fill',
        options: ['get along', 'grow apart', 'look up to', 'look down on', 'fall out', 'make up', 'bring up', 'settle down', 'take after', 'count on', 'drift away', 'break up'],
        questions: [
          { text: 'Do you _______ well with your younger sister?', correctAnswer: 'get along', points: 2 },
          { text: 'They used to be best friends, but they began to _______.', correctAnswer: 'grow apart', points: 2 },
          { text: 'Children often _______ their favorite teachers.', correctAnswer: 'look up to', points: 2 },
          { text: 'You should never _______ someone because of their background.', correctAnswer: 'look down on', points: 2 },
          { text: 'It\'s common for teenagers to _______ with their parents.', correctAnswer: 'fall out', points: 2 },
          { text: 'They had an argument, but they managed to _______ quickly.', correctAnswer: 'make up', points: 2 },
          { text: 'It takes a lot of effort to _______ children well.', correctAnswer: 'bring up', points: 2 },
          { text: 'He decided to _______ and start a family in the suburbs.', correctAnswer: 'settle down', points: 2 },
          { text: 'I definitely _______ my father in terms of personality.', correctAnswer: 'take after', points: 2 },
          { text: 'A true friend is someone you can _______ in a crisis.', correctAnswer: 'count on', points: 2 },
          { text: 'Old school friends often _______ over the years.', correctAnswer: 'drift away', points: 2 },
          { text: 'The couple decided to _______ after three years.', correctAnswer: 'break up', points: 2 }
        ]
      },
      {
        title: 'II. Defining Relationship Concepts',
        instructions: 'Provide definitions for these 5 social or familial terms:',
        type: 'definition',
        questions: [
          { text: 'Confidant', points: 4 },
          { text: 'Guardian', points: 4 },
          { text: 'Estrangement', points: 4 },
          { text: 'Kinship', points: 4 },
          { text: 'Acquaintance', points: 4 }
        ]
      },
      {
        title: 'III. Contrastive Social Analysis',
        instructions: 'Explain the difference between these types of bonds:',
        type: 'comparison',
        questions: [
          { text: 'Close-knit vs. Estranged family', points: 10 },
          { text: 'Platonic vs. Romantic relationship', points: 10 }
        ]
      },
      {
        title: 'IV. Sentence Construction',
        instructions: 'Use the term "In-laws" in a sentence describing a social obligation.',
        type: 'sentence_writing',
        questions: [{ text: 'Sentence with "In-laws":', points: 8 }]
      },
      {
        title: 'V. Matching Life Stages',
        instructions: 'Match the term with its defining stage of human relationships:',
        type: 'matching',
        options: ['a. The start of a romantic connection', 'b. The formalization of a legal union', 'c. The end of a marriage', 'd. Caring for elderly parents', 'e. The period after a death'],
        questions: [
          { text: 'Courtship', correctAnswer: 'a', points: 2 },
          { text: 'Matrimony', correctAnswer: 'b', points: 2 },
          { text: 'Divorce', correctAnswer: 'c', points: 2 },
          { text: 'Eldercare', correctAnswer: 'd', points: 2 },
          { text: 'Bereavement', correctAnswer: 'e', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Relationship Idioms & Metaphors',
        instructions: 'Complete 12 sentences with metaphorical expressions about people:',
        type: 'gap_fill',
        options: ['blood is thicker than water', 'see eye to eye', 'chip off the old block', 'black sheep', 'flesh and blood', 'on the same page', 'fair-weather friend', 'tie the knot', 'spit and image', 'birds of a feather', 'bury the hatchet', 'wear your heart on your sleeve'],
        questions: [
          { text: 'Family loyalty is paramount; _______.', correctAnswer: 'blood is thicker than water', points: 2 },
          { text: 'They rarely _______ on political issues.', correctAnswer: 'see eye to eye', points: 2 },
          { text: 'He\'s just like his dad; a real _______.', correctAnswer: 'chip off the old block', points: 2 },
          { text: 'He was always the _______ of the family.', correctAnswer: 'black sheep', points: 2 },
          { text: 'I have to help him; he is my own _______.', correctAnswer: 'flesh and blood', points: 2 },
          { text: 'We need a meeting to ensure everyone is _______.', correctAnswer: 'on the same page', points: 2 },
          { text: 'I don\'t trust her; she is just a _______.', correctAnswer: 'fair-weather friend', points: 2 },
          { text: 'They are planning to _______ next summer.', correctAnswer: 'tie the knot', points: 2 },
          { text: 'She is the _______ of her mother.', correctAnswer: 'spit and image', points: 2 },
          { text: 'They are best friends because _______ flock together.', correctAnswer: 'birds of a feather', points: 2 },
          { text: 'It\'s time to _______ and be friends again.', correctAnswer: 'bury the hatchet', points: 2 },
          { text: 'You shouldn\'t _______; keep your feelings private.', correctAnswer: 'wear your heart on your sleeve', points: 2 }
        ]
      },
      {
        title: 'II. Advanced Genealogical & Social Terms',
        instructions: 'Provide definitions for these sophisticated terms:',
        type: 'definition',
        questions: [
          { text: 'Patrilineal', points: 4 },
          { text: 'Genealogy', points: 4 },
          { text: 'Ancestry', points: 4 },
          { text: 'Social Cohesion', points: 4 },
          { text: 'Matriarch', points: 4 }
        ]
      },
      {
        title: 'III. Extended Academic Paragraph',
        instructions: 'Write a short paragraph evaluating the impact of "Social Media" on the quality of modern friendships:',
        type: 'sentence_writing',
        questions: [{ text: 'Evaluation of Digital Friendship:', points: 15 }]
      },
      {
        title: 'IV. Sociology Matching',
        instructions: 'Match the social concept with its focus:',
        type: 'matching',
        options: ['a. Transmission of values between generations', 'b. Moving up or down the social ladder', 'c. The network of social relationships', 'd. Learning the norms of a culture', 'e. Feeling disconnected from society'],
        questions: [
          { text: 'Intergenerational', correctAnswer: 'a', points: 2 },
          { text: 'Social Mobility', correctAnswer: 'b', points: 2 },
          { text: 'Social Fabric', correctAnswer: 'c', points: 2 },
          { text: 'Socialization', correctAnswer: 'd', points: 2 },
          { text: 'Alienation', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the concept of "Chosen Family" versus "Biological Kinship".',
        type: 'comparison',
        questions: [{ text: 'Chosen vs. Biological Kinship', points: 10 }]
      }
    ]
  },
  'theme-12': { // FEELINGS: EMOTIONS & MOODS
    v1: [
      {
        title: 'I. Emotional Collocations',
        instructions: 'Complete these 12 sentences with collocations related to feelings:',
        type: 'gap_fill',
        options: ['ecstatic', 'devastated', 'apprehensive', 'overwhelmed', 'indifferent', 'optimistic', 'cautious', 'nostalgic', 'resentful', 'passionate', 'lethargic', 'serene'],
        questions: [
          { text: 'She was _______ when she heard she got the job.', correctAnswer: 'ecstatic', points: 2 },
          { text: 'The family was _______ by the sudden loss.', correctAnswer: 'devastated', points: 2 },
          { text: 'I feel a bit _______ about the upcoming surgery.', correctAnswer: 'apprehensive', points: 2 },
          { text: 'I am _______ with all the work I have to do.', correctAnswer: 'overwhelmed', points: 2 },
          { text: 'He seems _______ to the suffering of others.', correctAnswer: 'indifferent', points: 2 },
          { text: 'Despite the problems, I am _______ about the future.', correctAnswer: 'optimistic', points: 2 },
          { text: 'You should be _______ when dealing with strangers.', correctAnswer: 'cautious', points: 2 },
          { text: 'Old photos always make me feel _______.', correctAnswer: 'nostalgic', points: 2 },
          { text: 'He felt _______ about being passed over for promotion.', correctAnswer: 'resentful', points: 2 },
          { text: 'She is very _______ about environmental issues.', correctAnswer: 'passionate', points: 2 },
          { text: 'I felt _______ and didn\'t want to leave the bed.', correctAnswer: 'lethargic', points: 2 },
          { text: 'The lake was perfectly _______ in the morning light.', correctAnswer: 'serene', points: 2 }
        ]
      },
      {
        title: 'II. Emotion Categorization',
        instructions: 'List 5 nuanced emotional states (e.g., Melancholy) and explain their lexical depth:',
        type: 'sentence_writing',
        questions: [
          { text: 'Emotion 1:', points: 4 },
          { text: 'Emotion 2:', points: 4 },
          { text: 'Emotion 3:', points: 4 },
          { text: 'Emotion 4:', points: 4 },
          { text: 'Emotion 5:', points: 4 }
        ]
      },
      {
        title: 'III. Contextual Usage',
        instructions: 'Write 3 sentences regarding emotional reactions using these terms:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "visceral":', points: 8 },
          { text: 'Sentence using "subconscious":', points: 8 },
          { text: 'Sentence using "cathartic":', points: 8 }
        ]
      },
      {
        title: 'IV. Physical Reactions Listing',
        instructions: 'Write down 5 nouns describing "Physical Manifestations of Fear or Anxiety":',
        type: 'sentence_writing',
        questions: [{ text: 'Physical reactions list:', points: 10 }]
      },
      {
        title: 'V. Simple Definition',
        instructions: 'Define the term "Empathy".',
        type: 'definition',
        questions: [{ text: 'Define: Empathy', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Emotional Phrasal Verbs',
        instructions: 'Complete 12 sentences with phrasal verbs for emotions and moods:',
        type: 'gap_fill',
        options: ['bottle up', 'cheer up', 'calm down', 'get over', 'tear apart', 'blow up', 'light up', 'break down', 'liven up', 'dwell on', 'snap out of', 'sink in'],
        questions: [
          { text: 'It\'s not healthy to _______ your feelings.', correctAnswer: 'bottle up', points: 2 },
          { text: 'I tried to _______ my friend with some music.', correctAnswer: 'cheer up', points: 2 },
          { text: 'Take a deep breath and try to _______.', correctAnswer: 'calm down', points: 2 },
          { text: 'It takes time to _______ a difficult breakup.', correctAnswer: 'get over', points: 2 },
          { text: 'The war began to _______ the country.', correctAnswer: 'tear apart', points: 2 },
          { text: 'He tends to _______ at small mistakes.', correctAnswer: 'blow up', points: 2 },
          { text: 'Her face would _______ when she saw her children.', correctAnswer: 'light up', points: 2 },
          { text: 'He began to _______ and cry after the news.', correctAnswer: 'break down', points: 2 },
          { text: 'The party started to _______ when the band played.', correctAnswer: 'liven up', points: 2 },
          { text: 'You shouldn\'t _______ your past failures.', correctAnswer: 'dwell on', points: 2 },
          { text: 'You need to _______ this depression and move on.', correctAnswer: 'snap out of', points: 2 },
          { text: 'It took a while for the reality to _______.', correctAnswer: 'sink in', points: 2 }
        ]
      },
      {
        title: 'II. Defining Nuanced Emotions',
        instructions: 'Provide definitions for these 5 complex emotional terms:',
        type: 'definition',
        questions: [
          { text: 'Ambivalence', points: 4 },
          { text: 'Apathy', points: 4 },
          { text: 'Euphoria', points: 4 },
          { text: 'Ennui', points: 4 },
          { text: 'Angst', points: 4 }
        ]
      },
      {
        title: 'III. Contrastive Emotional Analysis',
        instructions: 'Explain the difference between these emotional states:',
        type: 'comparison',
        questions: [
          { text: 'Envy vs. Jealousy', points: 10 },
          { text: 'Guilt vs. Shame', points: 10 }
        ]
      },
      {
        title: 'IV. Sentence Construction',
        instructions: 'Use the term "Overwhelmed" in a sentence about academic pressure.',
        type: 'sentence_writing',
        questions: [{ text: 'Sentence with "Overwhelmed":', points: 8 }]
      },
      {
        title: 'V. Matching Opposites',
        instructions: 'Match the feeling with its opposite emotion:',
        type: 'matching',
        options: ['a. Despair', 'b. Agitation', 'c. Hostility', 'd. Confidence', 'e. Boredom'],
        questions: [
          { text: 'Hope', correctAnswer: 'a', points: 2 },
          { text: 'Serenity', correctAnswer: 'b', points: 2 },
          { text: 'Affection', correctAnswer: 'c', points: 2 },
          { text: 'Insecurity', correctAnswer: 'd', points: 2 },
          { text: 'Fascination', correctAnswer: 'e', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Mood Metaphors & Idioms',
        instructions: 'Complete 12 sentences with metaphorical expressions about feelings:',
        type: 'gap_fill',
        options: ['on cloud nine', 'down in the dumps', 'walking on air', 'at the end of your tether', 'make your blood boil', 'all at sea', 'on pins and needles', 'music to my ears', 'green with envy', 'beside oneself', 'a weight off your shoulders', 'stormy weather'],
        questions: [
          { text: 'She\'s been _______ since the engagement.', correctAnswer: 'on cloud nine', points: 2 },
          { text: 'He is a bit _______ after losing the game.', correctAnswer: 'down in the dumps', points: 2 },
          { text: 'Winning the prize made her feel like _______.', correctAnswer: 'walking on air', points: 2 },
          { text: 'I am _______ with this constant noise.', correctAnswer: 'at the end of your tether', points: 2 },
          { text: 'His arrogance really _______.', correctAnswer: 'make your blood boil', points: 2 },
          { text: 'I am _______ with this new software.', correctAnswer: 'all at sea', points: 2 },
          { text: 'We were _______ waiting for the results.', correctAnswer: 'on pins and needles', points: 2 },
          { text: 'The news of the bonus was _______.', correctAnswer: 'music to my ears', points: 2 },
          { text: 'She was _______ when she saw his new car.', correctAnswer: 'green with envy', points: 2 },
          { text: 'He was _______ with grief.', correctAnswer: 'beside oneself', points: 2 },
          { text: 'Finishing the project was _______.', correctAnswer: 'a weight off your shoulders', points: 2 },
          { text: 'The couple went through some _______.', correctAnswer: 'stormy weather', points: 2 }
        ]
      },
      {
        title: 'II. Advanced Psychological Definitions',
        instructions: 'Provide definitions for these 5 academic emotional concepts:',
        type: 'definition',
        questions: [
          { text: 'Resilience', points: 4 },
          { text: 'Melancholy', points: 4 },
          { text: 'Sentimentality', points: 4 },
          { text: 'Cognitive Dissonance', points: 4 },
          { text: 'Introversion', points: 4 }
        ]
      },
      {
        title: 'III. Academic Critical Written Response',
        instructions: 'Evaluate the role of "Emotional Regulation" in personal and professional development:',
        type: 'sentence_writing',
        questions: [{ text: 'Evaluation of Emotional Regulation:', points: 15 }]
      },
      {
        title: 'IV. Psychological Matching',
        instructions: 'Match the emotional theory term with its definition:',
        type: 'matching',
        options: ['a. An immediate, short-lived reaction', 'b. A long-term emotional climate', 'c. Ability to manage one\'s feelings', 'd. Projecting feelings onto others', 'e. Release of strong emotions'],
        questions: [
          { text: 'Emotion', correctAnswer: 'a', points: 2 },
          { text: 'Mood', correctAnswer: 'b', points: 2 },
          { text: 'Self-regulation', correctAnswer: 'c', points: 2 },
          { text: 'Transference', correctAnswer: 'd', points: 2 },
          { text: 'Catharsis', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the concept of "Emotional Intelligence" versus "Traditional IQ".',
        type: 'comparison',
        questions: [{ text: 'EQ vs. IQ', points: 10 }]
      }
    ]
  },
  'theme-13': { // FOOD & DINING
    v1: [
      {
        title: 'I. Culinary Collocations',
        instructions: 'Complete these 12 sentences with food and dining related collocations:',
        type: 'gap_fill',
        options: ['authentic cuisine', 'exotic ingredients', 'culinary skills', 'savoury snacks', 'ripe fruit', 'balanced diet', 'fine dining', 'organic produce', 'processed food', 'gourmet meal', 'vintage wine', 'locally sourced'],
        questions: [
          { text: 'I love traveling to Italy to taste the _______ in Naples.', correctAnswer: 'authentic cuisine', points: 2 },
          { text: 'The recipe calls for several _______ that are hard to find.', correctAnswer: 'exotic ingredients', points: 2 },
          { text: 'She improved her _______ by attending a professional workshop.', correctAnswer: 'culinary skills', points: 2 },
          { text: 'I prefer _______ like olives over sweet desserts.', correctAnswer: 'savoury snacks', points: 2 },
          { text: 'Make sure the _______ is soft before you eat it.', correctAnswer: 'ripe fruit', points: 2 },
          { text: 'Maintaining a _______ is essential for a healthy lifestyle.', correctAnswer: 'balanced diet', points: 2 },
          { text: 'The city has several _______ establishments for special occasions.', correctAnswer: 'fine dining', points: 2 },
          { text: 'Many supermarkets now dedicate an aisle to _______.', correctAnswer: 'organic produce', points: 2 },
          { text: 'Try to avoid _______ which contains too much sodium.', correctAnswer: 'processed food', points: 2 },
          { text: 'The chef prepared a five-course _______ for the guests.', correctAnswer: 'gourmet meal', points: 2 },
          { text: 'We celebrated our anniversary with a bottle of _______.', correctAnswer: 'vintage wine', points: 2 },
          { text: 'The restaurant prides itself on serving _______ vegetables.', correctAnswer: 'locally sourced', points: 2 }
        ]
      },
      {
        title: 'II. Menu Classification',
        instructions: 'Match the following course types with their typical descriptions:',
        type: 'matching',
        options: ['a. A small dish served before the main course', 'b. The primary dish of a meal', 'c. A sweet dish served at the end', 'd. A light snack to stimulate appetite', 'e. Small items of food to be eaten with fingers'],
        questions: [
          { text: 'Appetizer', correctAnswer: 'd', points: 2 },
          { text: 'Starter', correctAnswer: 'a', points: 2 },
          { text: 'Entrée', correctAnswer: 'b', points: 2 },
          { text: 'Dessert', correctAnswer: 'c', points: 2 },
          { text: 'Canapés', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'III. Food Preparation Writing',
        instructions: 'Describe 3 different methods of cooking and specify which food types they are best for:',
        type: 'sentence_writing',
        questions: [
          { text: 'Method 1 (e.g. Poaching):', points: 8 },
          { text: 'Method 2:', points: 8 },
          { text: 'Method 3:', points: 8 }
        ]
      },
      {
        title: 'IV. Texture Vocabulary Listing',
        instructions: 'Write down 5 adjectives describing "Food Textures" (e.g. Crunchy):',
        type: 'sentence_writing',
        questions: [{ text: 'Texture list:', points: 10 }]
      },
      {
        title: 'V. Simple Definition',
        instructions: 'Define the term "Gourmet" in the context of food and lifestyle.',
        type: 'definition',
        questions: [{ text: 'Define: Gourmet', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Dining Phrasal Verbs',
        instructions: 'Complete these 12 sentences with phrasal verbs related to eating and drinking:',
        type: 'gap_fill',
        options: ['eat out', 'dig in', 'bolt down', 'pick at', 'whip up', 'pig out', 'wash down', 'cut out', 'go off', 'polish off', 'tuck into', 'water down'],
        questions: [
          { text: 'Let\'s _______ tonight; I don\'t feel like cooking.', correctAnswer: 'eat out', points: 2 },
          { text: 'The food is ready, so please _______ everyone!', correctAnswer: 'dig in', points: 2 },
          { text: 'Don\'t _______ your dinner; eat slowly.', correctAnswer: 'bolt down', points: 2 },
          { text: 'He didn\'t have much appetite and just began to _______ his salad.', correctAnswer: 'pick at', points: 2 },
          { text: 'I can _______ a quick pasta dish in ten minutes.', correctAnswer: 'whip up', points: 2 },
          { text: 'We used to _______ on pizza every Friday night.', correctAnswer: 'pig out', points: 2 },
          { text: 'Use some water to _______ the spicy food.', correctAnswer: 'wash down', points: 2 },
          { text: 'The doctor told him to _______ sugar from his diet.', correctAnswer: 'cut out', points: 2 },
          { text: 'This milk smells bad; I think it has _______.', correctAnswer: 'go off', points: 2 },
          { text: 'He managed to _______ the entire cake by himself.', correctAnswer: 'polish off', points: 2 },
          { text: 'The children began to _______ their breakfast eagerly.', correctAnswer: 'tuck into', points: 2 },
          { text: 'You should _______ the juice if it is too sweet.', correctAnswer: 'water down', points: 2 }
        ]
      },
      {
        title: 'II. Dietary Requirements',
        instructions: 'Define these 5 specific dietary or food-related terms:',
        type: 'definition',
        questions: [
          { text: 'Veganism', points: 4 },
          { text: 'Gluten-free', points: 4 },
          { text: 'Lactose intolerance', points: 4 },
          { text: 'Pescatarian', points: 4 },
          { text: 'Halal', points: 4 }
        ]
      },
      {
        title: 'III. Gastronomic Comparison',
        instructions: 'Explain the difference between these culinary concepts:',
        type: 'comparison',
        questions: [
          { text: 'Home-cooked vs. Fast food', points: 10 },
          { text: 'Buffet style vs. À la carte', points: 10 }
        ]
      },
      {
        title: 'IV. Table Etiquette Completion',
        instructions: 'Complete the sentences regarding formal dining behavior:',
        type: 'sentence_writing',
        questions: [
          { text: 'In a formal dinner setting, you should...', points: 8 },
          { text: 'Proper use of cutlery involves...', points: 8 }
        ]
      },
      {
        title: 'V. Flavor Matching',
        instructions: 'Match the food item with its dominant flavor profile:',
        type: 'matching',
        options: ['a. Pungent', 'b. Bitter', 'c. Tart', 'd. Umami', 'e. Sweet'],
        questions: [
          { text: 'Dark Chocolate', correctAnswer: 'b', points: 2 },
          { text: 'Lemon', correctAnswer: 'c', points: 2 },
          { text: 'Soy Sauce', correctAnswer: 'd', points: 2 },
          { text: 'Garlic', correctAnswer: 'a', points: 2 },
          { text: 'Honey', correctAnswer: 'e', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Advanced Gastronomy',
        instructions: 'Complete 12 sentences with advanced culinary and food-science terminology:',
        type: 'gap_fill',
        options: ['fermentation', 'molecular', 'sommelier', 'michelin', 'fusion', 'gastronomy', 'sustainability', 'palate', 'garnish', 'nourishment', 'preservatives', 'condiments'],
        questions: [
          { text: 'The process of _______ is used to make yogurt and kimchi.', correctAnswer: 'fermentation', points: 2 },
          { text: '_______ cuisine uses physics and chemistry to transform ingredients.', correctAnswer: 'molecular', points: 2 },
          { text: 'The _______ suggested a white wine to pair with the fish.', correctAnswer: 'sommelier', points: 2 },
          { text: 'A _______ star is the highest honor for a restaurant.', correctAnswer: 'michelin', points: 2 },
          { text: 'This restaurant specializes in Japanese-Peruvian _______ cuisine.', correctAnswer: 'fusion', points: 2 },
          { text: 'He is a student of _______, the study of food and culture.', correctAnswer: 'gastronomy', points: 2 },
          { text: 'Food _______ involves ethical sourcing and reducing waste.', correctAnswer: 'sustainability', points: 2 },
          { text: 'A refined _______ can distinguish subtle spices in a dish.', correctAnswer: 'palate', points: 2 },
          { text: 'Add a _______ of parsley to make the plate look better.', correctAnswer: 'garnish', points: 2 },
          { text: 'Fresh vegetables provide the best _______ for the body.', correctAnswer: 'nourishment', points: 2 },
          { text: 'Many people worry about the chemicals used as _______ in food.', correctAnswer: 'preservatives', points: 2 },
          { text: 'Ketchup and mustard are common _______ in American diners.', correctAnswer: 'condiments', points: 2 }
        ]
      },
      {
        title: 'II. Culinary Idioms',
        instructions: 'Explain the metaphorical meaning of these food-related idioms:',
        type: 'definition',
        questions: [
          { text: '"Take it with a grain of salt"', points: 5 },
          { text: '"A piece of cake"', points: 5 },
          { text: '"The icing on the cake"', points: 5 },
          { text: '"In a nutshell"', points: 5 }
        ]
      },
      {
        title: 'III. Critical Evaluative Writing',
        instructions: 'Evaluate the role of "Global Food Security" in the face of climate change in a short paragraph:',
        type: 'sentence_writing',
        questions: [{ text: 'Evaluation of Food Security:', points: 15 }]
      },
      {
        title: 'IV. Gastronomic Jargon Matching',
        instructions: 'Match these professional cooking terms with their definitions:',
        type: 'matching',
        options: ['a. To cook briefly in boiling water', 'b. To slowly cook in liquid', 'c. To brown the surface of meat quickly', 'd. To soak in a seasoned liquid', 'e. To remove the skin from fruit/veg'],
        questions: [
          { text: 'Blanch', correctAnswer: 'a', points: 2 },
          { text: 'Braise', correctAnswer: 'b', points: 2 },
          { text: 'Sear', correctAnswer: 'c', points: 2 },
          { text: 'Marinate', correctAnswer: 'd', points: 2 },
          { text: 'Pare', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the concept of "Fine Dining" versus "Street Food Culture" as reflections of social identity.',
        type: 'comparison',
        questions: [{ text: 'Fine Dining vs Street Food', points: 10 }]
      }
    ]
  },
  'theme-14': { // LEISURE & LIFESTYLE
    v1: [
      {
        title: 'I. Recreation Collocations',
        instructions: 'Complete these 12 sentences with leisure-related collocations:',
        type: 'gap_fill',
        options: ['active lifestyle', 'sedentary habits', 'leisure pursuits', 'creative outlets', 'outdoor activities', 'social gatherings', 'wellness retreat', 'personal growth', 'quality time', 'cultural heritage', 'peak performance', 'recreational facilities'],
        questions: [
          { text: 'Cycling and swimming are part of an _______.', correctAnswer: 'active lifestyle', points: 2 },
          { text: 'Modern office work often leads to _______.', correctAnswer: 'sedentary habits', points: 2 },
          { text: 'His favorite _______ include hiking and bird watching.', correctAnswer: 'leisure pursuits', points: 2 },
          { text: 'Painting and writing serve as excellent _______ for stress.', correctAnswer: 'creative outlets', points: 2 },
          { text: 'The National Park offers various _______ for families.', correctAnswer: 'outdoor activities', points: 2 },
          { text: 'I enjoy attending _______ like weddings and parties.', correctAnswer: 'social gatherings', points: 2 },
          { text: 'She spent a week at a _______ in the mountains.', correctAnswer: 'wellness retreat', points: 2 },
          { text: 'Reading philosophy contributes greatly to _______.', correctAnswer: 'personal growth', points: 2 },
          { text: 'It\'s important to spend _______ with your family.', correctAnswer: 'quality time', points: 2 },
          { text: 'Visiting museums helps preserve our _______.', correctAnswer: 'cultural heritage', points: 2 },
          { text: 'Athletes train hard to reach _______ during competitions.', correctAnswer: 'peak performance', points: 2 },
          { text: 'The new park has excellent _______ like tennis courts.', correctAnswer: 'recreational facilities', points: 2 }
        ]
      },
      {
        title: 'II. Hobby Categorization',
        instructions: 'List 5 distinct types of hobbies and provide a short description of the equipment needed for each:',
        type: 'sentence_writing',
        questions: [
          { text: 'Hobby 1:', points: 4 },
          { text: 'Hobby 2:', points: 4 },
          { text: 'Hobby 3:', points: 4 },
          { text: 'Hobby 4:', points: 4 },
          { text: 'Hobby 5:', points: 4 }
        ]
      },
      {
        title: 'III. Lifestyle Sentence Writing',
        instructions: 'Write 3 academic sentences regarding modern lifestyles using these terms:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "urbanization":', points: 8 },
          { text: 'Sentence using "nomadic":', points: 8 },
          { text: 'Sentence using "minimalism":', points: 8 }
        ]
      },
      {
        title: 'IV. Outdoor Activity Listing',
        instructions: 'List 5 nouns specifically related to "Water Sports":',
        type: 'sentence_writing',
        questions: [{ text: 'Water sports nouns list:', points: 10 }]
      },
      {
        title: 'V. Simple Definition',
        instructions: 'Define the term "Pastime" in a social context.',
        type: 'definition',
        questions: [{ text: 'Define: Pastime', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Leisure Phrasal Verbs',
        instructions: 'Complete 12 sentences with phrasal verbs related to hobbies and free time:',
        type: 'gap_fill',
        options: ['take up', 'chill out', 'get into', 'go out', 'hang out', 'keep up with', 'pass the time', 'set aside', 'show up', 'sign up for', 'take off', 'turn into'],
        questions: [
          { text: 'I decided to _______ photography as a new hobby.', correctAnswer: 'take up', points: 2 },
          { text: 'After work, I just want to _______ on the sofa.', correctAnswer: 'chill out', points: 2 },
          { text: 'She really _______ yoga after her first class.', correctAnswer: 'get into', points: 2 },
          { text: 'Do you want to _______ for dinner tonight?', correctAnswer: 'go out', points: 2 },
          { text: 'Teenagers like to _______ at the shopping mall.', correctAnswer: 'hang out', points: 2 },
          { text: 'It\'s hard to _______ all the new technology trends.', correctAnswer: 'keep up with', points: 2 },
          { text: 'I read a book to _______ during the long flight.', correctAnswer: 'pass the time', points: 2 },
          { text: 'You should _______ some time every day for exercise.', correctAnswer: 'set aside', points: 2 },
          { text: 'Very few people _______ for the club meeting.', correctAnswer: 'show up', points: 2 },
          { text: 'I think I will _______ a pottery workshop.', correctAnswer: 'sign up for', points: 2 },
          { text: 'His career really began to _______ last year.', correctAnswer: 'take off', points: 2 },
          { text: 'My simple garden has _______ a full-time passion.', correctAnswer: 'turn into', points: 2 }
        ]
      },
      {
        title: 'II. Defining Cultural Activities',
        instructions: 'Provide definitions for these 5 leisure-related cultural terms:',
        type: 'definition',
        questions: [
          { text: 'Sightseeing', points: 4 },
          { text: 'Busking', points: 4 },
          { text: 'Exhibition', points: 4 },
          { text: 'Festivity', points: 4 },
          { text: 'Amusement', points: 4 }
        ]
      },
      {
        title: 'III. Contrastive Lifestyle Analysis',
        instructions: 'Explain the difference between these lifestyle concepts:',
        type: 'comparison',
        questions: [
          { text: 'Slow living vs. Hustle culture', points: 10 },
          { text: 'Materialistic vs. Experience-based lifestyle', points: 10 }
        ]
      },
      {
        title: 'IV. Social Gathering Sentences',
        instructions: 'Write sentences describing 2 different types of social events (e.g. Gala vs Housewarming):',
        type: 'sentence_writing',
        questions: [
          { text: 'Social Event 1:', points: 8 },
          { text: 'Social Event 2:', points: 8 }
        ]
      },
      {
        title: 'V. Entertainment Matching',
        instructions: 'Match the entertainment venue with its typical primary activity:',
        type: 'matching',
        options: ['a. Watching dramatic performances', 'b. Viewing historical artifacts', 'c. Riding rollercoasters', 'd. Gambling and nightlife', 'e. Watching live musical shows'],
        questions: [
          { text: 'Museum', correctAnswer: 'b', points: 2 },
          { text: 'Casino', correctAnswer: 'd', points: 2 },
          { text: 'Theater', correctAnswer: 'a', points: 2 },
          { text: 'Concert Hall', correctAnswer: 'e', points: 2 },
          { text: 'Theme Park', correctAnswer: 'c', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Modern Lifestyle Metaphors',
        instructions: 'Complete 12 sentences with advanced terminology regarding modern lifestyles:',
        type: 'gap_fill',
        options: ['escapism', 'digital detox', 'hedonism', 'monastic', 'bohemian', 'high-octane', 'glitzy', 'cosmopolitan', 'sustainability', 'burnout', 'fulfillment', 'solitude'],
        questions: [
          { text: 'Movies provide a form of _______ from everyday problems.', correctAnswer: 'escapism', points: 2 },
          { text: 'I need a _______ to stay away from my smartphone.', correctAnswer: 'digital detox', points: 2 },
          { text: 'Extreme _______ is the pursuit of pleasure above all.', correctAnswer: 'hedonism', points: 2 },
          { text: 'He lives a almost _______ life in a small cabin.', correctAnswer: 'monastic', points: 2 },
          { text: 'The artists lived a _______ lifestyle in Paris.', correctAnswer: 'bohemian', points: 2 },
          { text: 'Stock brokers often lead a _______ and stressful life.', correctAnswer: 'high-octane', points: 2 },
          { text: 'The celebrity attended a _______ party in Hollywood.', correctAnswer: 'glitzy', points: 2 },
          { text: 'London is a truly _______ city with many cultures.', correctAnswer: 'cosmopolitan', points: 2 },
          { text: 'Eco-villages prioritize _______ and harmony with nature.', correctAnswer: 'sustainability', points: 2 },
          { text: 'Working too hard without rest leads to _______', correctAnswer: 'burnout', points: 2 },
          { text: 'Volunteering can bring a sense of spiritual _______.', correctAnswer: 'fulfillment', points: 2 },
          { text: 'Writers often need _______ to focus on their work.', correctAnswer: 'solitude', points: 2 }
        ]
      },
      {
        title: 'II. Advanced Leisure Concepts',
        instructions: 'Provide definitions for these 5 complex sociological concepts of free time:',
        type: 'definition',
        questions: [
          { text: 'Work-life balance', points: 4 },
          { text: 'Consumerism', points: 4 },
          { text: 'Digital minimalism', points: 4 },
          { text: 'Recreational tourism', points: 4 },
          { text: 'Social capital', points: 4 }
        ]
      },
      {
        title: 'III. Critical Evaluative Writing',
        instructions: 'Evaluate the impact of "Digital Minimalism" as a lifestyle choice in the hyper-connected age:',
        type: 'sentence_writing',
        questions: [{ text: 'Evaluation of Digital Minimalism:', points: 15 }]
      },
      {
        title: 'IV. Leisure Theory Jargon Matching',
        instructions: 'Match these academic terms related to leisure theory:',
        type: 'matching',
        options: ['a. Leisure chosen for its own sake', 'b. Leisure as a means to another end', 'c. A state of total immersion in an activity', 'd. Time not committed to work or self-care', 'e. Habitual use of free time for profit'],
        questions: [
          { text: 'Autotelic', correctAnswer: 'a', points: 2 },
          { text: 'Instrumental', correctAnswer: 'b', points: 2 },
          { text: 'Flow', correctAnswer: 'c', points: 2 },
          { text: 'Discretionary time', correctAnswer: 'd', points: 2 },
          { text: 'Serious leisure', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the concept of "Active Leisure" versus "Passive Leisure" in relation to mental well-being.',
        type: 'comparison',
        questions: [{ text: 'Active vs. Passive Leisure', points: 10 }]
      }
    ]
  },
  'theme-15': { // COMMUNICATION & NETWORKING
    v1: [
      {
        title: 'I. Interaction Collocations',
        instructions: 'Complete these 12 sentences with communication-related collocations:',
        type: 'gap_fill',
        options: ['effective communication', 'body language', 'interpersonal skills', 'professional network', 'business etiquette', 'active listening', 'public speaking', 'social media', 'rapport', 'feedback', 'articulate', 'negotiation'],
        questions: [
          { text: 'Good leaders rely on _______ to share their vision.', correctAnswer: 'effective communication', points: 2 },
          { text: 'Your _______ often says more than your words.', correctAnswer: 'body language', points: 2 },
          { text: 'Emotional intelligence is a key part of _______.', correctAnswer: 'interpersonal skills', points: 2 },
          { text: 'I am trying to expand my _______ by attending conferences.', correctAnswer: 'professional network', points: 2 },
          { text: 'Understanding _______ is vital for international trade.', correctAnswer: 'business etiquette', points: 2 },
          { text: '_______ involves fully concentrating on what is being said.', correctAnswer: 'active listening', points: 2 },
          { text: 'I took a course to overcome my fear of _______.', correctAnswer: 'public speaking', points: 2 },
          { text: 'LinkedIn is a popular _______ for professionals.', correctAnswer: 'social media', points: 2 },
          { text: 'It\'s important to build _______ with your clients.', correctAnswer: 'rapport', points: 2 },
          { text: 'Constructive _______ helps employees improve.', correctAnswer: 'feedback', points: 2 },
          { text: 'She is very _______ and can explain complex ideas easily.', correctAnswer: 'articulate', points: 2 },
          { text: 'The _______ of the contract took several months.', correctAnswer: 'negotiation', points: 2 }
        ]
      },
      {
        title: 'II. Communication Channel Listing',
        instructions: 'List 5 distinct methods of professional communication and describe a scenario where each is most appropriate:',
        type: 'sentence_writing',
        questions: [
          { text: 'Channel 1:', points: 4 },
          { text: 'Channel 2:', points: 4 },
          { text: 'Channel 3:', points: 4 },
          { text: 'Channel 4:', points: 4 },
          { text: 'Channel 5:', points: 4 }
        ]
      },
      {
        title: 'III. Professional Networking Writing',
        instructions: 'Write 3 sentences regarding the importance of networking for career advancement:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "synergy":', points: 8 },
          { text: 'Sentence using "collaboration":', points: 8 },
          { text: 'Sentence using "mentor":', points: 8 }
        ]
      },
      {
        title: 'IV. Non-verbal Vocabulary Listing',
        instructions: 'List 5 nouns describing "Non-verbal cues" (e.g. Gesture):',
        type: 'sentence_writing',
        questions: [{ text: 'Non-verbal cues list:', points: 10 }]
      },
      {
        title: 'V. Simple Definition',
        instructions: 'Define the term "Rapport" in a communicative context.',
        type: 'definition',
        questions: [{ text: 'Define: Rapport', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Social Interaction Phrasal Verbs',
        instructions: 'Complete 12 sentences with phrasal verbs related to communicating and interacting:',
        type: 'gap_fill',
        options: ['get across', 'bring up', 'cut in', 'follow up', 'reach out', 'speak up', 'talk over', 'touch base', 'fill in', 'break through', 'point out', 'shut down'],
        questions: [
          { text: 'It\'s hard to _______ your meaning in a foreign language.', correctAnswer: 'get across', points: 2 },
          { text: 'I didn\'t want to _______ the subject of money.', correctAnswer: 'bring up', points: 2 },
          { text: 'Please don\'t _______ while I am speaking.', correctAnswer: 'cut in', points: 2 },
          { text: 'I will _______ with an email after our meeting.', correctAnswer: 'follow up', points: 2 },
          { text: 'You should _______ to the HR department for help.', correctAnswer: 'reach out', points: 2 },
          { text: 'Please _______; we can\'t hear you at the back.', correctAnswer: 'speak up', points: 2 },
          { text: 'Let\'s _______ the proposal during lunch.', correctAnswer: 'talk over', points: 2 },
          { text: 'We should _______ next week to check the progress.', correctAnswer: 'touch base', points: 2 },
          { text: 'Could you _______ on what happened in the meeting?', correctAnswer: 'fill in', points: 2 },
          { text: 'We need to _______ the communication barriers.', correctAnswer: 'break through', points: 2 },
          { text: 'I must _______ that the deadline is tomorrow.', correctAnswer: 'point out', points: 2 },
          { text: 'He tried to _______ any discussion of the failure.', correctAnswer: 'shut down', points: 2 }
        ]
      },
      {
        title: 'II. Defining Communication Terms',
        instructions: 'Provide definitions for these 5 specific communication or linguistic terms:',
        type: 'definition',
        questions: [
          { text: 'Jargon', points: 4 },
          { text: 'Colloquialism', points: 4 },
          { text: 'Euphemism', points: 4 },
          { text: 'Diplomacy', points: 4 },
          { text: 'Lobbying', points: 4 }
        ]
      },
      {
        title: 'III. Contrastive Media Analysis',
        instructions: 'Explain the difference between these types of communication:',
        type: 'comparison',
        questions: [
          { text: 'Digital vs. Face-to-face communication', points: 10 },
          { text: 'Formal vs. Informal register', points: 10 }
        ]
      },
      {
        title: 'IV. Public Speaking Writing',
        instructions: 'Write 2 sentences describing the characteristics of a successful public speaker:',
        type: 'sentence_writing',
        questions: [
          { text: 'Characteristic 1:', points: 8 },
          { text: 'Characteristic 2:', points: 8 }
        ]
      },
      {
        title: 'V. Speech Act Matching',
        instructions: 'Match the speech act with its typical communicative function:',
        type: 'matching',
        options: ['a. Expressing strong disagreement', 'b. Softening a harsh request', 'c. Confirming shared understanding', 'd. Presenting information objectively', 'e. Encouraging someone to continue'],
        questions: [
          { text: 'Hedging', correctAnswer: 'b', points: 2 },
          { text: 'Dissenting', correctAnswer: 'a', points: 2 },
          { text: 'Exposition', correctAnswer: 'd', points: 2 },
          { text: 'Validating', correctAnswer: 'c', points: 2 },
          { text: 'Prompting', correctAnswer: 'e', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Rhetorical Metaphors',
        instructions: 'Complete 12 sentences with advanced terminology regarding human interaction:',
        type: 'gap_fill',
        options: ['nuance', 'brevity', 'eloquence', 'subtext', 'equivocation', 'polemic', 'rhetoric', 'consensus', 'cohesion', 'ambiguity', 'concise', 'prolix'],
        questions: [
          { text: 'There is a lot of _______ in his tone of voice.', correctAnswer: 'nuance', points: 2 },
          { text: 'The soul of wit is _______; keep it short.', correctAnswer: 'brevity', points: 2 },
          { text: 'The politician was praised for his _______ and charm.', correctAnswer: 'eloquence', points: 2 },
          { text: 'You need to read the _______ to understand his true meaning.', correctAnswer: 'subtext', points: 2 },
          { text: 'Politicians often use _______ to avoid giving a direct answer.', correctAnswer: 'equivocation', points: 2 },
          { text: 'His latest article is a fierce _______ against the government.', correctAnswer: 'polemic', points: 2 },
          { text: 'Political _______ is often used to persuade voters.', correctAnswer: 'rhetoric', points: 2 },
          { text: 'The committee finally reached a _______ on the issue.', correctAnswer: 'consensus', points: 2 },
          { text: 'Social _______ is the glue that holds a community together.', correctAnswer: 'cohesion', points: 2 },
          { text: 'Avoid _______ in your writing to prevent confusion.', correctAnswer: 'ambiguity', points: 2 },
          { text: 'A _______ summary provides only the essential points.', correctAnswer: 'concise', points: 2 },
          { text: 'Her speech was so _______ that the audience lost interest.', correctAnswer: 'prolix', points: 2 }
        ]
      },
      {
        title: 'II. Advanced Interaction Terms',
        instructions: 'Provide definitions for these 5 sophisticated linguistic or social concepts:',
        type: 'definition',
        questions: [
          { text: 'Dialect', points: 4 },
          { text: 'Sociolinguistics', points: 4 },
          { text: 'Pragmatics', points: 4 },
          { text: 'Discourse', points: 4 },
          { text: 'Ethos', points: 4 }
        ]
      },
      {
        title: 'III. Critical Evaluative Writing',
        instructions: 'Evaluate the role of "Artificial Intelligence" in shaping the future of human communication:',
        type: 'sentence_writing',
        questions: [{ text: 'Evaluation of AI in Communication:', points: 15 }]
      },
      {
        title: 'IV. Networking Jargon Matching',
        instructions: 'Match these professional networking terms:',
        type: 'matching',
        options: ['a. An informal conversation to learn about a field', 'b. Mutually beneficial exchange of favors', 'c. Making a professional introduction', 'd. A short summary of yourself/business', 'e. Reconnecting with a former colleague'],
        questions: [
          { text: 'Reciprocity', correctAnswer: 'b', points: 2 },
          { text: 'Informational Interview', correctAnswer: 'a', points: 2 },
          { text: 'Referral', correctAnswer: 'c', points: 2 },
          { text: 'Elevator Pitch', correctAnswer: 'd', points: 2 },
          { text: 'Networking outreach', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the concept of "Assertive Communication" versus "Submissive Communication" in professional settings.',
        type: 'comparison',
        questions: [{ text: 'Assertive vs. Submissive', points: 10 }]
      }
    ]
  },
  'theme-16': { // AGREEMENT & COMPROMISE
    v1: [
      {
        title: 'I. Negotiation Collocations',
        instructions: 'Complete these 12 sentences with collocations related to agreement and compromise:',
        type: 'gap_fill',
        options: ['consensus', 'deadlock', 'compromise', 'concession', 'unanimous', 'mediation', 'arbitration', 'stalemate', 'common ground', 'mutual benefit', 'olive branch', 'handshake deal'],
        questions: [
          { text: 'The committee finally reached a _______ after hours of debate.', correctAnswer: 'consensus', points: 2 },
          { text: 'The talks ended in a _______ with neither side willing to budge.', correctAnswer: 'deadlock', points: 2 },
          { text: 'A successful marriage requires constant _______ from both partners.', correctAnswer: 'compromise', points: 2 },
          { text: 'As a _______, they agreed to lower the price slightly.', correctAnswer: 'concession', points: 2 },
          { text: 'The board was _______ in its decision to hire the new CEO.', correctAnswer: 'unanimous', points: 2 },
          { text: 'The parties sought _______ to resolve their legal dispute.', correctAnswer: 'mediation', points: 2 },
          { text: 'The labor dispute went to _______ for a final ruling.', correctAnswer: 'arbitration', points: 2 },
          { text: 'The peace process hit a _______ due to lack of trust.', correctAnswer: 'stalemate', points: 2 },
          { text: 'They managed to find some _______ on the issue of taxes.', correctAnswer: 'common ground', points: 2 },
          { text: 'Trade agreements should be designed for _______.', correctAnswer: 'mutual benefit', points: 2 },
          { text: 'The manager offered an _______ by apologizing for the mistake.', correctAnswer: 'olive branch', points: 2 },
          { text: 'In the old days, a _______ was as binding as a contract.', correctAnswer: 'handshake deal', points: 2 }
        ]
      },
      {
        title: 'II. Compromise Strategy Listing',
        instructions: 'List 5 distinct strategies used in conflict resolution and explain their lexical significance:',
        type: 'sentence_writing',
        questions: [
          { text: 'Strategy 1 (e.g. Integrative):', points: 4 },
          { text: 'Strategy 2:', points: 4 },
          { text: 'Strategy 3:', points: 4 },
          { text: 'Strategy 4:', points: 4 },
          { text: 'Strategy 5:', points: 4 }
        ]
      },
      {
        title: 'III. Academic Sentence Writing',
        instructions: 'Write 3 sentences regarding the process of reaching an agreement using these formal terms:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "ratification":', points: 8 },
          { text: 'Sentence using "diplomacy":', points: 8 },
          { text: 'Sentence using "accord":', points: 8 }
        ]
      },
      {
        title: 'IV. Agreement Vocabulary Listing',
        instructions: 'Write down 5 nouns specifically related to "Legal or Formal Agreements":',
        type: 'sentence_writing',
        questions: [{ text: 'Formal agreement nouns list:', points: 10 }]
      },
      {
        title: 'V. Simple Definition',
        instructions: 'Define the term "Consensus" in a decision-making context.',
        type: 'definition',
        questions: [{ text: 'Define: Consensus', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Conflict Resolution Phrasal Verbs',
        instructions: 'Complete 12 sentences with phrasal verbs for agreement and compromise:',
        type: 'gap_fill',
        options: ['settle on', 'back down', 'come around', 'iron out', 'talk over', 'work out', 'give in', 'meet halfway', 'close in', 'break off', 'smooth over', 'bring about'],
        questions: [
          { text: 'We finally managed to _______ a date for the wedding.', correctAnswer: 'settle on', points: 2 },
          { text: 'Neither side was willing to _______ during the argument.', correctAnswer: 'back down', points: 2 },
          { text: 'I\'m sure he will _______ to our way of thinking eventually.', correctAnswer: 'come around', points: 2 },
          { text: 'We need to _______ the final details of the contract.', correctAnswer: 'iron out', points: 2 },
          { text: 'Let\'s _______ the proposal one more time.', correctAnswer: 'talk over', points: 2 },
          { text: 'They are trying to _______ a new trade agreement.', correctAnswer: 'work out', points: 2 },
          { text: 'The government refused to _______ to the strikers\' demands.', correctAnswer: 'give in', points: 2 },
          { text: 'Since we disagree on price, let\'s _______.', correctAnswer: 'meet halfway', points: 2 },
          { text: 'The two sides are _______ on a final agreement.', correctAnswer: 'close in', points: 2 },
          { text: 'The company decided to _______ negotiations.', correctAnswer: 'break off', points: 2 },
          { text: 'The diplomat tried to _______ the tension between the nations.', correctAnswer: 'smooth over', points: 2 },
          { text: 'The mediator helped _______ a peaceful resolution.', correctAnswer: 'bring about', points: 2 }
        ]
      },
      {
        title: 'II. Defining Agreement Concepts',
        instructions: 'Provide definitions for these 5 sophisticated social terms:',
        type: 'definition',
        questions: [
          { text: 'Covenant', points: 4 },
          { text: 'Protocols', points: 4 },
          { text: 'Preamble', points: 4 },
          { text: 'Compliance', points: 4 },
          { text: 'Conformity', points: 4 }
        ]
      },
      {
        title: 'III. Contrastive Social Analysis',
        instructions: 'Explain the difference between these types of conflict resolution:',
        type: 'comparison',
        questions: [
          { text: 'Mediation vs. Arbitration', points: 10 },
          { text: 'Compromise vs. Consensus', points: 10 }
        ]
      },
      {
        title: 'IV. Sentence Construction',
        instructions: 'Use the term "Concession" in a sentence describing a business negotiation.',
        type: 'sentence_writing',
        questions: [{ text: 'Sentence with "Concession":', points: 8 }]
      },
      {
        title: 'V. Matching Idioms',
        instructions: 'Match the idiom with its meaning in the context of agreement:',
        type: 'matching',
        options: ['a. To reach a final agreement', 'b. To make peace with an enemy', 'c. To agree on something completely', 'd. To make a small gesture of peace', 'e. To start a fresh relationship'],
        questions: [
          { text: 'Close the deal', correctAnswer: 'a', points: 2 },
          { text: 'Bury the hatchet', correctAnswer: 'b', points: 2 },
          { text: 'See eye to eye', correctAnswer: 'c', points: 2 },
          { text: 'Extend an olive branch', correctAnswer: 'd', points: 2 },
          { text: 'Turn over a new leaf', correctAnswer: 'e', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Agreement Metaphors',
        instructions: 'Complete 12 sentences with metaphorical expressions about reaching an accord:',
        type: 'gap_fill',
        options: ['middle ground', 'bridge the gap', 'on the same page', 'break the ice', 'smooth the path', 'level playing field', 'seal the deal', 'meeting of minds', 'give and take', 'solid ground', 'clear the air', 'turn the tide'],
        questions: [
          { text: 'They both had to move towards the _______ to agree.', correctAnswer: 'middle ground', points: 2 },
          { text: 'We need to _______ between our two different views.', correctAnswer: 'bridge the gap', points: 2 },
          { text: 'It\'s vital that all team members are _______.', correctAnswer: 'on the same page', points: 2 },
          { text: 'He told a joke to _______ at the start of the meeting.', correctAnswer: 'break the ice', points: 2 },
          { text: 'The new law will _______ for future cooperation.', correctAnswer: 'smooth the path', points: 2 },
          { text: 'Negotiations require a _______ for both parties.', correctAnswer: 'level playing field', points: 2 },
          { text: 'A final signature will _______ on the merger.', correctAnswer: 'seal the deal', points: 2 },
          { text: 'There was a true _______ during the brainstorming session.', correctAnswer: 'meeting of minds', points: 2 },
          { text: 'A good compromise involves a lot of _______.', correctAnswer: 'give and take', points: 2 },
          { text: 'Finally, the peace talks are on _______.', correctAnswer: 'solid ground', points: 2 },
          { text: 'They had a meeting to _______ after the argument.', correctAnswer: 'clear the air', points: 2 },
          { text: 'The new agreement might _______ of the conflict.', correctAnswer: 'turn the tide', points: 2 }
        ]
      },
      {
        title: 'II. Advanced Diplomatic Definitions',
        instructions: 'Provide definitions for these 5 academic political concepts:',
        type: 'definition',
        questions: [
          { text: 'Rapprochement', points: 4 },
          { text: 'Detente', points: 4 },
          { text: 'Multi-lateralism', points: 4 },
          { text: 'Sovereignty', points: 4 },
          { text: 'Legitimacy', points: 4 }
        ]
      },
      {
        title: 'III. Critical Written Response',
        instructions: 'Evaluate the role of "Cultural Sensitivity" in international business negotiations:',
        type: 'sentence_writing',
        questions: [{ text: 'Evaluation of Cultural Sensitivity:', points: 15 }]
      },
      {
        title: 'IV. Jargon Matching',
        instructions: 'Match the negotiation term with its definition:',
        type: 'matching',
        options: ['a. The best alternative to a negotiated agreement', 'b. A fixed amount that cannot be changed', 'c. A point on which no agreement is possible', 'd. The range in which an agreement is possible', 'e. The process of making official a treaty'],
        questions: [
          { text: 'BATNA', correctAnswer: 'a', points: 2 },
          { text: 'Bottom line', correctAnswer: 'b', points: 2 },
          { text: 'Deal-breaker', correctAnswer: 'c', points: 2 },
          { text: 'ZOPA', correctAnswer: 'd', points: 2 },
          { text: 'Ratification', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the concept of "Principled Negotiation" versus "Positional Bargaining".',
        type: 'comparison',
        questions: [{ text: 'Principled vs. Positional', points: 10 }]
      }
    ]
  },
  'theme-17': { // ART & LITERATURE
    v1: [
      {
        title: 'I. Aesthetic Collocations',
        instructions: 'Complete these 12 sentences with collocations related to art and literature:',
        type: 'gap_fill',
        options: ['masterpiece', 'literary genre', 'visual arts', 'creative writing', 'fine arts', 'fictional character', 'profound impact', 'artistic expression', 'performing arts', 'cultural heritage', 'abstract art', 'classic novel'],
        questions: [
          { text: 'The Mona Lisa is considered a _______ of Western art.', correctAnswer: 'masterpiece', points: 2 },
          { text: 'Science fiction is my favorite _______.', correctAnswer: 'literary genre', points: 2 },
          { text: 'Painting and sculpture belong to the _______ category.', correctAnswer: 'visual arts', points: 2 },
          { text: 'He enrolled in a _______ course to write a memoir.', correctAnswer: 'creative writing', points: 2 },
          { text: 'The museum displays a wide range of _______.', correctAnswer: 'fine arts', points: 2 },
          { text: 'Sherlock Holmes is a famous _______.', correctAnswer: 'fictional character', points: 2 },
          { text: 'The poem had a _______ on the young writer.', correctAnswer: 'profound impact', points: 2 },
          { text: 'Graffiti can be a form of _______ in urban areas.', correctAnswer: 'artistic expression', points: 2 },
          { text: 'Theater and dance are part of the _______.', correctAnswer: 'performing arts', points: 2 },
          { text: 'Ancient monuments are part of our _______ heritage.', correctAnswer: 'cultural heritage', points: 2 },
          { text: 'I find _______ difficult to understand sometimes.', correctAnswer: 'abstract art', points: 2 },
          { text: 'Pride and Prejudice is a _______ that everyone should read.', correctAnswer: 'classic novel', points: 2 }
        ]
      },
      {
        title: 'II. Literary Device Listing',
        instructions: 'List 5 distinct literary devices (e.g. Metaphor) and explain their lexical function:',
        type: 'sentence_writing',
        questions: [
          { text: 'Device 1:', points: 4 },
          { text: 'Device 2:', points: 4 },
          { text: 'Device 3:', points: 4 },
          { text: 'Device 4:', points: 4 },
          { text: 'Device 5:', points: 4 }
        ]
      },
      {
        title: 'III. Contextual Usage',
        instructions: 'Write 3 sentences regarding artistic appreciation using these formal terms:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "aesthetic":', points: 8 },
          { text: 'Sentence using "composition":', points: 8 },
          { text: 'Sentence using "interpretation":', points: 8 }
        ]
      },
      {
        title: 'IV. Art Form Listing',
        instructions: 'Write down 5 nouns specifically related to "Sculpture or Architecture":',
        type: 'sentence_writing',
        questions: [{ text: 'Sculpture/Architecture nouns list:', points: 10 }]
      },
      {
        title: 'V. Simple Definition',
        instructions: 'Define the term "Protagonist" in a literary context.',
        type: 'definition',
        questions: [{ text: 'Define: Protagonist', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Artistic Phrasal Verbs',
        instructions: 'Complete 12 sentences with phrasal verbs related to art and literature:',
        type: 'gap_fill',
        options: ['sketch out', 'bring out', 'put across', 'go through', 'read up on', 'set the scene', 'draw on', 'stand out', 'turn out', 'write up', 'leaf through', 'bring back'],
        questions: [
          { text: 'I need to _______ a rough plan for my new painting.', correctAnswer: 'sketch out', points: 2 },
          { text: 'The author managed to _______ the character\'s emotions.', correctAnswer: 'bring out', points: 2 },
          { text: 'The play tries to _______ a message about social justice.', correctAnswer: 'put across', points: 2 },
          { text: 'We must _______ the manuscript for any errors.', correctAnswer: 'go through', points: 2 },
          { text: 'I spent the morning _______ the history of Surrealism.', correctAnswer: 'read up on', points: 2 },
          { text: 'The first chapter serves to _______ for the drama.', correctAnswer: 'set the scene', points: 2 },
          { text: 'The artist likes to _______ his childhood experiences.', correctAnswer: 'draw on', points: 2 },
          { text: 'Her unique style makes her work _______ from the rest.', correctAnswer: 'stand out', points: 2 },
          { text: 'The exhibition _______ to be a huge success.', correctAnswer: 'turn out', points: 2 },
          { text: 'I need to _______ my notes from the gallery visit.', correctAnswer: 'write up', points: 2 },
          { text: 'I like to _______ old art magazines for inspiration.', correctAnswer: 'leaf through', points: 2 },
          { text: 'The old photographs _______ many memories of the city.', correctAnswer: 'bring back', points: 2 }
        ]
      },
      {
        title: 'II. Defining Artistic Movements',
        instructions: 'Provide definitions for these 5 specific art or literary movements:',
        type: 'definition',
        questions: [
          { text: 'Modernism', points: 4 },
          { text: 'Realism', points: 4 },
          { text: 'Romanticism', points: 4 },
          { text: 'Minimalism', points: 4 },
          { text: 'Post-modernism', points: 4 }
        ]
      },
      {
        title: 'III. Contrastive Analysis',
        instructions: 'Explain the difference between these creative concepts:',
        type: 'comparison',
        questions: [
          { text: 'Prose vs. Poetry', points: 10 },
          { text: 'Fine art vs. Commercial art', points: 10 }
        ]
      },
      {
        title: 'IV. Sentence Construction',
        instructions: 'Use the term "Genre" in a sentence about choosing a book to read.',
        type: 'sentence_writing',
        questions: [{ text: 'Sentence with "Genre":', points: 8 }]
      },
      {
        title: 'V. Matching Terms',
        instructions: 'Match the artistic term with its definition:',
        type: 'matching',
        options: ['a. A small initial model of a sculpture', 'b. A painting on a large wall or ceiling', 'c. A person who supports an artist', 'd. A collection of an artist\'s work', 'e. The study of the nature of beauty'],
        questions: [
          { text: 'Maquette', correctAnswer: 'a', points: 2 },
          { text: 'Mural', correctAnswer: 'b', points: 2 },
          { text: 'Patron', correctAnswer: 'c', points: 2 },
          { text: 'Portfolio', correctAnswer: 'd', points: 2 },
          { text: 'Aesthetics', correctAnswer: 'e', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Literary Metaphors',
        instructions: 'Complete 12 sentences with metaphorical expressions related to creativity:',
        type: 'gap_fill',
        options: ['read between the lines', 'canvas of life', 'poetry in motion', 'picture-perfect', 'blank slate', 'food for thought', 'turning point', 'larger than life', 'in the spotlight', 'hidden meaning', 'work of art', 'cut a long story short'],
        questions: [
          { text: 'You need to _______ to understand the subtext.', correctAnswer: 'read between the lines', points: 2 },
          { text: 'The city provides a vibrant _______ for the artist.', correctAnswer: 'canvas of life', points: 2 },
          { text: 'The dancer\'s movements were simply _______.', correctAnswer: 'poetry in motion', points: 2 },
          { text: 'The scenery was so beautiful it was _______.', correctAnswer: 'picture-perfect', points: 2 },
          { text: 'A new notebook is like a _______ for a writer.', correctAnswer: 'blank slate', points: 2 },
          { text: 'The professor\'s lecture provided much _______.', correctAnswer: 'food for thought', points: 2 },
          { text: 'The discovery of the letter was a _______ in the story.', correctAnswer: 'turning point', points: 2 },
          { text: 'The main character was a _______ personality.', correctAnswer: 'larger than life', points: 2 },
          { text: 'After winning the award, he was _______.', correctAnswer: 'in the spotlight', points: 2 },
          { text: 'Scholars are still looking for the _______ of the poem.', correctAnswer: 'hidden meaning', points: 2 },
          { text: 'The building is a true _______ of modern design.', correctAnswer: 'work of art', points: 2 },
          { text: 'To _______, we decided to sell the house.', correctAnswer: 'cut a long story short', points: 2 }
        ]
      },
      {
        title: 'II. Advanced Critical Definitions',
        instructions: 'Provide definitions for these 5 sophisticated academic concepts:',
        type: 'definition',
        questions: [
          { text: 'Aestheticism', points: 4 },
          { text: 'Didacticism', points: 4 },
          { text: 'Anthropomorphism', points: 4 },
          { text: 'Allegory', points: 4 },
          { text: 'Imagery', points: 4 }
        ]
      },
      {
        title: 'III. Critical Evaluative Writing',
        instructions: 'Evaluate the role of "Art as a tool for social change" in a short paragraph:',
        type: 'sentence_writing',
        questions: [{ text: 'Evaluation of Art and Society:', points: 15 }]
      },
      {
        title: 'IV. Jargon Matching',
        instructions: 'Match the professional term with its context:',
        type: 'matching',
        options: ['a. The sequence of events in a story', 'b. The atmosphere created by a text', 'c. The use of symbols to represent ideas', 'd. A style of writing or art', 'e. The study of how language works in literature'],
        questions: [
          { text: 'Plot', correctAnswer: 'a', points: 2 },
          { text: 'Tone', correctAnswer: 'b', points: 2 },
          { text: 'Symbolism', correctAnswer: 'c', points: 2 },
          { text: 'Genre', correctAnswer: 'd', points: 2 },
          { text: 'Stylistics', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the concept of "High Culture" versus "Popular Culture" in modern society.',
        type: 'comparison',
        questions: [{ text: 'High vs Popular Culture', points: 10 }]
      }
    ]
  },
  'theme-18': { // TRAVEL & TOURISM
    v1: [
      {
        title: 'I. Travel Collocations',
        instructions: 'Complete these 12 sentences with travel and tourism related collocations:',
        type: 'gap_fill',
        options: ['package holiday', 'off the beaten track', 'tourist attraction', 'travel agency', 'itinerary', 'destination', 'accommodation', 'budget airline', 'peak season', 'sightseeing', 'local customs', 'culture shock'],
        questions: [
          { text: 'We booked a _______ to Spain that includes flights and hotels.', correctAnswer: 'package holiday', points: 2 },
          { text: 'I prefer exploring remote areas _______.', correctAnswer: 'off the beaten track', points: 2 },
          { text: 'The Eiffel Tower is a major _______.', correctAnswer: 'tourist attraction', points: 2 },
          { text: 'The _______ helped us plan our honeymoon.', correctAnswer: 'travel agency', points: 2 },
          { text: 'Please check the _______ for the departure times.', correctAnswer: 'itinerary', points: 2 },
          { text: 'Bali is a very popular _______ for honeymooners.', correctAnswer: 'destination', points: 2 },
          { text: 'It was hard to find cheap _______ during the festival.', correctAnswer: 'accommodation', points: 2 },
          { text: 'We saved money by flying with a _______.', correctAnswer: 'budget airline', points: 2 },
          { text: 'Prices for hotels usually rise during _______.', correctAnswer: 'peak season', points: 2 },
          { text: 'We spent the whole day _______ in Rome.', correctAnswer: 'sightseeing', points: 2 },
          { text: 'It is important to respect _______ when traveling abroad.', correctAnswer: 'local customs', points: 2 },
          { text: 'Moving to a new country can cause severe _______.', correctAnswer: 'culture shock', points: 2 }
        ]
      },
      {
        title: 'II. Accommodation Classification',
        instructions: 'List 5 distinct types of travel accommodation and describe their typical lexical characteristics:',
        type: 'sentence_writing',
        questions: [
          { text: 'Accommodation 1 (e.g. Hostel):', points: 4 },
          { text: 'Accommodation 2:', points: 4 },
          { text: 'Accommodation 3:', points: 4 },
          { text: 'Accommodation 4:', points: 4 },
          { text: 'Accommodation 5:', points: 4 }
        ]
      },
      {
        title: 'III. Contextual Usage',
        instructions: 'Write 3 sentences regarding the impact of tourism using these formal terms:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "sustainable":', points: 8 },
          { text: 'Sentence using "infrastructure":', points: 8 },
          { text: 'Sentence using "economic":', points: 8 }
        ]
      },
      {
        title: 'IV. Transport Vocabulary Listing',
        instructions: 'Write down 5 nouns specifically related to "Air Travel or Airports":',
        type: 'sentence_writing',
        questions: [{ text: 'Air travel nouns list:', points: 10 }]
      },
      {
        title: 'V. Simple Definition',
        instructions: 'Define the term "Expatriate" in a modern context.',
        type: 'definition',
        questions: [{ text: 'Define: Expatriate', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Travel Phrasal Verbs',
        instructions: 'Complete 12 sentences with phrasal verbs related to traveling:',
        type: 'gap_fill',
        options: ['set off', 'check in', 'touch down', 'get away', 'see off', 'stop over', 'pick up', 'look around', 'pull in', 'go away', 'break down', 'take off'],
        questions: [
          { text: 'We need to _______ early to avoid the traffic.', correctAnswer: 'set off', points: 2 },
          { text: 'You should _______ at least two hours before your flight.', correctAnswer: 'check in', points: 2 },
          { text: 'The plane is expected to _______ at 3 PM.', correctAnswer: 'touch down', points: 2 },
          { text: 'I really need to _______ for a few days of rest.', correctAnswer: 'get away', points: 2 },
          { text: 'My parents came to the station to _______ me _______.', correctAnswer: 'see off', points: 2 },
          { text: 'We will _______ in Dubai for one night on our way to Australia.', correctAnswer: 'stop over', points: 2 },
          { text: 'Can you _______ me _______ from the airport?', correctAnswer: 'pick up', points: 2 },
          { text: 'We had an hour to _______ the city before the meeting.', correctAnswer: 'look around', points: 2 },
          { text: 'The train is scheduled to _______ at platform 5.', correctAnswer: 'pull in', points: 2 },
          { text: 'Many people like to _______ during the summer holidays.', correctAnswer: 'go away', points: 2 },
          { text: 'Our car _______ in the middle of the desert.', correctAnswer: 'break down', points: 2 },
          { text: 'The plane was delayed and only managed to _______ at 10 PM.', correctAnswer: 'take off', points: 2 }
        ]
      },
      {
        title: 'II. Defining Tourism Concepts',
        instructions: 'Provide definitions for these 5 specific travel or tourism terms:',
        type: 'definition',
        questions: [
          { text: 'Ecotourism', points: 4 },
          { text: 'Voluntourism', points: 4 },
          { text: 'Staycation', points: 4 },
          { text: 'Heritage site', points: 4 },
          { text: 'Backpacking', points: 4 }
        ]
      },
      {
        title: 'III. Contrastive Tourism Analysis',
        instructions: 'Explain the difference between these types of travel:',
        type: 'comparison',
        questions: [
          { text: 'Mass tourism vs. Niche tourism', points: 10 },
          { text: 'Domestic vs. International travel', points: 10 }
        ]
      },
      {
        title: 'IV. Sentence Construction',
        instructions: 'Use the term "Itinerary" in a sentence about planning a road trip.',
        type: 'sentence_writing',
        questions: [{ text: 'Sentence with "Itinerary":', points: 8 }]
      },
      {
        title: 'V. Travel Idiom Matching',
        instructions: 'Match the idiom with its meaning in the context of travel:',
        type: 'matching',
        options: ['a. To begin a journey', 'b. To have a strong desire to travel', 'c. To travel with very few items', 'd. To feel very comfortable in a place', 'e. To spend a lot of money on luxury'],
        questions: [
          { text: 'Hit the road', correctAnswer: 'a', points: 2 },
          { text: 'Itchy feet', correctAnswer: 'b', points: 2 },
          { text: 'Travel light', correctAnswer: 'c', points: 2 },
          { text: 'Feel at home', correctAnswer: 'd', points: 2 },
          { text: 'Live it up', correctAnswer: 'e', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Travel Metaphors',
        instructions: 'Complete 12 sentences with advanced terminology regarding global movement:',
        type: 'gap_fill',
        options: ['globalization', 'nomadic', 'hospitality', 'sustainability', 'authenticity', 'migration', 'cosmopolitan', 'sanctuary', 'voyage', 'expedition', 'odyssey', 'pilgrimage'],
        questions: [
          { text: '_______ has made international travel easier than ever.', correctAnswer: 'globalization', points: 2 },
          { text: 'The tribe leads a _______ life, moving with the seasons.', correctAnswer: 'nomadic', points: 2 },
          { text: 'The region is famous for its warm _______.', correctAnswer: 'hospitality', points: 2 },
          { text: 'Tourism _______ is a key concern for island nations.', correctAnswer: 'sustainability', points: 2 },
          { text: 'Travelers often seek an _______ experience of local life.', correctAnswer: 'authenticity', points: 2 },
          { text: 'Human _______ is driven by economic and environmental factors.', correctAnswer: 'migration', points: 2 },
          { text: 'The city has a _______ atmosphere with many languages.', correctAnswer: 'cosmopolitan', points: 2 },
          { text: 'The remote island felt like a _______ from modern life.', correctAnswer: 'sanctuary', points: 2 },
          { text: 'The long _______ across the Atlantic took several weeks.', correctAnswer: 'voyage', points: 2 },
          { text: 'The scientific _______ aimed to reach the North Pole.', correctAnswer: 'expedition', points: 2 },
          { text: 'His long journey home was a true _______.', correctAnswer: 'odyssey', points: 2 },
          { text: 'Thousands of people make a _______ to the holy city.', correctAnswer: 'pilgrimage', points: 2 }
        ]
      },
      {
        title: 'II. Advanced Leisure Concepts',
        instructions: 'Provide definitions for these 5 complex sociological concepts of travel:',
        type: 'definition',
        questions: [
          { text: 'Cultural immersion', points: 4 },
          { text: 'Tourism leakage', points: 4 },
          { text: 'Overtourism', points: 4 },
          { text: 'Responsible travel', points: 4 },
          { text: 'Destination marketing', points: 4 }
        ]
      },
      {
        title: 'III. Academic Critical Written Response',
        instructions: 'Evaluate the environmental impact of "Long-haul aviation" in a short paragraph:',
        type: 'sentence_writing',
        questions: [{ text: 'Evaluation of Aviation Impact:', points: 15 }]
      },
      {
        title: 'IV. Logistics Jargon Matching',
        instructions: 'Match the logistics term with its definition:',
        type: 'matching',
        options: ['a. A document allowing entry into a country', 'b. A place where goods are stored', 'c. The process of moving goods', 'd. A tax on imported goods', 'e. The official center for border control'],
        questions: [
          { text: 'Visa', correctAnswer: 'a', points: 2 },
          { text: 'Warehouse', correctAnswer: 'b', points: 2 },
          { text: 'Transit', correctAnswer: 'c', points: 2 },
          { text: 'Duty', correctAnswer: 'd', points: 2 },
          { text: 'Customs', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the concept of "Virtual Tourism" versus "Physical Travel" in the digital age.',
        type: 'comparison',
        questions: [{ text: 'Virtual vs Physical Travel', points: 10 }]
      }
    ]
  },
  'theme-19': { // REMEMBERING & SENSING
    v1: [
      {
        title: 'I. Sensory Collocations',
        instructions: 'Complete these 12 sentences with collocations related to memory and the senses:',
        type: 'gap_fill',
        options: ['vivid memory', 'distant memory', 'sixth sense', 'visual cue', 'common sense', 'fond memory', 'profound impact', 'fleeting moment', 'selective memory', 'unconscious mind', 'physical sensation', 'sharp pain'],
        questions: [
          { text: 'I have a _______ of my first day at school.', correctAnswer: 'vivid memory', points: 2 },
          { text: 'The events of that summer are now just a _______.', correctAnswer: 'distant memory', points: 2 },
          { text: 'She had a _______ that something was about to happen.', correctAnswer: 'sixth sense', points: 2 },
          { text: 'The teacher used a _______ to help the students remember.', correctAnswer: 'visual cue', points: 2 },
          { text: 'It\'s just _______ to wash your hands before eating.', correctAnswer: 'common sense', points: 2 },
          { text: 'I have a _______ of our trip to the seaside.', correctAnswer: 'fond memory', points: 2 },
          { text: 'The scent of lavender had a _______ on her mood.', correctAnswer: 'profound impact', points: 2 },
          { text: 'Happiness is often just a _______.', correctAnswer: 'fleeting moment', points: 2 },
          { text: 'He seems to have a _______ when it comes to chores.', correctAnswer: 'selective memory', points: 2 },
          { text: 'Traumatic events can be buried in the _______.', correctAnswer: 'unconscious mind', points: 2 },
          { text: 'The cold wind produced a _______ of tingling.', correctAnswer: 'physical sensation', points: 2 },
          { text: 'The athlete felt a _______ in his ankle.', correctAnswer: 'sharp pain', points: 2 }
        ]
      },
      {
        title: 'II. Sensory Classification',
        instructions: 'List the 5 primary human senses and provide 2 nouns associated with each:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sense 1 (e.g. Sight):', points: 4 },
          { text: 'Sense 2:', points: 4 },
          { text: 'Sense 3:', points: 4 },
          { text: 'Sense 4:', points: 4 },
          { text: 'Sense 5:', points: 4 }
        ]
      },
      {
        title: 'III. Contextual Usage',
        instructions: 'Write 3 sentences regarding memory using these terms:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "nostalgia":', points: 8 },
          { text: 'Sentence using "retrospect":', points: 8 },
          { text: 'Sentence using "reminiscence":', points: 8 }
        ]
      },
      {
        title: 'IV. Memory Aid Listing',
        instructions: 'Write down 5 nouns specifically related to "Tools for Remembering" (e.g. Diary):',
        type: 'sentence_writing',
        questions: [{ text: 'Memory tools list:', points: 10 }]
      },
      {
        title: 'V. Simple Definition',
        instructions: 'Define the term "Deja Vu" in a psychological context.',
        type: 'definition',
        questions: [{ text: 'Define: Deja Vu', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Memory Phrasal Verbs',
        instructions: 'Complete 12 sentences with phrasal verbs for remembering and sensing:',
        type: 'gap_fill',
        options: ['bring back', 'block out', 'sink in', 'look back', 'go over', 'slip away', 'cast back', 'conjure up', 'call up', 'stick in', 'think back', 'flash back'],
        questions: [
          { text: 'This old song always _______ memories of my youth.', correctAnswer: 'bring back', points: 2 },
          { text: 'He tried to _______ the painful memories of the war.', correctAnswer: 'block out', points: 2 },
          { text: 'It took a few days for the news to _______.', correctAnswer: 'sink in', points: 2 },
          { text: 'When I _______, I realize how lucky I was.', correctAnswer: 'look back', points: 2 },
          { text: 'Let\'s _______ the details one more time.', correctAnswer: 'go over', points: 2 },
          { text: 'The memory of his face began to _______.', correctAnswer: 'slip away', points: 2 },
          { text: 'Try to _______ your mind to that morning.', correctAnswer: 'cast back', points: 2 },
          { text: 'The smell of rain can _______ images of the forest.', correctAnswer: 'conjure up', points: 2 },
          { text: 'I need to _______ the files from the archive.', correctAnswer: 'call up', points: 2 },
          { text: 'The lyrics of that song really _______ your mind.', correctAnswer: 'stick in', points: 2 },
          { text: 'If you _______ to your childhood, what do you see?', correctAnswer: 'think back', points: 2 },
          { text: 'Hearing that sound made her _______ to the accident.', correctAnswer: 'flash back', points: 2 }
        ]
      },
      {
        title: 'II. Defining Sensation Concepts',
        instructions: 'Provide definitions for these 5 specific sensory terms:',
        type: 'definition',
        questions: [
          { text: 'Aroma', points: 4 },
          { text: 'Texture', points: 4 },
          { text: 'Resonance', points: 4 },
          { text: 'Perception', points: 4 },
          { text: 'Intuition', points: 4 }
        ]
      },
      {
        title: 'III. Contrastive Memory Analysis',
        instructions: 'Explain the difference between these memory types:',
        type: 'comparison',
        questions: [
          { text: 'Short-term vs. Long-term memory', points: 10 },
          { text: 'Implicit vs. Explicit memory', points: 10 }
        ]
      },
      {
        title: 'IV. Sentence Construction',
        instructions: 'Use the term "Evocative" in a sentence describing a work of art or a scent.',
        type: 'sentence_writing',
        questions: [{ text: 'Sentence with "Evocative":', points: 8 }]
      },
      {
        title: 'V. Sensation Matching',
        instructions: 'Match the sensory experience with its scientific name:',
        type: 'matching',
        options: ['a. Sense of smell', 'b. Sense of taste', 'c. Sense of touch', 'd. Sense of hearing', 'e. Sense of balance'],
        questions: [
          { text: 'Olfaction', correctAnswer: 'a', points: 2 },
          { text: 'Gustation', correctAnswer: 'b', points: 2 },
          { text: 'Somatosensation', correctAnswer: 'c', points: 2 },
          { text: 'Audition', correctAnswer: 'd', points: 2 },
          { text: 'Vestibular sense', correctAnswer: 'e', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Memory Idioms',
        instructions: 'Complete 12 sentences with metaphorical expressions about the mind:',
        type: 'gap_fill',
        options: ['trip down memory lane', 'ring a bell', 'on the tip of my tongue', 'jog your memory', 'at the back of my mind', 'clean slate', 'slip your mind', 'in one ear and out the other', 'keep in mind', 'lose your train of thought', 'bear in mind', 'mind like a sieve'],
        questions: [
          { text: 'Visiting my old school was a _______.', correctAnswer: 'trip down memory lane', points: 2 },
          { text: 'Does that name _______?', correctAnswer: 'ring a bell', points: 2 },
          { text: 'His name is _______, but I can\'t remember it.', correctAnswer: 'on the tip of my tongue', points: 2 },
          { text: 'Maybe this photograph will _______.', correctAnswer: 'jog your memory', points: 2 },
          { text: 'The worry was always _______.', correctAnswer: 'at the back of my mind', points: 2 },
          { text: 'Moving to a new city gave her a _______.', correctAnswer: 'clean slate', points: 2 },
          { text: 'I am sorry, I forgot; it completely _______.', correctAnswer: 'slip your mind', points: 2 },
          { text: 'My teacher\'s advice went _______.', correctAnswer: 'in one ear and out the other', points: 2 },
          { text: 'Please _______ that the deadline is Friday.', correctAnswer: 'keep in mind', points: 2 },
          { text: 'The noise made me _______.', correctAnswer: 'lose your train of thought', points: 2 },
          { text: 'You should _______ the risks involved.', correctAnswer: 'bear in mind', points: 2 },
          { text: 'I forget everything; I have a _______.', correctAnswer: 'mind like a sieve', points: 2 }
        ]
      },
      {
        title: 'II. Advanced Psychological Definitions',
        instructions: 'Provide definitions for these 5 complex cognitive concepts:',
        type: 'definition',
        questions: [
          { text: 'Synesthesia', points: 4 },
          { text: 'Amnesia', points: 4 },
          { text: 'Cognitive load', points: 4 },
          { text: 'Sensory overload', points: 4 },
          { text: 'Neural plasticity', points: 4 }
        ]
      },
      {
        title: 'III. Academic Critical Written Response',
        instructions: 'Evaluate the role of "Sensory Branding" in modern advertising in a short paragraph:',
        type: 'sentence_writing',
        questions: [{ text: 'Evaluation of Sensory Branding:', points: 15 }]
      },
      {
        title: 'IV. Perception Jargon Matching',
        instructions: 'Match the perceptual term with its definition:',
        type: 'matching',
        options: ['a. Organizing sensory information', 'b. Failure to notice visible objects', 'c. Minimum stimulus needed to sense', 'd. Tendency to perceive familiar objects', 'e. Perception without conscious awareness'],
        questions: [
          { text: 'Perception', correctAnswer: 'a', points: 2 },
          { text: 'Inattentional blindness', correctAnswer: 'b', points: 2 },
          { text: 'Absolute threshold', correctAnswer: 'c', points: 2 },
          { text: 'Perceptual set', correctAnswer: 'd', points: 2 },
          { text: 'Subliminal perception', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the concept of "Objective Sensation" versus "Subjective Perception" in human experience.',
        type: 'comparison',
        questions: [{ text: 'Sensation vs Perception', points: 10 }]
      }
    ]
  },
  'theme-20': { // SOCIAL ISSUES: LAW & CRIME
    v1: [
      {
        title: 'I. Legal Collocations',
        instructions: 'Complete these 12 sentences with collocations related to law and crime:',
        type: 'gap_fill',
        options: ['law-abiding', 'commit a crime', 'break the law', 'legal system', 'court case', 'police officer', 'traffic violation', 'juvenile delinquency', 'criminal record', 'prison sentence', 'community service', 'capital punishment'],
        questions: [
          { text: 'Most people are _______ citizens who pay their taxes.', correctAnswer: 'law-abiding', points: 2 },
          { text: 'He was arrested for attempting to _______.', correctAnswer: 'commit a crime', points: 2 },
          { text: 'If you _______, you must be prepared for the consequences.', correctAnswer: 'break the law', points: 2 },
          { text: 'The _______ is complex and often slow.', correctAnswer: 'legal system', points: 2 },
          { text: 'The famous _______ lasted for three months.', correctAnswer: 'court case', points: 2 },
          { text: 'The _______ asked to see his driver\'s license.', correctAnswer: 'police officer', points: 2 },
          { text: 'Speeding is a common _______.', correctAnswer: 'traffic violation', points: 2 },
          { text: 'Social programs can help reduce _______.', correctAnswer: 'juvenile delinquency', points: 2 },
          { text: 'Having a _______ makes it hard to find a job.', correctAnswer: 'criminal record', points: 2 },
          { text: 'The judge handed down a ten-year _______.', correctAnswer: 'prison sentence', points: 2 },
          { text: 'The offender was sentenced to 100 hours of _______.', correctAnswer: 'community service', points: 2 },
          { text: 'Many countries have abolished _______ for all crimes.', correctAnswer: 'capital punishment', points: 2 }
        ]
      },
      {
        title: 'II. Crime Classification',
        instructions: 'List 5 distinct types of crimes (e.g. Burglary) and describe their lexical legal definition:',
        type: 'sentence_writing',
        questions: [
          { text: 'Crime 1:', points: 4 },
          { text: 'Crime 2:', points: 4 },
          { text: 'Crime 3:', points: 4 },
          { text: 'Crime 4:', points: 4 },
          { text: 'Crime 5:', points: 4 }
        ]
      },
      {
        title: 'III. Contextual Usage',
        instructions: 'Write 3 sentences regarding social justice using these terms:',
        type: 'sentence_writing',
        questions: [
          { text: 'Sentence using "rehabilitation":', points: 8 },
          { text: 'Sentence using "deterrence":', points: 8 },
          { text: 'Sentence using "legislation":', points: 8 }
        ]
      },
      {
        title: 'IV. Legal Professional Listing',
        instructions: 'Write down 5 nouns specifically related to "Roles in a Courtroom" (e.g. Judge):',
        type: 'sentence_writing',
        questions: [{ text: 'Courtroom roles list:', points: 10 }]
      },
      {
        title: 'V. Simple Definition',
        instructions: 'Define the term "Larceny" in a legal context.',
        type: 'definition',
        questions: [{ text: 'Define: Larceny', points: 4 }]
      }
    ],
    v2: [
      {
        title: 'I. Criminal Phrasal Verbs',
        instructions: 'Complete 12 sentences with phrasal verbs for law and crime:',
        type: 'gap_fill',
        options: ['get away with', 'turn oneself in', 'lock up', 'let off', 'break in', 'hold up', 'run away', 'look into', 'take away', 'go off', 'crack down', 'set up'],
        questions: [
          { text: 'He managed to _______ the robbery for two years.', correctAnswer: 'get away with', points: 2 },
          { text: 'The suspect decided to _______ to the police.', correctAnswer: 'turn oneself in', points: 2 },
          { text: 'The dangerous criminal was _______ for life.', correctAnswer: 'lock up', points: 2 },
          { text: 'The judge decided to _______ the first-time offender with a warning.', correctAnswer: 'let off', points: 2 },
          { text: 'Someone tried to _______ to our house last night.', correctAnswer: 'break in', points: 2 },
          { text: 'Two men tried to _______ the bank at gunpoint.', correctAnswer: 'hold up', points: 2 },
          { text: 'The thief tried to _______ with the stolen jewelry.', correctAnswer: 'run away', points: 2 },
          { text: 'The detectives began to _______ the mysterious disappearance.', correctAnswer: 'look into', points: 2 },
          { text: 'The police had to _______ the evidence for testing.', correctAnswer: 'take away', points: 2 },
          { text: 'A bomb was found before it could _______.', correctAnswer: 'go off', points: 2 },
          { text: 'The police plan to _______ on illegal street racing.', correctAnswer: 'crack down', points: 2 },
          { text: 'The criminal claimed that he had been _______.', correctAnswer: 'set up', points: 2 }
        ]
      },
      {
        title: 'II. Defining Legal Concepts',
        instructions: 'Provide definitions for these 5 sophisticated legal terms:',
        type: 'definition',
        questions: [
          { text: 'Defendant', points: 4 },
          { text: 'Plaintiff', points: 4 },
          { text: 'Acquittal', points: 4 },
          { text: 'Indictment', points: 4 },
          { text: 'Perjury', points: 4 }
        ]
      },
      {
        title: 'III. Contrastive Social Analysis',
        instructions: 'Explain the difference between these legal concepts:',
        type: 'comparison',
        questions: [
          { text: 'Criminal law vs. Civil law', points: 10 },
          { text: 'Felony vs. Misdemeanor', points: 10 }
        ]
      },
      {
        title: 'IV. Sentence Construction',
        instructions: 'Use the term "Litigation" in a sentence describing a corporate dispute.',
        type: 'sentence_writing',
        questions: [{ text: 'Sentence with "Litigation":', points: 8 }]
      },
      {
        title: 'V. Justice Matching',
        instructions: 'Match the legal idiom with its meaning:',
        type: 'matching',
        options: ['a. Not subject to the law', 'b. The authority of the law is reaching out', 'c. To take the law into one\'s own hands', 'd. To be completely innocent', 'e. Justice that is slow but sure'],
        questions: [
          { text: 'Above the law', correctAnswer: 'a', points: 2 },
          { text: 'Long arm of the law', correctAnswer: 'b', points: 2 },
          { text: 'Vigilantism', correctAnswer: 'c', points: 2 },
          { text: 'Clean hands', correctAnswer: 'd', points: 2 },
          { text: 'The wheels of justice', correctAnswer: 'e', points: 2 }
        ]
      }
    ],
    v3: [
      {
        title: 'I. Social Issue Metaphors',
        instructions: 'Complete 12 sentences with advanced terminology regarding social problems:',
        type: 'gap_fill',
        options: ['inequality', 'marginalization', 'jurisprudence', 'precedent', 'culpability', 'restitution', 'clemency', 'mitigating', 'aggravating', 'surveillance', 'transparency', 'accountability'],
        questions: [
          { text: 'Wealth _______ is a growing concern in many countries.', correctAnswer: 'inequality', points: 2 },
          { text: 'The _______ of minority groups leads to social unrest.', correctAnswer: 'marginalization', points: 2 },
          { text: 'He is a scholar of _______, the theory of law.', correctAnswer: 'jurisprudence', points: 2 },
          { text: 'The judge\'s decision set a _______ for future cases.', correctAnswer: 'precedent', points: 2 },
          { text: 'The jury had to determine the defendant\'s _______.', correctAnswer: 'culpability', points: 2 },
          { text: 'The thief was ordered to make _______ to the victim.', correctAnswer: 'restitution', points: 2 },
          { text: 'The prisoner appealed to the governor for _______.', correctAnswer: 'clemency', points: 2 },
          { text: 'The lawyer argued there were _______ circumstances.', correctAnswer: 'mitigating', points: 2 },
          { text: 'The brutality of the crime was an _______ factor.', correctAnswer: 'aggravating', points: 2 },
          { text: 'Public _______ is increasing in city centers.', correctAnswer: 'surveillance', points: 2 },
          { text: 'Government _______ is essential for a healthy democracy.', correctAnswer: 'transparency', points: 2 },
          { text: 'There must be _______ for those in power.', correctAnswer: 'accountability', points: 2 }
        ]
      },
      {
        title: 'II. Advanced Legal Definitions',
        instructions: 'Provide definitions for these 5 complex academic legal concepts:',
        type: 'definition',
        questions: [
          { text: 'Habeas Corpus', points: 4 },
          { text: 'Mens Rea', points: 4 },
          { text: 'Actus Reus', points: 4 },
          { text: 'Ex Post Facto', points: 4 },
          { text: 'Stare Decisis', points: 4 }
        ]
      },
      {
        title: 'III. Academic Critical Written Response',
        instructions: 'Evaluate the effectiveness of "Restorative Justice" versus "Punitive Justice" in modern society:',
        type: 'sentence_writing',
        questions: [{ text: 'Evaluation of Restorative Justice:', points: 15 }]
      },
      {
        title: 'IV. Jargon Matching',
        instructions: 'Match the legal term with its definition:',
        type: 'matching',
        options: ['a. A person who sees a crime', 'b. A formal charge of a crime', 'c. A group of people who decide a case', 'd. The decision of a jury', 'e. The punishment given by a judge'],
        questions: [
          { text: 'Witness', correctAnswer: 'a', points: 2 },
          { text: 'Indictment', correctAnswer: 'b', points: 2 },
          { text: 'Jury', correctAnswer: 'c', points: 2 },
          { text: 'Verdict', correctAnswer: 'd', points: 2 },
          { text: 'Sentence', correctAnswer: 'e', points: 2 }
        ]
      },
      {
        title: 'V. Analytical Comparison',
        instructions: 'Discuss the concept of "Human Rights" versus "State Security" in the context of law enforcement.',
        type: 'comparison',
        questions: [{ text: 'Human Rights vs Security', points: 10 }]
      }
    ]
  }
};

const generateThemeContent = (themeId: string, subtitle: string): ExamVariant[] => {
  const themeVariants = themeData[themeId];
  if (!themeVariants) return [];

  return Object.entries(themeVariants).map(([vKey, sectionsData]) => {
    const vNum = parseInt(vKey.replace('v', ''));
    return {
      id: `${themeId}-v${vNum}`,
      variantNumber: vNum,
      sections: sectionsData.map((s, sIdx) => ({
        id: `${themeId}-v${vNum}-s${sIdx + 1}`,
        title: s.title,
        instructions: s.instructions,
        type: s.type,
        options: s.options,
        questions: s.questions.map((q, qIdx) => ({
          id: `${themeId}-v${vNum}-s${sIdx + 1}-q${qIdx + 1}`,
          text: q.text,
          correctAnswer: q.correctAnswer,
          points: q.points
        }))
      }))
    };
  });
};

export const THEMES: Theme[] = [
  { id: 'theme-1', title: 'THEME 1', subtitle: 'THE MEDIA (PRINT & PRESS)', icon: 'Newspaper', variants: [] },
  { id: 'theme-2', title: 'THEME 2', subtitle: 'MEDICAL LANGUAGE', icon: 'Stethoscope', variants: [] },
  { id: 'theme-3', title: 'THEME 3', subtitle: 'TECHNOLOGY & ITS IMPACT', icon: 'Cpu', variants: [] },
  { id: 'theme-4', title: 'THEME 4', subtitle: 'STUDY & LEARNING', icon: 'BookOpen', variants: [] },
  { id: 'theme-5', title: 'THEME 5', subtitle: 'WORK: COLLOCATIONS & SLANG', icon: 'Briefcase', variants: [] },
  { id: 'theme-6', title: 'THEME 6', subtitle: 'WORK: BUSINESS & MONEY', icon: 'Coins', variants: [] },
  { id: 'theme-7', title: 'THEME 7', subtitle: 'ENVIRONMENT: VARIETIES', icon: 'TreePine', variants: [] },
  { id: 'theme-8', title: 'THEME 8', subtitle: 'ENVIRONMENT: PROBLEMS', icon: 'Globe', variants: [] },
  { id: 'theme-9', title: 'THEME 9', subtitle: 'PERSONAL CHARACTER', icon: 'UserCircle', variants: [] },
  { id: 'theme-10', title: 'THEME 10', subtitle: 'CLOTHING & APPEARANCE', icon: 'Shirt', variants: [] },
  { id: 'theme-11', title: 'THEME 11', subtitle: 'RELATIONSHIP: FAMILY & FRIENDS', icon: 'Users', variants: [] },
  { id: 'theme-12', title: 'THEME 12', subtitle: 'FEELINGS: EMOTIONS & MOODS', icon: 'Smile', variants: [] },
  { id: 'theme-13', title: 'THEME 13', subtitle: 'FOOD & DINING', icon: 'Utensils', variants: [] },
  { id: 'theme-14', title: 'THEME 14', subtitle: 'LEISURE & LIFESTYLE', icon: 'Palmtree', variants: [] },
  { id: 'theme-15', title: 'THEME 15', subtitle: 'COMMUNICATION & NETWORKING', icon: 'Network', variants: [] },
  { id: 'theme-16', title: 'THEME 16', subtitle: 'AGREEMENT & COMPROMISE', icon: 'Handshake', variants: [] },
  { id: 'theme-17', title: 'THEME 17', subtitle: 'ART & LITERATURE', icon: 'Palette', variants: [] },
  { id: 'theme-18', title: 'THEME 18', subtitle: 'TRAVEL & TOURISM', icon: 'Plane', variants: [] },
  { id: 'theme-19', title: 'THEME 19', subtitle: 'REMEMBERING & SENSING', icon: 'Brain', variants: [] },
  { id: 'theme-20', title: 'THEME 20', subtitle: 'SOCIAL ISSUES: LAW & CRIME', icon: 'Scale', variants: [] }
].map(t => ({
  ...t,
  variants: generateThemeContent(t.id, t.subtitle)
}));
