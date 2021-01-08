'use strict';

const http = require('http');
const fs = require('fs');
const { User, District, Street, Shop, Product } = require('./static/classes.js');
const PORT = 8000;

const getArgs = async req => new Promise(resolve => {
  const body = [];
  req.on('data', chunk => {
    body.push(chunk);
  }).on('end', async () => {
    const data = body.join('');
    const args = JSON.parse(data);
    resolve(args);
  });
});

const routing = {
  '/user/add': async (req, res) => {
    const args = await getArgs(req);
    console.log(args);
    return await User.addUser(args);
  },
  '/user/get': async (req, res) => {
    const args = await getArgs(req);
    console.log(args);
    return await User.getUser(args);
  },
  '/district/all': async (req, res) => await District.getDistricts(),
  '/district/streets': async (req, res) => {
    const args = await getArgs(req);
    console.log(args);
    return await District.getStreets(args);
  },
  '/district/shops': async (req, res) => {
    const args = await getArgs(req);
    console.log(args);
    return await District.getShops(args);
  },
  '/street/add': async (req, res) => {
    const args = await getArgs(req);
    console.log(args);
    return await Street.addStreet(args);
  },
  '/street/all': async (req, res) => await Street.getAllStreets(),
  '/street/shops': async (req, res) => {
    const args = await getArgs(req);
    console.log(args);
    return await Street.getShops(args);
  },
  '/shop/add': async (req, res) => {
    const args = await getArgs(req);
    console.log(args);
    return await Shop.addShop(args);
  },
  '/shop/all': async (req, res) => await Shop.getAllShops(),
  '/shop/info': async (req, res) => {
    const args = await getArgs(req);
    console.log(args);
    return await Shop.getInfo(args);
  },
  '/shop/products': async (req, res) => {
    const args = await getArgs(req);
    console.log(args);
    return await Shop.getProducts(args);
  },
  '/shop/feedbacks/add': async (req, res) => {
    const args = await getArgs(req);
    console.log(args);
    return await Shop.addFeedback(args);
  },
  '/shop/feedbacks': async (req, res) => {
    const args = await getArgs(req);
    console.log(args);
    return await Shop.getFeedbacks(args);
  },
  '/shop/rating/add': async (req, res) => {
    const args = await getArgs(req);
    console.log(args);
    return await Shop.addRating(args);
  },
  '/shop/rating': async (req, res) => {
    const args = await getArgs(req);
    console.log(args);
    return await Shop.getRating(args);
  },
  '/product/add': async (req, res) => {
    const args = await getArgs(req);
    console.log(args);
    return await Product.addProduct(args);
  },
  '/product/info': async (req, res) => {
    const args = await getArgs(req);
    console.log(args);
    return await Product.getInfo(args);
  },
};

const types = {
  object: JSON.stringify,
  string: s => s,
  undefined: () => 'not found',
  function: async (fn, req, res) => (await fn(req, res)),
};

http.createServer(async (req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  console.log(url);
  const router = routing[url];
  if (!router) {
    const path = `./static/${url.substring(1)}`;
    try {
      const data = await fs.promises.readFile(path);
      res.end(data);
    } catch (err) {
      res.statusCode = 404;
      res.end('File is not found');
    }
  } else {
    const type = typeof router;
    const fn = types[type];
    const result = await fn(router, req, res);
    console.log({ result });
    res.end(JSON.stringify(result));
  }
})
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
