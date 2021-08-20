const Manager = require("../lib/Manager");

test('gets manager email from getemail', () =>{
  const email = 'Dan@email.com';
  const name = '`Dan`';
  const manager = new Manager(name, 1, email, 1);
  expect(manager.getEmail()).toBe(email);
});

