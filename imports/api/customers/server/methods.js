// Methods related to customers

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Customers } from '../both/collections.js';

Meteor.methods({
  'customers.insert'(name, emails) {
    check(name, String);

    return Customers.insert({
      name,
      emails,
      createdAt: new Date()
    });
  }
});

console.log("imports/api/customers/server/methods.js file");
