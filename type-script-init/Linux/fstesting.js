#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const content = require("./content");

const currentDir = process.cwd();

const foldersToCreate = [
  "controllers",
  "services",
  "utils",
  "routes",
  "middlewares",
];

const filesToCreate = [
  { url: "server.ts", content: content.serverCode },
  { url: "app.ts", content: content.appcode },
  { url: "package.json", content: content.package_json },
];

//asci =============================================

const nineAsciiArt = `
  _____  
 |     | 
 |     | 
 |_____| 
       | 
       | 
  _____|  
`;

console.log(nineAsciiArt);
//===================================================

// Function to create directories
function createDirectories() {
  for (const folder of foldersToCreate) {
    fs.mkdir(path.join(currentDir, folder), (err) => {
      if (err) {
        console.error(`Error creating folder ${folder}:`, err);
      } else {
        console.log(`Folder ${folder} created`);
      }
    });
  }
}

// Function to create files
function createFiles() {
  for (const file of filesToCreate) {
    fs.writeFileSync(path.join(currentDir, file.url), file.content);
    console.log(`File ${file.url} created`);
  }
}

// Entry point: create directories and files
createDirectories();
createFiles();

console.log("Done");

