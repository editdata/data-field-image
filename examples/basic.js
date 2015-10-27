var vraf = require('virtual-raf')
var h = require('virtual-dom/h')
var stringField = require('../index')

function render (state) {
  var elements = []

  elements.push(stringField(h, {
    value: state.imageURL,
    oninput: function (e) {
      tree.update({ imageURL: e.target.value })
    }
  }))

  elements.push(stringField(h, {
    display: true,
    value: state.imageURL,
    onclick: function (e) { console.log('display', e.target.value) }
  }))

  return h('div.fields', elements)
}

var tree = vraf({ imageURL: 'http://placehold.it/50x50' }, render, require('virtual-dom'))
document.body.appendChild(tree())
