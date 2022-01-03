import { handleSubmit } from "./formHandler";
import { validateURL } from "./URLValidator";
import 'babel-polyfill'
// The describe() function takes two arguments - a string description, and a test suite as a callback function.


// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Testing handleSubmit() for being defined", () => {
           expect(handleSubmit).toBeDefined()
    })

    test("Testing handleSubmit() to be a function", () => {
        expect(typeof(handleSubmit)).toBe("function")
 })
});

describe("Testing the code", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Testing validateURL() for being defined", () => {
           expect(validateURL).toBeDefined()
    })

    test("Testing validateURL() to be a function", () => {
        expect(typeof(validateURL)).toBe("function")
        
    })
    test("Testing if validateURL() returns the expected value", () => {
        expect(validateURL("https://www.example.com")).toBeTruthy()
    })
    test("Testing if validateURL() returns the expected value (false)", () => {
        expect(validateURL("invalid url")).toBeFalsy()
    })
});