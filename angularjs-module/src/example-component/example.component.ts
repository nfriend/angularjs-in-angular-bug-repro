import { ExampleController } from './example.controller';

export class ExampleComponent {
    public static injectionName = 'exampleComponent';
    public static template = require('./example.html');
    public static controller = ExampleController;
    public static bindings = {};
}
