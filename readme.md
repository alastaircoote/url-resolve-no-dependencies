# url-resolve-no-dependencies

## What is this?

I was looking for an NPM module that could resolve a URL without using either
Node's `url` module or by using browser APIs (e.g. an `<a>` tag). I couldn't
find one, so I've thrown this together very quickly. Be warned, it's only
certified to work with the URL types shown in `test/tests.js`. Use at your
peril (or, better, submit a pull request!) 

## How to use it

    const urlResolve = require('url-resolve-no-dependencies');

    urlResolve('http://test.com','test.html')
    // http://test.com/test.html

    urlResolve('http://test.com/subdirectory','test.html')
    // http://test.com/subdirectory/test.html

    urlResolve('http://test.com/subdirectory','/test.html')
    // http://test.com/test.html

    urlResolve('http://test.com/subdirectory','http://different.test.com')
    // http://different.test.com
