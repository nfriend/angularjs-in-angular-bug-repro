/// <reference types="angular" />
/// <reference types="angular-mocks" />
import { ExampleService } from './example.service';
export declare class ExampleController {
    private $log;
    private exampleService;
    static injectionName: string;
    static $inject: string[];
    constructor($log: ng.ILogService, exampleService: ExampleService);
}
