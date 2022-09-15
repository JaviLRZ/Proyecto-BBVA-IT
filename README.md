# ProyectoBBVAIT

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

# Intern + Angular

This is a project to demonstrate using Intern with Angular 13. It contains [all of the specs](https://angular.io/generated/live-examples/testing/app-specs.eplnkr.html) from Angular's test guide as well as [some extras](https://angular.io/generated/live-examples/testing/bag-specs.eplnkr.html). Specs have been reformatted and converted to using Intern best practices as outlined below.

### Browser compatibility

* `Google Chrome` - Here is where I have been working, there is no compatibility problem.
* `FireFox` - there is no compatibility problem.
* `Internet Explorer` - It is a slightly obsolete browser for my taste, I do not recommend opening it here.
* `Opera` - runs `tslint` there is no compatibility problem.
* `Microsoft Edge` - there is no compatibility problem.

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Angular][Angular.io]][Angular-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at https://api.openweathermap.org/data/2.5
2. Clone the repo
   ```cmd
   git clone https://github.com/JaviLRZ/Proyecto-BBVA-IT.git
   ```
3. Install NPM packages
   ```cmd
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = '2989c66bd7aeabc1963755a6d63ee503';
   ```

The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs `lite-server` on port `4200`.

Shut it down manually with `Ctrl-C`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm run build` - runs the TypeScript compiler and asset copier once.
* `npm run build:watch` - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into `dist/`.
* `npm run lint` - runs `tslint` on the project files.
* `npm run serve` - runs `lite-server`.

These are the test-related scripts:

* `npm test` - builds the application and runs Intern tests (both unit and functional) one time.
* `npm run ci` - cleans, lints, and builds the application and runs Intern tests (both unit and functional) one time.

<!-- CONTACT -->
## Contact

Javier López - javierlopezramirez.97@gmail.com

Project Link: https://github.com/JaviLRZ