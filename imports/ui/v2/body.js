import { Template } from 'meteor/templating'
//Agregamos nuestro template porque los archivos dentro de 'imports' ~~
//~~no se agregan solos
import './body.html'

var msgsData      = [
    { text: 'Hello MeteorJs!' },
    { text: 'yep, this is a Js world' },
    { text: 'we are learning MeteorJs' }
  ]

var bodyHelpers   = {  messages: msgsData }

Template.body.helpers(bodyHelpers)
