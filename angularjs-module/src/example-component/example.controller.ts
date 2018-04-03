import { ExampleService } from './example.service';

export class ExampleController {
    public static injectionName = 'AngularjsModule.ExampleService';
    public static $inject = ['$log', ExampleService.injectionName];

    constructor(
        private $log: ng.ILogService,
        private exampleService: ExampleService
    ) {}
}
