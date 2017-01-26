'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Hola! Bienvenido al generador de ' + chalk.red('Angular+Bootstrap+SaSS') + ' hecho por Jonathan!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Nombre del Proyecto? ',
      default: this.appname
    }, {
      type: 'input',
      name: 'description',
      message: 'Breve descripcion del proyecto: ',
      default: ""
    }, {
      type: 'input',
      name: 'user',
      message: 'Autor: ',
      default: ""
    }, {
      type: 'input',
      name: 'email',
      message: 'Email del Autor: ',
      default: ""
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name,
        description: this.props.description,
        user: this.props.user,
        email: this.props.email
      }
    );
    this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'), {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_views/_index.html'),
      this.destinationPath('public/index.html'), {
        name: this.props.name
      }
    );
    this.fs.copy(
      this.templatePath('bowerrc'),
      this.destinationPath('.bowerrc')
    );
    this.fs.copy(
      this.templatePath('Gruntfile.js'),
      this.destinationPath('Gruntfile.js')
    );
    this.fs.copy(
      this.templatePath('_public/_css/_style.css'),
      this.destinationPath('public/css/style.css')
    );
    this.fs.copy(
      this.templatePath('_public/_js/_app.js'),
      this.destinationPath('public/js/app.js')
    );
    this.fs.copy(
      this.templatePath('_public/_scss/_style.scss'),
      this.destinationPath('public/scss/style.js')
    );
    this.fs.copy(
      this.templatePath('_public/_img/_image.jpg'),
      this.destinationPath('public/img/image.jpg')
    );
  },
  install: function () {
    this.installDependencies();
  },
  end: function() {
    this.log(yosay(
      'Listo! Recuerda ejecutar ' + chalk.red('grunt') + ' para tener el livereload!'
    ));
  },
});
