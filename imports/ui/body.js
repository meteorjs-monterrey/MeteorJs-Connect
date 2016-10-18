import { Template } from 'meteor/templating'
//Agregamos nuestro template porque los archivos dentro de 'imports' ~~
//~~no se agregan solos
import './body.html'
import '../imports/api/messages.js'

var msgsData      = Messages.find()


var bodyHelpers   = {  messages: msgsData }

Template.body.helpers(bodyHelpers)
