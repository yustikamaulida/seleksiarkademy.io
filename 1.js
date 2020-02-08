// name (String)
// age (Number)
// address (String)
// hobbies (Array)
// is_married (Boolean)
// list_school (Array of Object) with key name, year_in, year_out, and major (if any, if no set “null” )
// skills (Array of Obj) with key skill_name and level (beginner, advanced, expert)
// interest_in_coding (Boolean)

let saya = {
    name: "Yustika",
    age: 30,
    address: "Bogor",
    hobbies: ["painting", "gaming"],
    is_married: false,
    list_school: {
        "year_in": "2016",
        "year_out": "2020",
        "major": "Univeristas_gunadarma"
    },
    skills: {
        "skill_name": "3d_artis",
        "level": "beginner"
    },
    interest_in_coding: true
};

let json = JSON.stringify(saya);

alert(typeof json);
alert(json);