const nearley = require("nearley");
const myGrammar = require("./reminders.js");
const grammar = nearley.Grammar.fromCompiled(myGrammar)

const last = (arr) => arr[arr.length - 1]

const parse = input => {
  // parsers are not really reusable (yet)
  const parser = new nearley.Parser(grammar)
  parser.feed(input);
  if (parser.results.length > 0) return last(parser.results)
  throw new Error("no results parsed")
};

module.exports = {
  parse: parse
}
