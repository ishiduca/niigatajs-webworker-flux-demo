'use strict'
var React    = require('react')
var ReactDOM = require('react-dom')
var App      = require('./components/app')

var work = require('webworkify')

ReactDOM.render(
    <App context={{
            worker: work(require('./worker'))
    }} />
  , document.querySelector('#react-app')
)
