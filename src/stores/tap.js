module.exports = Tap

function Tap () {
    this.label = 'TAP'
    this.state = {tap: 0}
}

Tap.prototype.setState = function (state) {
    this.state = state
}

Tap.prototype.getState = function () {
    return this.state
}

Tap.prototype.tap = function (n) {
   this.setState({tap: this.state.tap + n})
   return this
}

Tap.prototype.work = function (data) {
    return this.tap(data).getState()
}
