var test = require('tape')
var h = require('virtual-dom/h')
var createField = require('../index')

test('create an input field', function (t) {
  var field = createField(h, { value: 'https://g.twimg.com/Twitter_logo_blue.png' })
  t.equal(field.tagName, 'INPUT')
  t.equal(field.properties.src, 'https://g.twimg.com/Twitter_logo_blue.png')
  t.end()
})

test('create a display field', function (t) {
  var field = createField(h, {
    value: 'https://g.twimg.com/Twitter_logo_blue.png',
    display: true
  })
  t.equal(field.tagName, 'IMG')
  t.equal(field.properties.src, 'https://g.twimg.com/Twitter_logo_blue.png')
  t.end()
})
