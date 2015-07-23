'use strict'

const React = require('react')
const <%= displayName %> = require('../src/<%= componentFileName %>.js')
const extend = require('extend')

const <%= displayName %>Example = React.createClass({
  displayName: '<%= displayName %>Example',
  statics: {
    // See https://github.com/theogravity/react-styleguide-generator/tree/react-docgen-impl
    // for usage info
    // we use extend() to inherit off the base component's styleguide so it can be
    // read by the styleguide generator and spares us from repeating code
    styleguide: extend(<%= displayName %>.styleguide, {
      // we put in an instance of the component we want to derive additional examples out of
      exampleComponent: <%= displayName %>,
      examples: [
        {
          tabTitle: 'Example A',
          props: {
            defaultText: 'Example 2',
            styles: {
              'border': '2px solid blue'
            }
          }
        }
      ]
    })
  },
  render() {
    // This will be used for the first example
    return (
      <<%= displayName %> />
    )
  }
})

module.exports = <%= displayName %>Example
