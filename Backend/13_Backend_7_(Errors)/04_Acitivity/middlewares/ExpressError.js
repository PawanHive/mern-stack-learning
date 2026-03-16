class ExpressError extends Error {          // "Error" is built-in class now that property in "Error" class will extends(means inherit) to "ExpressError" which is our custom Error class, we can name it anything
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

module.exports = ExpressError;