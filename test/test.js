var test = require('tape');
var readme = require('../index');

test('can get readme',function(t){
    readme(__dirname,function(err,readme){
      t.ok(readme.length,' should have readme and readme should have length');
      t.ok(readme.indexOf('packagereadme')>-1,'readme should include name of module');
      t.end();
    });
})
