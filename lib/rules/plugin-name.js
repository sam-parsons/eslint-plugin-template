"use strict";

module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "description of rule",
      category: "Stylistic Issues",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create: function (context) {
    return {
      Program() {
        const sourceCode = context.getSourceCode();
        return context.report({
          code: sourceCode,
        });
      },
    };
  },
};
