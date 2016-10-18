import { Template } from 'meteor/templating'
import { Messages } from '../api/messages.js'
//Agregamos nuestro template porque los archivos dentro de 'imports' ~~
//~~no se agregan solos
import './body.html'

var msgsData       =  Messages.find(),
    onTextBoxEvent = (event, template) => {
      if (event.which === 13) {
        Messages.insert({text:template.$('#textBox').val()})
        $('#textBox').val('')
      }
    }


var bodyHelpers   = {  messages: msgsData },
    bodyEvents    = { "keypress #textBox" : onTextBoxEvent }

Template.body.helpers(bodyHelpers)
Template.body.events(bodyEvents);
