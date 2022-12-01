import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class NaitecRootService {
    rnd = Math.random();
    constructor() {
        console.warn(this.constructor.name, "providedIn: 'root'", this.rnd);
    }
}
