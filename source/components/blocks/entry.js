var h = require('bel')
var md = require('../../methods/md')

module.exports = Entry

function Entry (opts) {
  var o = opts || { }

  var text = h`<div></div>`
  text.innerHTML = md.parse(o.text, o.path)

  return h`
    <div class="x p0-5 lh2">
      <div class="c4 p0-5">
        ${o.title}
      </div>
      <div class="c8 p0-5 copy copy-indent">
        ${text}
      </div>
    </div>
  `
}
