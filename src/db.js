const db = {
  characters: [
    {
      characterId: 0,
      name: 'Commander Shepard',
      gender: 'Male',
      race: 'Human',
      img: 'https://th.bing.com/th/id/OIP.CeL6Oku_TUtZeKvsdWsrQgHaJZ?pid=ImgDet&rs=1',
      quote:
        "You're not even alive. Not really. You're just a machine. And machines can be broken!",
      description:
        "Lieutenant Commander Shepard is the human protagonist of Mass Effect, Mass Effect 2, and Mass Effect 3, whose gender, appearance, skills and pre-service history are all customizable and have an impact on the story. Shepard's first name is also customizable, but is never stated in-game. The default pre-made Shepard is a male Soldier named John, with the Earthborn/Sole Survivor profile. Shepard was born on April 11, 2154,[1] is a graduate of the Systems Alliance N7 special forces program (service no. 5923-AC-2826), a veteran of the Skyllian Blitz, and is initially assigned to the SSV Normandy in 2183 as Executive Officer. Shepard later becomes the first human to join the Spectres, an elite special task force for the Citadel Council.",
      class:
        'The player must accept a military specialization, which determines a set of talents. The six classes are Soldier, Engineer, Adept, Infiltrator, Sentinel, and Vanguard. The class choice will also affect weapon proficiency – if Shepard is not proficient with a weapon, the Commander can still fire it, but cannot zoom in with it, and many weapon bonuses are void. This applies to all weapons except the pistol, which all classes are proficient in.',
      appearance: ['Mass Effect', 'Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: true,
      age: 32,
      like: 0,
    },
    {
      characterId: 1,
      name: 'Ashley Williams',
      gender: 'Female',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/3/3c/Ashley_Character_Box.png',
      quote:
        "Why is it that whenever someone says 'with all due respect' they really mean 'kiss my ass'?",
      description:
        "Ashley Williams is a human soldier who served in the Systems Alliance as a Gunnery Chief in the 2nd Frontier Division on Eden Prime, and was later assigned to Commander Shepard's squad after the geth attack on Eden Prime.",
      class: 'Soldier',
      appearance: ['Mass Effect', 'Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 27,
      like: 0,
    },
    {
      characterId: 2,
      name: 'Garrus Vakarian',
      gender: 'Male',
      race: 'Turian',
      img: 'https://static.wikia.nocookie.net/masseffect/images/3/36/Garrus_Character_Shot.png',
      quote:
        'You realize this plan has me walking into hell, too. Hah. Just like old times.',
      description:
        "Garrus Vakarian is a turian, formerly part of C-Sec's Investigation Division. Like most turians, Garrus had his military training at fifteen, but later followed in his father's footsteps to become a C-Sec officer. He was responsible for the investigation of Saren Arterius, the Council's top Spectre, after the Alliance claimed Saren had gone rogue. Although Garrus was told that the investigation was over, he decided to defy the Executor's order and pursue another lead on his own. Eventually, Garrus attempts to join Commander Shepard's team to help defeat Saren and the geth.",
      class: 'Turian Agent',
      appearance: ['Mass Effect', 'Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: true,
      age: 29,
      like: 0,
    },
    {
      characterId: 3,
      name: 'Kaidan Alenko',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/1/19/Kaidan_Character_Box.png',
      quote:
        "We finally get out here, and the final frontier was already settled. And the residents don't even seem impressed by the view. Or the dangers.",
      description:
        "Kaidan Alenko is a human Sentinel and a Systems Alliance Marine. While serving aboard the SSV Normandy, he is a Staff Lieutenant and head of the ship's Marine detail. He's also an initial member of Commander Shepard's squad. Kaidan is a biotic wired with the controversial L2 implants, which are known to cause severe neurological damage to the user. However, he is fortunate enough to only suffer from occasional severe migraines. He is a possible love interest.",
      class: 'Sentinel',
      appearance: ['Mass Effect', 'Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 34,
      like: 0,
    },
    {
      characterId: 4,
      name: "Liara T'Soni",
      gender: 'Feminine',
      race: 'Asari',
      img: 'https://static.wikia.nocookie.net/masseffect/images/2/2e/Liara_Character_Box.png',
      quote:
        'That is why I find you so fascinating. You were marked by the beacon on Eden Prime; you were touched by working Prothean technology!',
      description:
        "Dr. Liara T'Soni is an asari researcher who has spent the past fifty years of her life studying Prothean technology and culture, specialising in the Prothean extinction. She was born on Thessia in 2077, making her 'only' 106—barely an adult in asari terms. She already has a great deal of insight into the Protheans and is a highly trained user of biotics. She is a potential romance interest for either a male or female Shepard.",
      class: 'Asari Scientist',
      appearance: ['Mass Effect', 'Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: true,
      age: 106,
      like: 0,
    },
    {
      characterId: 5,
      name: "Tali'Zorah nar Rayya",
      gender: 'Female',
      race: 'Quarian',
      img: 'https://static.wikia.nocookie.net/masseffect/images/2/2f/Talicharactershotme2.jpg',
      quote:
        'The Pilgrimage proves we are willing to give of ourselves for the greater good. What does it say about me if I turn my back on this?',
      description:
        "Tali'Zorah nar Rayya is a quarian and a member of Commander Shepard's squad. She is the daughter of Rael'Zorah, a member of the Admiralty Board. Though young, Tali is a mechanical genius. In 2183, she is on her Pilgrimage, the rite of passage to prove her worth and bring something of value back to her people aboard the Migrant Fleet. In 2185, having completed her Pilgrimage, Tali has been entrusted with leading an important research mission for the Admiralty Board.",
      class: 'Quarian Machinist',
      appearance: ['Mass Effect', 'Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: true,
      age: 37,
      like: 0,
    },
    {
      characterId: 6,
      name: 'Urdnot Wrex',
      gender: 'Male',
      race: 'Krogan',
      img: 'https://static.wikia.nocookie.net/masseffect/images/4/4e/Wrex_Character_Box.png',
      quote:
        "Anyone who fights us is either stupid or on Saren's payroll. Killing the latter is business. Killing the former is a favor to the universe.",
      description:
        'A famed krogan mercenary and bounty hunter, Urdnot Wrex is also one of the last Krogan Battlemasters: rare individuals who combine powerful biotic abilities with the devastating firepower of advanced weaponry. A long-lived krogan who has had many adventures, Wrex has heard of Commander Shepard during his travels, and respects the Commander as a fellow warrior. Despite his chosen path of violence and killing for credits, Wrex is deeply concerned with the fate of his people after the genophage, and is one of the few planning for a new krogan future.',
      class: 'Krogan Battlemaster',
      appearance: ['Mass Effect', 'Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 1052,
      like: 0,
    },
    {
      characterId: 7,
      name: 'Grunt',
      gender: 'Male',
      race: 'Krogan',
      img: 'https://static.wikia.nocookie.net/masseffect/images/1/1d/Grunt_Character_Box.png',
      quote: 'I am pure krogan; you should be in awe.',
      description:
        'Grunt is a genetically engineered krogan super soldier. Bred and educated in a tank, he was intended to exemplify the best traits of the krogan, and help reinvigorate his species. In the meantime, he fights alongside Commander Shepard to satisfy his natural desire for violence.',
      class: 'Krogan Berserker',
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 927,
      like: 0,
    },
    {
      characterId: 8,
      name: 'Jack',
      gender: 'Female',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/4/45/Subject_Zero_Character_Box.png',
      quote:
        "Turns out, mess with someone's head enough, you can turn a scared little kid into an all-powerful bitch.",
      description:
        'Jack, also known as Subject Zero, is a notorious criminal whose crimes include piracy, kidnapping, vandalism and murder. She is also a biotic, possibly one of the most powerful human biotics alive, and is considered so dangerous that she was kept in cryogenic stasis after she was caught',
      class: 'Subject Zero',
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: true,
      age: 24,
      like: 0,
    },
    {
      characterId: 9,
      name: 'Jacob Taylor',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/c/cd/Jacob_Character_Box.png',
      quote: 'So much for peace.',
      description:
        "Jacob Taylor is a human biotic and a former Alliance Marine under the command of Major Derek Izunami. He resigned after surviving the geth attack on Eden Prime. He is also part of Commander Shepard's squad during the suicide mission. Jacob is a highly experienced fighter, and is skilled in the use of weapons and biotics. He works professionally alongside Miranda Lawson, who functions as his informant and later as his superior officer. Jacob is also a potential romance option for a female Shepard.",
      class: 'Cerberus Operative',
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: true,
      age: 28,
      like: 0,
    },
    {
      characterId: 10,
      name: 'Kasumi Goto',
      gender: 'Female',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/1/10/Kasumi_Character_Shot.png',
      quote:
        "I'm the best thief in the business, not the most famous. Need to watch my step to keep it that way.",
      description:
        "Kasumi Goto is the galaxy's most enigmatic thief and has enemies everywhere, but only a few could put a name to her face. She is a master of stealth and infiltration.",
      class: 'Master Thief',
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 25,
      like: 0,
    },
    {
      characterId: 11,
      name: 'Legion',
      gender: 'Artificial Intelligence.',
      race: 'Geth',
      img: 'https://static.wikia.nocookie.net/masseffect/images/2/25/Legion.png',
      quote: 'Organics fear us. We wish to understand, not incite.',
      description:
        "Legion is the name taken by the gestalt consciousness formed by 1,183 geth programs inhabiting a unique geth 'mobile platform'.",
      class: 'Geth Infiltrator',
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 'unknown',
      like: 0,
    },
    {
      characterId: 12,
      name: 'Miranda Lawson',
      gender: 'Female',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/a/ac/Miranda_Character_Box.png',
      quote:
        "I'm an excellent judge of character. I think you'll find my assessments to be right on the money.",
      description:
        "Miranda Lawson is a human Cerberus Officer. As Jacob Taylor's informant, she gives him guidance and advice during missions, often via hologram. Miranda is very well traveled and has many contacts, extending from Citadel space and the Terminus Systems, to as far as the hostile Nemean Abyss. Her vast network of contacts may be explained by the fact Miranda is a known Cerberus operative, one who still has friends — or at least friends of friends — in the Alliance military.",
      class: 'Cerberus Officer',
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: true,
      age: 35,
      like: 0,
    },
    {
      characterId: 13,
      name: 'Mordin Solus',
      gender: 'Male',
      race: 'Salarian',
      img: 'https://static.wikia.nocookie.net/masseffect/images/6/67/Mordin_Character_Box.png',
      quote: 'Had to be me. Someone else might have gotten it wrong.',
      description:
        'Mordin Solus is a salarian geneticist, professor, and a former operative of the Special Tasks Group, where he performed reconnaissance and participated in the modification of the genophage. In 2185, he is recruited by Commander Shepard to assist in a high-risk mission against the Collectors. Mordin has a moral character best described as consequentialist, believing the ends justify the means, though he dislikes taking life without good cause. His actions are often guided by an impersonal logic, refusing to let his conscience, personal, and emotional connections cloud his judgment of what he believes is truly best in the big picture. Though he is affable, quick-talking and friendly, Mordin bears physical scars of his time in the STG and is still handling the consequences of his past.',
      class: 'Salarian Scientist',
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 35,
      like: 0,
    },
    {
      characterId: 14,
      name: 'Samara',
      gender: 'Feminine',
      race: 'Asari',
      img: 'https://static.wikia.nocookie.net/masseffect/images/9/93/Samara_Character_Box.png',
      quote:
        'By the code, I will serve you, Shepard. Your choices are my choices. Your morals are my morals. Your wishes are my code.',
      description:
        'Samara is a nearly thousand-year-old asari justicar, a member of an ancient monastic order following a strict honor code. Though she is skilled with weapons, Samara usually relies on her powerful biotic abilities.',
      class: 'Asari Justicar',
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: true,
      age: 1022,
      like: 0,
    },
    {
      characterId: 15,
      name: 'Thane Krios',
      gender: 'Male',
      race: 'Drell',
      img: 'https://static.wikia.nocookie.net/masseffect/images/8/81/Thane_Character_Box.png',
      quote:
        'The measure of an individual can be difficult to discern by actions alone.',
      description:
        'Thane Krios is a drell assassin, rumored to be the most skilled in the galaxy. Unlike most assassins, who prefer to snipe their targets from a distance, Thane prefers to get up close and kill his target personally, utilizing a mixture of stealth, firearms, hand-to-hand combat and biotic abilities. Despite his profession, Thane is a deeply spiritual man who prays for success in his missions. Thane asks for forgiveness after each kill, even going as far as to ignore those in his immediate vicinity until he is finished doing so.',
      class: 'Drell Assassin',
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 39,
      like: 0,
    },
    {
      characterId: 16,
      name: 'Zaeed Massani',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/8/8d/Zaeed_Character_Box.png',
      quote: 'Rage is a hell of an anesthetic.',
      description:
        'Zaeed Massani is a feared, respected bounty hunter and mercenary soldier. Cerberus has contracted Zaeed to assist Commander Shepard in the mission to save mankind. In exchange, Zaeed requires help to complete another mission he had accepted beforehand, which is to liberate an Eldfell-Ashland Energy refinery from Blue Suns control.',
      class: 'Mercenary Veteran',
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 70,
      like: 0,
    },
    {
      characterId: 17,
      name: 'EDI',
      gender: 'Feminine Programming',
      race: 'A.I.',
      img: 'https://static.wikia.nocookie.net/masseffect/images/8/88/Edi-robot-body-me3.png',
      quote: 'I always work at optimal capacity.',
      description:
        "Following Shepard's defection from Cerberus, EDI aided the crew in eluding the Illusive Man by blocking his technicians' attempts to track the ship. When the Normandy SR-2 is placed in the Alliance's possession, EDI pretended to be a simple VI to hide her true nature out of concerns that Alliance engineers would attempt to remove her. She established the fiction that she would only respond to Joker's commands, so they often brought him on board under guard. When Earth was invaded, she hacked the docking clamps and escaped with Joker.",
      class: 'Unshackled AI',
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 'unknown',
      like: 0,
    },
    {
      characterId: 18,
      name: 'James Vega',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/9/94/James_Vega_Character_Box.png',
      quote: "Adrenaline's better than oxygen any day.",
      description:
        "Lieutenant James Vega is a human Systems Alliance Marine and a member of Commander Shepard's squad in 2186. While Vega is an experienced soldier, he is unfamiliar with the seedy underbelly and political workings of the galaxy.",
      class: 'Arms Master',
      appearance: ['Mass Effect 3'],
      isRomanceable: false,
      age: 27,
      like: 0,
    },
    {
      characterId: 19,
      name: 'Javik',
      gender: 'Male',
      race: 'Prothean',
      img: 'https://static.wikia.nocookie.net/masseffect/images/9/90/Javik_face_charbox_shot.png',
      quote:
        'Stand amongst the ashes of a trillion dead souls, and ask the ghosts if honor matters. The silence is your answer.',
      description:
        'Javik is the only known survivor of the ancient Prothean race. After being preserved in stasis for over 50,000 years, he is revived and seeks to wreak vengeance on the Reapers for the demise of his people.',
      class: 'Vengeful Ancient',
      appearance: ['Mass Effect 3'],
      isRomanceable: true,
      age: 50186,
      like: 0,
    },
    {
      characterId: 20,
      name: 'Richard L. Jenkins',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/9/9b/Jenkins_ME_charshot.png',
      quote: 'That was awesome!',
      description:
        "Corporal Richard L. Jenkins is an Alliance Marine under the command of Captain Anderson, and a member of the SSV Normandy's crew. Jenkins was born in a rural district of Eden Prime, and dreamed of visiting more urban areas before he decided to become a Marine, stating that 'even paradise gets boring.' After enlisting, he wanted to prove himself as a notable soldier and test himself in combat. Jenkins envies Commander Shepard's impressive record. He also admires the Spectres, though his views of them seem to be coloured more by vids than by experience. He is especially impressed by Nihlus Kryik, after hearing the story that Nihlus once defeated an entire platoon single-handed.",
      class: 'Soldier',
      appearance: ['Mass Effect'],
      isRomanceable: false,
      age: 29,
      like: 0,
    },
    {
      characterId: 21,
      name: 'Nyreen Kandros',
      gender: 'Female',
      race: 'Turian',
      img: 'https://static.wikia.nocookie.net/masseffect/images/f/f0/NyreenHoodless.png',
      quote:
        "Whatever you're here for, the answer is no. Kindly escort yourselves off Talon territory.",
      description:
        "Nyreen Kandros is the leader of the Talons mercenary organization on Omega in 2186. Unlike the group's previous leader, Nyreen has a strong moral compass and extensive military experience, traits which gave her the skills necessary to convert the Talons from a lawless gang to a highly disciplined operation devoted to aiding and protecting Omega's civilians.",
      class: 'Turian Huntress',
      appearance: ['Mass Effect 3'],
      isRomanceable: false,
      age: 22,
      like: 0,
    },
    {
      characterId: 22,
      name: 'David Anderson',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/3/33/Anderson_Character_Box.png',
      quote:
        'I know Saren. I know his reputation, his politics. He believes humans are a blight on the galaxy. This attack was an act of war.',
      description:
        "Captain David Edward Anderson is a human war hero and the original captain of the SSV Normandy. Anderson was born on June 8, 2137 to Ursula and Paul Anderson, a nurse and flight mechanic respectively, in the city of London on Earth, and was the last of three children by his parents' second marriage. Anderson is one of the Alliance's most decorated special forces operatives, and the first to graduate from the N7 marine program at Arcturus Station, serving with honor in the First Contact War.",
      appearance: ['Mass Effect', 'Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: true,
      age: 48,
      like: 0,
    },
    {
      characterId: 23,
      name: 'Dr. Chakwas',
      gender: 'Female',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/c/c0/Chakwas_ME_charbox.png',
      quote:
        "Maybe it's less about leaving and more about staying. As a military doctor, I mostly treat people who are in bad shape. Often they die. And if I *can* help them, they move on. Either way, they leave.",
      description:
        "Major Dr. Karin Chakwas is the human doctor of the SSV Normandy. She enlisted in the Alliance soon after she graduated from medical school, seeking 'exotic adventure', though she quickly realized that military life was not as romantic as she had imagined it to be. However, she stayed with the Alliance in order to do her duty and serve humanity. Though she sometimes considers starting her own private practice, or going to work at a medical center on one of the colonies, she feels that 'there is something special about working on soldiers', and believes she would be abandoning them if she did not stay. Like most Alliance doctors, she has taken courses in alien biology, enabling her to treat the non-human crew members, particularly Liara and Garrus. Commander Shepard can replenish the squad's medi-gel stocks from the infirmary where she is usually working.",
      appearance: ['Mass Effect', 'Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 41,
      like: 0,
    },
    {
      characterId: 24,
      name: "Jeff 'Joker' Moreau",
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/a/a6/Joker_Character_Box.png',
      quote:
        'I’m not good. I’m not even great. I’m the best damn helmsman in the Alliance fleet.',
      description:
        "Flight Lieutenant Jeff 'Joker' Moreau is the pilot of the SSV Normandy. Joker is an excellent pilot and confident to the point of arrogance, wasting no time in pointing out his prowess to others. He's quick to ensure everyone knows his many accomplishments and commendations were all earned, and not due to charity for his medical problems..",
      appearance: ['Mass Effect', 'Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 29,
      like: 0,
    },
    {
      characterId: 25,
      name: 'Donnel Udina',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/5/54/Udinacharactershot.png',
      quote: 'The galaxy needs leadership. Real leadership.',
      description:
        "Ambassador Donnel Udina is a human diplomat stationed at the Citadel. He is humanity's most recent ambassador to the Council races (the first was Anita Goyle) and is determined to advance human interests wherever possible. Udina is mistrustful or at least apprehensive of Commander Shepard, particularly after the Commander's induction into the Spectres. Udina often requires solid, irrefutable proof of anything before acting, a trait which often conflicts with Shepard's goals. Udina plays the political game, refusing to rock the boat if it might endanger his standing—and therefore humanity's—with the Citadel Council.",
      appearance: ['Mass Effect', 'Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: true,
      age: 49,
      like: 0,
    },
    {
      characterId: 26,
      name: "Aria T'Loak",
      gender: 'Feminine',
      race: 'Asari',
      img: 'https://static.wikia.nocookie.net/masseffect/images/9/90/Aria_ME2_charshot.png',
      quote: 'I am Omega.',
      description:
        "Aria T'Loak is the de facto ruler of Omega, the nominal capital of the Terminus Systems. Also known as the 'Pirate Queen' of Omega, Aria is fiercely possessive of the space station and will do anything to protect it and maintain her dominance.",
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: true,
      age: 997,
      like: 0,
    },
    {
      characterId: 27,
      name: 'EDI',
      gender: 'Feminine Programming',
      race: 'A.I.',
      img: 'https://static.wikia.nocookie.net/masseffect/images/c/cc/EDI_Character_Box.png',
      quote: 'I always work at optimal capacity.',
      description:
        "The Enhanced Defense Intelligence, or EDI (pronounced 'Ee-Dee' [ˈiːdiː]), is an AI created by Cerberus and installed aboard the Normandy SR-2. She is represented visually by a holographic blue sphere and aurally with a feminine voice at various terminals throughout the ship where she can provide basic information about the Normandy and Cerberus.",
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 'unknown',
      like: 0,
    },
    {
      characterId: 28,
      name: 'The Illusive Man',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/7/7a/Illusive_Man.png',
      quote:
        'Salvation comes with a cost. Judge us not by our methods, but by what we seek to accomplish.',
      description:
        "The Illusive Man is the elusive, secretive, and well informed leader of Cerberus. He has close-cropped silver-grey hair with 'steely blue' eyes which appear to be prosthetic. The Illusive Man's real name and his life before Cerberus are both long forgotten by most. For years, the Illusive Man has been using Cerberus and his immense network of contacts to achieve his goal - that of making humanity ascendant above all other races. He is described as having the best and worst traits of humanity rolled into one man.",
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: true,
      age: 45,
      like: 0,
    },
    {
      characterId: 29,
      name: 'Kelly Chambers',
      gender: 'Female',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/4/42/Kelly_ME2_boxshot.png',
      quote: 'Character matters, not race or gender.',
      description:
        "Kelly Chambers is Commander Shepard's yeoman on the Normandy SR-2 in 2185. In addition to her duties as yeoman, she is also a psychologist and will offer insight into each new addition to the squad. She is a potential romance partner for either a male or female Shepard.",
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 27,
      like: 0,
    },
    {
      characterId: 30,
      name: 'Diana Allers',
      gender: 'Female',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/f/f8/ME3_Diana_Allers.png',
      quote: "Well, I can't refuse an exclusive.",
      description:
        "Diana Allers is a human Alliance News Network war correspondent and regular on the Alliance News Network's 'Battlespace'. She is originally from Milgrom, Bekenstein, and considers herself a 'colony kid'.",
      appearance: ['Mass Effect 3'],
      isRomanceable: true,
      age: 28,
      like: 0,
    },
    {
      characterId: 31,
      name: 'Armando-Owen Bailey',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/6/6f/Captain_Bailey_ME2.png',
      quote:
        "You'll have to make him scream a little. He's not going to tell you everything just 'cause you ask.",
      description:
        'Armando-Owen Bailey is a human C-Sec officer stationed in the Zakera Ward of the Citadel in 2185 and early 2186.',
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 40,
      like: 0,
    },
    {
      characterId: 32,
      name: 'Steve Cortez',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/9/99/ME3_Steven_Cortez.png',
      quote: "When I'm in that pilot seat, I'm there 100%. I won't fail you.",
      description:
        'Lieutenant Steve Cortez is an Alliance pilot aboard the Normandy SR-2 in 2186, where he pilots the UT-47A Kodiak that transports Commander Shepard and squad to mission locations.',
      appearance: ['Mass Effect 3'],
      isRomanceable: true,
      age: 38,
      like: 0,
    },
    {
      characterId: 33,
      name: 'Gabriella Daniels',
      gender: 'Female',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/4/42/Kelly_ME2_boxshot.png',
      quote:
        "Come on Kenneth. The Commander doesn't want to play cards with grease monkeys like us.",
      description:
        "Gabriella 'Gabby' Daniels is a former Alliance engineer. She is a Cerberus operative in the Lazarus Cell and an engineer aboard the Normandy SR-2 in 2185. Gabby is more serious and formal than her fellow engineer and best friend Kenneth Donnelly, often preferring to go straight to the point while her partner takes time to explain everything.",
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: true,
      age: 25,
      like: 0,
    },
    {
      characterId: 34,
      name: 'Kenneth Donnelly',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/5/55/Kenneth.png',
      quote:
        "I'm just saying I'm feeling a wee bit threatened here. A lot of female energy, and I'm just one man.",
      description:
        'Kenneth Donnelly is a former Alliance engineer. He is a Cerberus operative in the Lazarus Cell and an engineer aboard the Normandy SR-2 in 2185.',
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 32,
      like: 0,
    },
    {
      characterId: 35,
      name: 'Eve',
      gender: 'Female',
      race: 'Krogan',
      img: 'https://static.wikia.nocookie.net/masseffect/images/3/3a/ME3_Eve.png',
      quote: 'In the darkest hour, there is always a way out.',
      description:
        "Eve, as named by Mordin Solus or Padok Wiks, also known as Urdnot Bakara, is a female krogan shaman. Eve is the only survivor of Maelon's experiments on Tuchanka in 2185 to cure the genophage. She, along with a number of other female krogan, were recovered by the salarian Special Tasks Group after it was shut down and transferred to Sur'Kesh.",
      appearance: ['Mass Effect 3'],
      isRomanceable: true,
      age: 427,
      like: 0,
    },
    {
      characterId: 36,
      name: 'Admiral Steven Hackett',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/c/c7/Hackett.png',
      quote:
        'Never before have so many come together--from all quarters of the galaxy. But never before have we faced an enemy such as this. The Reapers will show us no mercy. We must give them no quarter. They will terrorize our populations. We must stand fast in the face of that terror. They will advance until our last city falls, but we will not fall. We will prevail. Each of us will be defined by our actions in the coming battle. Stand fast. Stand strong. Stand together. Hackett out.',
      description:
        'Admiral Steven Hackett is a top-ranking official of the Alliance Navy and commanding officer of the Fifth Fleet. He is based at Arcturus Station.',
      appearance: ['Mass Effect', 'Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 62,
      like: 0,
    },
    {
      characterId: 37,
      name: 'Samantha Traynor',
      gender: 'Female',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/7/7e/ME3_Samantha_Traynor_Character_Shot.png',
      quote:
        "And if flagging your messages and managing strategic intel helps you in any way, then it's worth it.",
      description:
        'Specialist Samantha Traynor is the Comm Specialist aboard the Alliance Normandy SR-2, serving in a similar role to that of her predecessor, Yeoman Kelly Chambers.',
      appearance: ['Mass Effect 3'],
      isRomanceable: false,
      age: 30,
      like: 0,
    },
    {
      characterId: 38,
      name: 'Urdnot Wreav',
      gender: 'Male',
      race: 'Krogan',
      img: 'https://static.wikia.nocookie.net/masseffect/images/7/72/Tuchanka_-_wreav_being_boss.png',
      quote:
        'Those females are immune to the genophage, and they belong to me!',
      description:
        "Urdnot Wreav is Wrex's broodbrother, both of them having shared the same mother but born a decade apart. He becomes the leader of Clan Urdnot if Wrex dies on Virmire. He is more traditional than Wrex, placing the importance on his own clan over the krogan race as a whole.",
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 1300,
      like: 0,
    },
    {
      characterId: 39,
      name: 'Saren Arterius',
      gender: 'Male',
      race: 'Turian',
      img: 'https://static.wikia.nocookie.net/masseffect/images/3/37/Virmire_Saren_Fueltank_Full_Shot_Cropped.png',
      quote: 'Your species needs to learn its place, Shepard.',
      description:
        "Saren Arterius, born 2139, is the longest serving turian member of the Spectres, the elite operatives answering directly to the Citadel Council. For 24 years, he has been an agent of the Council's will, a zealous defender of galactic stability in the unsettled border region of the Skyllian Verge.",
      appearance: ['Mass Effect'],
      isRomanceable: true,
      age: 44,
      like: 0,
    },
    {
      characterId: 40,
      name: 'Matriarch Benezia',
      gender: 'Femanine',
      race: 'Asari',
      img: 'https://static.wikia.nocookie.net/masseffect/images/8/87/Matriarch_Benezia_charbox.png',
      quote:
        'You do not know the privilege of being a mother. There is power in creation. To shape a life… turn it toward happiness or despair…',
      description:
        "Matriarch Benezia is a very powerful asari biotic and spiritual leader among her people. She is also Liara T'Soni's mother, though the two have not spoken in years. When the evidence that proved Saren Arterius was responsible for the Eden Prime attack also proved Benezia was working alongside him, it surprised those who knew her, as Benezia's actions seemed to be completely out of character.",
      appearance: ['Mass Effect'],
      isRomanceable: false,
      age: 845,
      like: 0,
    },
    {
      characterId: 41,
      name: 'Sovereign',
      gender: 'A.I.',
      race: 'Reaper',
      img: 'https://static.wikia.nocookie.net/masseffect/images/2/25/Sovereign_charshot.png',
      quote:
        'We impose order on the chaos of organic evolution. You exist because we allow it, and you will end because we demand it.',
      description:
        "Sovereign is the flagship of the rogue Spectre Saren Arterius. An enormous dreadnought larger than any other ship in any known fleet, Sovereign is crewed with both geth and krogan. At two kilometers long, its spinal-mounted main gun is likely capable of penetrating another dreadnought's kinetic barriers with a single shot. The prevailing opinion is that Sovereign is a geth construct, while others believe it is a Prothean relic. Its design, however, hints at a more alien and mysterious origin. The attack on Eden Prime demonstrated Sovereign's ability to generate mass effect fields powerful enough to land on a planetary surface. This implies it has a massive element zero core, and the ability to generate staggering amounts of power..",
      appearance: ['Mass Effect'],
      isRomanceable: false,
      age: 'unknown',
      like: 0,
    },
    {
      characterId: 42,
      name: 'The Collector General',
      gender: 'Unknown',
      race: 'Collector',
      img: 'https://static.wikia.nocookie.net/masseffect/images/3/3c/Collectors_Leader_Character_Shot.png',
      quote: 'I am assuming direct control.',
      description:
        "The Collector General was a unique Collector who controlled the rest of the Collectors from the Collector Base. Like all Collectors, the General was a victim of Harbinger's indoctrination up until its death at the hands of Shepard and the Commander's squad.",
      appearance: ['Mass Effect 2'],
      isRomanceable: true,
      age: 21,
      like: 0,
    },
    {
      characterId: 43,
      name: 'Harbinger',
      gender: 'A.I.',
      race: 'Reaper',
      img: 'https://static.wikia.nocookie.net/masseffect/images/d/d8/Harby_ME2_holopearance.png',
      quote:
        'That which you know as Reapers are your salvation through destruction.',
      description:
        "Harbinger is a Reaper who resides in dark space with the rest of the Reaper fleet. It is the overseer of the Collectors' operations, frequently possessing individual Collectors to fight battles personally. Harbinger's involvement first began two months after the Battle of the Citadel, when it made a deal with the Shadow Broker to gain possession of Commander Shepard's body following the destruction of the SSV Normandy. This did not succeed, however, and Shepard would go on to be resurrected by the Lazarus Project while Harbinger advanced its sinister plans for the galaxy.",
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 'unknown',
      like: 0,
    },
    {
      characterId: 44,
      name: 'The Shadow Broker',
      gender: 'Male',
      race: 'Yahg',
      img: 'https://static.wikia.nocookie.net/masseffect/images/7/7c/Yahgbroker.png',
      quote: 'I know your every secret, while you fumble in the dark.',
      description:
        'The Shadow Broker is an enigmatic figure at the head of an expansive organization which trades in information, always selling to the highest bidder. The Shadow Broker appears to be highly competent at its trade: all secrets that are bought and sold never allow one customer of the Broker to gain a significant advantage, forcing the customers to continue trading information to avoid becoming disadvantaged, allowing the Broker to remain in business.',
      appearance: ['Mass Effect 2'],
      isRomanceable: true,
      age: 48,
      like: 0,
    },
    {
      characterId: 45,
      name: 'Maya Brooks',
      gender: 'Female',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/1/10/Maya_mugshot.png',
      quote: 'I know your every secret, while you fumble in the dark.',
      description:
        "Maya Brooks is a former Cerberus operative who left the organization to pursue her own pro-human agenda. Her true name is unknown; 'Maya Brooks' is an admitted alias, and she has used at least three other names while working with Cerberus: 'Captain Channing', 'Hope Lilium', and 'Rasa'. Accomplished at infiltration and espionage, Brooks specializes in throwing numerous distractions at her adversaries while she stealthily completes her objectives.",
      appearance: ['Mass Effect 3'],
      isRomanceable: false,
      age: 32,
      like: 0,
    },
    {
      characterId: 46,
      name: 'Catalyst',
      gender: 'Artificial Intelligence',
      race: 'Artificial Intelligence',
      img: 'https://static.wikia.nocookie.net/masseffect/images/c/c2/Catalyst_kid.png',
      quote:
        'When fire burns, is it at war? Is it in conflict? Or is it simply doing what it was created to do? We are no different.',
      description:
        'The Catalyst, also known as the Intelligence, is an ancient artificial intelligence that resides within the Citadel. It embodies the collective consciousness and memories of the Reapers, and thus countless ancient civilizations. Before being encountered by Commander Shepard, the Catalyst was believed to be the final component necessary to complete the Crucible, and was mistakenly thought to be the Citadel itself.',
      appearance: ['Mass Effect 3'],
      isRomanceable: false,
      age: 'unknown',
      like: 0,
    },
    {
      characterId: 47,
      name: 'The Illusive Man',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/8/85/Illusive_man_modified.png',
      quote:
        "Where you see a means to destroy, I see a way to control--to dominate and harness the Reapers' power. Imagine how strong humanity would be if we controlled them.",
      description:
        "In 2186, during the Reaper invasion, the Illusive Man appears via hologram on Mars before Shepard and Liara, who were on Mars in search of a Prothean superweapon. He began criticizing the Alliance for squandering their precious time researching the Prothean Archives and reveals his intention to use the information to devise a way to dominate the Reapers and use their advanced technology for humanity's benefit.",
      appearance: ['Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: true,
      age: 47,
      like: 0,
    },
    {
      characterId: 48,
      name: 'Kai Leng',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/0/0e/Kai_Leng_Profile.jpg',
      quote: 'Cerberus thanks you for all your hard work.',
      description:
        'Kai Leng is an assassin working for the human-survivalist organization Cerberus. Leng was formerly a lieutenant and N7 marine in the Systems Alliance known for having anti-alien attitudes. He is described as being Earth-born with features that show his dominant Chinese heritage.',
      appearance: ['Mass Effect 3'],
      isRomanceable: true,
      age: 22,
      like: 0,
    },
    {
      characterId: 49,
      name: 'Henry Lawson',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/e/e5/ME3_Henry_Lawson.png',
      quote: '',
      description:
        "Henry Lawson is the father of Miranda Lawson and her genetic twin, Oriana. Lawson is a powerful businessman who was obsessed with securing a way to make his mark on history - namely, by creating a 'genetic dynasty'. Rather than have a normal family, Henry took his own DNA and doubled his X chromosome to create a daughter, Miranda, whom he ensured would have 'desirable traits.' Miranda was not the first offspring engineered in such a way, but she was the first one Henry kept.",
      appearance: ['Mass Effect 3'],
      isRomanceable: false,
      age: 33,
      like: 0,
    },
    {
      characterId: 50,
      name: 'Mysterious Figure',
      gender: 'Male or Female',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/4/49/Mysterious_Figure_%28static%29.png',
      quote:
        'Look at you. What makes you so damned special? Why you and not me?',
      description:
        "The Mysterious Figure is an individual who hires a mercenary group to assassinate Commander Shepard whilst the Normandy crew is docked on the Citadel for shore leave in 2186. This person takes a particular interest in stealing Shepard's identity, and hides behind voice and visual disguisers to protect theirs.",
      appearance: ['Mass Effect 3'],
      isRomanceable: false,
      age: 'unknown',
      like: 0,
    },
    {
      characterId: 51,
      name: 'Oleg Petrovsky',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/6/6a/ME3-Oleg-Petrovsky.png',
      quote:
        'We all sabotage ourselves in nefarious ways. Perhaps deep down you fear success.',
      description:
        "Oleg Petrovsky is a Cerberus general. He is an experienced and formidable military strategist, as well as a classical scholar with a deep knowledge of military history. Viewing the path that humanity is taking and the looming danger of the Reapers in that context, Petrovsky is concerned about humanity's future and strongly supportive of Cerberus' plans.",
      appearance: ['Mass Effect 3'],
      isRomanceable: false,
      age: 52,
      like: 0,
    },
    {
      characterId: 52,
      name: 'Donnel Udina',
      gender: 'Male',
      race: 'Human',
      img: 'https://static.wikia.nocookie.net/masseffect/images/9/9b/ME3_Udina_Embassies_Office.png',
      quote:
        "They're a bunch of self-concerned jackasses, Shepard. We may have a spot on the Council, but humanity will always be considered second-rate.",
      description:
        "Udina's desperation leads him to a deal with Cerberus to instigate a bloodless coup of the Citadel, arrest the Council and force them to grant him the emergency power necessary to order all Citadel forces to Earth.",
      appearance: ['Mass Effect', 'Mass Effect 2', 'Mass Effect 3'],
      isRomanceable: false,
      age: 32,
      like: 0,
    },
  ],
  planets: [
    {
      planetId: 0,
      name: 'Thessia',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/9/9f/Thessia.png/revision/latest/scale-to-width-down/410?cb=20120325064844',
      description:
        "The asari homeworld has been called the 'crown jewel of the galaxy,' the 'apex of democracy,' and the 'beating heart of galactic love.' Its republics have a remarkably low incidence of war, disease, violent crime or famine, riding a stable economy backed by wealthy colonies and Thessia's vast element zero reserves. Traces of eezo in the water and soil are so common that most life on Thessia has adapted to its presence.",
      homeRace: 'Asari',
    },
    {
      planetId: 1,
      name: 'Rakhana',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/2/27/Codex_Rakhana.png/revision/latest/scale-to-width-down/512?cb=20100613042801',
      description:
        "Rakhana in the present day is a dry and barren planet covered in rocky deserts. Around the 1380s CE, disastrous industrial expansion began to ruin the planet's sustainability over the next few centuries. The drell numbered 11 billion at their height, but they lacked the means to escape their homeworld. Fortunately, the hanar made first contact with the drell around the 1980s CE, and over the following decade they evacuated thousands of drell to their own homeworld, Kahje. The remaining billions left on Rakhana gradually perished on their dying planet, warring against each other for diminishing resources. Rakhana nowadays is a cemetery world, home to only a few thousand drell living in clusters never exceeding a few hundred; during pilgrimage season the population can double.",
      homeRace: 'Drell',
    },
    {
      planetId: 2,
      name: 'Dekuuna',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/b/be/Dekuuna.png/revision/latest/scale-to-width-down/520?cb=20120325071100',
      description:
        "The elcor homeworld, Dekuuna, overflows with natural resources protected by law, from large deposits of precious metals to vast forests. The elcor themselves live in rich grasslands near the equator. The majority of Dekuuna's settlements are tucked within this belt, as the conservative elcor feel little desire to build outside their comfort zone. Their twin capitals are for migrations from the wet season to the dry season, a tradition made obsolete by modern technology but still observed.",
      homeRace: 'Elcor',
    },
    {
      planetId: 3,
      name: 'Kahje',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/c/cc/Homeworlds_Kahje.png/revision/latest?cb=20120830032145',
      description: 'Kahje is the homeworld of the hanar.',
      homeRace: 'Hanar',
    },
    {
      planetId: 4,
      name: 'Earth',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/d/d1/Earth_%28orbit%29.png/revision/latest/scale-to-width-down/1000?cb=20140921173727',
      description:
        'The homeworld and capital of humanity is entering a new golden age. The resource wealth of a dozen settled colonies and a hundred industrial outposts flows back to Earth, fueling great works of industry, commerce, and art. The great cities are greening as arcology skyscrapers and telecommuting allow more efficient use of land. Earth is still divided among nation-states, though all are affiliated beneath the overarching banner of the Systems Alliance. While every human enjoys longer and better life than ever, the gap between rich and poor widens daily. Advanced nations have eliminated most genetic disease and pollution. Less fortunate regions have not progressed beyond 20th century technology, and are often smog-choked, overpopulated slums.',
      homeRace: 'Human',
    },
    {
      planetId: 5,
      name: 'Citadel',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/a/a9/Galaxy_Map_-_Citadel.png/revision/latest/scale-to-width-down/512?cb=20191127162904',
      description:
        "Supposedly constructed by the long-extinct Protheans, this colossal deep-space station serves as the capital of the Citadel Council. Gravity is simulated through rotation, and is a comfortable 1.02 standard G's on the Wards and a light 0.3 standard G's on the Presidium Ring.",
      homeRace: 'Keepers',
    },
    {
      planetId: 6,
      name: "Sur'Kesh",
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/2/22/Sur%27Kesh.png/revision/latest?cb=20120414113615',
      description:
        "The salarian homeworld has been likened to the jungles of Earth: pretty to look at, teeming with life, uncomfortable to live in and dangerous to the unwary. The technophilic salarians had significant pollution and waste problems early in the development of their society. They also embraced social solutions just as quickly, and through complex breeding rules, Sur'Kesh now maintains a crowded but sustainable population. The planet tends to be wetter than Earth, and salarian cities spare no expense to collect and provide fresh water, as one might expect from an amphibious species.",
      homeRace: 'Salarian',
    },
    {
      planetId: 7,
      name: 'Palaven',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/2/24/Palaven.jpg/revision/latest/scale-to-width-down/723?cb=20120311103230',
      description:
        "'The only thing on this planet that isn't silver are the turians. It's all too clear they're made of steel.' These were Alliance hero Jon Grissom's impressions of the turian homeworld Palaven, seen by humans for the first time following the First Contact War. The turians' martial attitude permeates every aspect of Palaven society, from architecture to art to politics. It's no surprise that their homeworld was never occupied by an invading force until now.",
      homeRace: 'Turian',
    },
    {
      planetId: 8,
      name: 'Irune',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/8/84/Irune.png/revision/latest/scale-to-width-down/554?cb=20120326000656',
      description:
        "The volus homeworld is a high-pressure, high-gravity planet that supports an ammonia-based ecology. This rare environment means that the volus have been slow to colonize, as there are few planets that meet their habitation requirements. Most prefer to stay on Irune, working remotely via the extranet. The more adventurous don the clumsy but vital pressure suits and venture out to worlds in Citadel space to make their fortunes. Irune is remarkable for having done away with warfare as an institution of the state. Volus culture lacks the romantic view of war found in the galaxy's more aggressive species. Physical skirmishes between groups rarely last long, and are almost always ended by social castigation, bargaining agreements, or harsh economic sanctions.",
      homeRace: 'Volus',
    },
    {
      planetId: 9,
      name: "Khar'shan",
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/9/9d/Khar%27shan.png/revision/latest/scale-to-width-down/557?cb=20120413113732',
      description:
        "Khar'shan, the batarian homeworld, is wrapped less in mystery than in outright lies. Batarian propaganda claims the world has 15 billion inhabitants and an economy that rivals the asari. Although the legal slave trade does boost the batarians' profits somewhat, Citadel sanctions have left a paper tiger of an empire, one that fights rivals through deniable terrorist actions rather than the wars of its heyday centuries ago.",
      homeRace: 'Batarian',
    },
    {
      planetId: 10,
      name: 'Rannoch',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/f/f9/Rannoch.png/revision/latest/scale-to-width-down/450?cb=20120325061536',
      description:
        "Although its orange sun is only about 90% the mass of Sol and half as luminous, Rannoch is arid by Earth standards because it formed closer to its star and has slightly less ocean coverage. Photosynthetic life is concentrated around rivers and oceans, with large expanses of desert in between. The importance of plant life and shade in ancient quarian culture is evident in the translation of Rannoch's name--'walled garden.'",
      homeRace: 'Quarian',
    },
    {
      planetId: 11,
      name: 'Tuchanka',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/1/1e/TuchankaME2M.png/revision/latest/scale-to-width-down/677?cb=20100215203033',
      description:
        "Scarred by bombardment craters, radioactive rubble, choking ash, salt flats, and alkaline seas, Tuchanka can barely support life. Thousands of years ago, life grew in fierce abundance under the F-class star Aralakh (a Raik clan word meaning 'Eye of Wrath'). Tree-analogues grew in thick jungles, their roots growing out of shallow, silty seas. Life fed upon life in an evolutionary crucible. This world died in nuclear firestorms after the krogan split the atom. A 'little ice age' of nuclear winter killed off much of the remaining plant life. In recent centuries, many krogan have returned to their homeworld. The reduced albedo has caused global temperatures to rise. In order to maintain livable temperatures, a vast shroud was assembled at the L1 Lagrange point. It is maintained by the Council Demilitarization Enforcement Mission (CDEM), which is based on orbiting battlestations.",
      homeRace: 'Krogan',
    },
    {
      planetId: 12,
      name: '2181 Despoina',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/7/7b/2181_despoina.png/revision/latest/scale-to-width-down/800?cb=20120829134311',
      description:
        'This planet was only spotted recently by human space probes, and no records indicate it has been explored since. Scans indicate it is covered in an ocean of liquid water and has a nitrogen-oxygen atmosphere. It is highly likely to have at least some photosynthetic life.',
      homeRace: 'Leviathan',
    },
    {
      planetId: 13,
      name: 'Heshtok',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/6/6a/Heshtok.png/revision/latest/scale-to-width-down/800?cb=20120829170341',
      description:
        "A Systems Alliance official once summarized his tour of the vorcha homeworld as follows: 'You can make your own Heshtok in two steps: take hell, then add vorcha.' The planet is highly volcanically active, leading to periodic releases of toxic gases into the air and water supplies, as well as other extreme situations that gave rise to the vorcha's legendary adaptability. Overcrowding and the extermination of most of their ecology led to a planet covered in weeds and hardy vermin. The vorcha do not have a recognized single government that would allow them membership in any galactic league. Alliances between bloodlines are tenuous at best, and the vorcha's short, violent lives ensure there are few lasting institutions",
      homeRace: 'Vorcha',
    },
    {
      planetId: 14,
      name: 'Suen',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/a/ab/Suen.png/revision/latest?cb=20120410200138',
      description:
        "Suen, the rachni homeworld, is tidally locked to the system's red dwarf. With one side constantly bombarded by the sun and the other completely frozen, life evolved in the terminator, the perpetual twilight zone between Suen's two extremes. The rachni mainly foraged underground: Suen's abundant subterranean rivers presented them with a place to thrive. Wrestling with the engineering problems of Suen's extreme surface environment may have given the rachni their first insights into how to build interstellar spacecraft. Suen was the site of the last battle in the Rachni Wars. When krogan forces bombarded the planet, the rachni abandoned their surface buildings for the security of their tunnels. The krogan, resistant to Suen's toxic atmosphere, carried weapons of mass destruction into the secret chambers of the rachni queens and detonated explosions so powerful the sinkholes are still visible today.",
      homeRace: 'Rachni',
    },
  ],
  races: [
    {
      racesId: 0,
      name: 'Asari',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/b/b9/New_Asari_Races_Page_Image.png/revision/latest/scale-to-width-down/338?cb=20100109173631',
      description:
        'The asari, native to the planet Thessia, are often considered the most influential and respected sentient species in the galaxy, and are known for their elegance, diplomacy, and biotic aptitude. This is partly due to the fact that the asari were among the earliest races to achieve interstellar flight after the Protheans, and the first to discover and settle the Citadel. A mono-gender race, the asari are distinctly feminine in appearance and possess maternal instincts. Their unique physiology, expressed in a millennium-long lifespan and the ability to reproduce with a partner of any gender or species, gives them a conservative yet convivial attitude toward other races. Favoring compromise and cooperation over conflict, the asari were instrumental in proposing and founding the Citadel Council and have been at the heart of galactic society ever since.',
      homeWorld: 'Thessia',
      colonyPlanets: ['Illium', 'Nevos'],
      notableCharacters: [
        'Matriarch Benezia',
        'Councilor Revos',
        'Morinth',
        'Samara',
        "Aria T'Loak",
        "Liara T'Soni",
      ],
    },
    {
      racesId: 1,
      name: 'Drell',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/2/26/Drell.png/revision/latest/scale-to-width-down/443?cb=20091123062035',
      description:
        'The drell are a reptile-like race that were rescued from their dying homeworld by the hanar following first contact between the two. Since then, the drell have remained loyal to the hanar for their camaraderie and have fit comfortably into galactic civilization.',
      homeWorld: 'Rakhana',
      colonyPlanets: ['Kahje'],
      notableCharacters: ['Kolyat Krios', 'Thane Krios'],
    },
    {
      racesId: 2,
      name: 'Elcor',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/4/40/ElcorX2.png/revision/latest/scale-to-width-down/338?cb=20090715023041',
      description:
        'The elcor are a Citadel species native to the high-gravity world Dekuuna. They are massive creatures, standing on four muscular legs for increased stability. Elcor move slowly, an evolved response to an environment where a fall can be lethal. This has colored their psychology, making them deliberate and conservative.',
      homeWorld: 'Dekuuna',
      colonyPlanets: ['Ekuna', 'Oltan', 'Sangel', 'Thunawanuro'],
      notableCharacters: ['Calyn', 'Harrot'],
    },
    {
      racesId: 3,
      name: 'Hanar',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/a/a8/Codex_ME_-_Hanar.png/revision/latest/scale-to-width-down/256?cb=20140820045523',
      description:
        "The hanar are a species resembling Earth's jellyfish and are one of the few non-bipedal Citadel races. Hanar are known for their intense politeness when speaking, and their strong religious beliefs regarding the Protheans, whom they refer to as 'the Enkindlers'.",
      homeWorld: 'Kahje',
      colonyPlanets: ['First Land', 'Belan', 'Rough Tide'],
      notableCharacters: ['The Preaching Hanar'],
    },
    {
      racesId: 4,
      name: 'Humans',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/1/16/Humansmasseffecticon.jpg/revision/latest/scale-to-width-down/338?cb=20100110011026',
      description:
        'Humans, from the planet Earth, are the newest sentient species of notable size to enter the galactic stage and are the most rapidly expanding and developing. They independently discovered a Prothean data cache on Mars in 2148, and the mass relay networks shortly thereafter.',
      homeWorld: 'Earth',
      colonyPlanets: [
        'Eden Prime',
        'Feros',
        'Ferris Fields',
        "Freedom's Progress",
        'Horizon',
        'Jupiter',
        'Luna',
        'Mars',
        'Mercury',
        'Neptune',
        'Terra Nova',
      ],
      notableCharacters: [
        'Kaidan Alenko',
        'David Anderson',
        'Kasumi Goto',
        'Steven Hackett',
        'Illusive Man',
        'Jack',
        'Miranda Lawson',
        'Kai Leng',
        'Zaeed Massani',
        "Jeff 'Joker' Moreau",
        'Commander Shepard',
        'Jacob Taylor',
        'Donnel Udina',
        'James Vega',
        'Ashley Williams',
      ],
    },
    {
      racesId: 5,
      name: 'Keepers',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/e/ea/Keeper_at_Presidium.png/revision/latest?cb=20100914204043',
      description:
        "The keepers are a bio-engineered, insectoid race found only on the Citadel. They are completely docile and harmless, and appear to exist for no other reason than to maintain the Citadel and its systems. The keepers are believed to have been created by the Protheans to serve as caretakers of the station, and have become essential to the Citadel's operation. Very little is known about them, as they do not communicate with other species, and it is against C-Sec regulations to interfere with keeper activity.",
      homeWorld: 'Citadel',
      colonyPlanets: [''],
      notableCharacters: [''],
    },
    {
      racesId: 6,
      name: 'Salarians',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/f/fe/New_Salarian_Races_Page_Image.png/revision/latest/scale-to-width-down/338?cb=20100110011330',
      description:
        "The second species to join the Citadel, the salarians are warm-blooded amphibians native to the planet Sur'Kesh. Salarians possess a hyperactive metabolism; they think fast, talk fast, and move fast. To salarians, other species seem sluggish and dull-witted, especially the elcor. Unfortunately, their metabolic speed leaves them with a relatively short lifespan; salarians over the age of 40 are a rarity. Salarians are known for their observational capability and non-linear thinking. This manifests as an aptitude for research and espionage. They are constantly experimenting and inventing, and it is generally accepted that they always know more than they are letting on.",
      homeWorld: "Sur'Kesh",
      colonyPlanets: ['Gorot II', 'Jaeto', 'Rannadril', 'Mannovai', 'Nasurn'],
      notableCharacters: [
        'Chorban',
        'Ish',
        'Mordin Solus',
        'Councilor Valern',
        'Kirrahe',
      ],
    },
    {
      racesId: 7,
      name: 'Turians',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/5/51/Codex_ME_-_Turians.png/revision/latest/scale-to-width-down/256?cb=20140820034220',
      description:
        'Known for their militaristic and disciplined culture, the turians were the third race to join the Citadel Council. They gained their Council seat after defeating the hostile krogan for the Council during the Krogan Rebellions. The turians deployed a salarian-created biological weapon called the genophage, which virtually sterilised the krogan and sent them into a decline. The turians then filled the peacekeeping niche left by the once-cooperative krogan, and eventually gained a Council seat in recognition of their efforts. Originally from the planet Palaven, turians are best known for their military role, particularly their contributions of soldiers and starships to the Citadel Fleet. They are respected for their public service ethic—it was the turians who first proposed creating C-Sec—but are sometimes seen as imperialist or rigid by other races. There is some animosity between turians and humans, largely due to the turian role in the First Contact War. This bitterness is slowly beginning to heal—as shown by the cooperation of the two races on the construction of the SSV Normandy—but many turians still resent humans, and vice versa.',
      homeWorld: 'Palaven',
      colonyPlanets: ['Invictus'],
      notableCharacters: [
        'Councilor Sparatus',
        'Saren Arterius',
        'Nyreen Kandros',
        'Garrus Vakarian',
      ],
    },
    {
      racesId: 8,
      name: 'Volus',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/a/a2/Codex_ME_-_Volus.png/revision/latest/scale-to-width-down/256?cb=20140820051713',
      description:
        'The volus are an associate race on the Citadel with their own embassy, but are also a client race of the turians. They hail from Irune, which possesses a high-pressure greenhouse atmosphere able to support an ammonia-based biochemistry. As a result, the volus must wear pressure suits and breathers when dealing with other species. Because they are not physically adept compared to most species, volus mostly make their influence felt through trade and commerce, and they have a long history on the Citadel. However, they have never been invited to join the Council, which is a sore point for many volus individuals.',
      homeWorld: 'Irune',
      colonyPlanets: ['Boro', 'Daleon'],
      notableCharacters: ['Barla Von', 'Doran', 'Han Olar', 'Jahleed'],
    },
    {
      racesId: 9,
      name: 'Batarian',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/0/0e/Codex_ME_-_Batarians_%28after_BDTS%29.png/revision/latest/scale-to-width-down/256?cb=20140820044603',
      description:
        "A race of four-eyed bipeds native to the world of Khar'shan, the batarians are a disreputable species that chose to isolate itself from the rest of the galaxy. The Terminus Systems are infested with batarian pirate gangs and slaving rings, fueling the stereotype of the batarian thug. It should be noted that these criminals do not represent average citizens, who are forbidden to leave batarian space by their ubiquitous and paranoid government. Despite several disagreements with the Citadel and simmering hostility toward humans, most batarians prefer profitable pursuits such as drug running and slave grabs to out-and-out warfare. They have a reputation for being shrewd businessmen and merchants, though in more lawless regions of the galaxy like Omega, negotiations with a batarian are likely to be conducted at gunpoint.",
      homeWorld: "Khar'shan",
      colonyPlanets: ['Adek', 'Camala', 'Cholis'],
      notableCharacters: ["Ka'hairal Balak", 'Jella', 'Captain Vorhess'],
    },
    {
      racesId: 10,
      name: 'Collectors',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/5/59/Collector_drones.png/revision/latest/scale-to-width-down/1000?cb=20140628190457',
      description:
        'The Collectors are an enigmatic race that live beyond the Omega 4 Relay, a mass relay within the same system as Omega, in the Terminus Systems. They are rarely seen in the Terminus itself, let alone Citadel space, and are generally regarded as a myth by Citadel citizens. Definite sightings of Collectors have been made on Omega every few centuries.',
      homeWorld: 'Dark Space',
      colonyPlanets: ['Dark Space'],
      notableCharacters: ['The Collector General'],
    },
    {
      racesId: 11,
      name: 'Geth',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/b/b2/New_Geth_Races_Page_Image.png/revision/latest/scale-to-width-down/338?cb=20100130000337',
      description:
        "The geth ('Servant of the People' in Khelish) are a race of networked artificial intelligences that reside beyond the Perseus Veil. The geth were created by the quarians as laborers and tools of war. When the geth became sentient and began to question their masters, the quarians attempted to exterminate them. The geth won the resulting war, and reduced the quarians to a race of nomads.",
      homeWorld: 'Rannoch',
      colonyPlanets: ['Ammut', 'Charoum', 'Haestrom', 'Rannoch'],
      notableCharacters: ['Legion'],
    },
    {
      racesId: 12,
      name: 'Krogan',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/e/e4/Codex_ME_-_Krogan.png/revision/latest?cb=20140820050019',
      description:
        "The krogan are a species of large reptilian bipeds native to the planet Tuchanka, a world known for its harsh environments, scarce resources, and overabundance of vicious predators. The krogan managed to not only survive on their unforgiving homeworld, but actually thrived in the extreme conditions. Unfortunately, as krogan society became more technologically advanced, so did their weaponry. The end result is that they destroyed their homeworld in a nuclear war that reduced their race into primitive warring tribes. With the help of the salarians, the krogan were 'uplifted' into galactic society, and lent their numbers and military prowess to bring an end to the Rachni Wars. Ironically, after the rachni were eradicated, the rapidly-expanding krogan became a threat to the galaxy in turn, starting the Krogan Rebellions and forcing the turians to unleash the genophage. This genetic 'infection' dramatically reduced fertility in krogan females, causing a severe drop in births secondary to prenatal and postnatal death and, ultimately eliminating the krogan's numerical advantage.",
      homeWorld: 'Tuchanka',
      colonyPlanets: ['Garvug', 'Gellix', 'Gembat', 'Wrill'],
      notableCharacters: ['Eve', 'Grunt', 'Urdnot Wrex', 'Shaman', 'Patriarch'],
    },
    {
      racesId: 13,
      name: 'Leviathans',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/5/53/ME3_Leviathan_Creature.png/revision/latest/scale-to-width-down/1000?cb=20120829031138',
      description:
        "The Leviathans are an ancient aquatic race that dominated the galaxy in the time before the Reapers. Proud and aloof, they regard themselves as the galaxy's first and only apex race, and think of other races as mere tools meant to serve them. With the advent of the Reapers, the Leviathans were forced into hiding to preserve themselves, and were content to observe the Reapers' harvests while surreptitiously erasing any evidence of their existence over the course of hundreds of millions of years.",
      homeWorld: '2181 Despoina',
      colonyPlanets: ['2181 Despoina'],
      notableCharacters: [''],
    },
    {
      racesId: 14,
      name: 'Quarians',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/7/7c/QuarianMaleAndFemale.jpg/revision/latest/scale-to-width-down/854?cb=20100317060344',
      description:
        'The quarians are a nomadic species of humanoid aliens known for their skills with technology and synthetic intelligence. Since their homeworld Rannoch was conquered, the quarians live aboard the Migrant Fleet, a huge collection of starships that travel as a single fleet. Approximately three hundred years before the events of 2183, the quarians created the geth, a species of rudimentary artificial intelligences, to serve as an efficient source of manual labor. However, when the geth gradually became sentient, the quarians became terrified of possible consequences and tried to destroy their creations. The geth won the resulting war and forced their creators into exile. Now the quarians wander the galaxy in a flotilla of salvaged ships, secondhand vessels, and recycled technology.',
      homeWorld: 'Rannoch',
      colonyPlanets: ['Adas', 'Haestrom', 'Adas'],
      notableCharacters: [
        "Admiral Han'Gerrel vas Neema",
        "Kal'Reegar",
        "Tali'Zorah",
      ],
    },
    {
      racesId: 15,
      name: 'Reapers',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/3/35/Codex_ME_-_Sovereign.png/revision/latest/scale-to-width-down/256?cb=20140820095859',
      description:
        "The Reapers are a highly-advanced machine race of synthetic-organic starships. The Reapers reside in dark space: the vast, mostly starless space between galaxies. They hibernate there, dormant for fifty thousand years at a time, before returning to the galaxy. These giant machines are ancient; their true name is unknown. 'Reapers' was a name bestowed by the Protheans, the previous galactic power fifty thousand years before, and the geth refer to them as the Old Machines. In the end, the Reapers spare little concern for whatever labels other races choose to call them, and merely claim that they have neither beginning nor end. The Reapers are the original creators of the Citadel and the mass relay network. These massive constructs exist so that any intelligent life in the galaxy would eventually discover them and base their technology upon them – all part of a scheme to harvest the galaxy’s sentient life in a repeating cycle of purges that has continued relentlessly over countless millennia.",
      homeWorld: 'Dark Space',
      colonyPlanets: ['Dark Space'],
      notableCharacters: [
        'Derelict Reaper',
        'Harbinger',
        'Human-Reaper',
        'Sovereign',
      ],
    },
    {
      racesId: 16,
      name: 'Vorcha',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/c/ce/Vorcha.png/revision/latest/scale-to-width-down/300?cb=20100118035107',
      description:
        "Known for their unique biology and aggressive behavior, the vorcha of Heshtok are a primitive race that live among the galaxy's darker and more dangerous locations, such as Omega. Many vorcha are trained by the krogan Blood Pack as mercenaries due to their savage nature and adaptability to different environments. The rest of galactic civilization regards them as pests and scavengers, and their presence is generally seen as a blight.",
      homeWorld: 'Heshtok',
      colonyPlanets: ['Flett', 'Garvug', 'Parasc'],
      notableCharacters: ['Gryll', 'Kreete', 'Shisk'],
    },
    {
      racesId: 17,
      name: 'Yahg',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/1/15/Yahg_Character_shot.png/revision/latest/scale-to-width-down/500?cb=20100908120739',
      description:
        "The yahg are a sentient race of towering humanoids native to the world of Parnack, known for their violent and aggressive nature. Consummate predators, the yahg possess unrivaled perceptiveness and mental adaptability. Discovered by the Citadel Council in 2125 CE, the yahg were unceremoniously barred from interaction with Citadel space after massacring the Council's delegation.",
      homeWorld: 'Parnack',
      colonyPlanets: ['Parnack'],
      notableCharacters: ['The Shadow Broker'],
    },
    {
      racesId: 18,
      name: 'Protheans',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/5/52/ME3_Javik_Character_Shot.png/revision/latest/scale-to-width-down/900?cb=20120325213045',
      description:
        'The Protheans are an ancient alien race which mysteriously vanished over 50,000 years ago. The Protheans arose from a single planet and developed an immense galaxy-wide empire encompassing many other spacefaring species. Not much is known about them, but many of their artifacts, ruins and technology have apparently survived the ages. The Protheans have been credited with creating the Citadel and the mass relays, feats of engineering that have never been equaled and whose core mass effect field technology forms the basis of contemporary civilization. Prothean artifacts, therefore, have immense scientific value and are seen as belonging to the entire galactic community.',
      homeWorld: 'Unknown',
      colonyPlanets: ['Eden Prime', 'Fehl Prime', 'Feros', 'Mars', 'Thessia'],
      notableCharacters: ['Javik'],
    },
    {
      racesId: 19,
      name: 'Rachni',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/4/4f/Codex_ME_-_Rachni.png/revision/latest/scale-to-width-down/256?cb=20140820042133',
      description:
        'The rachni are an extinct insect-like species from the planet Suen that threatened Citadel space roughly two thousand years ago during the Rachni Wars. Intelligent and highly aggressive, the spacefaring rachni were driven to expand and defend their territory. They were eventually defeated and completely eradicated by the krogan, who had been uplifted by the salarians for their combat prowess and physical resilience to directly confront the rachni in the harsh environments of the rachni worlds. The accidental discovery of the rachni led to the Citadel races curbing their rapid expansion, in fear of being plunged into another galactic war.',
      homeWorld: 'Suen',
      colonyPlanets: ['Altahe', 'Nepmos', 'Utukku'],
      notableCharacters: ['Rachni Queen'],
    },
    {
      racesId: 20,
      name: 'Husks',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/8/8a/Husk.png/revision/latest/scale-to-width-down/500?cb=20100623072143',
      description:
        "Husks are synthetic-organic 'zombies' created from the bodies of organic beings",
    },
    {
      racesId: 21,
      name: 'Thresher Maws',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/e/e0/Codex_ME_-_Thresher_Maws.png/revision/latest/scale-to-width-down/256?cb=20140820063549',
      description:
        'Thresher maws are subterranean carnivores that spend their entire lives eating or searching for something to eat. They are enormous, violent creatures that burst up from the ground without warning when disturbed. They reproduce via spores that can lie dormant for millennia and are robust enough to survive prolonged periods in deep space and atmospheric re-entry. As a result, thresher maw spores appear on many worlds, spread by previous generations of space travelers.',
    },
    {
      racesId: 22,
      name: 'Varren',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/6/63/Codex_ME_-_Varren.png/revision/latest?cb=20140820063614',
      description:
        "Varren are omnivores with a preference for living prey. Originally native to the krogan homeworld of Tuchanka, they are—like most life from Tuchanka—savage, clannish, and consummate survivors. They are pack hunters when vulnerable prey is readily available and become scavengers when outnumbered or outclassed. Their supreme adaptability, vicious demeanor and rapid breeding cycle have made them ubiquitous and dangerous pests on many worlds. Virtually everywhere the krogan have been, varren infestations have followed, wreaking havoc with the native ecology. The krogan have had a love-hate relationship with varren for millennia, alternately fighting them for territory and embracing them as treasured companions. To this day, krogan—and some other species, including batarians—raise them as beasts of war. A common subgenus of varren has metallic silver scales, leading to the rather unusual nickname 'fishdogs'.",
    },
    {
      racesId: 23,
      name: 'The Thorian',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/8/8a/Thorian_charbox.png/revision/latest/scale-to-width-down/1000?cb=20140409103930',
      description:
        "The Thorian, also called Species 37, is an ancient sentient plant at least fifty thousand years old - its ability to hibernate for thousands of years makes its real age impossible to guess. The Thorian is a unique creature with mind-controlling and telepathic abilities, and a massive sensory network. It releases spores into the air that allow the Thorian to control those who inhale them, using pain to control their behaviour. These 'thralls' then tend to the Thorian and obey its will. According to the VI at the ExoGeni Corporation Headquarters, the Thorian is essentially 'a weave of tendrils' that covers much of the surface of Feros with some sensory tendrils kilometres long, though in places they are gathered into nerve bundles or neural nodes. Though it is intelligent, the Thorian only regards other sentient beings as potential thralls. It describes itself as 'The Old Growth.'",
    },
  ],
  classes: [
    {
      classesId: 0,
      name: 'Adept',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/9/95/Adepttransp.png/revision/latest/scale-to-width-down/381?cb=20091011141454',
      description:
        'The Adept is the ultimate biotic, able to affect the physical world with the power of the mind. Adepts are durable and powerful manipulators of mass effect fields; they can use biotics to violently manipulate objects in the environment, including nearby enemy targets. Gameplay focus is on disabling and debuffing enemies while dealing massive amounts of damage. Adepts possess all biotic abilities, but can only equip light armor, and may only gain specialist training with pistols. They also possess no tech skills. Biotic powers focus on manipulation of dark energy with Singularity, Lift and Throw. They can weaken foes with Warp and protect themselves with Barrier.',
      powers: ['Throw', 'Lift', 'Warp', 'Singularity', 'Barrier', 'Stasis'],
    },
    {
      classesId: 1,
      name: 'Soldier',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/e/e7/Soldierclasstransp.png/revision/latest/scale-to-width-down/381?cb=20091011131030',
      description:
        'The Soldier is a tough warrior, able to deal with a range of combat situations. The Soldier gets improved health, has the widest selection of weapons, and is eventually able to wear heavy armor. Gameplay focus is on getting into the thick of the fight, picking the right weapon for tactical situations, and outlasting opponents. Ashley Williams and Richard L. Jenkins, as well as the default Commander Shepard all have this class. Soldiers are the full spectrum warrior of the squad whose talents focus on improving durability and damage. They may specialize in any weapon they choose and are the only class to have access to the assault rifle talent. Soldiers begin with medium armor and are also the only class that may upgrade to heavy armor. Their major weaknesses are their complete lack of biotic and tech abilities, relying on squadmates to pick up the slack in those areas.',
      powers: [
        'Adrenaline Rush',
        'Concussive Shot',
        'Disruptor Ammo',
        'Incendiary Ammo',
        'Cryo Ammo',
        'Combat Mastery',
      ],
    },
    {
      classesId: 2,
      name: 'Engineer',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/2/25/Engineerclasstransp.png/revision/latest?cb=20091011131507',
      description:
        'The Engineer is a tech specialist, able to quickly and easily manipulate the environment with specific talents, and repair or modify technical equipment. Gameplay focus is on shaping the battlefield during combat, healing the party, and debuffing enemies (disabling weapons and lowering shields). Even though they begin the game with only pistols and an omni-tool, Engineers can unlock the ability to hack enemy technology. Engineers possess all tech abilities, but can only equip light armor and may gain specialist training with pistols as well. They possess no biotic skills. Tech skills focus on crippling and damaging the enemy; tech proximity mine damage is, admittedly, often viewed as a secondary effect, but should not be discounted. Engineers also possess the First Aid and Medicine talents, making their healing very effective.',
      powers: [
        'Overload',
        'Incinerate',
        'Combat Drone',
        'Cryo Blast',
        'AI Hacking',
        'Tech Mastery',
      ],
    },
    {
      classesId: 3,
      name: 'Vanguard',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/d/d4/Vanguard_copy.png/revision/latest?cb=20091011125848',
      description:
        'The Vanguard is a powerful combatant, able to combine the offensive powers of the Adept and the Soldier. They have access to various weapons and armor, as well as biotics. Gameplay focus is on taking down enemies with quick and brutal force. Vanguards are the front line of the squad. Their biotic powers focus on combat potential - disabling the enemy, making their armor ineffective, and shielding themselves from harm so that they can get close enough to go to work. The Vanguard wears light armor to start, though they can upgrade to medium armor, and they may gain specialist training in shotguns and pistols. All Krogan Battlemasters, including Wrex belong to this class.',
      powers: [
        'Incendiary Ammo',
        'Cryo Ammo',
        'Charge',
        'Shockwave',
        'Pull',
        'Assault Mastery',
        'Nova',
      ],
    },
    {
      classesId: 4,
      name: 'Sentinel',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/c/cc/Sentinelclasstransp.png/revision/latest/scale-to-width-down/520?cb=20091011132739',
      description:
        'The Sentinel is able to combine tech and biotics to manipulate the environment, disable and track enemies, or defend the party. Gameplay focus is on protecting the party using kinetic barriers and healing it with advanced medical training. Kaidan Alenko is an L2 Sentinel. Sentinels are support-focused characters, possessing biotic and tech abilities mostly focused around controlling the battlefield and keeping the squad alive. They receive no specialized weapons or armor training, but are proficient with a pistol. The Sentinel is surprisingly durable, with access to many of the shield-increasing talents, along with the Barrier biotic ability.',
      powers: [
        'Throw',
        'Warp',
        'Tech Armor',
        'Overload',
        'Cryo Blast',
        'Defender',
      ],
    },
    {
      classesId: 5,
      name: 'Infiltrator',
      picture:
        'https://static.wikia.nocookie.net/masseffect/images/3/3f/Infiltratorclasstransp.png/revision/latest/scale-to-width-down/688?cb=20120325124409',
      description:
        'The Infiltrator is a tech-savvy warrior, able to win battles by quickly disabling and killing enemies. These soldiers focus on unlocking alternate routes, gaining access to good equipment, and obtaining an advantageous position over enemies in combat. Infiltrators possess a mixture of combat and tech talents. They may gain specialist training with pistols and sniper rifles, begin with light armor (though they can eventually gain the ability to wear medium armor), and possess a variety of tech abilities that focus on disabling and crippling the enemy.',
      powers: [
        'Disruptor Ammo',
        'Cryo Ammo',
        'Tactical Cloak',
        'Incinerate',
        'AI Hacking',
        'Operative',
      ],
    },
  ],
};

export default db;
