import { NgModule, ModuleWithProviders } from "@angular/core";
import { NaitecPluginComponent } from "./naitec-plugin.component";
import { NaitecPluginService } from "./naitec-plugin.service";

@NgModule({
    declarations: [NaitecPluginComponent],
    imports: [],
    exports: [NaitecPluginComponent],
})
export class NaitecPluginModule {
    constructor() {
        console.info(this.constructor.name, "NgModule OLD STYLE");
    }

    static forRoot(): ModuleWithProviders<NaitecPluginModule> {
        console.info("forRoot / WithProvider", NaitecPluginModule);
        return {
            ngModule: NaitecPluginModule,
            providers: [NaitecPluginService],
        };
    }
}
