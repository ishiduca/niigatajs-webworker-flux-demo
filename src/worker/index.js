var TapStore = require('../stores/tap')

module.exports = function (self) {
    var stores = [ new TapStore ]
    self.addEventListener('message', function (ev) {
        for (var i = 0; i < stores.length; i++) {
            if (stores[i].label === ev.data.type)
                stores[i].work(ev.data.value, self)
        }
    })
}


