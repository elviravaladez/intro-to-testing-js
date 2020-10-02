// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


//Unit tests for the sayHello function
describe('sayHello', function () {
    it('should be a defined function', function (){
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World" when true is passed to sayHello', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World" when false is passed to sayHello', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});


//Unit test isFive function
describe('isFive', function () {
    it('should be a defined function', function () {
       expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
});

//Unit test for isEven function
describe('isEven', function () {
   it('should be a defined function', function() {
       expect(typeof isEven).toBe('function');
   });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when executed with isEven(2)', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when executed with isEven(-4)', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when executed with isEven(3)', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when executed with isEven("banana")', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when called with isEven("8")', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when called with isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with a boolean input like isEven(true) or isEven(false)', function () {
        expect(isEven(typeof "boolean")).toBe(false);
    });
    it('should return false when called without an argument like isEven()', function () {
        expect(isEven()).toBe(false);
    });
});

//Unit test for isVowel function
describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when called with isVowel("a")', function () {
        expect(isVowel("a")).toBe(true);
    });
});