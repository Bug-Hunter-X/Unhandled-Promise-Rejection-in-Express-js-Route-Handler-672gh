# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in asynchronous Node.js applications: unhandled promise rejections.  The issue arises when an error is thrown within a `setTimeout` callback inside an Express.js route handler.  The error is not properly caught, leading to an unhandled promise rejection and potential application crashes.

## Bug Description
The `bug.js` file contains an Express.js server with a route that simulates an asynchronous operation.  There's a 50% chance that a runtime error will be thrown within the `setTimeout` callback.  Because this error is not caught, it results in an unhandled promise rejection.

## Solution
The `bugSolution.js` file demonstrates how to properly handle the asynchronous error using a `try...catch` block or by making the function async/await.