// Generated automatically by nearley, version 2.13.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }


const moment = require('moment')

const nothing = (d) => null

const nextDate = (m, d) => {
    const now = moment()
    const next = moment(new Date(now.year(), m - 1, d))
    return next > now ? next : next.add(1, 'year')
}

const newDate = (m, d, y) => {
    return moment(new Date(y, m - 1, d))
}

const setTimeForDate = (date, time) => {
  const hour = time[0]
  const min = time[1]
  const newd = (date || moment()).clone()
  newd.startOf('day')
  newd.hour(hour)
  newd.minute(min)
  return newd
}

const combine = (target, task, moment) => {
  return {
    target: target,
    task: task,
    moment: moment
  }
}

const rl = (o) => {
  console.log(o)
  return o
}

const adds = (m, s) => m.clone().add(moment.duration(s, 'seconds'))
const subs = (m, s) => m.clone().subtract(moment.duration(s, 'seconds'))

var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "reminderspec$subexpression$1", "symbols": [/[rR]/, /[eE]/, /[mM]/, /[iI]/, /[nN]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "reminderspec$subexpression$2", "symbols": [/[tT]/, /[oO]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "reminderspec", "symbols": ["reminderspec$subexpression$1", "__", "someone", "__", "reminderspec$subexpression$2", "__", "dosomething", "__", "time_expr"], "postprocess": d => combine(d[2], d[6], d[8])},
    {"name": "reminderspec$subexpression$3", "symbols": [/[rR]/, /[eE]/, /[mM]/, /[iI]/, /[nN]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "reminderspec$ebnf$1", "symbols": [{"literal":","}], "postprocess": id},
    {"name": "reminderspec$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "reminderspec$subexpression$4", "symbols": [/[tT]/, /[oO]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "reminderspec", "symbols": ["reminderspec$subexpression$3", "__", "someone", "__", "time_expr", "reminderspec$ebnf$1", "__", "reminderspec$subexpression$4", "__", "dosomething"], "postprocess": d => combine(d[2], d[9], d[4])},
    {"name": "reminderspec$ebnf$2", "symbols": [{"literal":","}], "postprocess": id},
    {"name": "reminderspec$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "reminderspec$subexpression$5", "symbols": [/[rR]/, /[eE]/, /[mM]/, /[iI]/, /[nN]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "reminderspec$subexpression$6", "symbols": [/[tT]/, /[oO]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "reminderspec", "symbols": ["time_expr", "reminderspec$ebnf$2", "__", "reminderspec$subexpression$5", "__", "someone", "__", "reminderspec$subexpression$6", "__", "dosomething"], "postprocess": d => combine(d[5], d[9], d[0])},
    {"name": "someone", "symbols": ["word"], "postprocess": d => d[0]},
    {"name": "dosomething", "symbols": ["words"], "postprocess": d => d[0]},
    {"name": "time_expr$ebnf$1$subexpression$1$subexpression$1", "symbols": [/[aA]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "time_expr$ebnf$1$subexpression$1", "symbols": ["time_expr$ebnf$1$subexpression$1$subexpression$1", "__"]},
    {"name": "time_expr$ebnf$1$subexpression$1$subexpression$2", "symbols": [/[oO]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "time_expr$ebnf$1$subexpression$1", "symbols": ["time_expr$ebnf$1$subexpression$1$subexpression$2", "__"]},
    {"name": "time_expr$ebnf$1", "symbols": ["time_expr$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "time_expr$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "time_expr", "symbols": ["time_expr$ebnf$1", "timespec"], "postprocess": d => d[1]},
    {"name": "time_expr$subexpression$1$subexpression$1", "symbols": [/[iI]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "time_expr$subexpression$1", "symbols": ["time_expr$subexpression$1$subexpression$1"]},
    {"name": "time_expr$subexpression$1$subexpression$2", "symbols": [/[aA]/, /[fF]/, /[tT]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "time_expr$subexpression$1", "symbols": ["time_expr$subexpression$1$subexpression$2"]},
    {"name": "time_expr", "symbols": ["time_expr$subexpression$1", "__", "scaled_period"], "postprocess": d => adds(moment(), d[2])},
    {"name": "time_expr", "symbols": ["scaled_period", "add", "time_expr"], "postprocess": d => adds(d[2], d[0])},
    {"name": "time_expr", "symbols": ["time_expr", "add", "scaled_period"], "postprocess": d => adds(d[0], d[2])},
    {"name": "time_expr", "symbols": ["scaled_period", "subtract", "time_expr"], "postprocess": d => subs(d[2], d[0])},
    {"name": "time_expr", "symbols": ["time_expr", "subtract", "scaled_period"], "postprocess": d => subs(d[0], d[2])},
    {"name": "timespec", "symbols": ["spec_base"], "postprocess": d => d[0]},
    {"name": "spec_base", "symbols": ["date"], "postprocess": d => setTimeForDate(d[0], [0,0])},
    {"name": "spec_base", "symbols": ["time"], "postprocess": d => setTimeForDate(null, d[0])},
    {"name": "spec_base", "symbols": ["time", "_", "date"], "postprocess": d => setTimeForDate(d[2], d[0])},
    {"name": "spec_base", "symbols": ["date", "_", "time"], "postprocess": d => setTimeForDate(d[0], d[2])},
    {"name": "spec_base$subexpression$1", "symbols": [/[nN]/, /[oO]/, /[wW]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "spec_base", "symbols": ["spec_base$subexpression$1"], "postprocess": d => moment()},
    {"name": "date", "symbols": ["month_name", "__", "day_number"], "postprocess": d => nextDate(d[0], d[2])},
    {"name": "date", "symbols": ["month_name", "__", "day_number", "__", "year_number"], "postprocess": d => newDate(d[0], d[2], d[4])},
    {"name": "date", "symbols": ["month_name", "__", "day_number", "_", {"literal":","}, "__", "year_number"], "postprocess": d => newDate(d[0], d[2], d[6])},
    {"name": "date", "symbols": ["day_number", "__", "month_name"], "postprocess": d => nextDate(d[2], d[0])},
    {"name": "date", "symbols": ["day_number", "__", "month_name", "__", "year_number"], "postprocess": d => newDate(d[2], d[0], d[4])},
    {"name": "date", "symbols": ["month_number", {"literal":"/"}, "day_number"], "postprocess": d => nextDate(d[0], d[2])},
    {"name": "date", "symbols": ["month_number", {"literal":"/"}, "day_number", {"literal":"/"}, "year_number"], "postprocess": d => newDate(d[0], d[2], d[4])},
    {"name": "date$subexpression$1", "symbols": [/[tT]/, /[oO]/, /[dD]/, /[aA]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "date", "symbols": ["date$subexpression$1"], "postprocess": d => moment()},
    {"name": "date$subexpression$2", "symbols": [/[tT]/, /[oO]/, /[mM]/, /[oO]/, /[rR]/, /[rR]/, /[oO]/, /[wW]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "date", "symbols": ["date$subexpression$2"], "postprocess": d => moment().add(1, 'day')},
    {"name": "date$subexpression$3", "symbols": [/[yY]/, /[eE]/, /[sS]/, /[tT]/, /[eE]/, /[rR]/, /[dD]/, /[aA]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "date", "symbols": ["date$subexpression$3"], "postprocess": d => moment().subtract(1, 'day')},
    {"name": "month_name$subexpression$1$subexpression$1", "symbols": [/[jJ]/, /[aA]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$1", "symbols": ["month_name$subexpression$1$subexpression$1"]},
    {"name": "month_name$subexpression$1$subexpression$2", "symbols": [/[jJ]/, /[aA]/, /[nN]/, /[uU]/, /[aA]/, /[rR]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$1", "symbols": ["month_name$subexpression$1$subexpression$2"]},
    {"name": "month_name", "symbols": ["month_name$subexpression$1"], "postprocess": d => 1},
    {"name": "month_name$subexpression$2$subexpression$1", "symbols": [/[fF]/, /[eE]/, /[bB]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$2", "symbols": ["month_name$subexpression$2$subexpression$1"]},
    {"name": "month_name$subexpression$2$subexpression$2", "symbols": [/[fF]/, /[eE]/, /[bB]/, /[rR]/, /[uU]/, /[aA]/, /[rR]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$2", "symbols": ["month_name$subexpression$2$subexpression$2"]},
    {"name": "month_name", "symbols": ["month_name$subexpression$2"], "postprocess": d => 2},
    {"name": "month_name$subexpression$3$subexpression$1", "symbols": [/[mM]/, /[aA]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$3", "symbols": ["month_name$subexpression$3$subexpression$1"]},
    {"name": "month_name$subexpression$3$subexpression$2", "symbols": [/[mM]/, /[aA]/, /[rR]/, /[cC]/, /[hH]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$3", "symbols": ["month_name$subexpression$3$subexpression$2"]},
    {"name": "month_name", "symbols": ["month_name$subexpression$3"], "postprocess": d => 3},
    {"name": "month_name$subexpression$4$subexpression$1", "symbols": [/[aA]/, /[pP]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$4", "symbols": ["month_name$subexpression$4$subexpression$1"]},
    {"name": "month_name$subexpression$4$subexpression$2", "symbols": [/[aA]/, /[pP]/, /[rR]/, /[iI]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$4", "symbols": ["month_name$subexpression$4$subexpression$2"]},
    {"name": "month_name", "symbols": ["month_name$subexpression$4"], "postprocess": d => 4},
    {"name": "month_name$subexpression$5$subexpression$1", "symbols": [/[mM]/, /[aA]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$5", "symbols": ["month_name$subexpression$5$subexpression$1"]},
    {"name": "month_name", "symbols": ["month_name$subexpression$5"], "postprocess": d => 5},
    {"name": "month_name$subexpression$6$subexpression$1", "symbols": [/[jJ]/, /[uU]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$6", "symbols": ["month_name$subexpression$6$subexpression$1"]},
    {"name": "month_name$subexpression$6$subexpression$2", "symbols": [/[jJ]/, /[uU]/, /[nN]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$6", "symbols": ["month_name$subexpression$6$subexpression$2"]},
    {"name": "month_name", "symbols": ["month_name$subexpression$6"], "postprocess": d => 6},
    {"name": "month_name$subexpression$7$subexpression$1", "symbols": [/[jJ]/, /[uU]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$7", "symbols": ["month_name$subexpression$7$subexpression$1"]},
    {"name": "month_name$subexpression$7$subexpression$2", "symbols": [/[jJ]/, /[uU]/, /[lL]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$7", "symbols": ["month_name$subexpression$7$subexpression$2"]},
    {"name": "month_name", "symbols": ["month_name$subexpression$7"], "postprocess": d => 7},
    {"name": "month_name$subexpression$8$subexpression$1", "symbols": [/[aA]/, /[uU]/, /[gG]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$8", "symbols": ["month_name$subexpression$8$subexpression$1"]},
    {"name": "month_name$subexpression$8$subexpression$2", "symbols": [/[aA]/, /[uU]/, /[gG]/, /[uU]/, /[sS]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$8", "symbols": ["month_name$subexpression$8$subexpression$2"]},
    {"name": "month_name", "symbols": ["month_name$subexpression$8"], "postprocess": d => 8},
    {"name": "month_name$subexpression$9$subexpression$1", "symbols": [/[sS]/, /[eE]/, /[pP]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$9", "symbols": ["month_name$subexpression$9$subexpression$1"]},
    {"name": "month_name$subexpression$9$subexpression$2", "symbols": [/[sS]/, /[eE]/, /[pP]/, /[tT]/, /[eE]/, /[mM]/, /[bB]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$9", "symbols": ["month_name$subexpression$9$subexpression$2"]},
    {"name": "month_name", "symbols": ["month_name$subexpression$9"], "postprocess": d => 9},
    {"name": "month_name$subexpression$10$subexpression$1", "symbols": [/[oO]/, /[cC]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$10", "symbols": ["month_name$subexpression$10$subexpression$1"]},
    {"name": "month_name$subexpression$10$subexpression$2", "symbols": [/[oO]/, /[cC]/, /[tT]/, /[oO]/, /[bB]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$10", "symbols": ["month_name$subexpression$10$subexpression$2"]},
    {"name": "month_name", "symbols": ["month_name$subexpression$10"], "postprocess": d => 10},
    {"name": "month_name$subexpression$11$subexpression$1", "symbols": [/[nN]/, /[oO]/, /[vV]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$11", "symbols": ["month_name$subexpression$11$subexpression$1"]},
    {"name": "month_name$subexpression$11$subexpression$2", "symbols": [/[nN]/, /[oO]/, /[vV]/, /[eE]/, /[mM]/, /[bB]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$11", "symbols": ["month_name$subexpression$11$subexpression$2"]},
    {"name": "month_name", "symbols": ["month_name$subexpression$11"], "postprocess": d => 11},
    {"name": "month_name$subexpression$12$subexpression$1", "symbols": [/[dD]/, /[eE]/, /[cC]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$12", "symbols": ["month_name$subexpression$12$subexpression$1"]},
    {"name": "month_name$subexpression$12$subexpression$2", "symbols": [/[dD]/, /[eE]/, /[cC]/, /[eE]/, /[mM]/, /[bB]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "month_name$subexpression$12", "symbols": ["month_name$subexpression$12$subexpression$2"]},
    {"name": "month_name", "symbols": ["month_name$subexpression$12"], "postprocess": d => 12},
    {"name": "month_number", "symbols": ["int1_2digit"], "postprocess": d => d[0]},
    {"name": "day_number", "symbols": ["int1_2digit"], "postprocess": d => d[0]},
    {"name": "year_number", "symbols": ["int2_or_4digit"], "postprocess": d => d[0]},
    {"name": "day_of_week$subexpression$1$subexpression$1", "symbols": [/[sS]/, /[uU]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "day_of_week$subexpression$1", "symbols": ["day_of_week$subexpression$1$subexpression$1"]},
    {"name": "day_of_week$subexpression$1$subexpression$2", "symbols": [/[sS]/, /[uU]/, /[nN]/, /[dD]/, /[aA]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "day_of_week$subexpression$1", "symbols": ["day_of_week$subexpression$1$subexpression$2"]},
    {"name": "day_of_week", "symbols": ["day_of_week$subexpression$1"], "postprocess": d => 0},
    {"name": "day_of_week$subexpression$2$subexpression$1", "symbols": [/[mM]/, /[oO]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "day_of_week$subexpression$2", "symbols": ["day_of_week$subexpression$2$subexpression$1"]},
    {"name": "day_of_week$subexpression$2$subexpression$2", "symbols": [/[mM]/, /[oO]/, /[nN]/, /[dD]/, /[aA]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "day_of_week$subexpression$2", "symbols": ["day_of_week$subexpression$2$subexpression$2"]},
    {"name": "day_of_week", "symbols": ["day_of_week$subexpression$2"], "postprocess": d => 1},
    {"name": "day_of_week$subexpression$3$subexpression$1", "symbols": [/[tT]/, /[uU]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "day_of_week$subexpression$3", "symbols": ["day_of_week$subexpression$3$subexpression$1"]},
    {"name": "day_of_week$subexpression$3$subexpression$2", "symbols": [/[tT]/, /[uU]/, /[eE]/, /[sS]/, /[dD]/, /[aA]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "day_of_week$subexpression$3", "symbols": ["day_of_week$subexpression$3$subexpression$2"]},
    {"name": "day_of_week", "symbols": ["day_of_week$subexpression$3"], "postprocess": d => 2},
    {"name": "day_of_week$subexpression$4$subexpression$1", "symbols": [/[wW]/, /[eE]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "day_of_week$subexpression$4", "symbols": ["day_of_week$subexpression$4$subexpression$1"]},
    {"name": "day_of_week$subexpression$4$subexpression$2", "symbols": [/[wW]/, /[eE]/, /[dD]/, /[nN]/, /[eE]/, /[sS]/, /[dD]/, /[aA]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "day_of_week$subexpression$4", "symbols": ["day_of_week$subexpression$4$subexpression$2"]},
    {"name": "day_of_week", "symbols": ["day_of_week$subexpression$4"], "postprocess": d => 3},
    {"name": "day_of_week$subexpression$5$subexpression$1", "symbols": [/[tT]/, /[hH]/, /[uU]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "day_of_week$subexpression$5", "symbols": ["day_of_week$subexpression$5$subexpression$1"]},
    {"name": "day_of_week$subexpression$5$subexpression$2", "symbols": [/[tT]/, /[hH]/, /[uU]/, /[rR]/, /[sS]/, /[dD]/, /[aA]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "day_of_week$subexpression$5", "symbols": ["day_of_week$subexpression$5$subexpression$2"]},
    {"name": "day_of_week", "symbols": ["day_of_week$subexpression$5"], "postprocess": d => 4},
    {"name": "day_of_week$subexpression$6$subexpression$1", "symbols": [/[fF]/, /[rR]/, /[iI]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "day_of_week$subexpression$6", "symbols": ["day_of_week$subexpression$6$subexpression$1"]},
    {"name": "day_of_week$subexpression$6$subexpression$2", "symbols": [/[fF]/, /[rR]/, /[iI]/, /[dD]/, /[aA]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "day_of_week$subexpression$6", "symbols": ["day_of_week$subexpression$6$subexpression$2"]},
    {"name": "day_of_week", "symbols": ["day_of_week$subexpression$6"], "postprocess": d => 5},
    {"name": "day_of_week$subexpression$7$subexpression$1", "symbols": [/[sS]/, /[aA]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "day_of_week$subexpression$7", "symbols": ["day_of_week$subexpression$7$subexpression$1"]},
    {"name": "day_of_week$subexpression$7$subexpression$2", "symbols": [/[sS]/, /[aA]/, /[tT]/, /[uU]/, /[rR]/, /[dD]/, /[aA]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "day_of_week$subexpression$7", "symbols": ["day_of_week$subexpression$7$subexpression$2"]},
    {"name": "day_of_week", "symbols": ["day_of_week$subexpression$7"], "postprocess": d => 6},
    {"name": "time", "symbols": ["time_base"], "postprocess": d => [d[0][0], d[0][1], null]},
    {"name": "time", "symbols": ["time_base", "_", "timezone_name"], "postprocess": d => [d[0][0], d[0][1], "utc"]},
    {"name": "time_base", "symbols": ["hr24clock_hr_min"], "postprocess": d => [d[0][0], d[0][1]]},
    {"name": "time_base", "symbols": ["time_hour", "_", "am_pm"], "postprocess": d => [d[2] ? d[0] : d[0] + 12, 0]},
    {"name": "time_base", "symbols": ["time_hour_min"], "postprocess": d => [d[0][0], d[0][1]]},
    {"name": "time_base", "symbols": ["time_hour_min", "_", "am_pm"], "postprocess": d => [d[2] ? d[0][0] : d[0][0] + 12, d[0][1]]},
    {"name": "time_base$subexpression$1", "symbols": [/[nN]/, /[oO]/, /[oO]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "time_base", "symbols": ["time_base$subexpression$1"], "postprocess": d => [12, 0]},
    {"name": "time_base$subexpression$2", "symbols": [/[mM]/, /[iI]/, /[dD]/, /[nN]/, /[iI]/, /[gG]/, /[hH]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "time_base", "symbols": ["time_base$subexpression$2"], "postprocess": d => [24, 0]},
    {"name": "time_base$subexpression$3", "symbols": [/[tT]/, /[eE]/, /[aA]/, /[tT]/, /[iI]/, /[mM]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "time_base", "symbols": ["time_base$subexpression$3"], "postprocess": d => [16, 0]},
    {"name": "hr24clock_hr_min", "symbols": ["int_2_digit", "int_2_digit"], "postprocess": d => [d[0], d[1]]},
    {"name": "time_hour", "symbols": ["int1_2digit"], "postprocess": d => d[0]},
    {"name": "time_hour_min", "symbols": ["hour_min"], "postprocess": d => d[0]},
    {"name": "hour_min", "symbols": ["int1_2digit", {"literal":":"}, "int_2_digit"], "postprocess": d => [d[0], d[2]]},
    {"name": "am_pm$subexpression$1", "symbols": [/[aA]/, /[mM]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "am_pm", "symbols": ["am_pm$subexpression$1"], "postprocess": d => true},
    {"name": "am_pm$subexpression$2", "symbols": [/[pP]/, /[mM]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "am_pm", "symbols": ["am_pm$subexpression$2"], "postprocess": d => false},
    {"name": "timezone_name$subexpression$1", "symbols": [/[uU]/, /[tT]/, /[cC]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "timezone_name", "symbols": ["timezone_name$subexpression$1"]},
    {"name": "add$subexpression$1", "symbols": ["_", {"literal":"+"}, "_"]},
    {"name": "add$subexpression$1$subexpression$1", "symbols": [/[pP]/, /[lL]/, /[uU]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "add$subexpression$1", "symbols": ["__", "add$subexpression$1$subexpression$1", "__"]},
    {"name": "add$subexpression$1$subexpression$2", "symbols": [/[aA]/, /[nN]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "add$subexpression$1", "symbols": ["__", "add$subexpression$1$subexpression$2", "__"]},
    {"name": "add$subexpression$1$subexpression$3", "symbols": [/[aA]/, /[fF]/, /[tT]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "add$subexpression$1", "symbols": ["__", "add$subexpression$1$subexpression$3", "__"]},
    {"name": "add", "symbols": ["add$subexpression$1"], "postprocess": d => null},
    {"name": "subtract$subexpression$1", "symbols": ["_", {"literal":"-"}, "_"]},
    {"name": "subtract$subexpression$1$subexpression$1", "symbols": [/[mM]/, /[iI]/, /[nN]/, /[uU]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "subtract$subexpression$1", "symbols": ["__", "subtract$subexpression$1$subexpression$1", "__"]},
    {"name": "subtract$subexpression$1$subexpression$2", "symbols": [/[lL]/, /[eE]/, /[sS]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "subtract$subexpression$1", "symbols": ["__", "subtract$subexpression$1$subexpression$2", "__"]},
    {"name": "subtract$subexpression$1$subexpression$3", "symbols": [/[sS]/, /[uU]/, /[bB]/, /[tT]/, /[rR]/, /[aA]/, /[cC]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "subtract$subexpression$1", "symbols": ["__", "subtract$subexpression$1$subexpression$3", "__"]},
    {"name": "subtract$subexpression$1$subexpression$4", "symbols": [/[bB]/, /[eE]/, /[fF]/, /[oO]/, /[rR]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "subtract$subexpression$1", "symbols": ["__", "subtract$subexpression$1$subexpression$4", "__"]},
    {"name": "subtract", "symbols": ["subtract$subexpression$1"], "postprocess": d => null},
    {"name": "scaled_period", "symbols": ["inc_dec_number", "_", "inc_dec_period"], "postprocess": d => d[0] * d[2]},
    {"name": "inc_dec_number", "symbols": ["decimal"]},
    {"name": "inc_dec_number", "symbols": ["one"]},
    {"name": "inc_dec_number", "symbols": ["two"]},
    {"name": "inc_dec_number", "symbols": ["three"], "postprocess": d => d[0]},
    {"name": "one$subexpression$1$subexpression$1", "symbols": [/[oO]/, /[nN]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "one$subexpression$1", "symbols": ["one$subexpression$1$subexpression$1"]},
    {"name": "one$subexpression$1$subexpression$2", "symbols": [/[aA]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "one$subexpression$1", "symbols": ["one$subexpression$1$subexpression$2"]},
    {"name": "one$subexpression$1$subexpression$3", "symbols": [/[aA]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "one$subexpression$1", "symbols": ["one$subexpression$1$subexpression$3"]},
    {"name": "one", "symbols": ["one$subexpression$1", "__"], "postprocess": d => 1},
    {"name": "two$subexpression$1$subexpression$1", "symbols": [/[tT]/, /[wW]/, /[oO]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "two$subexpression$1", "symbols": ["two$subexpression$1$subexpression$1"]},
    {"name": "two$subexpression$1$ebnf$1$subexpression$1$subexpression$1", "symbols": [/[aA]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "two$subexpression$1$ebnf$1$subexpression$1", "symbols": ["two$subexpression$1$ebnf$1$subexpression$1$subexpression$1", "__"]},
    {"name": "two$subexpression$1$ebnf$1", "symbols": ["two$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "two$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "two$subexpression$1$subexpression$2", "symbols": [/[cC]/, /[oO]/, /[uU]/, /[pP]/, /[lL]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "two$subexpression$1", "symbols": ["two$subexpression$1$ebnf$1", "two$subexpression$1$subexpression$2"]},
    {"name": "two", "symbols": ["two$subexpression$1", "__"], "postprocess": d => 2},
    {"name": "three$subexpression$1$subexpression$1", "symbols": [/[tT]/, /[hH]/, /[rR]/, /[eE]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "three$subexpression$1", "symbols": ["three$subexpression$1$subexpression$1"]},
    {"name": "three$subexpression$1$ebnf$1$subexpression$1$subexpression$1", "symbols": [/[aA]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "three$subexpression$1$ebnf$1$subexpression$1", "symbols": ["three$subexpression$1$ebnf$1$subexpression$1$subexpression$1", "__"]},
    {"name": "three$subexpression$1$ebnf$1", "symbols": ["three$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "three$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "three$subexpression$1$subexpression$2", "symbols": [/[fF]/, /[eE]/, /[wW]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "three$subexpression$1", "symbols": ["three$subexpression$1$ebnf$1", "three$subexpression$1$subexpression$2"]},
    {"name": "three", "symbols": ["three$subexpression$1", "__"], "postprocess": d => 3},
    {"name": "inc_dec_period", "symbols": ["seconds"]},
    {"name": "inc_dec_period", "symbols": ["minutes"]},
    {"name": "inc_dec_period", "symbols": ["hours"]},
    {"name": "inc_dec_period", "symbols": ["days"]},
    {"name": "inc_dec_period", "symbols": ["weeks"]},
    {"name": "inc_dec_period", "symbols": ["fortnight"], "postprocess": d => d[0]},
    {"name": "seconds$subexpression$1$subexpression$1", "symbols": [/[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "seconds$subexpression$1", "symbols": ["seconds$subexpression$1$subexpression$1"]},
    {"name": "seconds$subexpression$1$subexpression$2", "symbols": [/[sS]/, /[eE]/, /[cC]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "seconds$subexpression$1", "symbols": ["seconds$subexpression$1$subexpression$2"]},
    {"name": "seconds$subexpression$1$subexpression$3", "symbols": [/[sS]/, /[eE]/, /[cC]/, /[oO]/, /[nN]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "seconds$subexpression$1$ebnf$1$subexpression$1", "symbols": [/[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "seconds$subexpression$1$ebnf$1", "symbols": ["seconds$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "seconds$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "seconds$subexpression$1", "symbols": ["seconds$subexpression$1$subexpression$3", "seconds$subexpression$1$ebnf$1"]},
    {"name": "seconds", "symbols": ["seconds$subexpression$1"], "postprocess": d => 1},
    {"name": "minutes$subexpression$1$subexpression$1", "symbols": [/[mM]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "minutes$subexpression$1", "symbols": ["minutes$subexpression$1$subexpression$1"]},
    {"name": "minutes$subexpression$1$subexpression$2", "symbols": [/[mM]/, /[iI]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "minutes$subexpression$1", "symbols": ["minutes$subexpression$1$subexpression$2"]},
    {"name": "minutes$subexpression$1$subexpression$3", "symbols": [/[mM]/, /[iI]/, /[nN]/, /[uU]/, /[tT]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "minutes$subexpression$1$ebnf$1$subexpression$1", "symbols": [/[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "minutes$subexpression$1$ebnf$1", "symbols": ["minutes$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "minutes$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "minutes$subexpression$1", "symbols": ["minutes$subexpression$1$subexpression$3", "minutes$subexpression$1$ebnf$1"]},
    {"name": "minutes", "symbols": ["minutes$subexpression$1"], "postprocess": d => 60},
    {"name": "hours$subexpression$1$subexpression$1", "symbols": [/[hH]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "hours$subexpression$1", "symbols": ["hours$subexpression$1$subexpression$1"]},
    {"name": "hours$subexpression$1$subexpression$2", "symbols": [/[hH]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "hours$subexpression$1", "symbols": ["hours$subexpression$1$subexpression$2"]},
    {"name": "hours$subexpression$1$subexpression$3", "symbols": [/[hH]/, /[oO]/, /[uU]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "hours$subexpression$1$ebnf$1$subexpression$1", "symbols": [/[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "hours$subexpression$1$ebnf$1", "symbols": ["hours$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "hours$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "hours$subexpression$1", "symbols": ["hours$subexpression$1$subexpression$3", "hours$subexpression$1$ebnf$1"]},
    {"name": "hours", "symbols": ["hours$subexpression$1"], "postprocess": d => 3600},
    {"name": "days$subexpression$1$subexpression$1", "symbols": [/[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "days$subexpression$1", "symbols": ["days$subexpression$1$subexpression$1"]},
    {"name": "days$subexpression$1$subexpression$2", "symbols": [/[dD]/, /[aA]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "days$subexpression$1$ebnf$1$subexpression$1", "symbols": [/[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "days$subexpression$1$ebnf$1", "symbols": ["days$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "days$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "days$subexpression$1", "symbols": ["days$subexpression$1$subexpression$2", "days$subexpression$1$ebnf$1"]},
    {"name": "days", "symbols": ["days$subexpression$1"], "postprocess": d => 24*3600},
    {"name": "weeks$subexpression$1$subexpression$1", "symbols": [/[wW]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "weeks$subexpression$1", "symbols": ["weeks$subexpression$1$subexpression$1"]},
    {"name": "weeks$subexpression$1$subexpression$2", "symbols": [/[wW]/, /[eE]/, /[eE]/, /[kK]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "weeks$subexpression$1$ebnf$1$subexpression$1", "symbols": [/[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "weeks$subexpression$1$ebnf$1", "symbols": ["weeks$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "weeks$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "weeks$subexpression$1", "symbols": ["weeks$subexpression$1$subexpression$2", "weeks$subexpression$1$ebnf$1"]},
    {"name": "weeks", "symbols": ["weeks$subexpression$1"], "postprocess": d => 7*24*3600},
    {"name": "fortnight$subexpression$1$subexpression$1", "symbols": [/[fF]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "fortnight$subexpression$1", "symbols": ["fortnight$subexpression$1$subexpression$1"]},
    {"name": "fortnight$subexpression$1$subexpression$2", "symbols": [/[fF]/, /[oO]/, /[rR]/, /[tT]/, /[nN]/, /[iI]/, /[gG]/, /[hH]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "fortnight$subexpression$1$ebnf$1$subexpression$1", "symbols": [/[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "fortnight$subexpression$1$ebnf$1", "symbols": ["fortnight$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "fortnight$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "fortnight$subexpression$1", "symbols": ["fortnight$subexpression$1$subexpression$2", "fortnight$subexpression$1$ebnf$1"]},
    {"name": "fortnight", "symbols": ["fortnight$subexpression$1"], "postprocess": d => 2*7*24*3600},
    {"name": "words$ebnf$1", "symbols": []},
    {"name": "words$ebnf$1$subexpression$1", "symbols": ["__", "word"], "postprocess": d => d[1]},
    {"name": "words$ebnf$1", "symbols": ["words$ebnf$1", "words$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "words", "symbols": ["word", "words$ebnf$1"], "postprocess": d => [d[0]].concat(d[1]).join(' ')},
    {"name": "word$ebnf$1", "symbols": [/[^\s]/]},
    {"name": "word$ebnf$1", "symbols": ["word$ebnf$1", /[^\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "word", "symbols": ["word$ebnf$1"], "postprocess": d => d[0].join('')},
    {"name": "int1_2digit", "symbols": ["int_1_digit"], "postprocess": d => d[0]},
    {"name": "int1_2digit", "symbols": ["int_2_digit"], "postprocess": d => d[0]},
    {"name": "int2_or_4digit", "symbols": ["int_2_digit"], "postprocess": d => d[0]},
    {"name": "int2_or_4digit", "symbols": ["int_4_digit"], "postprocess": d => d[0]},
    {"name": "int_4_digit", "symbols": ["int_2_digit", "int_2_digit"], "postprocess": d => d[0] * 100 + d[1]},
    {"name": "int_2_digit", "symbols": ["int_1_digit", "int_1_digit"], "postprocess": d => d[0] * 10 + d[1]},
    {"name": "int_1_digit", "symbols": [/[0-9]/], "postprocess": d => parseInt(d[0])},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": nothing},
    {"name": "__$ebnf$1", "symbols": [/[\s]/]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": nothing}
]
  , ParserStart: "reminderspec"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
