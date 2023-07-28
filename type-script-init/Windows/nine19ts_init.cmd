@echo off
REM Run your JavaScript file
node fstesting.js

REM Install the required packages, TypeScript, ts-node, and missing type declarations
npm install @types/bcrypt@latest @types/jsonwebtoken@latest @types/express@latest @types/body-parser@latest bcrypt@latest body-parser@latest dotenv@latest express@latest http@latest jsonwebtoken@latest typescript@latest ts-node@latest --save-dev

REM Display the message
echo "You can start the server by executing: npm run start"
