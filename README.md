# Readme

1. Create Project

   ```sh
   mkdir unit-test && cd unit-test
   npm init -y
   ```

2. Install jest

   ```sh
   npm install --save-dev jest
   ```

   ```sh
   npx jest -h
   ```

3. Support ECMAScript Modules[Option]

    ```diff
    {
        "name": "js-test",
    +   "type": "module",
    ```

   ```diff
   "scripts": {
   -    "test": "echo \"Error: no test specified\" && exit 1"
   +    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
   },
   ```

   ```diff
   "devDependencies": {
       "jest": "^29.7.0"
   },
   +"jest": {
   +    "transform": {}
   +}
   ```

4. Install code coverage report

   ```diff
   "scripts": {
       "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
   +   "coverage": "npm run test -- --coverage"
   },
   ```

   ```diff
   "devDependencies": {
       "jest": "^29.7.0"
   },
   "jest": {
       "transform": {},
   +   "coverageDirectory": "coverage"
   }
   ```

5. Install jest-junit

   ```sh
   npm install --save-dev jest-junit
   ```

   ```diff
   "scripts": {
       "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
       "coverage": "npm run test -- --coverage",
   +   "junit": "npm test -- --ci --reporters=default --reporters=jest-junit"    
   },
   ```

    ```diff
    "jest": {
        "transform": {},
        "coverageDirectory": "coverage"
    },
    +"jest-junit": {
    +    "outputDirectory": "junit-report",
    +    "outputName": "junit.xml"
    +}
    ```
