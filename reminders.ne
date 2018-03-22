@builtin "number.ne"     # `int`, `decimal`, and `percentage` number primitives

@{%

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

%}

## these examples should be parsed

# remind me in a few hours to go to the store
# remind me at 9:45 next monday to go to the store
# 3 days before a fortnight, remind me to go to the store

# referenced a lot from `at`'s timespec:
# https://www.apt-browse.org/browse/ubuntu/precise/main/i386/at/3.1.13-1ubuntu1/file/usr/share/doc/at/timespec

## Each rule returns a list of possible parsings. Order of the rules matters in ambiguous cases.

reminderspec      -> "remind"i __ someone __ "to"i __ dosomething __ time_expr {% d => combine(d[2], d[6], d[8]) %}
                   | "remind"i __ someone __ time_expr ",":? __ "to"i __ dosomething {% d => combine(d[2], d[9], d[4]) %}
                   | time_expr ",":? __ "remind"i __ someone __ "to"i __ dosomething {% d => combine(d[5], d[9], d[0]) %}

someone           -> word  {% d => d[0] %}
dosomething       -> words {% d => d[0] %}

## Date/Duration math
time_expr         -> ("at"i __|"on"i __):? timespec        {% d => d[1] %}
                   | "in"i __ scaled_period                {% d => adds(moment(), d[2]) %}
                   | scaled_period add time_expr           {% d => adds(d[2], d[0]) %}
                   | time_expr add scaled_period           {% d => adds(d[0], d[2]) %}
                   | scaled_period subtract time_expr      {% d => subs(d[2], d[0]) %}
                   | time_expr subtract scaled_period      {% d => subs(d[0], d[2]) %}

## Date and Time

timespec          -> spec_base {% d => d[0] %}

spec_base         -> date           {% d => setTimeForDate(d[0], [0,0]) %}
                   | time           {% d => setTimeForDate(null, d[0]) %}
                   | time _ date    {% d => setTimeForDate(d[2], d[0]) %}
                   | date _ time    {% d => setTimeForDate(d[0], d[2]) %}
                   | "now"i         {% d => moment() %}           

## Date stuff 

date              -> month_name __ day_number                      {% d => nextDate(d[0], d[2]) %}      
                   | month_name __ day_number __ year_number       {% d => newDate(d[0], d[2], d[4]) %}
                   | month_name __ day_number _ "," __ year_number {% d => newDate(d[0], d[2], d[6]) %}
                   | day_number __ month_name                      {% d => nextDate(d[2], d[0]) %}
                   | day_number __ month_name __ year_number       {% d => newDate(d[2], d[0], d[4]) %}
                   | month_number "/" day_number                   {% d => nextDate(d[0], d[2]) %}
                   | month_number "/" day_number "/" year_number   {% d => newDate(d[0], d[2], d[4]) %}
                   | "today"i                                      {% d => moment() %}
                   | "tomorrow"i                                   {% d => moment().add(1, 'day') %}
                   | "yesterday"i                                  {% d => moment().subtract(1, 'day') %}

month_name        -> ("jan"i | "january"i)   {% d => 1 %}
                   | ("feb"i | "february"i)  {% d => 2 %}
                   | ("mar"i | "march"i)     {% d => 3 %}
                   | ("apr"i | "april"i)     {% d => 4 %}
                   | ("may"i)                {% d => 5 %}
                   | ("jun"i | "june"i)      {% d => 6 %}
                   | ("jul"i | "july"i)      {% d => 7 %}
                   | ("aug"i | "august"i)    {% d => 8 %}
                   | ("sep"i | "september"i) {% d => 9 %}
                   | ("oct"i | "october"i)   {% d => 10 %}
                   | ("nov"i | "november"i)  {% d => 11 %}
                   | ("dec"i | "december"i)  {% d => 12 %}

month_number      -> int1_2digit             {% d => d[0] %}
day_number        -> int1_2digit             {% d => d[0] %}
year_number       -> int2_or_4digit          {% d => d[0] %}

