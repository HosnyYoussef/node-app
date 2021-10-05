const fs = require("fs");
//  const addNote = (title,body)=>{
//      const notes = loadNotes()
//      notes.push({
//          title,
//          body
//      })
//      saveNotes(notes)
//  }
//////////////////////////////////////////////////////add , find
/*const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateTitles = notes.find((obj) => {
    return obj.title === title;
  });
  if (duplicateTitles) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log("saved successfully");
  } else {
    console.log("duplicats titles");
  }
};
*/
////////////////////////////////////////////////////////////////// remove
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });
  

    saveNotes(notesToKeep);
    console.log("Removed");
  };

//////////////////////////////////////////////////////////////   fixed lines 
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataBuffer);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const saveData = JSON.stringify(notes);
  fs.writeFileSync("notes.json", saveData);
};



module.exports = {
  removeNote,
};
