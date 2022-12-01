import { Component } from "@angular/core";

@Component({
    selector: "lib-naitec-shared",
    standalone: true,
    template: ` <p>naitec-shared works STANDALONE!</p> `,
    styles: [],
})
export class NaitecSharedComponent {
    constructor() {
        console.info(this.constructor.name, "ctor STANDALONE");
    }
}
