'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the unreal ' + chalk.red('ReactBaseplate') + ' generator!'
    ));

    var prompts = [
      {
        name: 'packageName',
        message: 'What is the component\'s package name?'
      },
      {
        name: 'displayName',
        message: 'What is the displayName of your component? (eg, \'TestComponent\'; No hyphens/spaces)'
      },
      {
        name: 'componentFileName',
        message: 'File name of the component (excluding extension)?'
      }
    ];

    this.prompt(prompts, function (props) {
      this.packageName = props.packageName;
      this.displayName = props.displayName;
      this.componentFileName = props.componentFileName;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { packageName: this.packageName }
      );

      this.fs.copy(
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );

      this.fs.copy(
        this.templatePath('_.gitignore'),
        this.destinationPath('.gitignore')
      );

      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'),
        { packageName: this.packageName }
      );
    },
    projectFiles: function() {
      this.fs.copyTpl(
        this.templatePath('examples/example.jsx'),
        this.destinationPath('examples/' + this.componentFileName + '.jsx'),
        { displayName: this.displayName,
          componentFileName: this.componentFileName
        }
      );

      this.fs.copyTpl(
        this.templatePath('src/example.jsx'),
        this.destinationPath('src/' + this.componentFileName + '.jsx'),
        { displayName: this.displayName,
          componentFileName: this.componentFileName
        }
      );

      this.fs.copy(
        this.templatePath('src/styles.js'),
        this.destinationPath('src/styles.js')
      );

      this.fs.copyTpl(
        this.templatePath('src/example.js'),
        this.destinationPath('src/' + this.componentFileName + '.js'),
        { displayName: this.displayName,
          componentFileName: this.componentFileName
        }
      );

    },
    testFiles: function() {
      this.fs.copyTpl(
        this.templatePath('test/client/lib/app.js'),
        this.destinationPath('test/client/lib/app.js'),
        { displayName: this.displayName,
          componentFileName: this.componentFileName
        }
      );

      this.fs.copy(
        this.templatePath('test/client/test.spec.js'),
        this.destinationPath('test/client/test.spec.js')
      );

    }
  },
  install: function () {
    this.installDependencies();
  },
  complete: function() {
    this.log(yosay(
      'Use ' + chalk.green('npm run dev') + ' to launch the component workflow after package dependencies have finished installing.'
    ));

  }
});
