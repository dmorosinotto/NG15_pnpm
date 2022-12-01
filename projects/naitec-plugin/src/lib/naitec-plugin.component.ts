import { Component } from "@angular/core";
import { NaitecPluginService } from "./naitec-plugin.service";

@Component({
    selector: "lib-naitec-plugin",
    template: ` <p>naitec-plugin works!</p> `,
    styles: [],
})
export class NaitecPluginComponent {
    constructor(public svc: NaitecPluginService) {
        console.info(this.constructor.name, "ctor -> svc.rnd=", this.svc.rnd);
    }
}
