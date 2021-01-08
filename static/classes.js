'use strict';

const pool = require('./db');
const queries = require('../resources/queries.json');

const objToArray = obj => {
  const result = [];
  for (const key in obj) {
    const element = obj[key];
    result.push(element);
  }
  return result;
};

const makeGetQuery = async (query, args) => await pool.query(query, args);

class User {
  static async addUser(args) {
    try {
      const arr = objToArray(args);
      const query = queries['User.addUser'];
      const result = await pool.query(query, arr);
      console.log(result);
      return { message: 'OK' };
    } catch (error) {
      console.log(error.detail);
      return { error: 'Incorrect data' };
    }
  }
  static async getUser(args) {
    try {
      const arr = objToArray(args);
      const query = queries['User.getUser'];
      const result = await makeGetQuery(query, arr);
      return result.rows;
    } catch (error) {
      console.log(error.detail);
    }
  }
}

class District {
  static async getDistricts() {
    try {
      const query = queries['District.getDistricts'];
      const result = await makeGetQuery(query, []);
      console.log(result.rows);
      return result.rows;
    } catch (error) {
      console.log(error.detail);
    }
  }

  static async getStreets(args) {
    try {
      const arr = objToArray(args);
      const query = queries['District.getStreets'];
      const result = await makeGetQuery(query, arr);
      console.log(result.rows);
      return result.rows;
    } catch (error) {
      console.log(error.detail);
    }
  }

  static async getShops(args) {
    try {
      const arr = objToArray(args);
      const query = queries['District.getShops'];
      const result = await makeGetQuery(query, arr);
      return result.rows;
    } catch (error) {
      console.log(error.detail);
    }
  }
}

class Street {
  static async addStreet(args) {
    try {
      const arr = objToArray(args);
      const query = queries['Street.addStreet'];
      const result = await pool.query(query, arr);
      console.log(result);
      return { message: 'OK' };
    } catch (error) {
      console.log(error.detail);
      return { error: 'Incorrect data' };
    }
  }

  static async getAllStreets() {
    try {
      const query = queries['Street.getAllStreets'];
      const result = await makeGetQuery(query, []);
      return result.rows;
    } catch (error) {
      console.log(error.detail);
    }
  }

  static async getShops(args) {
    try {
      const arr = objToArray(args);
      const query = queries['Street.getShops'];
      const result = await makeGetQuery(query, arr);
      return result.rows;
    } catch (error) {
      console.log(error.detail);
    }
  }
}

class Shop {
  static async addShop(args) {
    try {
      const arr = objToArray(args);
      const query = queries['Shop.addShop'];
      const result = await pool.query(query, arr);
      console.log(result);
      return { message: 'OK' };
    } catch (error) {
      console.log(error.detail);
      return { error: 'Incorrect data' };
    }
  }

  static async getAllShops() {
    try {
      const query = queries['Shop.getAllShops'];
      const result = await makeGetQuery(query, []);
      return result.rows;
    } catch (error) {
      console.log(error.detail);
    }
  }

  static async getInfo(args) {
    try {
      const arr = objToArray(args);
      const query = queries['Shop.getInfo'];
      const result = await makeGetQuery(query, arr);
      return result.rows;
    } catch (error) {
      console.log(error.detail);
    }
  }

  static async getProducts(args) {
    try {
      const arr = objToArray(args);
      const query = queries['Shop.getProducts'];
      const result = await makeGetQuery(query, arr);
      return result.rows;
    } catch (error) {
      console.log(error.detail);
    }
  }

  static async getFeedbacks(args) {
    try {
      const arr = objToArray(args);
      const query = queries['Shop.getFeedbacks'];
      const result = await makeGetQuery(query, arr);
      return result.rows;
    } catch (error) {
      console.log(error.detail);
    }
  }

  static async addFeedback(args) {
    try {
      const arr = objToArray(args);
      const query = queries['Shop.addFeedback'];
      const result = await pool.query(query, arr);
      console.log(result);
      return { message: 'OK' };
    } catch (error) {
      console.log(error.detail);
      return { error: 'Incorrect data' };
    }
  }

  static async getRating(args) {
    try {
      const arr = objToArray(args);
      const query = queries['Shop.getRating'];
      const result = await makeGetQuery(query, arr);
      return result.rows;
    } catch (error) {
      console.log(error.detail);
    }
  }

  static async addRating(args) {
    try {
      const arr = objToArray(args);
      const query = queries['Shop.addRating'];
      const result = await pool.query(query, arr);
      console.log(result);
      return { message: 'OK' };
    } catch (error) {
      console.log(error.detail);
      return { error: 'Incorrect data' };
    }
  }
}

class Product {
  static async addProduct(args) {
    try {
      const arr = objToArray(args);
      const query = queries['Product.addProduct'];
      const result = await pool.query(query, arr);
      console.log(result);
      return { message: 'OK' };
    } catch (error) {
      console.log(error.detail);
      return { error: 'Incorrect data' };
    }
  }

  static async getInfo(args) {
    try {
      const arr = objToArray(args);
      const query = queries['Product.getInfo'];
      const result = await makeGetQuery(query, arr);
      return result.rows;
    } catch (error) {
      console.log(error.detail);
    }
  }
}

module.exports = { User, District, Street, Shop, Product };
