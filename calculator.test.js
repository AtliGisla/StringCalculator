const add = require('./calculator');

//Test 1
it("should return 0 on empty string", () => {
    expect(add("")).toBe(0);
});

//Test 2
it("should return number that is inputted", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
    expect(add("573")).toBe(573);
});

//Test 3
it("should return the sum of the numbers between the commas", () => {
    expect(add("2,2")).toBe(4);
    expect(add("55,72")).toBe(127);
    expect(add("444,555")).toBe(999);
});