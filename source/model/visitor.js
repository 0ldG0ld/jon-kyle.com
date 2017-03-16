var x = require('xtend')
var xhr = require('xhr')

module.exports = {
  state: {
    visitor: {
      blocks: [
        'introduction',
        'where-its-at-right-now'
      ]
    }
  },
  reducers: {
    visitorBlocks: function (state, data) {
      return {
        visitor: x(state.visitor, {
          blocks: data
        })
      }
    },
    visitor: function (state, data) {
      return { visitor: x(state.visitor, data) }
    }
  }
}
