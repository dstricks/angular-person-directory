export class Person {
    id: number;
    title: string;
    fname: string;
    lname: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}