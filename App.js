/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import Router from './src/navigation/Router';
import bcrypt from 'react-native-bcrypt';
// bcrypt is a secure way to save passowrds in a database
//its algrorithms encrypt a password into a long string
// called hash, that is almost impossiable to decrypt
import { openDatabase } from "react-native-sqlite-storage";

const db = require('./src/components/Handlers/database.js');

const shopperDB = openDatabase({name: 'Shopper.db'});
const usersTableName = 'users';

// create a salt that will be used by bcrypt when creating the hash
// a salt is a random value that will be appended
let salt = bcrypt.genSaltSync(10);

const App: () => Node = () => {
  try {
    db.createListsTable();
  } catch (error) {
    console.log('Failed to create lists table ' + error);
  }

  try {
    db.createItemsTable();
  } catch (error) {
    console.log('Failed to create items table ' + error);
  }

  try {
    db.createListItemsTable();
  } catch (error) {
    console.log('Failed to create list items table ' + error);
  }

  try {
    db.createUsersTable();
  } catch (error) {
    console.log('Failed to create users table ' + error);
  }

  try {
    // create the hash
    let hash = bcrypt.hashSync('Letmein1', salt);
    // db.addUser('DMC', hash);
  } catch (error) {
    console.log('Failed to create user' + error);
  }

  return <Router />;
};

export default App;
