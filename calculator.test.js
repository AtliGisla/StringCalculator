const add = require('./calculator');

//Test 1
it("should return 0 on empty string", () => {
    expect(add("")).toBe(0);
});

//Test 2
it("should return number taht is inputted", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
    expect(add("573")).toBe(573);
});