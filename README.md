# reminder-parser

This package is a compiled [nearley](http://nearley.js.org) grammar to parse
statements asking for reminders. Here are a few examples:

- remind me to go to the store in a few hours
- on oct 10, remind me to buy conference tickets
- remind me a week before jan 1 to figure out nye plans

The idea is that it should be very natural. There's probably still a lot of
variations that have not been covered, and if you happen to find one, please
contribute!

## Contributing

Just a few notes about the structure here. All the nearley files `*.ne` have to be compiled into javascript. Right now there's only the one grammar file and there's a npm helper script to compile it via `npm run compiler`.

Testing is not so rigorous, but you can add the test cases you want to parse to the list in `test/test.js` and then as you make changes to your grammar, run something like `npm run compiler && npm test`.

Alternatively, you can use nearley directly to test with something like

  nearleyc reminders.ne -o reminders.js
  nearley-test -i "remind me to go to the store in a few hours" reminders.js

PRs are welcome.