day_of_week       -> ("sun"i | "sunday"i)    {% d => 0 %}
                   | ("mon"i | "monday"i)    {% d => 1 %}
                   | ("tue"i | "tuesday"i)   {% d => 2 %}
                   | ("wed"i | "wednesday"i) {% d => 3 %}
                   | ("thu"i | "thursday"i)  {% d => 4 %}
                   | ("fri"i | "friday"i)    {% d => 5 %}
                   | ("sat"i | "saturday"i)  {% d => 6 %}

## Time stuff

# [hour, min, utc]
time              -> time_base                   {% d => [d[0][0], d[0][1], null] %}
                   | time_base _ timezone_name   {% d => [d[0][0], d[0][1], "utc"] %}

# [hour, min]
time_base         -> hr24clock_hr_min            {% d => [d[0][0], d[0][1]] %}
                   | time_hour _ am_pm           {% d => [d[2] ? d[0] : d[0] + 12, 0] %}     
                   | time_hour_min               {% d => [d[0][0], d[0][1]] %}
                   | time_hour_min _ am_pm       {% d => [d[2] ? d[0][0] : d[0][0] + 12, d[0][1]] %}
                   | "noon"i                     {% d => [12, 0] %}
                   | "midnight"i                 {% d => [24, 0] %}
                   | "teatime"i                  {% d => [16, 0] %}

hr24clock_hr_min  -> int_2_digit int_2_digit     {% d => [d[0], d[1]] %}

time_hour         -> int1_2digit                 {% d => d[0] %}

time_hour_min     -> hour_min                    {% d => d[0] %}
hour_min          -> int1_2digit ":" int_2_digit {% d => [d[0], d[2]] %}

am_pm             -> "am"i {% d => true %}
                   | "pm"i {% d => false %}

timezone_name     -> "utc"i

## Duration stuff

add               -> (_ "+" _ | __ "plus"i __ | __ "and"i __ | __ "after"i __) {% d => null %}
subtract          -> (_ "-" _ | __ "minus"i __ | __ "less"i __ | __ "subtract"i __ | __ "before"i __) {% d => null %}

scaled_period     -> inc_dec_number _ inc_dec_period  {% d => d[0] * d[2] %}

inc_dec_number    -> decimal | one | two | three            {% d => d[0] %}
one               -> ("one"i | "a"i | "an"i) __             {% d => 1 %}
two               -> ("two"i | ("a"i __):? "couple"i) __    {% d => 2 %}
three             -> ("three"i | ("a"i __):? "few"i) __     {% d => 2 %}

inc_dec_period    -> seconds | minutes | hours | days | weeks | fortnight {% d => d[0] %}

seconds           -> ("s"i | "sec"i | "second"i "s"i:?)     {% d => 1 %}
minutes           -> ("m"i | "min"i | "minute"i "s"i:?)     {% d => 60 %}
hours             -> ("h"i | "hr"i | "hour"i "s"i:?)        {% d => 3600 %}

days              -> ("d"i | "day"i "s"i:?)                 {% d => 24*3600 %}
weeks             -> ("w"i | "week"i "s"i:?)                {% d => 7*24*3600 %}
fortnight         -> ("fn"i | "fortnight"i "s"i:?)          {% d => 2*7*24*3600 %}

## Shared terminals

words             -> word (__ word {% d => d[1] %}):* {% d => [d[0]].concat(d[1]).join(' ') %}
word              -> [^\s]:+                 {% d => d[0].join('') %}

int1_2digit       -> int_1_digit             {% d => d[0] %}
                   | int_2_digit             {% d => d[0] %}

int2_or_4digit    -> int_2_digit             {% d => d[0] %}
                   | int_4_digit             {% d => d[0] %}

int_4_digit       -> int_2_digit int_2_digit {% d => d[0] * 100 + d[1] %}

int_2_digit       -> int_1_digit int_1_digit {% d => d[0] * 10 + d[1] %}
int_1_digit       -> [0-9]                   {% d => parseInt(d[0]) %}

_                 -> [\s]:* {% nothing %}
__                -> [\s]:+ {% nothing %}