const opener = ['Wow!', 'Great!', 'Amazing!', 'Huh.', 'Interesting.', 'I see.', 'Yikes!', 'Uh, oh!', 'Oh no!'];

const alignment = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];

const race = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human', 'Tiefling'];

const clss = ['Artificer', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];

const randNum = array => Math.floor(Math.random()*array.length);

const randomCharacter = () => {
    const randOpener = opener[randNum(opener)];
    const randAlign = alignment[randNum(alignment)];
    const randRace = race[randNum(race)];
    const randClass = clss[randNum(clss)];

    console.log(`${randOpener} You are a ${randAlign} ${randRace} ${randClass}!`);
}

randomCharacter();