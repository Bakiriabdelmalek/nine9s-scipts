const serverCode =`import http from 'http';
import dotenv from 'dotenv';
dotenv.config();
//app
import { app } from './app';
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(\`server listening on port \${port}\`);
});`;

  
  const package_json =
  `{
    "name": "nine19_tsinit",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \\"Error: no test specified\\" && exit 1",
      "start": "ts-node server.ts"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {      
      
    },
    "devDependencies": {
      
    }
  }`;
  
  const appcode = `import express, { Request, Response } from "express";
  import bodyparser from "body-parser";
  export const app = express();
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(bodyparser.json());`;
  
  
  module.exports = {
    appcode,
    package_json,
    serverCode
  }