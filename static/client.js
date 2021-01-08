'use strict';

const createPostReqObj = body => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

class User {
  static async addUser(name, surname, email) {
    const url = '/user/add';
    const args = { name, surname, email };
    const response = await fetch(url, createPostReqObj(args));
    const result = await response.json();
    console.log(result);
  }

  static async getInfo(userId) {
    const url = '/user/get';
    const args = { userId };
    const response = await fetch(url, createPostReqObj(args));
    const result = await response.json();
    console.log(result);
  }
}

class District {
  static async getAllDistricts() {
    const url = '/district/all';
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  }

  static async getStreets(districtId) {
    const url = '/district/streets';
    const args = { districtId };
    const response = await fetch(url, createPostReqObj(args));
    const result = await response.json();
    console.log(result);
  }

  static async getShops(districtId) {
    const url = '/district/shops';
    const args = { districtId };
    const response = await fetch(url, createPostReqObj(args));
    const result = await response.json();
    console.log(result);
  }
}

class Street {
  static async addStreet(name, districtId) {
    const url = '/street/add';
    const args = { name, districtId };
    const response = await fetch(url, createPostReqObj(args));
    const result = await response.json();
    console.log(result);
  }

  static async getAllStreets() {
    const url = '/street/all';
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  }

  static async getShops(streetId) {
    const url = '/street/shops';
    const args = { streetId };
    const response = await fetch(url, createPostReqObj(args));
    const result = await response.json();
    console.log(result);
  }
}

class Shop {
  static async addShop(name, description, streetId) {
    const url = '/shop/add';
    const args = { name, description, streetId };
    const response = await fetch(url, createPostReqObj(args));
    const result = await response.json();
    console.log(result);
  }

  static async addFeedback(userId, shopId, description) {
    const url = '/shop/feedbacks/add';
    const args = { userId, shopId, description };
    const response = await fetch(url, createPostReqObj(args));
    const result = await response.json();
    console.log(result);
  }

  static async addRating(userId, shopId, point) {
    const url = '/shop/rating/add';
    const args = { userId, shopId, point };
    const response = await fetch(url, createPostReqObj(args));
    const result = await response.json();
    console.log(result);
  }

  static async getAllShops() {
    const url = '/shop/all';
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  }

  static async getInfo(shopId) {
    const url = '/shop/info';
    const args = { shopId };
    const response = await fetch(url, createPostReqObj(args));
    const result = await response.json();
    console.log(result);
  }

  static async getProducts(shopId) {
    const url = '/shop/products';
    const args = { shopId };
    const response = await fetch(url, createPostReqObj(args));
    const result = await response.json();
    console.log(result);
  }

  static async getFeedbacks(shopId) {
    const url = '/shop/feedbacks';
    const args = { shopId };
    const response = await fetch(url, createPostReqObj(args));
    const result = await response.json();
    console.log(result);
  }

  static async getRating(shopId) {
    const url = '/shop/rating';
    const args = { shopId };
    const response = await fetch(url, createPostReqObj(args));
    const result = await response.json();
    console.log(result);
  }
}

class Product {
  static async addProduct(name, description, price, shopId) {
    const url = '/product/add';
    const args = { name, description, price, shopId };
    const response = await fetch(url, createPostReqObj(args));
    const result = await response.json();
    console.log(result);
  }

  static async getInfo(productId) {
    const url = '/product/info';
    const args = { productId };
    const response = await fetch(url, createPostReqObj(args));
    const result = await response.json();
    console.log(result);
  }
}
