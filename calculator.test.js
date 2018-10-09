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
it("should return the sum of the 2 numbers between the commas", () => {
    expect(add("2,2")).toBe(4);
    expect(add("55,72")).toBe(127);
    expect(add("444,555")).toBe(999);
});

//Test 4
it("should return the sum of all the numbers between the commas", () => {
    expect(add("1,1,1,1,1")).toBe(5);
    expect(add("5,6,9,2,5,8")).toBe(35);
    expect(add("100,100,100,100,100,100,100,50,3")).toBe(753);
});

//Test 5
it("should return sum using \\n and , as delimenter", () => {
    expect(add("1\n1\n1")).toBe(3);
    expect(add("100,100\n100\n100\n100,100,100,50,3")).toBe(753);
    expect(add("5\n6\n9\n2,5,8")).toBe(35);
});

//Test 6
it("should throw exception if there are negative numbers", () => {
    expect( () => {add("1,-2")}).toThrow("Negatives not allowed: -2");
    expect( () => {add("-3,-2,5\n-7")}).toThrow("Negatives not allowed: -3,-2,-7");
});

//Test 7
it("should return the sum of the numbers and ignore the numbers above 1000", () => {
    expect(add("2,2,1000")).toBe(4);
    expect(add("5,3,999,1000,2000\n5")).toBe(1012);
});