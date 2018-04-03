export class ExampleService {
    public static injectionName = 'AngularjsModule.ExampleService';
    public static $inject = ['$log'];

    constructor(private $log: ng.ILogService) {}

    public doSomething() {
        this.$log.info('Did something!');
        return 'Did something!';
    }
}
