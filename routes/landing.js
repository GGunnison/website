var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //here we check the session variable that was changed 
  //from the new route and in the response, send along
  //the boolean in the jade template, and keep it displayed
  //or not.
  //req.session.bioVisible
  //req.session.projectsVisible
  res.render('landing.jade', { title: 'Grant Gunnison'});
});
// router.post('/toggleBio'); these set session variables that
//                            the above router will pass to the
//                            jade template
// router.post('/toggleProjects');
router.get('/houseBuild', function(req, res){
  res.render('houseBuild.jade', {title: 'Mexico House Build'});
});
router.get('/djBooth', function(req, res){
  res.render('djBooth.jade', {title: 'DJ Booth'});
});
router.get('/jeepRevival', function(req, res){
  res.render('jeepRevival.jade', {title: 'Jeep Revival'});
});
router.get('/mailMan', function(req, res){
  res.render('mailMan.jade', {title: 'The Mailman'});
});
router.get('/phoneDock', function(req, res){
  res.render('phoneDock.jade', {title: 'Phone Dock'});
});
router.get('/vexRobotics', function(req, res){
  res.render('vexRobotics.jade', {title: 'Vex Robotics'});
});
router.get('/ledCube', function(req, res){
  res.render('ledCube.jade', {title: 'LED Cube'});
});
router.get('/converter', function(req, res){
  res.render('converter.jade', {title: 'AC/DC Converter'});
});
router.get('/blinds', function(req, res){
  res.render('blinds.jade', {title: 'Automated Blinds'});
});
router.get('/unstableSystems', function(req, res){
  res.render('unstableSystems.jade', {title: 'Unstable Systems'});
});
router.get('/projectList', function(req, res){
  res.render('projectList.jade', {title: 'Project List'});
});
router.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });


module.exports = router;
