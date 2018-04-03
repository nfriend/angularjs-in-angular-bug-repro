import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExampleDirective } from './example-component/example.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { angularjsModule } from 'angularjs-module';

@NgModule({
    declarations: [AppComponent, ExampleDirective],
    imports: [BrowserModule, UpgradeModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) {}
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, [angularjsModule], {
            strcitDi: true
        });
    }
}
