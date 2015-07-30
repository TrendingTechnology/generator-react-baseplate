module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig()

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('react-baseplate')

  /* Use to override any config from react-baseplate
  grunt.config.merge({
    'react-styleguide': {
      options: {
        configFile: {
          files: [
            process.cwd() + '/src/vendor/test.css'
          ]
        }
      }
    }
  })
  */

}
