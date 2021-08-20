const Engineer = require("../lib/Engineer");

test('engineer github value', () => {
  const engineer = new Engineer('Dan', 90, 'Dan.White@gmail', 'DanielWhite11');

  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
