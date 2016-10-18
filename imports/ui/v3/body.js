import { Template } from 'meteor/templating'
//Agregamos nuestro template porque los archivos dentro de 'imports' ~~
//~~no se agregan solos
import './body.html'

var msgsData      = [
    { text: 'Hello MeteorJs!' },
    { text: 'yep, this is a Js world' },
    { text: 'we are learning MeteorJs' }
  ]
// OLD AND UGLY
// var onTextBoxEvent = function(event, template){
//
// }
var onTextBoxEvent = (event, template) => {
  if (event.which === 13) {
    console.log("Meteor is Awesome");
    console.log($('#textBox').val());
    // ~~~~~~ woooooooot!? what's going on?
    msgsData.push({text:template.$('#textBox').val()})
  }
}


var bodyHelpers   = {  messages: msgsData },
    bodyEvents    = { "keypress #textBox" : onTextBoxEvent }

Template.body.helpers(bodyHelpers)
Template.body.events(bodyEvents);
