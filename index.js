const nearley = require("nearley");
const myGrammar = require("./reminders.js");
const grammar = nearley.Grammar.fromCompiled(myGrammar)

module.exports = {
  /**
   * Returns a list of possible parsings. The order is not indicative of
   * confidence or anything like that, instead it's only the order the rules
   * are written which is usually greedy and thus incomplete. It's my
   * recommendation that the last result is usually the correct one.
   *
   * The parser also can throw errors when parsings fail. It is important to
   * handle those or else in the case of an IRC bot, things can get very noisy.
   */
  parse: input => {
    // parsers are not really reusable (yet)
    const parser = new nearley.Parser(grammar)
    parser.feed(input);
    return parser.results
  }
}
