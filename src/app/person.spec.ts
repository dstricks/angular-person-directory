import { Person } from './person'

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Person()).toBeTruthy();
  });

  it('should populate values passed into constructore', () => {
    let person = new Person({title: "Operations Manager"});
    expect(person.title).toEqual('Operations Manager');
  });
});
