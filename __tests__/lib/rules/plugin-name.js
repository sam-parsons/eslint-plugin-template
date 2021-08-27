const rule = require("../../../lib/rules/plugin-name.js");
const RuleTester = require("eslint").RuleTester;

// https://eslint.org/docs/developer-guide/nodejs-api#ruletester
const ruleTester = new RuleTester();
ruleTester.run("plugin-name", rule, {
  valid: [],
  invalid: [],
});
