#! /usr/bin/env node

const fs = require("fs");
const path = require("path");
const traverse_folder = require("./traverse_folder");

const target_dir = process.argv[2];
console.log(`print tree for : ${target_dir}`);

if (!fs.existsSync(target_dir)) {
  console.error("input path not found");
  return;
}

if (!fs.statSync(target_dir).isDirectory()) {
  console.error("input path is not folder");
  return;
}

traverse_folder(target_dir);
