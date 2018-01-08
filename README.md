# Angular - Bootstrap - Sass Generator 
[![NPM version][npm-image]][npm-url]

This is a simple Yeoman Generator I made for quick development of angular websites! It saves you the hassle of downloading and linking the angular/bootstrap required files (plus some other neat extras) so you can go straight to the code!

This generator includes:

* Bootstrap Framework v3.3.5
* Angular Framework v1.6.1
* Jquery Framework v.3.2.1
* Jade
* Grunt with LiveReload
* HTML template with everything correctly linked!

## Updates / Versions

**1.3.0 ~ January 8, 2018 ~** Added some missing dependencies needed for the generator to work flawlessly without the need of doing some extra steps. Thanks to [Frampersand](https://github.com/frampersand) for pointing this out! :facepunch: :sparkles:

**< 1.3.0 ~ N/A ~** I was too lazy to do this; but basically just added an Jade Compilator plus other Grunt Tweaks.

## File Structure

```
|-- .bowerrc
|-- bower.json
|-- Gruntfile.js
|-- package.json
|-- public
  |-- index.html
  |-- css
    |-- style.css
  |-- scss
    |-- style.scss
  |-- js
    |-- app.js
  |-- img
    |-- image.jpg
  |-- libs
    |-- Angular-Bootstrap-Jquery dependencies and required files.
```

## What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

## Installation

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-jade-sass, run:

```bash
npm install -g generator-angular-bootstrap-sass
```

Finally, initiate the generator:

```bash
yo angular-bootstrap-sass
```

It will ask you for some input, like the name of your proyect and other stuff. Then it will run npm install and bower install.

When Yeoman has finally done his work, all you have to do is to execute "grunt" in order to have livereload features **(Remember for Livereload to work, you need the Livereload plugin installed in your browser)**.

Have fun! :blue_heart:

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Jonathan Martinez](https://about.me/Klaha)

[npm-image]: https://badge.fury.io/js/generator-angular-bootstrap-sass.svg
[npm-url]: https://npmjs.org/package/generator-angular-bootstrap-sass
[travis-image]: https://travis-ci.org/Klaha/generator-angular-bootstrap-sass.svg?branch=master
[travis-url]: https://travis-ci.org/Klaha/generator-angular-bootstrap-sass
[daviddm-image]: https://david-dm.org/Klaha/generator-angular-bootstrap-sass.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Klaha/generator-angular-bootstrap-sass