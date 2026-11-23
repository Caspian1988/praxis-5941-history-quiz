const QUESTIONS = [
  {
    "id": 1,
    "domain": "U.S. History to 1877",
    "question": "Which compromise at the Constitutional Convention of 1787 created a bicameral legislature with proportional representation in the House and equal representation in the Senate?",
    "options": [
      "Three-Fifths Compromise",
      "Connecticut (Great) Compromise",
      "Missouri Compromise",
      "Compromise of 1850"
    ],
    "answerIndex": 1,
    "explanation": "Proposed by Roger Sherman, the Connecticut Compromise balanced the Virginia Plan (population-based) and New Jersey Plan (equal state representation)."
  },
  {
    "id": 2,
    "domain": "World History to 1450",
    "question": "Which trade network facilitated the spread of both silk and Buddhism from China across Central Asia to the Mediterranean?",
    "options": [
      "Trans-Saharan Trade Route",
      "Hanseatic League",
      "The Silk Road",
      "Triangular Trade"
    ],
    "answerIndex": 2,
    "explanation": "The Silk Road was a network of trade routes that connected the East and West, facilitating the exchange of goods, ideas, and religions such as Buddhism."
  },
  {
    "id": 3,
    "domain": "U.S. History to 1877",
    "question": "What was the primary purpose of the Monroe Doctrine, issued in 1823?",
    "options": [
      "To establish a national bank",
      "To warn European powers against further colonization in the Americas",
      "To promote westward expansion",
      "To end the War of 1812"
    ],
    "answerIndex": 1,
    "explanation": "The Monroe Doctrine declared that any further efforts by European nations to colonize land or interfere with states in the Americas would be viewed as acts of aggression, requiring U.S. intervention."
  },
  {
    "id": 4,
    "domain": "World History to 1450",
    "question": "Which empire was known for its extensive road system, which facilitated trade and communication across its vast territory in the Americas?",
    "options": [
      "Mongol Empire",
      "Inca Empire",
      "Ottoman Empire",
      "Roman Empire"
    ],
    "answerIndex": 1,
    "explanation": "The Inca Empire built an extensive network of roads and bridges across the Andes Mountains, which allowed for efficient communication, trade, and military movement."
  },
  {
    "id": 5,
    "domain": "U.S. History to 1877",
    "question": "Which event marked the beginning of the American Civil War in 1861?",
    "options": [
      "The signing of the Emancipation Proclamation",
      "The attack on Fort Sumter",
      "The Battle of Gettysburg",
      "The passage of the Kansas-Nebraska Act"
    ],
    "answerIndex": 1,
    "explanation": "The attack on Fort Sumter in South Carolina by Confederate forces marked the start of the American Civil War."
  },
  {
    "id": 6,
    "domain": "World History to 1450",
    "question": "Which civilization is credited with the development of cuneiform writing, one of the earliest known writing systems?",
    "options": [
      "Ancient Egypt",
      "Sumerians",
      "Indus Valley Civilization",
      "Maya Civilization"
    ],
    "answerIndex": 1,
    "explanation": "The Sumerians of Mesopotamia developed cuneiform writing around 3200 BCE, using wedge-shaped marks on clay tablets."
  },
  {
    "id": 7,
    "domain": "U.S. History to 1877",
    "question": "Which amendment to the U.S. Constitution abolished slavery in the United States?",
    "options": [
      "13th Amendment",
      "14th Amendment",
      "15th Amendment",
      "19th Amendment"
    ],
    "answerIndex": 0,
    "explanation": "The 13th Amendment, ratified in 1865, abolished slavery and involuntary servitude, except as punishment for a crime."
  },
  {
    "id": 8,
    "domain": "World History to 1450",
    "question": "Which empire was known for its use of gunpowder weapons and the construction of the Forbidden City in Beijing?",
    "options": [
      "Ming Dynasty",
      "Ottoman Empire",
      "Mughal Empire",
      "Song Dynasty"
    ],
    "answerIndex": 0,
    "explanation": "The Ming Dynasty (1368–1644) in China is renowned for its use of gunpowder weapons and the construction of the Forbidden City, which served as the imperial palace."
  },
  {
    "id": 9,
    "domain": "U.S. History to 1877",
    "question": "Which event led to the passage of the Kansas-Nebraska Act in 1854, allowing settlers in those territories to determine whether to allow slavery?",
    "options": [
      "The Missouri Compromise",
      "The Dred Scott Decision",
      "The Compromise of 1850",
      "The repeal of the Missouri Compromise"
    ],
    "answerIndex": 3,
    "explanation": "The Kansas-Nebraska Act effectively repealed the Missouri Compromise by allowing settlers in Kansas and Nebraska to decide on the issue of slavery through popular sovereignty."
  },
  {
    "id": 10,
    "domain": "World History to 1450",
    "question": "Which ancient civilization is known for its pyramids, hieroglyphic writing system, and contributions to mathematics and medicine?",
    "options": [
      "Ancient Greece",
      "Ancient Egypt",
      "Mesopotamia",
      "Indus Valley Civilization"
    ],
    "answerIndex": 1,
    "explanation": "Ancient Egypt is renowned for its monumental architecture, including pyramids, its hieroglyphic writing system, and significant advancements in mathematics and medicine."
  },
  {
    "id": 11,
    "domain": "U.S. History to 1877",
    "question": "Which Supreme Court case in 1857 ruled that African Americans, whether enslaved or free, could not be American citizens and had no standing to sue in federal court?",
    "options": [
      "Plessy v. Ferguson",
      "Dred Scott v. Sandford",
      "Brown v. Board of Education",
      "Marbury v. Madison"
    ],
    "answerIndex": 1,
    "explanation": "In Dred Scott v. Sandford (1857), the Supreme Court ruled that African Americans were not citizens and therefore could not sue in federal court, further inflaming sectional tensions over slavery."
  },
  {
    "id": 12,
    "domain": "World History to 1450",
    "question": "Which empire, known for its military prowess and administrative efficiency, was founded by Genghis Khan in the early 13th century?",
    "options": [
      "Mongol Empire",
      "Ottoman Empire",
      "Roman Empire",
      "Persian Empire"
    ],
    "answerIndex": 0,
    "explanation": "The Mongol Empire, founded by Genghis Khan in the early 13th century, became the largest contiguous land empire in history, known for its military strategies and effective governance."
  },
  {
    "id": 13,
    "domain": "U.S. History to 1877",
    "question": "Which event in 1863 allowed African American men to enlist in the Union Army during the Civil War?",
    "options": [
      "The Emancipation Proclamation",
      "The Gettysburg Address",
      "The Homestead Act",
      "The Reconstruction Act"
    ],
    "answerIndex": 0,
    "explanation": "The Emancipation Proclamation, issued by President Abraham Lincoln on January 1, 1863, declared that all enslaved people in Confederate-held territory were free and allowed African American men to join the Union Army."
  },
  {
    "id": 14,
    "domain": "World History to 1450",
    "question": "Which ancient civilization is credited with the development of the first known legal code, known as the Code of Hammurabi?",
    "options": [
      "Ancient Egypt",
      "Babylonian Empire",
      "Sumerians",
      "Persian Empire"
    ],
    "answerIndex": 1,
    "explanation": "The Code of Hammurabi, developed by King Hammurabi of Babylon around 1754 BCE, is one of the earliest and most complete written legal codes in history."
  },    
  {
    "id": 15,
    "domain": "U.S. History to 1877",
    "question": "Which event in 1865 marked the end of the American Civil War and led to the surrender of Confederate forces?",
    "options": [
      "The Battle of Gettysburg",
      "The signing of the Emancipation Proclamation",
      "The surrender at Appomattox Court House",
      "The passage of the 13th Amendment"
    ],
    "answerIndex": 2,
    "explanation": "The surrender of Confederate General Robert E. Lee to Union General Ulysses S. Grant at Appomattox Court House on April 9, 1865, effectively ended the American Civil War."
  },
  {
    "id": 16,
    "domain": "World History to 1450",
    "question": "Which ancient civilization is known for its advanced urban planning, including grid-like city layouts and sophisticated drainage systems?",
    "options": [
      "Ancient Egypt",
      "Indus Valley Civilization",
      "Mesopotamia",
      "Maya Civilization"
    ],
    "answerIndex": 1,
    "explanation": "The Indus Valley Civilization, which flourished around 2500 BCE in what is now Pakistan and northwest India, is renowned for its well-planned cities like Mohenjo-Daro and Harappa, featuring grid layouts and advanced drainage systems."
  },
  {
    "id": 17,
    "domain": "U.S. History to 1877",
    "question": "Which legislation, passed in 1862, provided land grants to settlers in the western United States to encourage westward expansion?",
    "options": [
      "Homestead Act",
      "Kansas-Nebraska Act",
      "Pacific Railway Act",
      "Morrill Land-Grant Acts"
    ],
    "answerIndex": 0,
    "explanation": "The Homestead Act of 1862 allowed settlers to claim 160 acres of public land in the western United States, provided they improved the land by building a dwelling and cultivating crops."
  },    
  {
    "id": 18,
    "domain": "World History to 1450",
    "question": "Which ancient civilization is known for its contributions to astronomy, including the development of a calendar based on lunar and solar cycles?",
    "options": [
      "Ancient Egypt",
      "Maya Civilization",
      "Mesopotamia",
      "Indus Valley Civilization"
    ],
    "answerIndex": 1,
    "explanation": "The Maya Civilization, which thrived in Mesoamerica from around 2000 BCE to the 16th century CE, made significant advancements in astronomy and developed a complex calendar system that combined lunar and solar cycles."
  },
  {
    "id": 19,
    "domain": "U.S. History to 1877",
    "question": "Which Supreme Court case in 1896 upheld the constitutionality of racial segregation under the 'separate but equal' doctrine?",
    "options": [
      "Plessy v. Ferguson",
      "Brown v. Board of Education",
      "Dred Scott v. Sandford",
      "Marbury v. Madison"
    ],
    "answerIndex": 0,
    "explanation": "In Plessy v. Ferguson (1896), the Supreme Court ruled that racial segregation was constitutional as long as the separate facilities were equal in quality, establishing the 'separate but equal' doctrine."
  },
  {
    "id": 20,
    "domain": "World History to 1450",
    "question": "Which ancient civilization is known for its development of a complex system of writing called hieroglyphics, used for religious and administrative purposes?",
    "options": [
      "Ancient Egypt",
      "Sumerians",
      "Indus Valley Civilization",
      "Maya Civilization"
    ],
    "answerIndex": 0,
    "explanation": "Ancient Egypt developed hieroglyphics, a writing system that combined logographic and alphabetic elements, primarily used for religious texts, monumental inscriptions, and administrative records."
  },
  {
    "id": 21,
    "domain": "U.S. History to 1877",
    "question": "Which event in 1861 marked the secession of Southern states from the Union, leading to the outbreak of the Civil War?",
    "options": [
      "The signing of the Emancipation Proclamation",
      "The attack on Fort Sumter",
      "The passage of the Kansas-Nebraska Act",
      "The election of Abraham Lincoln"
    ],
    "answerIndex": 3,
    "explanation": "The election of Abraham Lincoln in 1860, who opposed the expansion of slavery, prompted several Southern states to secede from the Union, ultimately leading to the outbreak of the Civil War."
  },
  {
    "id": 22,
    "domain": "World History to 1450",
    "question": "Which ancient civilization is known for its development of a legal code that emphasized the principle of 'an eye for an eye'?",
    "options": [
      "Ancient Egypt",
      "Babylonian Empire",
      "Sumerians",
      "Persian Empire"
    ],
    "answerIndex": 1,
    "explanation": "The Babylonian Empire, under King Hammurabi, developed the Code of Hammurabi, which is one of the earliest known legal codes and is famous for its principle of retributive justice, often summarized as 'an eye for an eye.'"
  },
  {
    "id": 23,
    "domain": "U.S. History to 1877",
    "question": "Which event in 1862 allowed African American men to enlist in the Union Army during the Civil War?",
    "options": [
      "The Emancipation Proclamation",
      "The Gettysburg Address",
      "The Homestead Act",
      "The Reconstruction Act"
    ],
    "answerIndex": 0,
    "explanation": "The Emancipation Proclamation, issued by President Abraham Lincoln on January 1, 1863, declared that all enslaved people in Confederate-held territory were free and allowed African American men to join the Union Army."
  },
  {
    "id": 24,
    "domain": "World History to 1450",
    "question": "Which ancient civilization is known for its contributions to mathematics, including the development of a base-60 number system?",
    "options": [
      "Ancient Egypt",
      "Sumerians",
      "Indus Valley Civilization",
      "Maya Civilization"
    ],
    "answerIndex": 1,
    "explanation": "The Sumerians of Mesopotamia developed a base-60 (sexagesimal) number system, which influenced later civilizations and is still used today in measuring time and angles."
  },
  {
    "id": 25,
    "domain": "U.S. History to 1877",
    "question": "Which event in 1865 marked the end of the American Civil War and led to the surrender of Confederate forces?",
    "options": [
      "The Battle of Gettysburg",
      "The signing of the Emancipation Proclamation",
      "The surrender at Appomattox Court House",
      "The passage of the 13th Amendment"
    ],
    "answerIndex": 2,
    "explanation": "The surrender of Confederate General Robert E. Lee to Union General Ulysses S. Grant at Appomattox Court House on April 9, 1865, effectively ended the American Civil War."
  },
  {
    "id": 26,
    "domain": "U.S. History 1877–Present",
    "question": "Consider the following excerpt from a 1947 speech by President Harry S. Truman to Congress:\n\"I believe that it must be the policy of the United States to support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures.\"\nThis statement articulated the core principle of which Cold War strategy?",
    "options": [
      "Brinkmanship",
      "Containment (specifically the Truman Doctrine)",
      "Détente",
      "Isolationism"
    ],
    "answerIndex": 1,
    "explanation": "Delivered in March 1947 when requesting aid for Greece and Turkey, the Truman Doctrine became a cornerstone of U.S. containment policy aimed at checking Soviet expansion."
  },
  {
    "id": 27,
    "domain": "World History 1450–Present",
    "question": "During the Meiji Restoration in late-nineteenth-century Japan, the imperial government modernized the country primarily by:",
    "options": [
      "Closing all Japanese ports to foreign diplomats and returning power to feudal daimyo lords.",
      "Abolishing the samurai class’s feudal privileges, building state-sponsored industries and railways, and adopting Western-style constitutional and military institutions.",
      "Forming a military alliance with Qing China to expel European merchants from East Asia.",
      "Replacing Shintoism with Christianity as the official state religion."
    ],
    "answerIndex": 1,
    "explanation": "Meiji leaders dismantled feudal domains and samurai stipends, centralized authority under the emperor, invested heavily in infrastructure and industry, and selectively borrowed Western legal, educational, and military models."
  },
  {
    "id": 28,
    "domain": "U.S. History 1877–Present",
    "question": "What was the primary significance of the Gulf of Tonkin Resolution passed by the U.S. Congress in 1964?",
    "options": [
      "It formally declared war on North Vietnam and authorized a ground invasion of China.",
      "It granted President Lyndon B. Johnson broad authority to escalate U.S. military involvement in Vietnam without a formal declaration of war.",
      "It established the War Powers Act requiring the president to withdraw troops within 60 days.",
      "It ended U.S. bombing campaigns in Southeast Asia and initiated the Paris Peace Accords."
    ],
    "answerIndex": 1,
    "explanation": "Passed after reported naval incidents in the Gulf of Tonkin, the resolution gave President Johnson sweeping authority to use armed force in Southeast Asia without a formal congressional war declaration."
  },
  {
    "id": 29,
    "domain": "World History 1450–Present",
    "question": "At the Berlin Conference of 1884–1885, European powers met primarily to:",
    "options": [
      "Negotiate peace terms following the Franco-Prussian War.",
      "Establish rules for claiming and partitioning African territory among European empires without consulting African leaders.",
      "Form the Triple Entente alliance prior to the First World War.",
      "Dismantle the transatlantic slave trade in the Indian Ocean."
    ],
    "answerIndex": 1,
    "explanation": "Organized amid intense European competition for colonies, the Berlin Conference set ground rules—such as 'effective occupation'—for carving up Africa with complete disregard for indigenous polities and borders."
  },
  {
    "id": 30,
    "domain": "U.S. History 1877–Present",
    "question": "Which landmark U.S. Supreme Court ruling established that criminal suspects must be informed of their Fifth Amendment right against self-incrimination and Sixth Amendment right to legal counsel prior to police interrogation?",
    "options": [
      "Gideon v. Wainwright (1963)",
      "Mapp v. Ohio (1961)",
      "Miranda v. Arizona (1966)",
      "Tinker v. Des Moines (1969)"
    ],
    "answerIndex": 2,
    "explanation": "Miranda v. Arizona (1966) required law enforcement to give clear warnings ('Miranda rights') before custodial interrogation so any waiver of Fifth and Sixth Amendment rights is knowing and voluntary."
  },
  {
    "id": 31,
    "domain": "U.S. History 1877–Present",
    "question": "Which of the following best describes the primary purpose of the Seventeenth Amendment, ratified during the Progressive Era in 1913?",
    "options": [
      "It established a graduated federal income tax.",
      "It mandated the direct popular election of U.S. Senators rather than selection by state legislatures.",
      "It prohibited the manufacture, sale, and transportation of intoxicating liquors.",
      "It granted women the right to vote in all federal and state elections."
    ],
    "answerIndex": 1,
    "explanation": "Progressives pushed for the Seventeenth Amendment to reduce corruption and deadlocks in state legislatures by letting voters elect U.S. Senators directly."
  },
  {
    "id": 32,
    "domain": "World History to 1450",
    "question": "During the Abbasid Caliphate (750–1258 C.E.), the \"House of Wisdom\" (Bayt al-Hikmah) in Baghdad contributed most significantly to world history by:",
    "options": [
      "Serving as a military academy that trained Janissary infantry for the Ottoman Empire.",
      "Preserving, translating, and expanding upon classical Greek, Persian, and Indian works in mathematics, medicine, and astronomy.",
      "Enforcing strict isolation from Byzantine and Chinese trade networks.",
      "Establishing the first democratic parliament in the Islamic world."
    ],
    "answerIndex": 1,
    "explanation": "Baghdad's House of Wisdom became a major center of translation and original scholarship—helping advance algebra, optics, medicine, and astronomy while preserving texts that later reached medieval Europe."
  },
  {
    "id": 33,
    "domain": "U.S. History to 1877",
    "question": "In McCulloch v. Maryland (1819), Chief Justice John Marshall ruled in favor of the federal government by establishing which two constitutional principles?",
    "options": [
      "Judicial review and executive privilege",
      "Implied powers under the Necessary and Proper Clause and federal supremacy over state laws",
      "Separate but equal facilities and state police powers",
      "Free speech protections during wartime and clear-and-present danger"
    ],
    "answerIndex": 1,
    "explanation": "Marshall held that Congress had implied authority to charter the Second Bank of the United States under the Necessary and Proper Clause and that Maryland could not tax a federal institution because 'the power to tax involves the power to destroy' under the Supremacy Clause."
  },
  {
    "id": 34,
    "domain": "World History to 1450",
    "question": "Which of the following was a major consequence of the Pax Mongolica across Eurasia during the thirteenth and fourteenth centuries?",
    "options": [
      "The permanent destruction of all overland trade routes between China and Europe.",
      "Increased safety and efficiency of long-distance Silk Road trade, diplomatic exchanges, and technological diffusion across Eurasia.",
      "The conversion of Western Europe to Tibetan Buddhism.",
      "The immediate collapse of the Ming Dynasty in China."
    ],
    "answerIndex": 1,
    "explanation": "Although Mongol conquests were destructive, imperial rule across vast stretches of Eurasia reduced local tolls, improved courier and travel security, and accelerated cross-cultural exchange of goods, ideas, and technologies."
  },
  {
    "id": 35,
    "domain": "U.S. History 1877–Present",
    "question": "How did the Wagner Act (National Labor Relations Act of 1935) transform labor relations during the New Deal?",
    "options": [
      "It outlawed all labor strikes in essential transportation and steel industries.",
      "It guaranteed private-sector workers the right to organize into unions, engage in collective bargaining, and go on strike.",
      "It established the Civilian Conservation Corps to employ young men in national parks.",
      "It created a federal minimum wage exclusively for agricultural workers."
    ],
    "answerIndex": 1,
    "explanation": "The Wagner Act protected workers' rights to form or join unions and bargain collectively, created the National Labor Relations Board (NLRB), and prohibited unfair employer labor practices."
  },
  {
    "id": 36,
    "domain": "World History 1450–Present",
    "question": "Which factor most directly inspired the early-nineteenth-century Latin American independence movements led by Simón Bolívar and José de San Martín?",
    "options": [
      "The industrial modernization of Qing China and Meiji Japan.",
      "Enlightenment ideals of popular sovereignty, the examples of the American and French Revolutions, and Napoleon’s invasion of Spain.",
      "The abolition of the encomienda system by the Council of Trent.",
      "Military intervention by the United States under the Truman Doctrine."
    ],
    "answerIndex": 1,
    "explanation": "Creole elites drew on Enlightenment ideas and revolutionary precedents while Napoleon's 1808 invasion of Spain and toppling of the Spanish king created a power crisis across Spanish America."
  },
  {
    "id": 37,
    "domain": "U.S. History 1877–Present",
    "question": "What was the central goal of the 1965 Voting Rights Act signed by President Lyndon B. Johnson?",
    "options": [
      "To lower the national voting age from 21 to 18.",
      "To eliminate discriminatory barriers such as literacy tests and authorize federal oversight of voter registration in states with a history of disenfranchisement.",
      "To abolish the Electoral College in presidential elections.",
      "To grant voting rights to residents of Washington, D.C., in presidential elections."
    ],
    "answerIndex": 1,
    "explanation": "Building on the Selma-to-Montgomery campaign, the Voting Rights Act of 1965 outlawed literacy tests and other discriminatory voting devices and provided federal examiners and preclearance mechanisms."
  },
  {
    "id": 38,
    "domain": "World History 1450–Present",
    "question": "Which event directly triggered the start of the First World War in the summer of 1914?",
    "options": [
      "The German invasion of neutral Belgium under the Schlieffen Plan.",
      "The assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo by a Serbian nationalist.",
      "The sinking of the British passenger liner RMS Lusitania by a German U-boat.",
      "The Bolshevik Revolution in Petrograd."
    ],
    "answerIndex": 1,
    "explanation": "The June 28, 1914 assassination of Archduke Franz Ferdinand by Gavrilo Princip set off a chain reaction of ultimatums, mobilizations, and alliance commitments that escalated into World War I."
  },
  {
    "id": 39,
    "domain": "U.S. History 1877–Present",
    "question": "During the First Red Scare (1919–1920) following World War I, the Palmer Raids primarily targeted:",
    "options": [
      "Southern segregationists opposing the Nineteenth Amendment.",
      "Suspected anarchists, socialists, and radical labor activists—many of them recent immigrants—leading to mass arrests and deportations.",
      "Corporate monopolies violating the Sherman Antitrust Act.",
      "Isolationist senators who opposed the League of Nations."
    ],
    "answerIndex": 1,
    "explanation": "Directed by Attorney General A. Mitchell Palmer amid postwar labor strikes and fear of Bolshevism, the raids involved warrantless arrests, civil liberties abuses, and deportations of foreign-born radicals."
  },
  {
    "id": 40,
    "domain": "World History 1450–Present",
    "question": "Following the Second World War, the 1947 Partition of British India resulted in:",
    "options": [
      "A single unified secular state governed jointly by the Indian National Congress and the Muslim League.",
      "The creation of two independent nations—Hindu-majority India and Muslim-majority Pakistan—accompanied by mass migrations and severe communal violence.",
      "The transfer of British colonial administration in South Asia to the United Nations Trusteeship Council.",
      "The annexation of Kashmir by the Soviet Union."
    ],
    "answerIndex": 1,
    "explanation": "Partition divided British India into independent India and Pakistan (East and West Pakistan), sparking one of history's largest mass displacements and widespread sectarian violence."
  },
  {
    "id": 41,
    "domain": "World History 1450–Present",
    "question": "Which of the following best explains why the invention of the printing press with movable metal type by Johannes Gutenberg around 1450 was a major turning point in European history?",
    "options": [
      "It ended all censorship by European monarchs and the Catholic Church.",
      "It dramatically lowered the cost of books, increased literacy rates, and enabled the rapid spread of Renaissance humanist ideas and Protestant Reformation writings.",
      "It replaced Latin immediately with English as the universal diplomatic language of Europe.",
      "It was invented to print paper currency for the Byzantine Empire."
    ],
    "answerIndex": 1,
    "explanation": "Movable metal type made book production vastly faster and cheaper, helping ideas, scientific works, and Martin Luther's Reformation pamphlets circulate widely across Europe despite censorship."
  },
  {
    "id": 42,
    "domain": "U.S. History to 1877",
    "question": "What was the primary objective of the Monroe Doctrine issued by President James Monroe in 1823?",
    "options": [
      "To annex Cuba and Puerto Rico into the United States as slave states.",
      "To warn European powers against further colonization or political intervention in the Western Hemisphere, while pledging U.S. non-interference in European affairs.",
      "To establish a free-trade customs union across North and South America.",
      "To authorize U.S. military intervention in European colonial wars in Africa."
    ],
    "answerIndex": 1,
    "explanation": "Drafted largely with Secretary of State John Quincy Adams, the Monroe Doctrine declared the Americas closed to new European colonization or monarchical intervention while keeping the U.S. out of European wars."
  },
  {
    "id": 43,
    "domain": "World History 1450–Present",
    "question": "During the sixteenth and seventeenth centuries, the \"Columbian Exchange\" transformed global societies primarily by:",
    "options": [
      "Establishing a permanent military alliance between the Spanish and Ottoman empires.",
      "Transferring crops (such as potatoes, maize, and tomatoes), domesticated animals, people, and epidemic diseases between the Americas and Afro-Eurasia.",
      "Ending all overland trade along the Eurasian Silk Roads.",
      "Converting all indigenous populations of the Americas to Eastern Orthodox Christianity."
    ],
    "answerIndex": 1,
    "explanation": "The Columbian Exchange reshaped global demographics, diets, and ecosystems—introducing American crops like maize and potatoes that boosted populations across Afro-Eurasia while devastating Indigenous American populations with Eurasian diseases like smallpox."
  },
  {
    "id": 44,
    "domain": "U.S. History to 1877",
    "question": "Which legislation passed during the Civil War in 1862 encouraged rapid westward settlement by granting 160 acres of public land to settlers who lived on and farmed the land for five years?",
    "options": [
      "The Dawes Severalty Act",
      "The Homestead Act",
      "The Morrill Land-Grant Act",
      "The Kansas-Nebraska Act"
    ],
    "answerIndex": 1,
    "explanation": "The Homestead Act of 1862 offered 160 acres of federal land for a modest filing fee and five years of cultivation, accelerating white settlement on the Great Plains while displacing Indigenous nations."
  },
  {
    "id": 45,
    "domain": "World History 1450–Present",
    "question": "Which of the following was a central cause of the French Revolution in 1789?",
    "options": [
      "Rapid industrialization that created a powerful urban factory-owning nobility.",
      "Severe royal debt, food shortages, Enlightenment critiques of absolutism, and deep tax inequality among the Three Estates.",
      "A foreign invasion of Paris by the Russian Empire.",
      "The abolition of the French monarchy by Napoleon Bonaparte."
    ],
    "answerIndex": 1,
    "explanation": "France faced crushing fiscal debt, bread price spikes, and a rigid Three Estates system where the Third Estate (commoners) bore heavy taxes with limited political voice amid Enlightenment calls for liberty and equality."
  },
  {
    "id": 46,
    "domain": "U.S. History 1877–Present",
    "question": "In Schenck v. United States (1919), the U.S. Supreme Court upheld the Espionage Act of 1917 by ruling that First Amendment free speech protections may be limited when speech:",
    "options": [
      "Criticizes any sitting member of Congress during an election year.",
      "Creates a \"clear and present danger\" of bringing about substantive evils that Congress has a right to prevent (such as obstructing wartime recruitment).",
      "Is published in a foreign language newspaper.",
      "Advocates for women's suffrage or labor union membership."
    ],
    "answerIndex": 1,
    "explanation": "Writing for the Court, Justice Oliver Wendell Holmes Jr. articulated the 'clear and present danger' test, holding that words ordinarily protected in peacetime could be restricted during wartime if they posed an immediate danger of substantive harm."
  },
  {
    "id": 47,
    "domain": "World History 1450–Present",
    "question": "What was the primary goal of Soviet leader Mikhail Gorbachev’s policies of glasnost (openness) and perestroika (restructuring) in the late 1980s?",
    "options": [
      "To expand Soviet military occupation into Western Europe.",
      "To revitalize the stagnating Soviet economy and allow greater political transparency and public discussion, which unintentionally accelerated the dissolution of the USSR.",
      "To restore Stalinist central planning and collectivized agriculture.",
      "To form a military alliance with Mao Zedong’s China against NATO."
    ],
    "answerIndex": 1,
    "explanation": "Gorbachev introduced perestroika to reform economic management and glasnost to encourage openness and criticism, unleashing long-suppressed political and nationalist pressures that contributed to the Soviet Union's collapse in 1991."
  },
  {
    "id": 48,
    "domain": "U.S. History 1877–Present",
    "question": "Which Great Society program enacted in 1965 under President Lyndon B. Johnson established federally funded health insurance for Americans aged 65 and older?",
    "options": [
      "Social Security",
      "Medicare",
      "The Civilian Conservation Corps",
      "The GI Bill (Servicemen's Readjustment Act)"
    ],
    "answerIndex": 1,
    "explanation": "Signed alongside Medicaid in 1965, Medicare created federal health insurance for older adults (65+), significantly reducing elderly poverty and medical hardship."
  },
  {
    "id": 49,
    "domain": "World History 1450–Present",
    "question": "Which factor most directly contributed to the rapid decolonization of Asia and Africa in the two decades following World War II (1945–1965)?",
    "options": [
      "European colonial powers experienced unprecedented economic booms that made overseas empires unnecessary.",
      "World War II weakened European imperial powers militarily and economically while strengthening anti-colonial nationalist movements and self-determination ideals.",
      "The United Nations forcibly annexed all European colonies into international trust territories.",
      "Newly independent nations immediately formed a single unified world government."
    ],
    "answerIndex": 1,
    "explanation": "Exhausted by WWII and challenged by organized nationalist movements as well as Cold War superpower pressures and anti-colonial rhetoric, European empires rapidly contracted across Asia and Africa."
  },
  {
    "id": 50,
    "domain": "U.S. History 1877–Present",
    "question": "What was the major constitutional outcome of the Watergate scandal during the presidency of Richard Nixon in 1974?",
    "options": [
      "Congress abolished the presidential veto power over federal budgets.",
      "The Supreme Court ruled in United States v. Nixon that executive privilege is not absolute, leading to Nixon’s resignation and reinforcing the rule of law over the presidency.",
      "The Twenty-Second Amendment was ratified to limit presidents to two terms.",
      "Vice President Spiro Agnew was elected president in a special national election"
    ],
    "answerIndex": 1,
    "explanation": "In United States v. Nixon (1974), the Court rejected a blanket claim of executive privilege over White House tapes needed for criminal proceedings, paving the way for Nixon's resignation in August 1974."
  },
  {
    "id": 51,
    "domain": "U.S. History to 1877",
    "question": "What was the primary purpose of the Proclamation of 1763 issued by King George III following the French and Indian War?",
    "options": [
      "To grant American colonists representation in the British Parliament.",
      "To prohibit colonial settlement west of the Appalachian Mountains in order to prevent costly conflicts with Native American nations.",
      "To abolish all mercantilist Navigation Acts across the thirteen colonies.",
      "To establish an independent colonial legislature in Philadelphia."
    ],
    "answerIndex": 1,
    "explanation": "Following Pontiac's Rebellion, Britain drew the Proclamation Line along the Appalachians to stabilize frontier relations with Native nations and curb military expenses—angering land-hungry colonists."
  },
  {
    "id": 52,
    "domain": "World History 1450–Present",
    "question": "Which of the following was a central theological argument made by Martin Luther in his Ninety-Five Theses (1517), sparking the Protestant Reformation?",
    "options": [
      "Salvation is achieved through faith alone (sola fide) and scripture, rather than through the purchase of papal indulgences.",
      "The Pope holds supreme temporal authority over all European monarchs.",
      "All Christian churches must abolish vernacular translations of the Bible and return exclusively to Latin.",
      "Monastic orders should control all banking and taxation across the Holy Roman Empire."
    ],
    "answerIndex": 0,
    "explanation": "Luther challenged the Catholic Church's sale of indulgences and maintained that salvation comes by faith alone (sola fide) grounded in scripture (sola scriptura)."
  },
  {
    "id": 53,
    "domain": "U.S. History to 1877",
    "question": "During the presidency of Andrew Jackson (1829–1837), the \"Nullification Crisis\" centered on South Carolina’s assertion that:",
    "options": [
      "Western territories had the right to abolish slavery without congressional approval.",
      "A state had the constitutional right to declare a federal tariff law null and void within its borders.",
      "The Supreme Court lacked jurisdiction over interstate commerce disputes.",
      "State banks could issue currency backed exclusively by foreign silver coins."
    ],
    "answerIndex": 1,
    "explanation": "Led by John C. Calhoun, South Carolina claimed states could nullify the federal Tariffs of 1828 and 1832, prompting Jackson's Force Bill and Henry Clay's Compromise Tariff of 1833."
  },
  {
    "id": 54,
    "domain": "World History 1450–Present",
    "question": "How did the Safavid Empire under Shah Abbas the Great (r. 1588–1629) strengthen its political and economic position in Persia?",
    "options": [
      "By abandoning Twelver Shi'a Islam in favor of Roman Catholicism to secure European alliances.",
      "By reforming the military with slave-soldier (ghulam) regiments loyal to the shah, centralizing administration, and promoting silk trade from the new capital at Isfahan.",
      "By dismantling all overland caravan routes connecting Persia to India and Central Asia.",
      "By ceding Mesopotamia and the Caucasus permanently to the Mughal Empire."
    ],
    "answerIndex": 1,
    "explanation": "Shah Abbas reduced reliance on Qizilbash tribal chiefs by building loyal ghulam forces, centralized state finances, and made Isfahan a hub of royal silk trade and architecture."
  },
  {
    "id": 55,
    "domain": "U.S. History 1877–Present",
    "question": "Which late-nineteenth-century federal law was enacted to break up monopolistic business combinations (\"trusts\") that restrained interstate trade?",
    "options": [
      "The Interstate Commerce Act of 1887",
      "The Sherman Antitrust Act of 1890",
      "The Pendleton Civil Service Reform Act of 1883",
      "The Dawes Act of 1887"
    ],
    "answerIndex": 1,
    "explanation": "The Sherman Antitrust Act of 1890 outlawed contracts, combinations, or conspiracies in restraint of interstate or foreign commerce, laying the statutory foundation for federal antitrust enforcement."
  },
  {
    "id": 56,
    "domain": "World History 1450–Present",
    "question": "Enlightenment philosopher Montesquieu’s The Spirit of the Laws (1748) influenced the framers of the U.S. Constitution most directly through its advocacy of:",
    "options": [
      "Absolute monarchy guided by divine right.",
      "The separation of governmental powers into executive, legislative, and judicial branches with checks and balances.",
      "The abolition of private property in favor of communal ownership.",
      "Direct democracy without elected representatives."
    ],
    "answerIndex": 1,
    "explanation": "Montesquieu argued that political liberty is preserved when legislative, executive, and judicial powers are divided among distinct branches that check one another."
  },
  {
    "id": 57,
    "domain": "U.S. History 1877–Present",
    "question": "During World War II, Executive Order 9066 (1942) resulted in which major action by the U.S. federal government?",
    "options": [
      "The desegregation of all branches of the United States Armed Forces.",
      "The forced relocation and internment of over 110,000 Japanese Americans—most of them U.S. citizens—from the West Coast into inland camps.",
      "The establishment of the Manhattan Project to develop atomic weapons.",
      "The recruitment of women into defense manufacturing plants under the \"Rosie the Riveter\" campaign."
    ],
    "answerIndex": 1,
    "explanation": "Signed by President Franklin D. Roosevelt in February 1942, Executive Order 9066 authorized military exclusion zones leading to the mass incarceration of Japanese Americans without due process."
  },
  {
    "id": 58,
    "domain": "World History 1450–Present",
    "question": "What was the primary objective of the Marshall-era / Cold War \"Non-Aligned Movement,\" formally organized at the 1955 Bandung Conference and the 1961 Belgrade Conference?",
    "options": [
      "To create a unified military bloc in Asia and Africa allied directly with the Warsaw Pact.",
      "To allow newly independent Asian and African nations to maintain sovereignty and avoid formal military alignment with either the United States or the Soviet Union during the Cold War.",
      "To restore European colonial mandates under United Nations supervision.",
      "To enforce a global embargo on oil exports to industrialized nations."
    ],
    "answerIndex": 1,
    "explanation": "Led by figures such as Jawaharlal Nehru, Josip Broz Tito, Gamal Abdel Nasser, and Sukarno, the Non-Aligned Movement sought an independent third path outside U.S. and Soviet Cold War blocs."
  },
  {
    "id": 59,
    "domain": "U.S. History 1877–Present",
    "question": "Which landmark 1963 U.S. Supreme Court decision ruled that state courts are required under the Sixth and Fourteenth Amendments to provide legal counsel to criminal defendants who cannot afford an attorney?",
    "options": [
      "Mapp v. Ohio",
      "Gideon v. Wainwright",
      "Engel v. Vitale",
      "Roe v. Wade"
    ],
    "answerIndex": 1,
    "explanation": "In Gideon v. Wainwright (1963), the Court unanimously held that the Sixth Amendment right to counsel is fundamental and applies to state felony trials via the Fourteenth Amendment."
  },
  {
    "id": 60,
    "domain": "World History 1450–Present",
    "question": "Which factor most directly contributed to the rapid collapse of European communist regimes across Eastern Europe in 1989?",
    "options": [
      "Direct military intervention by NATO forces in Poland, Hungary, and East Germany.",
      "Widespread grassroots pro-democracy movements (such as Poland’s Solidarity) combined with Mikhail Gorbachev’s refusal to use Soviet military force (abandoning the Brezhnev Doctrine) to prop up Eastern Bloc governments.",
      "Economic sanctions imposed by the People’s Republic of China against the Warsaw Pact.",
      "The immediate integration of all Eastern European states into the European Union in 1988."
    ],
    "answerIndex": 1,
    "explanation": "Once Moscow signaled it would not intervene militarily to save Warsaw Pact regimes, civic movements like Solidarity in Poland and mass demonstrations across East Germany and Czechoslovakia toppled communist governments in 1989."
  },
  {
    "id": 61,
    "domain": "U.S. History to 1877",
    "question": "Which diplomatic agreement in 1819 resulted in Spain ceding Florida to the United States and defining the boundary between the U.S. and New Spain?",
    "options": [
      "The Treaty of Ghent",
      "The Adams-Onís Treaty (Transcontinental Treaty)",
      "The Webster-Ashburton Treaty",
      "The Treaty of Guadalupe Hidalgo"
    ],
    "answerIndex": 1,
    "explanation": "Negotiated by Secretary of State John Quincy Adams and Spanish minister Luis de Onís in 1819, the treaty transferred Florida to the U.S. and established a boundary extending to the Pacific Ocean."
  },
  {
    "id": 62,
    "domain": "World History to 1450",
    "question": "Which of the following best describes a major achievement of Byzantine Emperor Justinian I during the sixth century C.E.?",
    "options": [
      "He permanently reunited the Western and Eastern Roman Empires under papal authority in Rome.",
      "He codified Roman legal traditions into the Corpus Juris Civilis (Justinian’s Code) and commissioned the construction of the Hagia Sophia in Constantinople.",
      "He converted the Byzantine Empire to Islam following diplomatic treaties with the Umayyad Caliphate.",
      "He abolished all imperial taxation on Byzantine merchants and landowners."
    ],
    "answerIndex": 1,
    "explanation": "Justinian I sponsored the Corpus Juris Civilis—which deeply influenced later European civil law—and rebuilt Constantinople's Hagia Sophia as a landmark of Byzantine architecture."
  },
  {
    "id": 63,
    "domain": "U.S. History to 1877",
    "question": "What was the primary consequence of the Treaty of Guadalupe Hidalgo, which ended the Mexican-American War in 1848?",
    "options": [
      "Mexico regained control of Texas while ceding Oregon Territory to the United States.",
      "Mexico ceded roughly half of its territory (including present-day California, Nevada, Utah, and most of Arizona and New Mexico) to the United States in exchange for $15 million, reigniting fierce sectional debates over the expansion of slavery.",
      "The United States annexed all of northern Mexico down to Mexico City.",
      "Great Britain mediated the creation of an independent Republic of California."
    ],
    "answerIndex": 1,
    "explanation": "The Mexican Cession vastly expanded U.S. territory to the Pacific and immediately provoked bitter conflict over whether slavery would be allowed in the newly acquired lands."
  },
  {
    "id": 64,
    "domain": "World History 1450–Present",
    "question": "During the nineteenth century, the Ottoman Empire enacted the Tanzimat (\"Reorganization\") reforms primarily in order to:",
    "options": [
      "Restore traditional feudal Janissary military privileges and reject all European technology.",
      "Modernize the Ottoman military, legal code, education system, and tax administration along Western lines while guaranteeing equal legal rights for non-Muslim subjects (millets) to preserve the empire’s territorial integrity.",
      "Dissolve the Ottoman Sultanate and establish a parliamentary republic led by Mustafa Kemal Atatürk.",
      "Form a military alliance with the Russian Empire to partition the Balkans."
    ],
    "answerIndex": 1,
    "explanation": "Launched in 1839, the Tanzimat reforms sought to centralize administration, modernize schools and laws, and promote Ottoman civic equality to counter European pressure and internal nationalist movements."
  },
  {
    "id": 65,
    "domain": "U.S. History 1877–Present",
    "question": "Which Cold War diplomatic milestone, signed by 35 nations including the United States and the Soviet Union in 1975, recognized post-World War II European borders while committing signatories to respect fundamental human rights?",
    "options": [
      "The Potsdam Agreement",
      "The Helsinki Final Act (Helsinki Accords)",
      "The Kellogg-Briand Pact",
      "The Atlantic Charter"
    ],
    "answerIndex": 1,
    "explanation": "Signed in 1975 during the era of détente, the Helsinki Accords affirmed existing European borders while its human-rights 'Basket Three' provisions empowered dissident groups across the Soviet bloc."
  },
  {
    "id": 66,
    "domain": "World History 1450–Present",
    "question": "How did the transatlantic triangular trade system between the sixteenth and nineteenth centuries affect West African societies?",
    "options": [
      "It eliminated all internal warfare among West African kingdoms.",
      "The massive forced removal of millions of young men and women distorted regional demographics, fueled militarized slave-raiding states (such as Dahomey and Asante), and disrupted local economies.",
      "It led to the rapid industrialization of West African coastal cities.",
      "It completely replaced indigenous West African religions with Protestantism."
    ],
    "answerIndex": 1,
    "explanation": "The transatlantic slave trade drained West and West-Central Africa of millions of people, skewed gender ratios, escalated firearm-driven warfare and raiding, and reshaped coastal political economies."
  },
  {
    "id": 67,
    "domain": "U.S. History 1877–Present",
    "question": "President Jimmy Carter’s major foreign policy achievement in 1978, the Camp David Accords, successfully negotiated a historic peace framework between which two nations?",
    "options": [
      "Iran and Iraq",
      "Egypt and Israel",
      "North Korea and South Korea",
      "India and Pakistan"
    ],
    "answerIndex": 1,
    "explanation": "Mediated by President Carter with Egyptian President Anwar Sadat and Israeli Prime Minister Menachem Begin, the Camp David Accords led to the 1979 Egypt-Israel Peace Treaty."
  },
  {
    "id": 68,
    "domain": "World History 1450–Present",
    "question": "What was the primary ideological and economic justification used by European powers during the \"New Imperialism\" of the late nineteenth century, famously summarized by Rudyard Kipling’s phrase \"The White Man’s Burden\"?",
    "options": [
      "That European nations owed financial reparations to African and Asian kingdoms for earlier mercantilist trade.",
      "That Western civilization had a supposed moral duty to \"civilize,\" Christianize, and govern non-European peoples while extracting raw materials and securing global markets.",
      "That newly colonized territories should immediately be granted full seats in European parliaments.",
      "That industrial powers should abolish all overseas naval bases to promote global pacifism."
    ],
    "answerIndex": 1,
    "explanation": "Imperial advocates combined industrial demand for raw materials and export markets with paternalistic Social Darwinist and 'civilizing mission' rhetoric."
  },
  {
    "id": 69,
    "domain": "U.S. History 1877–Present",
    "question": "Which post-World War I diplomatic initiative, proposed by President Woodrow Wilson in his Fourteen Points, was rejected by the U.S. Senate despite being incorporated into the Treaty of Versailles?",
    "options": [
      "The North Atlantic Treaty Organization (NATO)",
      "U.S. membership in the League of Nations",
      "The Marshall Plan",
      "The Good Neighbor Policy"
    ],
    "answerIndex": 1,
    "explanation": "Despite Wilson's campaigning, Senate 'Irreconcilables' and 'Reservationists' (led by Henry Cabot Lodge) blocked ratification of the Treaty of Versailles over concerns that Article X of the League Covenant could draw the U.S. into foreign wars."
  },
  {
    "id": 70,
    "domain": "World History 1450–Present",
    "question": "Which major global economic institution was created at the 1944 Bretton Woods Conference alongside the International Monetary Fund (IMF) to provide long-term loans for post-World War II reconstruction and economic development?",
    "options": [
      "The World Trade Organization (WTO)",
      "The International Bank for Reconstruction and Development (World Bank)",
      "The Organization of the Petroleum Exporting Countries (OPEC)",
      "The European Coal and Steel Community (ECSC)"
    ],
    "answerIndex": 1,
    "explanation": "Created at Bretton Woods in July 1944, the IBRD (the core institution of the World Bank) financed postwar rebuilding and infrastructure development while the IMF stabilized exchange rates."
  },
  {
    "id": 71,
    "domain": "U.S. History to 1877",
    "question": "Which 1787 ordinance enacted under the Articles of Confederation established a structured process for admitting new states to the Union and prohibited slavery in the territory north of the Ohio River?",
    "options": [
      "The Homestead Act",
      "The Kansas-Nebraska Act",
      "The Northwest Ordinance",
      "The Missouri Compromise"
    ],
    "answerIndex": 2,
    "explanation": "Considered the greatest legislative achievement under the Articles of Confederation, the Northwest Ordinance of 1787 set population thresholds for territorial self-government and statehood on equal footing while banning slavery in the Northwest Territory."
  },
  {
    "id": 72,
    "domain": "World History to 1450",
    "question": "What was the primary religious and political consequence of the Great Schism of 1054 in medieval Christianity?",
    "options": [
      "The permanent division of Christianity into the Roman Catholic Church in the West and the Eastern Orthodox Church centered in Constantinople.",
      "The establishment of the Anglican Church in England by King Henry VIII.",
      "The unification of all European kingdoms under the Holy Roman Emperor Charlemagne.",
      "The end of the Crusades in the eastern Mediterranean."
    ],
    "answerIndex": 0,
    "explanation": "Mutual excommunications in 1054 formalized long-standing doctrinal, liturgical, and jurisdictional divides between the Latin Papacy in Rome and the Greek Patriarchate in Constantinople."
  },
  {
    "id": 73,
    "domain": "U.S. History 1877–Present",
    "question": "During the Progressive Era, muckraking journalist Ida Tarbell became famous primarily for her investigative exposé of:",
    "options": [
      "Unsafe working conditions in New York garment factories following the Triangle Shirtwaist Fire.",
      "The monopolistic business practices of John D. Rockefeller’s Standard Oil Company.",
      "Corrupt political machines in Tammany Hall led by Boss Tweed.",
      "Unsanitary practices in the Chicago meatpacking industry."
    ],
    "answerIndex": 1,
    "explanation": "Ida Tarbell's serialized 1902–1904 McClure's investigation, The History of the Standard Oil Company, exposed predatory railroad rebates and monopoly tactics, helping spur the 1911 Supreme Court breakup of Standard Oil."
  },
  {
    "id": 74,
    "domain": "World History 1450–Present",
    "question": "Which factor most directly enabled the Spanish conquistador Hernán Cortés to overthrow the Aztec Empire in 1521?",
    "options": [
      "Superior Spanish naval artillery used to blockade Tenochtitlán from the Pacific Ocean.",
      "Alliances with indigenous peoples resentful of Aztec tribute demands, combined with the devastating spread of European epidemic diseases such as smallpox.",
      "Military reinforcements sent by the Portuguese Empire from Brazil.",
      "A peaceful diplomatic treaty transferring Aztec sovereignty to King Philip II."
    ],
    "answerIndex": 1,
    "explanation": "Cortés capitalized on tens of thousands of Indigenous allies (such as the Tlaxcalans) opposed to Mexica/Aztec rule while smallpox epidemics decimated Tenochtitlán's defenders."
  },
  {
    "id": 75,
    "domain": "U.S. History 1877–Present",
    "question": "What was the central foreign policy principle of the \"Roosevelt Corollary\" (1904) to the Monroe Doctrine?",
    "options": [
      "The United States pledged never to deploy military forces anywhere in Latin America.",
      "The United States claimed the right to exercise \"international police power\" and intervene militarily in Latin American nations experiencing chronic financial or political instability.",
      "The United States formed a mutual defense alliance with Great Britain and France against Imperial Germany.",
      "The United States granted immediate independence to the Philippines and Puerto Rico."
    ],
    "answerIndex": 1,
    "explanation": "Theodore Roosevelt expanded the Monroe Doctrine by asserting that the U.S. could intervene in Western Hemisphere countries to prevent European creditors from intervening militarily."
  },
  {
    "id": 76,
    "domain": "World History 1450–Present",
    "question": "Which nineteenth-century conflict ended with the 1842 Treaty of Nanking, forcing Qing China to cede Hong Kong to Great Britain and open five \"treaty ports\" to foreign trade?",
    "options": [
      "The Taiping Rebellion",
      "The Boxer Rebellion",
      "The First Opium War",
      "The Sino-Japanese War"
    ],
    "answerIndex": 2,
    "explanation": "Following Britain's naval victory in the First Opium War (1839–1842), the Treaty of Nanking marked the first of China's 'unequal treaties,' ceding Hong Kong Island and opening five coastal ports."
  },
  {
    "id": 77,
    "domain": "U.S. History 1877–Present",
    "question": "Which New Deal agency, created in 1933, built hydroelectric dams across seven southern states to provide flood control, rural electrification, and regional economic development?",
    "options": [
      "The Works Progress Administration (WPA)",
      "The Securities and Exchange Commission (SEC)",
      "The Civilian Conservation Corps (CCC)",
      "The Tennessee Valley Authority (TVA)"
    ],
    "answerIndex": 3,
    "explanation": "The TVA transformed the impoverished Tennessee River basin through federally built dams, affordable electricity, flood control, and reforestation programs."
  },
  {
    "id": 78,
    "domain": "World History 1450–Present",
    "question": "During the Cold War, the \"Prague Spring\" of 1968 in Czechoslovakia was brought to an end when:",
    "options": [
      "NATO peacekeeping forces occupied Prague to prevent civil war.",
      "Soviet and Warsaw Pact troops invaded Czechoslovakia to halt Alexander Dubček’s political and economic liberalization reforms (\"socialism with a human face\").",
      "Czechoslovakia voluntarily dissolved into the separate nations of the Czech Republic and Slovakia.",
      "United Nations sanctions forced the resignation of the Czechoslovak Communist Party."
    ],
    "answerIndex": 1,
    "explanation": "In August 1968, Warsaw Pact forces crushed the Prague Spring reforms and Moscow articulated the Brezhnev Doctrine asserting the right to intervene in socialist states."
  },
  {
    "id": 79,
    "domain": "U.S. History 1877–Present",
    "question": "What was the major historical significance of the 1962 U.S. Supreme Court decision in Engel v. Vitale?",
    "options": [
      "It ruled that state-sponsored, non-denominational prayer in public schools violates the First Amendment’s Establishment Clause.",
      "It required public schools to desegregate \"with all deliberate speed.\"",
      "It protected students’ right to wear black armbands in public school to protest the Vietnam War.",
      "It prohibited states from banning the sale of contraceptives to married couples."
    ],
    "answerIndex": 0,
    "explanation": "In Engel v. Vitale (1962), the Supreme Court held that official state-composed prayer in public schools is unconstitutional under the Establishment Clause even if students may opt out."
  },
  {
    "id": 80,
    "domain": "World History 1450–Present",
    "question": "Which of the following best describes the primary goal of the Meiji-era slogan \"Fukoku Kyohei\" (\"Enrich the Country, Strengthen the Army\") in late-nineteenth-century Japan?",
    "options": [
      "To restore strict feudal isolationism (sakoku) and expel all Western diplomats.",
      "To rapidly industrialize Japan’s economy and build a modern conscript military capable of resisting Western imperialism.",
      "To convert Japan’s economy into a collectivized agrarian socialist state.",
      "To surrender Japanese sovereignty to a League of Nations mandate."
    ],
    "answerIndex": 1,
    "explanation": "Meiji reformers pursued rapid state-guided industrialization and modern military conscription under 'Fukoku Kyohei' so Japan could avoid semi-colonial subjugation and renegotiate unequal treaties."
  },
  {
    "id": 81,
    "domain": "U.S. History to 1877",
    "question": "Which 1765 British parliamentary act sparked widespread colonial protests and the formation of the Sons of Liberty by imposing the first direct tax on printed materials, legal documents, and newspapers in the American colonies?",
    "options": [
      "The Tea Act",
      "The Stamp Act",
      "The Intolerable (Coercive) Acts",
      "The Quartering Act"
    ],
    "answerIndex": 1,
    "explanation": "The Stamp Act (1765) marked Britain's first direct internal tax on colonists—requiring revenue stamps on paper goods—triggering boycotts, protests, and resistance groups like the Sons of Liberty."
  },
  {
    "id": 82,
    "domain": "World History to 1450",
    "question": "During the High Middle Ages in Western Europe, the Magna Carta (1215) signed by King John of England was historically significant primarily because it:",
    "options": [
      "Abolished the English monarchy and established a parliamentary republic.",
      "Granted universal voting rights to English peasants and serfs.",
      "Established the principle that the monarch was subject to the rule of law and could not levy certain taxes without the consent of his barons.",
      "Separated the Church of England from the authority of the Pope."
    ],
    "answerIndex": 2,
    "explanation": "Magna Carta curtailed arbitrary royal power in England by affirming that even the king was bound by law and feudal custom, laying an early foundation for constitutionalism and due process."
  },
  {
    "id": 83,
    "domain": "U.S. History 1877–Present",
    "question": "What was the central political message of William Jennings Bryan’s famous \"Cross of Gold\" speech at the 1896 Democratic National Convention?",
    "options": [
      "That the United States should immediately annex the Philippine Islands to expand Asian trade.",
      "That strict adherence to the gold standard crushed working farmers and laborers, and that the U.S. should adopt the free coinage of silver (\"bimetallism\").",
      "That Congress should pass a constitutional amendment banning alcohol nationwide.",
      "That federal troops should remain in the South to protect Reconstruction governments."
    ],
    "answerIndex": 1,
    "explanation": "Bryan championed free silver/bimetallism to expand the money supply and ease debt burdens for farmers and workers, famously warning against pressing 'a crown of thorns' and 'a cross of gold' onto labor."
  },
  {
    "id": 84,
    "domain": "World History 1450–Present",
    "question": "Which major cultural and intellectual movement began in fourteenth-century northern Italian city-states such as Florence and emphasized humanism, secular learning, and the revival of classical Greco-Roman art and literature?",
    "options": [
      "The Protestant Reformation",
      "The Scientific Revolution",
      "The Renaissance",
      "Romanticism"
    ],
    "answerIndex": 2,
    "explanation": "The Renaissance emerged in wealthy Italian commercial centers like Florence, focusing on humanist scholarship, classical antiquity, perspective and realism in art, and appreciation of human achievement."
  },
  {
    "id": 85,
    "domain": "U.S. History 1877–Present",
    "question": "During the 1920s, the \"Harlem Renaissance\" was best characterized by:",
    "options": [
      "A federal infrastructure program that rebuilt public housing across New York City.",
      "A vibrant flowering of African American literature, jazz music, visual art, and cultural pride centered in New York’s Harlem neighborhood.",
      "A nationwide labor strike led by industrial workers in the textile and steel sectors.",
      "A conservative religious movement opposing the teaching of evolution in public schools."
    ],
    "answerIndex": 1,
    "explanation": "The Harlem Renaissance brought together writers, musicians, and artists—such as Langston Hughes, Zora Neale Hurston, and Duke Ellington—who celebrated Black identity, modernity, and artistic innovation."
  },
  {
    "id": 86,
    "domain": "World History 1450–Present",
    "question": "How did the Mughal Emperor Akbar the Great (r. 1556–1605) promote stability and cohesion across his diverse empire in South Asia?",
    "options": [
      "By enforcing strict religious uniformity and destroying all non-Islamic temples.",
      "By abolishing the jizya tax on non-Muslims, incorporating Hindu Rajput nobles into imperial administration, and encouraging interfaith dialogue.",
      "By expelling all European merchants from Indian coastal ports.",
      "By abandoning centralized taxation in favor of autonomous village councils."
    ],
    "answerIndex": 1,
    "explanation": "Akbar pursued a policy of broad religious tolerance ('sulh-i kul,' or universal peace), repealed the jizya poll tax on non-Muslims, brought Rajput elites into high imperial posts, and hosted cross-religious debates."
  },
  {
    "id": 87,
    "domain": "U.S. History 1877–Present",
    "question": "Which Cold War crisis in October 1962 brought the United States and the Soviet Union to the brink of nuclear war after U.S. reconnaissance planes discovered Soviet offensive ballistic missiles being installed 90 miles off the coast of Florida?",
    "options": [
      "The Berlin Airlift",
      "The Bay of Pigs Invasion",
      "The Cuban Missile Crisis",
      "The U-2 Incident"
    ],
    "answerIndex": 2,
    "explanation": "During the 13-day Cuban Missile Crisis in October 1962, the U.S. instituted a naval quarantine around Cuba and negotiated a diplomatic resolution resulting in Soviet missile removal from Cuba and U.S. pledges regarding Cuba and missiles in Turkey."
  },
  {
    "id": 88,
    "domain": "World History 1450–Present",
    "question": "What was the primary goal of Deng Xiaoping’s \"Four Modernizations\" economic reforms launched in the People’s Republic of China in the late 1970s?",
    "options": [
      "To launch a second Cultural Revolution eliminating all private enterprise and foreign contact.",
      "To modernize agriculture, industry, national defense, and science/technology by introducing market-oriented incentives and Special Economic Zones open to foreign investment.",
      "To collectivize all rural farmland into state-run communes.",
      "To form a military alliance with the Soviet Union against the United States."
    ],
    "answerIndex": 1,
    "explanation": "Deng Xiaoping's reforms shifted China away from strict Maoist command-economy orthodoxy by decollectivizing farming, encouraging entrepreneurship, and opening coastal Special Economic Zones to foreign trade and investment."
  },
  {
    "id": 89,
    "domain": "U.S. History 1877–Present",
    "question": "In Tinker v. Des Moines Independent Community School District (1969), the U.S. Supreme Court ruled that:",
    "options": [
      "Public school officials may censor student newspapers without educational justification.",
      "Students do not \"shed their constitutional rights to freedom of speech or expression at the schoolhouse gate,\" protecting their wearing of black armbands to protest the Vietnam War.",
      "Mandatory recitation of the Pledge of Allegiance in public schools violates the First Amendment.",
      "Segregated school districts must implement busing plans immediately."
    ],
    "answerIndex": 1,
    "explanation": "Tinker held that symbolic political speech by students is protected under the First Amendment unless school officials can show it would 'materially and substantially disrupt' school operations."
  },
  {
    "id": 90,
    "domain": "World History 1450–Present",
    "question": "Which international organization was founded in 1945 following World War II to maintain international peace and security, promote human rights, and prevent future global conflicts?",
    "options": [
      "The League of Nations",
      "The North Atlantic Treaty Organization (NATO)",
      "The United Nations (UN)",
      "The Warsaw Pact"
    ],
    "answerIndex": 2,
    "explanation": "Established in 1945 after the collapse of the League of Nations and the devastation of WWII, the United Nations created a global forum with the General Assembly, Security Council, and specialized agencies."
  },
  {
    "id": 91,
    "domain": "U.S. History to 1877",
    "question": "Which 1803 territorial acquisition doubled the size of the United States, secured control of the Mississippi River and the port of New Orleans, and prompted President Thomas Jefferson to set aside his strict constructionist interpretation of the Constitution?",
    "options": [
      "The Gadsden Purchase",
      "The Annexation of Texas",
      "The Louisiana Purchase",
      "The Oregon Treaty"
    ],
    "answerIndex": 2,
    "explanation": "Purchased from Napoleonic France for $15 million in 1803, the Louisiana Purchase secured Mississippi River navigation and doubled U.S. territory, leading Jefferson to use the treaty-making power despite his strict constructionist doubts."
  },
  {
    "id": 92,
    "domain": "World History 1450–Present",
    "question": "During the Scientific Revolution in Europe, Nicolaus Copernicus and Galileo Galilei challenged long-standing Ptolemaic and Church-endorsed astronomy primarily by advancing which model of the universe?",
    "options": [
      "The geocentric model, placing a stationary Earth at the center of the cosmos.",
      "The heliocentric model, demonstrating that Earth and the other planets revolve around the Sun.",
      "The theory of continental drift and plate tectonics.",
      "The atomic theory of chemical elements."
    ],
    "answerIndex": 1,
    "explanation": "Copernicus proposed a Sun-centered (heliocentric) planetary system in 1543, and Galileo's telescopic observations—such as the phases of Venus and moons of Jupiter—provided crucial empirical evidence overturning Ptolemaic geocentrism."
  },
  {
    "id": 93,
    "domain": "U.S. History to 1877",
    "question": "Abolitionist leader Frederick Douglass is best known in antebellum U.S. history for:",
    "options": [
      "Leading an armed slave rebellion in Southampton County, Virginia, in 1831.",
      "Escaping from slavery, publishing his influential Narrative and the anti-slavery newspaper The North Star, and delivering powerful speeches advocating abolition and equal rights.",
      "Drafting the Kansas-Nebraska Act of 1854 in the U.S. Senate.",
      "Founding the American Colonization Society to transport freed African Americans to Liberia."
    ],
    "answerIndex": 1,
    "explanation": "After escaping slavery in Maryland, Frederick Douglass became one of the foremost abolitionist orators, writers, and editors in the United States, advocating immediate emancipation and racial and gender equality."
  },
  {
    "id": 94,
    "domain": "World History to 1450",
    "question": "Which major religious and philosophical tradition originated in ancient India around the sixth century B.C.E. through the teachings of Siddhartha Gautama and emphasized the Four Noble Truths and the Eightfold Path as the means to overcome suffering (dukkha)?",
    "options": [
      "Zoroastrianism",
      "Confucianism",
      "Buddhism",
      "Shintoism"
    ],
    "answerIndex": 2,
    "explanation": "Founded by Siddhartha Gautama (the Buddha) in northern India, Buddhism teaches that attachment and desire cause suffering (dukkha), which can be ended by following the Eightfold Path toward nirvana."
  },
  {
    "id": 95,
    "domain": "U.S. History 1877–Present",
    "question": "During World War I, the \"Great Migration\" transformed American demographics primarily through:",
    "options": [
      "The movement of millions of Dust Bowl farmers from Oklahoma and Texas to California.",
      "The relocation of hundreds of thousands of African Americans from the rural South to Northern and Midwestern industrial cities in search of factory jobs and escape from Jim Crow violence.",
      "The arrival of European immigrants through Ellis Island following the passage of the National Origins Act of 1924.",
      "The suburbanization of American cities enabled by the Interstate Highway Act of 1956."
    ],
    "answerIndex": 1,
    "explanation": "Wartime industrial labor demand and curtailed European immigration pulled hundreds of thousands of Black Southerners to cities like Chicago, Detroit, New York, and Cleveland, reshaping American politics and culture."
  },
  {
    "id": 96,
    "domain": "World History 1450–Present",
    "question": "Which immediate crisis in 1917 triggered the February (March) Revolution in Russia and forced the abdication of Tsar Nicholas II?",
    "options": [
      "The German invasion of Moscow during Operation Barbarossa.",
      "Catastrophic Russian military losses in World War I, severe food and fuel shortages in Petrograd, and widespread worker and soldier strikes.",
      "The implementation of Joseph Stalin’s First Five-Year Plan.",
      "The defeat of the Russian Baltic Fleet at the Battle of Tsushima."
    ],
    "answerIndex": 1,
    "explanation": "World War I exhaustion, hyperinflation, and acute bread and coal shortages sparked mass demonstrations in Petrograd in February/March 1917; when garrison troops joined protesters, Nicholas II abdicated."
  },
  {
    "id": 97,
    "domain": "U.S. History 1877–Present",
    "question": "What was the primary domestic impact of the Servicemen’s Readjustment Act of 1944, commonly known as the GI Bill?",
    "options": [
      "It mandated a national minimum wage for defense factory workers during World War II.",
      "It funded college tuition, vocational training, and low-interest home and business loans for millions of returning World War II veterans, fueling the growth of the American middle class and suburbs.",
      "It established the Peace Corps to send American volunteers to developing nations.",
      "It desegregated all public universities across the American South."
    ],
    "answerIndex": 1,
    "explanation": "The GI Bill dramatically expanded higher education access and homeownership for returning WWII veterans, driving postwar suburban growth and middle-class prosperity (though discriminatory local administration limited benefits for many Black veterans)."
  },
  {
    "id": 98,
    "domain": "World History 1450–Present",
    "question": "Which political and economic union was formally established by the Maastricht Treaty in 1993 to deepen European integration through a single market, coordinated foreign policy, and eventually a common currency (the euro)?",
    "options": [
      "The Warsaw Pact",
      "The European Union (EU)",
      "The League of Nations",
      "The Commonwealth of Independent States (CIS)"
    ],
    "answerIndex": 1,
    "explanation": "Signed in 1992 and effective November 1993, the Maastricht Treaty transformed the European Community into the European Union and set the convergence criteria for the euro currency."
  },
  {
    "id": 99,
    "domain": "U.S. History 1877–Present",
    "question": "In Loving v. Virginia (1967), the U.S. Supreme Court struck down state laws prohibiting interracial marriage by ruling that such bans violated which constitutional amendment?",
    "options": [
      "The Tenth Amendment",
      "The Thirteenth Amendment",
      "The Fourteenth Amendment’s Equal Protection and Due Process Clauses",
      "The Nineteenth Amendment"
    ],
    "answerIndex": 2,
    "explanation": "In a unanimous decision written by Chief Justice Earl Warren, the Supreme Court held that anti-miscegenation laws constituted invidious racial discrimination and infringed the fundamental freedom to marry under the Fourteenth Amendment."
  },
  {
    "id": 100,
    "domain": "World History 1450–Present",
    "question": "During the sixteenth and seventeenth centuries, the Japanese Tokugawa Shogunate maintained domestic stability and prevented foreign interference primarily by:",
    "options": [
      "Launching naval invasions of Korea, China, and the Philippine Islands.",
      "Enforcing a policy of national seclusion (sakoku) that banned Christianity, prohibited Japanese citizens from traveling abroad, and restricted foreign trade almost exclusively to Dutch and Chinese merchants at Nagasaki.",
      "Converting the samurai class into an elected parliamentary assembly.",
      "Forming a Catholic military alliance with the Spanish Empire."
    ],
    "answerIndex": 1,
    "explanation": "Fearing European religious and colonial subversion, the Tokugawa shoguns suppressed Christianity and instituted sakoku ('closed country') policies from the 1630s, limiting European contact to Dutch traders on Dejima island in Nagasaki."
  },
  {
    "id": 101,
    "domain": "U.S. History to 1877",
    "question": "What was the central issue resolved by the \"Three-Fifths Compromise\" at the Constitutional Convention of 1787?",
    "options": [
      "How many states were required to ratify the new U.S. Constitution.",
      "How enslaved populations would be counted when determining a state’s representation in the House of Representatives and direct federal taxation.",
      "The division of western territories north and south of the Ohio River.",
      "The length of presidential terms and eligibility for re-election."
    ],
    "answerIndex": 1,
    "explanation": "The Three-Fifths Compromise counted three-fifths of a state's enslaved population for both House apportionment and direct federal taxes, boosting Southern political representation in Congress and the Electoral College."
  },
  {
    "id": 102,
    "domain": "World History to 1450",
    "question": "Which major technological and agricultural shift during the Neolithic Revolution (circa 10,000–4,000 B.C.E.) fundamentally transformed human societies?",
    "options": [
      "The transition from nomadic hunting and gathering to settled farming and animal domestication, leading to food surpluses, population growth, and permanent towns.",
      "The invention of iron smelting and ocean-going galleons across the Mediterranean.",
      "The establishment of long-distance maritime trade networks linking Europe and the Americas.",
      "The development of movable-type printing presses in ancient Mesopotamia."
    ],
    "answerIndex": 0,
    "explanation": "Agriculture and animal domestication enabled reliable food surpluses, sedentary villages, specialized labor, social stratification, and the emergence of early river-valley civilizations."
  },
  {
    "id": 103,
    "domain": "U.S. History 1877–Present",
    "question": "Which late-nineteenth-century labor conflict in 1894 began when workers at a luxury sleeping-car company outside Chicago went on strike after wage cuts, eventually halting rail traffic nationwide until President Grover Cleveland deployed federal troops?",
    "options": [
      "The Haymarket Affair",
      "The Homestead Strike",
      "The Pullman Strike",
      "The Triangle Shirtwaist Factory Strike"
    ],
    "answerIndex": 2,
    "explanation": "When George Pullman cut wages without lowering company-town rents, Eugene V. Debs and the American Railway Union launched a nationwide boycott of Pullman cars that President Cleveland broke using a federal injunction and Army troops."
  },
  {
    "id": 104,
    "domain": "World History 1450–Present",
    "question": "The Haitian Revolution (1791–1804), led by Toussaint Louverture and Jean-Jacques Dessalines, was historically unique because it:",
    "options": [
      "Restored Spanish colonial rule over the island of Hispaniola.",
      "Resulted in the first successful large-scale slave revolt in history, establishing Haiti as an independent republic and the second independent nation in the Western Hemisphere.",
      "Was peacefully negotiated by the British Parliament without military conflict.",
      "Created a constitutional monarchy allied with Napoleon Bonaparte’s French Empire."
    ],
    "answerIndex": 1,
    "explanation": "Starting in the wealthy French sugar colony of Saint-Domingue, enslaved people overthrew plantation slavery and defeated European armies to proclaim the independent Republic of Haiti in 1804."
  },
  {
    "id": 105,
    "domain": "U.S. History 1877–Present",
    "question": "During World War II, what was the primary purpose of the Lend-Lease Act passed by the U.S. Congress in March 1941?",
    "options": [
      "To declare war immediately on Germany and Japan following the invasion of Poland.",
      "To allow the United States to supply weapons, food, and war materials to Allied nations (such as Great Britain and the Soviet Union) without requiring immediate cash payment prior to U.S. entry into the war.",
      "To intern German and Italian citizens living on the East Coast of the United States.",
      "To establish the United Nations peacekeeping force in Western Europe."
    ],
    "answerIndex": 1,
    "explanation": "Lend-Lease enabled President Franklin D. Roosevelt to transfer vital munitions and supplies to nations whose defense was deemed vital to U.S. security, making the United States the 'arsenal of democracy' before Pearl Harbor."
  },
  {
    "id": 106,
    "domain": "World History to 1450",
    "question": "During the Post-Classical era (circa 1200–1450 C.E.), how did the West African Mali Empire under rulers such as Sundiata Keita and Mansa Musa achieve immense wealth and influence?",
    "options": [
      "By monopolizing Atlantic Ocean shipping routes to South America.",
      "By controlling trans-Saharan caravan trade routes exchanging abundant West African gold for Saharan salt, while developing Timbuktu as a major center of Islamic scholarship.",
      "By conquering the Byzantine Empire and taxing Mediterranean ports.",
      "By industrializing textile manufacturing along the Niger River."
    ],
    "answerIndex": 1,
    "explanation": "Mali taxed lucrative trans-Saharan gold-salt trade networks and flourished culturally and intellectually under Islamic patronage, turning cities like Timbuktu and Gao into renowned centers of learning and commerce."
  },
  {
    "id": 107,
    "domain": "U.S. History 1877–Present",
    "question": "Rachel Carson’s influential 1962 book Silent Spring is widely credited with sparking the modern American environmental movement by:",
    "options": [
      "Advocating the creation of the National Park System during Theodore Roosevelt’s presidency.",
      "Exposing the ecological and health dangers of indiscriminate pesticide use (particularly DDT), leading to stricter environmental regulations and the creation of the Environmental Protection Agency (EPA).",
      "Protesting the construction of nuclear power plants in the Pacific Northwest.",
      "Calling for the end of federal subsidies for interstate highway construction."
    ],
    "answerIndex": 1,
    "explanation": "Silent Spring documented how synthetic pesticides like DDT accumulated in food chains and harmed wildlife and human health, prompting public awareness, a domestic DDT ban, and landmark environmental legislation."
  },
  {
    "id": 108,
    "domain": "World History 1450–Present",
    "question": "Which ideological and political movement in nineteenth-century Europe emphasized shared language, culture, and historical identity as the basis for self-governing nation-states, contributing directly to the unifications of Italy and Germany?",
    "options": [
      "Mercantilism",
      "Feudalism",
      "Nationalism",
      "Scholasticism"
    ],
    "answerIndex": 2,
    "explanation": "Romantic and political nationalism inspired movements to unite fragmented territories into sovereign nation-states—such as the Italian Risorgimento and Bismarck's unification of Germany—while threatening multi-ethnic empires like Austria-Hungary."
  },
  {
    "id": 109,
    "domain": "U.S. History 1877–Present",
    "question": "What was the primary goal of the \"Great Society\" immigration reform enacted through the Immigration and Nationality Act of 1965 (Hart-Celler Act)?",
    "options": [
      "To ban all immigration from Asia and Latin America for twenty years.",
      "To abolish the discriminatory national-origins quota system of the 1920s and replace it with a policy prioritizing family reunification and skilled workers.",
      "To require all immigrants to serve five years in the U.S. military prior to residency.",
      "To restrict immigration exclusively to refugees from Western Europe."
    ],
    "answerIndex": 1,
    "explanation": "The 1965 Hart-Celler Act ended the race- and nationality-based quotas established in the 1920s, creating hemisphere-wide visa ceilings focused on family ties and needed occupational skills and dramatically diversifying U.S. immigration."
  },
  {
    "id": 110,
    "domain": "World History 1450–Present",
    "question": "Following the end of World War II, the Nuremberg Trials (1945–1946) established which enduring precedent in international law?",
    "options": [
      "That military officers cannot be prosecuted for war crimes if they were following superior orders.",
      "That political and military leaders can be held individually accountable under international law for war crimes, crimes against peace, and crimes against humanity.",
      "That only victorious nations may submit territorial disputes to the International Court of Justice.",
      "That economic reparations must replace all criminal prosecutions after armed conflicts."
    ],
    "answerIndex": 1,
    "explanation": "Prosecuting top Nazi officials before an International Military Tribunal established that state sovereignty and 'following superior orders' do not shield individuals from criminal responsibility for crimes against humanity and war crimes."
  },
  {
    "id": 111,
    "domain": "U.S. History to 1877",
    "question": "What was the primary political compromise achieved by the \"Great Compromise\" (Connecticut Compromise) at the Constitutional Convention of 1787?",
    "options": [
      "It created a bicameral Congress with proportional representation based on population in the House of Representatives and equal representation (two senators per state) in the Senate.",
      "It abolished the Electoral College in favor of direct popular election of the president.",
      "It granted Congress the authority to ban the international slave trade immediately in 1787.",
      "It established a single-term six-year limit for the presidency."
    ],
    "answerIndex": 0,
    "explanation": "Proposed by Roger Sherman of Connecticut, the Great Compromise bridged the Virginia Plan (population-based) and New Jersey Plan (equal state representation) by establishing a two-house Congress."
  },
  {
    "id": 112,
    "domain": "World History to 1450",
    "question": "Which of the following best describes a major long-term impact of the Phoenician civilization in the ancient Mediterranean world (circa 1200–539 B.C.E.)?",
    "options": [
      "The conquest of the Persian Empire under Cyrus the Great.",
      "The development and spread of a phonetic alphabet through extensive maritime trade networks, which later influenced the Greek and Roman alphabets.",
      "The construction of the Great Wall along the northern border of China.",
      "The codification of Hindu caste laws in the Laws of Manu."
    ],
    "answerIndex": 1,
    "explanation": "Phoenician merchants based in Levantine city-states like Tyre and Sidon spread a 22-character consonant-based phonetic writing system across Mediterranean colonies, which Greeks adapted by adding vowels."
  },
  {
    "id": 113,
    "domain": "U.S. History to 1877",
    "question": "During the early nineteenth century, the \"Market Revolution\" in the United States was accelerated most directly by which combination of transportation innovations?",
    "options": [
      "Transcontinental railroads, commercial airlines, and the Interstate Highway System.",
      "Canals (such as the Erie Canal), steamboats, turnpikes, and early regional railroads linking Western farms with Eastern commercial cities.",
      "Clipper ships sailing exclusively between California and Japan.",
      "Federal subsidies for cross-country stagecoach lines following the Civil War."
    ],
    "answerIndex": 1,
    "explanation": "Completed in 1825, the Erie Canal—alongside steamboats on major rivers and expanding turnpike and rail networks—slashed shipping costs and integrated regional markets across the U.S."
  },
  {
    "id": 114,
    "domain": "World History to 1450",
    "question": "During the High Middle Ages, the Crusades (1095–1291) affected Western Europe primarily by:",
    "options": [
      "Permanently securing Jerusalem and the Levant under European feudal kingdoms.",
      "Increasing European demand for Eastern luxury goods and spices, stimulating Mediterranean trade, and reintroducing classical Greek and Islamic scientific knowledge to Western Europe.",
      "Unifying the Roman Catholic and Eastern Orthodox Churches under a single patriarch.",
      "Ending feudalism across France and Germany by 1150."
    ],
    "answerIndex": 1,
    "explanation": "Although Crusader states in the Levant eventually fell, sustained contact with the Byzantine and Islamic worlds revitalized Italian maritime trade and accelerated intellectual exchange into Europe."
  },
  {
    "id": 115,
    "domain": "U.S. History 1877–Present",
    "question": "Which late-nineteenth-century reform movement, exemplified by Jane Addams’s founding of Hull House in Chicago in 1889, aimed to assist urban immigrants and working-class families through education, childcare, and social services?",
    "options": [
      "The Temperance Movement",
      "The Settlement House Movement",
      "The Granger Movement",
      "The Know-Nothing Party"
    ],
    "answerIndex": 1,
    "explanation": "Settlement houses like Hull House placed middle-class reformers directly inside immigrant neighborhoods to provide English classes, kindergarten care, job training, and public health advocacy."
  },
  {
    "id": 116,
    "domain": "World History 1450–Present",
    "question": "What was the primary political significance of the English \"Glorious Revolution\" of 1688 and the subsequent English Bill of Rights (1689)?",
    "options": [
      "It restored absolute Catholic monarchy in England under King James II.",
      "It peacefully replaced King James II with William and Mary and established parliamentary supremacy over the monarchy, safeguarding basic civil liberties.",
      "It abolished the British Parliament and instituted military rule under Oliver Cromwell.",
      "It granted independence to Britain’s thirteen North American colonies."
    ],
    "answerIndex": 1,
    "explanation": "The Glorious Revolution permanently ended divine-right absolutism in England by requiring monarchs to govern with Parliament's consent and protecting rights such as free parliamentary elections and trial by jury."
  },
  {
    "id": 117,
    "domain": "U.S. History 1877–Present",
    "question": "Which 1994 trade agreement signed into law during the presidency of Bill Clinton eliminated most tariffs and trade barriers between the United States, Canada, and Mexico?",
    "options": [
      "The General Agreement on Tariffs and Trade (GATT)",
      "The North American Free Trade Agreement (NAFTA)",
      "The Marshall Plan",
      "The Trans-Pacific Partnership (TPP)"
    ],
    "answerIndex": 1,
    "explanation": "Taking effect on January 1, 1994, NAFTA created a trilateral North American free-trade bloc, boosting cross-border commerce while sparking ongoing debates over manufacturing jobs and labor/environmental standards."
  },
  {
    "id": 118,
    "domain": "World History 1450–Present",
    "question": "Which major event in November 1989 symbolized the end of the Cold War division of Europe and paved the way for German reunification in 1990?",
    "options": [
      "The signing of the Treaty of Versailles",
      "The fall of the Berlin Wall",
      "The Soviet invasion of Hungary",
      "The formation of the European Coal and Steel Community"
    ],
    "answerIndex": 1,
    "explanation": "On November 9, 1989, East German authorities opened border crossings in Berlin amid mass protests, leading citizens to dismantle the wall and culminating in German reunification in October 1990."
  },
  {
    "id": 119,
    "domain": "U.S. History to 1877",
    "question": "In McCulloch v. Maryland (1819) and Gibbons v. Ogden (1824), Chief Justice John Marshall’s Supreme Court rulings consistently strengthened:",
    "options": [
      "The authority of state legislatures to nullify federal statutes.",
      "The power of the federal government and Congress’s authority over interstate commerce and implied constitutional powers.",
      "The right of states to tax federal institutions operating within their borders.",
      "Executive branch immunity from judicial subpoenas."
    ],
    "answerIndex": 1,
    "explanation": "Marshall affirmed implied federal powers and federal supremacy in McCulloch (1819) and broad congressional authority over interstate navigation and commerce in Gibbons (1824)."
  },
  {
    "id": 120,
    "domain": "World History 1450–Present",
    "question": "Which factor most directly contributed to the outbreak of the \"Rwandan Genocide\" in 1994, in which an estimated 800,000 Tutsis and moderate Hutus were killed in 100 days?",
    "options": [
      "A direct border war between Rwanda and South Africa over diamond mines.",
      "Decades of ethnic polarization exacerbated by Belgian colonial policies, followed by extremist Hutu political mobilization after the assassination of President Juvénal Habyarimana.",
      "Military intervention by Soviet and Cuban forces in Central Africa.",
      "The collapse of global oil prices in the Persian Gulf."
    ],
    "answerIndex": 1,
    "explanation": "Belgian colonial administration hardened Hutu-Tutsi divisions through identity cards and unequal privileges; following the April 1994 downing of President Habyarimana's plane, Hutu extremists orchestrated systematic mass killings amid international inaction."
  }
]