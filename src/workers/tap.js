var store = {
    state: {tap: 0}
  , label: 'TAP'
  , tap (n) {
        this.setState({tap: this.state.tap + n})
        return this
    }
  , setState (state) {
        this.state = state
    }
  , getState () {
        return this.state
    }
}

module.exports = function (self) {
    self.addEventListener('message', function (ev) {
        var data = ev.data
        if (data.type === store.label) {
            self.postMessage(store.tap(data.value).getState())
        }
    })
}


