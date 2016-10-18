import { Template } from 'meteor/templating'
import { Messages } from '../api/messages.js'
//Agregamos nuestro template porque los archivos dentro de 'imports' ~~
//~~no se agregan solos
import './body.html'

var msgsData      = Messages.find(),
    bodyHelpers   = {  messages: msgsData }

Template.body.helpers(bodyHelpers)
