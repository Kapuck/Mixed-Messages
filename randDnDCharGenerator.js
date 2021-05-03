const opener = ['Wow!', 'Great!', 'Amazing!', 'Huh.', 'Interesting.', 'I see.', 'Yikes!', 'Uh, oh!', 'Oh no!'];

const alignment = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];

const race = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human', 'Tiefling'];

const clss = ['Artificer', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];

const randSelect = array => {
    const selection = Math.floor(Math.random()*array.length);
    return array[selection];
}

const randomCharacter = () => {
    const randOpener = randSelect(opener);
    const randAlign = randSelect(alignment);
    const randRace = randSelect(race);
    const randClass = randSelect(clss);

    console.log(`${randOpener} You are a ${randAlign} ${randRace} ${randClass}!`);
}

randomCharacter();