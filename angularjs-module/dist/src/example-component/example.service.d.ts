/// <reference types="angular" />
/// <reference types="angular-mocks" />
export declare class ExampleService {
    private $log;
    static injectionName: string;
    static $inject: string[];
    constructor($log: ng.ILogService);
    doSomething(): string;
}
