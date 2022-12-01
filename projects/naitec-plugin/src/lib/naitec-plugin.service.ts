import { Injectable } from "@angular/core";

@Injectable(/*{
    providedIn: "root",
}*/)
export class NaitecPluginService {
    public rnd = Math.random();
    constructor() {
        console.warn(this.constructor.name, "instance created", this.rnd);
    }
}
