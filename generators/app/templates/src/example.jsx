'use strict'

const React = require('react')

/**
 * A simple text box.
 */
const <%= displayName %> = React.createClass({
  // DisplayName is required for react-styleguide-generator
  displayName: '<%= displayName %>',
  // See https://github.com/theogravity/react-styleguide-generator/tree/react-docgen-impl
  // for usage info
  statics: {
    styleguide: {
      index: '1.1',
      category: 'Form Input',
      title: 'Text',
      description: 'Input widget. You can use **Markdown** in this field.',
      // Example code to display.
      // Using es6 template strings for flexibility
      code: `<<%= displayName %> />`
    }
  },
  // The following comments in propTypes are parsed by react-docgen
  // and used by react-styleguide-generator
  propTypes: {
    /**
     * Default text to show when values is not defined
     */
    defaultText: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      styles: {},
      defaultText: 'Test text'
    }
  },

  render() {
    return (
      <input type="text" defaultValue={this.props.defaultText} />
    )
  }
})

module.exports = <%= displayName %>
