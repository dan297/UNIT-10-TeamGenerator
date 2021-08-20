const Employee = require("../lib/Employee");

test("Can get id via getId()", () => {
  const testValue = 100;
  const A = new Employee("Dan", testValue);
  expect(A.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const B = new Employee("Dan", 1, testValue);
  expect(B.getEmail()).toBe(testValue);
});


