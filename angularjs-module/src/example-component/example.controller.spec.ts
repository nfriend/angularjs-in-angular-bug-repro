import * as angular from 'angular';
import 'angular-mocks';
import { angularjsModule } from '../index';
import { testUtils } from '../test-utils';
import { ExampleController } from './example.controller';

describe('example-component', () => {
    let exampleController: ExampleController;

    beforeEach(() => {
        testUtils.provideKeycloakConstants();
        angular.mock.module(angularjsModule);
    });

    beforeEach(
        inject(
            (
                $controller: ng.IComponentControllerService,
                _$rootScope_: ng.IRootScopeService
            ) => {
                const $scope = _$rootScope_.$new();
                exampleController = $controller<ExampleController, any>(
                    ExampleController.injectionName,
                    { $scope: $scope }
                );
            }
        )
    );

    it(`tests ExampleController's sanity`, () => {
        expect(exampleController).toBeDefined();
    });
});
