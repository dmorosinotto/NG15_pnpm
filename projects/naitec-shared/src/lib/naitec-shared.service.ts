import { Injectable } from "@angular/core";

@Injectable(/*{
    providedIn: "root",
}*/)
export class NaitecSharedService {
    rnd = Math.random();
    constructor() {
        console.warn(this.constructor.name, "@Injectable() instance ", this.rnd);
    }
}
