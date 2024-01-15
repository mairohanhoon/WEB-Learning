const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : "Swift by apple",
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}