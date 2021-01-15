const traverse_folder = require("./traverse_folder");
//                      require('traverse_folder')
// use in npm package   ^^^^^^^^^^^^^^^^^^^^^^^^^^

// your can
traverse_folder("./");

// or you can
let items = traverse_folder("./");

for (const item of items) {
  const { indentname, filename, filepath } = item;
  console.log(indentname);
}

// or you can
items = traverse_folder("./", [], [],
  (dir, filenames) => {
    return filenames.filter((f) => f == "foo.js");
  },
);

// bla bla bla.....


