const add = require('./calculator');

it("should return 0 on empty string", () => {
    expect(add("")).toBe(0);
});