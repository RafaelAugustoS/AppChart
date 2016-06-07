/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers(){
     $('.open-painel').on('click', function(){
        myApp.openPanel('left'); 
     });
     
     $('.close-painel').on('click', function(){
        myApp.closePanel();
     });
    
 }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
