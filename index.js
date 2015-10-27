var assert = require('assert')
var extend = require('xtend')
var createClassName = require('data-field-classname')
var addhttp = require('addhttp')

/**
Create a virtual-dom image data-field for use with [data-ui](https://github.com/editdata/data-ui).
@param {function} h virtual-dom `h` function
@param {Object} properties properties object for `h`
@param {Boolean} properties.display true for display mode, default is false for input mode
@param {String} properties.value any image url
@param {String} value any image url
@returns virtual-dom tree
@name createImageField
@example
var createImageField = require('data-field-string')

createImageField(h, { onclick: function (e){} }, 'example string')
*/
module.exports = function createImageField (h, properties, imageurl) {
  properties = extend({
    tagName: 'input',
    type: 'url',
    display: false,
    size: 'normal',
    fieldType: 'input',
    attributes: {}
  }, properties)

  properties.dataType = 'url'
  properties.src = addhttp(properties.src || properties.value || imageurl)
  assert.ok(properties.src)

  if (properties.display) {
    properties.tagName = 'img'
    properties.fieldType = 'display'
  }

  properties.className = createClassName(properties)
  delete properties.size
  properties.value = properties.src
  return h(properties.tagName, properties, properties.src)
}
