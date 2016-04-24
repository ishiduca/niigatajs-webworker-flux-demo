var TapStore = require('../stores/tap')
var xtend    = require('xtend')

module.exports = function (self) {
    var stores = [ new TapStore ]
    var states = stores.reduce(function (states, store) {
        return (states = xtend(states, store.getState()))
    }, {})

    self.addEventListener('message', function (ev) {
        for (var i = 0; i < stores.length; i++) {
            if (stores[i].label === ev.data.type)
                states = xtend(states, stores[i].work(ev.data.value))
        }
        self.postMessage(states)
    })
}


