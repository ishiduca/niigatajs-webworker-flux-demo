'use strict'
var React    = require('react')
var ReactDOM = require('react-dom')
var App      = require('./components/app')

var work = require('webworkify')
var tap  = work(require('./workers/tap'))

ReactDOM.render(
    <App
        context={{
            tap: tap
        }}
    />
  , document.querySelector('#react-app')
)
