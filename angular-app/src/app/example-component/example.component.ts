import { Directive, ElementRef, Injector, SimpleChanges } from '@angular/core';
import { ExampleComponent } from 'angularjs-module';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
    selector: 'upgraded-example-component'
})
export class ExampleDirective extends UpgradeComponent {
    constructor(elementRef: ElementRef, injector: Injector) {
        super(ExampleComponent.injectionName, elementRef, injector);
    }
}
