#!/usr/bin/env node

var ldjson = require('ldjson-stream')
var uppercase = require('./')

var json = process.argv.indexOf('--json') > -1

if (json) {
  process.stdin
    .pipe(ldjson.parse())
    .pipe(uppercase())
    .pipe(ldjson.serialize())
    .pipe(process.stdout)
} else {
  process.stdin.setEncoding('utf-8')
  process.stdin
    .pipe(uppercase())
    .pipe(process.stdout)
}