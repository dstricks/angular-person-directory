export class Person {
    title: string;
    fname: string;
    lname: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}