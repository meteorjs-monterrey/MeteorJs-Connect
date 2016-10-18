import { Meteor } from 'meteor/meteor';
import { Messages } from '../imports/api/messages.js';
Meteor.startup(() => {
  // code to run on server at startup
  Messages.insert({text:"Hey I'm from collection"});
});
