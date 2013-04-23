var fs = require('fs');
var path = require('path');
var packageroot = require('packageroot');

module.exports = function(dir,cb){
  packageroot(dir,function(err,dir){ 
    if(err) return cb(err);
    fs.readdir(dir,function(err,files){
      if(err) return cb(err);

      readmes = [];
      files.forEach(function(p){
        if(p.toLowerCase().indexOf('readme') > -1){
          readmes.push(path.join(dir,p));
        }
      });

      if(readmes.length){
        fs.readFile(readmes[0],function(err,buf){
          if(err) return cb(err);
          cb(false,buf.toString());
        });
      } else {
        cb(new Error('no readme found'));
      }

    });
  });
}
