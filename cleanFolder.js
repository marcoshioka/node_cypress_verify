var rimraf = require("rimraf")
rimraf("./mochawesome-report", function () { console.log("Mochawesome-report folder cleaned!"); });
rimraf("./cypress/cucumber-json", function () { console.log("cucumber-json folder cleaned!"); });