const resolve = require("../src/url-resolve");
const assert = require("assert");

assert.equal(
  resolve("http://test.com", "test.html"),
  "http://test.com/test.html"
);

assert.equal(
  resolve("http://test.com/", "test.html"),
  "http://test.com/test.html"
);

assert.equal(
  resolve("http://test.com/test/", "test.html"),
  "http://test.com/test/test.html"
);

assert.equal(
  resolve("http://test.com/test/", "/test.html"),
  "http://test.com/test.html"
);

assert.equal(
  resolve("http://test.com/test/", "http://blah.com/"),
  "http://blah.com/"
);

assert.equal(
  resolve("http://test.com/test/", "./test.html"),
  "http://test.com/test/test.html"
);

assert.equal(
  resolve("http://test.com/test/", "../test.html"),
  "http://test.com/test.html"
);

console.log("Success");
