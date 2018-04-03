 var LandingController = function(){

  var eventListeners = function(){

    $('#bio-label').click(function (){
      if ($('#bio').hasClass('hidden')){
        $('#bio').removeClass('hidden');
      }else{
        $('#bio').addClass('hidden');
      }
      //Send a request to the server singaling that that this
      //button has been clicked, in the route hander we will
      //store the state of this button being "active" or not
      //in the session 

      //check route handler for home page for next instructions

    });
    $('#projects-label').click(function(){
      if ($('#projects').hasClass('hidden')){
        $('#projects').removeClass('hidden');
      }else{
        $('#projects').addClass('hidden');
      }
    })
  }

  var init = function() {
      eventListeners();
    };

  return {
    init: init
  }

};

var landingController = new LandingController();
$(document).ready(function(){
  landingController.init();
});