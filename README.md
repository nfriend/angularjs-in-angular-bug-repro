# angularjs-in-angular-bug-repro
Reproducing an issue with using an AngularJS component in an Angular app

## Building and Running

To build and run this application:

- Clone this repo
  1. `git clone https://github.com/nfriend/angularjs-in-angular-bug-repro.git`
- Build and link the AngularJS module
  1. `cd angularjs-module`
  2. `npm install`
  3. `gulp build`
  4. `npm link`
- Link the module into the Angular app and build and run the app
  1. `cd ../angular-app`
  2. `npm install`
  3. `npm link angularjs-module`
  4. `ng serve --open`

The application should automatically open in a new browser tab.  The app will throw the following error in the console:

```
Error: Trying to get the AngularJS injector before it being set.
    at injectorFactory (static.js:694)
    at _callFactory (core.js:10914)
    at _createProviderInstance$1 (core.js:10868)
    at resolveNgModuleDep (core.js:10850)
    at NgModuleRef_.get (core.js:12087)
    at Object.resolveDep (core.js:12577)
    at Injector_.get (core.js:11734)
    at new UpgradeHelper (static.js:809)
    at ExampleDirective.UpgradeComponent (static.js:1114)
    at new ExampleDirective (example.component.ts:10)
```