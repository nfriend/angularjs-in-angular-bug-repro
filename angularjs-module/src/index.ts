/* yeoman:importBlock */
import * as angular from 'angular';
import { ExampleComponent } from './example-component/example.component';
import { ExampleController } from './example-component/example.controller';
import { ExampleService } from './example-component/example.service';
/* /yeoman:importBlock */

// doesn't actually import anything (see webpack.config.js
// for more details - notice the "noop-loader"), but is
// required in order to trigger Webpack to compile-check LESS files
import './index.less';

const angularjsModule =
    /* /yeoman:registrationBlock */

    angular
        .module('angularjs-module', [])

        /* yeoman:registrationBlock */
        .component(ExampleComponent.injectionName, ExampleComponent)
        .controller(ExampleController.injectionName, ExampleController)
        .service(ExampleService.injectionName, ExampleService).name;

/* yeoman:exportBlock */
export { angularjsModule, ExampleComponent };
/* /yeoman:exportBlock */
