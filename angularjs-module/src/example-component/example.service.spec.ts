import * as angular from 'angular';
import 'angular-mocks';
import { angularjsModule } from '../index';
import { testUtils } from '../test-utils';
import { ExampleService } from './example.service';

describe('example-component', () => {
    let exampleService: ExampleService;

    beforeEach(() => {
        testUtils.provideKeycloakConstants();
        angular.mock.module(angularjsModule);
    });

    beforeEach(
        inject($injector => {
            exampleService = $injector.get(ExampleService.injectionName);
        })
    );

    it(`tests ExampleComponentService's sanity`, () => {
        expect(exampleService).toBeDefined();
    });

    it(`tests that ExampleComponentService does something`, () => {
        expect(exampleService.doSomething()).toBe('Did something!');
    });
});
