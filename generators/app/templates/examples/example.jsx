'use strict'

const React = require('react')
const <%= displayName %> = require('../src/<%= componentFileName %>.jsx')
const extend = require('extend')

const <%= displayName %>Example = React.createClass({
  displayName: '<%= displayName %>Example',
  statics: {
    // See https://github.com/theogravity/react-styleguide-generator/tree/react-docgen-impl
    // for usage info
    styleguide: extend(<%= displayName %>.styleguide, {
      exampleComponent: <%= displayName %>,
      examples: [
        {
          tabTitle: 'Example A',
          props: {
            defaultText: 'Example 2'
          }
        }
      ]
    })
  },
  render() {
    return (
      <<%= displayName %> />
    )
  }
})

module.exports = <%= displayName %>Example
