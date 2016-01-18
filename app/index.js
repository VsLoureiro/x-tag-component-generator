/**
 * Created by vloureiro on 06/01/2016.
 */
'use strict';
var generators = require('yeoman-generator');
var fs = require('fs');
var chalk = require('chalk');
var slugify = require('underscore.string/slugify');
var camelize = require('underscore.string/camelize');

var AppGenerator =  generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.argument('webcomponentname', { type: String, required: true });
        this.webcomponentname = slugify(this.webcomponentname);
    },

    init: function(){
        this.filename = 'sd-' + this.webcomponentname;
        this.camelizedName = camelize(this.filename);
    },

    prompting: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'In what folder do you want to create the webcomponent?',
            default: 'location' // Default to current folder name
        }, function (answers) {
            this.folder = answers.name;

            this.path = 'src/' + this.folder + '/' + this.filename + '/';
            done();
        }.bind(this));
    },

    installingDependencies: function() {
        this.log(chalk.green('Installing dependencies...'));
        this.npmInstall(['x-tag'], { 'saveDev': true });
        this.bowerInstall(['handlebars'], { 'saveDev': true });
    },

    copyREADME: function () {
        this.log(chalk.green('Creating readme...'));
        this.fs.copyTpl(
            this.templatePath('README.md'),
            this.destinationPath(this.path + 'README.md'),
            {
                filename: this.filename
            }
        );
    },

    createWebComponent: function () {
        this.log(chalk.green('Creating webcomponent...'));
        this.fs.copyTpl(
            this.templatePath('webcomponent.js'),
            this.destinationPath(this.path + this.filename +'.js'),
            {
                filename: this.filename,
                camelizedName : this.camelizedName
            }
        );
    },

    createHtmlTemplate: function () {
        this.log(chalk.green('Creating html template...'));
        this.fs.copyTpl(
            this.templatePath('template.html'),
            this.destinationPath(this.path + this.filename +'.html'),
            {
                filename: this.filename
            }
        );
    },

    createHtmlIndex: function () {
        this.log(chalk.green('Creating html index to test component...'));
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath(this.path +'index.html'),
            {
                filename: this.filename
            }
        );
    },

    createTest: function () {
        this.log(chalk.green('Creating unit test...'));
        this.fs.copyTpl(
            this.templatePath('webcomponent-test.js'),
            this.destinationPath(this.path + this.filename +'-test.js'),
            {
                filename: this.filename,
                camelizedName : this.camelizedName
            }
        );
    },
    createLess: function () {
        this.log(chalk.green('Creating less file...'));
        this.fs.copyTpl(
            this.templatePath('template.less'),
            this.destinationPath(this.path + this.filename +'.less'),
            { }
        );
    }
});


module.exports = AppGenerator;