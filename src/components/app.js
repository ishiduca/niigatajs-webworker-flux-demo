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
        this.props.tap.postMessage({
            type: 'TAP'
          , value: 1
        })
    }
  , dec: function () {
        this.props.tap.postMessage({
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
                    tap={this.props.context.tap}
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
        context.tap.addEventListener('message', function (ev) {
            var data = ev.data
            this.setState(data)
        }.bind(this))
    }
})

module.exports = App
