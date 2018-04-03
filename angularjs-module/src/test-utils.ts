import * as angular from 'angular';

const dwAuth = {
    authenticated: false,
    login: jasmine.createSpy('login'),
};

const testUtils = {
    provideKeycloakConstants: () => {

        // In a real runtime environment, these constants
        // are provided by the angular-dw-bootstrap module. 
        // We need to provided mocks of these constants in 
        // order for our app to bootstrap properly in tests.
        // If this module doesn't interact with Keycloak
        // or depend on a module that does, this 
        // functionality/file can safely be removed.
        angular.mock.module($provide => {
            $provide.constant('_KEYCLOAK_JSON', null);
            $provide.constant('_KEYCLOAK_INSTANCE', dwAuth);
        });
    }
};

export { testUtils };