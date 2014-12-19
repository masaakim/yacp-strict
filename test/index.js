var fs = require('fs')
var postcss = require('postcss')
var strict = require('..')

var test = require('tape')

function fixture (name) {
    return fs.readFileSync('test/fixtures/' + name + '.css', 'utf-8').trim()
}

test('throw error: using not only class selector', function (t) {
    var res = function () {
        return postcss().use(strict.postcss).process(fixture('test-1')).css
    }
    t.throws(res, /using not only class selector/)
    t.end()
})

test('throw error: using !important', function (t) {
    var res = function () {
        return postcss().use(strict.postcss).process(fixture('test-2')).css
    }
    t.throws(res, /using !important/)
    t.end()
})

test('success', function (t) {
    var res = postcss().use(strict.postcss).process(fixture('test-3')).css
    t.equal(res, fixture('test-3'))
    t.end()
})

test('throw error: using not only class selector', function (t) {
    var res = function () {
        return postcss().use(strict.postcss).process(fixture('test-4')).css
    }
    t.throws(res, /using not only class selector/)
    t.end()
})

test('throw error: using not only class selector', function (t) {
    var res = function () {
        return postcss().use(strict.postcss).process(fixture('test-5')).css
    }
    t.throws(res, /using not only class selector/)
    t.end()
})
