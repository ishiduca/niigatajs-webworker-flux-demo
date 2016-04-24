var React  = require('react')

var Tap = React.createClass({
    render: function () {
        return (
            <section>
                <button
                    type="button"
                    onClick={this.inc}
                >inc</button>
                |
                <button
                    type="button"
                    onClick={this.dec}
                >dec</button>
            </section>
        )
    }
  , inc: function () {
        this.props.worker.postMessage({
            type: 'TAP'
          , value: 1
        })
    }
  , dec: function () {
        this.props.worker.postMessage({
            type: 'TAP'
          , value: -1
        })
    }
})

var Display = React.createClass({
    render: function () {
        return (
            <section>
                {this.props.tap || '--'}
            </section>
        )
    }
})

var App = React.createClass({
    render: function () {
        return (
            <article role="application">
                <Display
                    tap={this.state.tap}
                />
                <Tap
                    worker={this.props.context.worker}
                />
            </article>
        )
    }
  , getInitialState: function () {
        return {
            tap: 0
        }
    }
  , componentDidMount: function () {
        var context = this.props.context
        context.worker.addEventListener('message', function (ev) {
            this.setState(ev.data)
        }.bind(this))
    }
})

module.exports = App
