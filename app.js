const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/standard/template.html'));
  //__dirname : It will resolve to your project folder.
});
console.log(path)
// router.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });

// router.get('/sitemap',function(req,res){
//   res.sendFile(path.join(__dirname+'/sitemap.html'));
// });

//add the router
app.use('/', router);
app.use(express.static(__dirname + '/standard'));
app.listen(process.env.port || 8080);

console.log('Running at Port 8080');