# NODE_CYPRESS_VERIFY

## README 
Test Automation repository with Javascript (Node.js), Cucumber and Cypress, with UI and API tests.

#### Basic framework: 
- Node.js, Cucumber and Cypress.

#### Configuration: 
- Clone this repository.
- You must have Node.js installed in your local machine. 
- After that, install the dependencies running this command in the root: 
```sh
 npm install
```
#### Project structure:
- The features were building in Gherkin (Cucumber), in the path "cypress/integration"
- The steps definitions and page objects are in "cypress/support" 
- Execution videos are created after running each feature in the directory "cypress/videos" 
- If you choice in the feature execution, cucumber-html-report is generate in directory "report"
- It was added in index.js a retries command to test automation reexecution after a fail in a step more than twice. 
- It was created a .gitignore file to not push prints and videos to repository, included "node_modules" folder.
- It was added logs in the automation scripts to display messages in console while the test is running.

#### Reports:
It was configured Mochawesome-report and the Cucumber-html-report in this project.

**Mochawesome-report**
- It was implemented to work correctly when executed just with a single feature.
- Available in "mochawesome-report" directory.
- The failed steps prints are available in folder "snapshots"
- If a step fails, but a scenario reexecution is passed, Mochawesome displays an error message even with test passed.
- If a scenario fails, Mochawesome apresenta displays an error message with print.

**Cucumber-html-report**
- Available in "report" directory.
- It's display the features steps and when it fails, the error message.

#### How to run the tests:
**To run all features and scenarios using Cypress in headless mode (with Electron), the command is:**
```sh
./node_modules/.bin/cypress run
```
or 
```sh
npx cypress run
```
ou pelo script 
```sh
npm run cy:run
```
**To execute all features and scenarios using Chrome (if installed), the command is:**
```sh 
./node_modules/.bin/cypress run --browser chrome
```
or 
```sh
npx cypress run --browser chrome
```

**There are some run scripts configured in package.json**
- To run Cypress by tags, use the running script like the example bellow: 
```sh
npm run tags TAGS='@verify_ui'
```

- To run Cypress by tags and generate a report in the end, executing the tags script and report together, use the example bellow: 
```sh   
npm run tags TAGS='@all'; npm run report
```

### CircleCI: 
It was included a configuration to execut this automation in CircleCI (CI/CD/Continuous Testing). The config is in "circle.yml" file, in the project root. With this config the project execute in Circle CI with Cucumber and Electron, including the evidences/artifacts in the end of execution.

### Version information:
- 1.0.0: first version

### Author:
- Marcos Ribeiro Hioka
- contact: marcosribeirohioka@gmail.com