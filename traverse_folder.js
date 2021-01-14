const fs = require("fs");
const path = require("path");

// eyes distance from screen is important
// when the distance is short, your mind focus on small part code
// either your mind foucs on global

module.exports = function traverse_folder(dir, indents = [], objs = [], filter = null, fnobj = null) {
  const intend_guide_char = ["└─", "├─"];
  const intend_char = ["   ", "│  "];

  let filenames = fs.readdirSync(dir);
  if (filter) {
    filenames = filter(dir, filenames);
  }

  for (let i = 0; i < filenames.length; i++) {
    const filename = filenames[i];
    const filepath = path.join(dir, filename);

    const islast = i == filenames.length - 1;
    const indentguide = islast ? intend_guide_char[0] : intend_guide_char[1];
    const indentname = indents.join("") + indentguide + filename;

    let obj = { filename, filepath, indentname };
    if (fnobj) {
      obj = { ...obj, ...fnobj(obj) };
    }
    objs.push(obj);
    console.log(indentname);

    let stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      indents.push(islast ? intend_char[0] : intend_char[1]);
      traverse_folder(filepath, indents, objs, filter);
      indents.pop();
    }
  }
  return objs;
};
