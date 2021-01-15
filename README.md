# traverse_folder
traverse folder in js
[![npm](https://img.shields.io/npm/v/traverse_folder)](https://www.npmjs.com/package/traverse_folder)
[![downloads](https://img.shields.io/npm/dw/traverse_folder)](https://www.npmjs.com/package/traverse_folder)
## usage

```sh
npm install traverse_folder
```
or
```sh
yarn add traverse_folder
```

```
const traverse_folder = require('traverse_folder')
traverse_folder('models');
// or
cosnt items = traverse_folder('models');

```

```
├─index.js
├─sequelize.js
├─system
│  ├─sys_dict.js
│  ├─sys_log.js
│  ├─sys_organization.js
│  ├─sys_permission.js
│  ├─sys_role.js
│  ├─sys_role_permission.js
│  ├─sys_user.js
│  ├─sys_user_organization.js
│  └─sys_user_role.js
├─todo
│  ├─dhprj_resource.js
│  ├─dhprj_todo.js
│  ├─dhprj_todo_bug.js
│  ├─dhprj_todo_milestone.js
│  └─dhprj_todo_resource.js
└─wf
   ├─wf_activity.js
   ├─wf_activity_instance.js
   ├─wf_deplyment.js
   ├─wf_form.js
   ├─wf_instance.js
   ├─wf_process.js
   ├─wf_process_instance.js
   ├─wf_process_instance_log.js
   └─wf_process_instance_postponed.js
```

examples:
```
const traverse_folder = require('traverse_folder')

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


```