
[![Build Status](https://secure.travis-ci.org/soldair/node-packagereadme.png)](http://travis-ci.org/soldair/node-packagereadme)

packagereadme
=============

return the readme as a string for the current package based on closest package.json in the specified or parent directory


example
=======

```js
var readme = require('packagereadme');

readme(__dirname,function(err,readme){
  console.log(readme);
  // prints the module's readme if found
});

```
