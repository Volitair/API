CREATE TABLE IF NOT EXISTS Public.Districts (
  district_id serial NOT NULL,
  name varchar NOT NULL,
  PRIMARY KEY (district_id)
);

CREATE TABLE IF NOT EXISTS Public.Streets (
  street_id serial NOT NULL,
  name varchar NOT NULL,
  district_id int NOT NULL,
  PRIMARY KEY (street_id),
  CONSTRAINT Streets_district_id_foreign FOREIGN KEY (district_id) REFERENCES Public.Districts (district_id)
);

CREATE TABLE IF NOT EXISTS Public.Shops (
  shop_id serial NOT NULL,
  name varchar NOT NULL,
  description text NOT NULL,
  street_id int NOT NULL,
  PRIMARY KEY (shop_id),
  CONSTRAINT Shops_street_id_foreign FOREIGN KEY (street_id) REFERENCES Public.Streets (street_id)
);

CREATE TABLE IF NOT EXISTS Public.Users (
  user_id serial NOT NULL,
  name varchar NOT NULL,
  surname varchar NOT NULL,
  email varchar NOT NULL UNIQUE,
  PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS Public.Products (
  product_id serial NOT NULL,
  name varchar NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  shop_id int NOT NULL,
  CHECK (price > 0),
  PRIMARY KEY (product_id),
  CONSTRAINT Products_shop_id_foreign FOREIGN KEY (shop_id) REFERENCES Public.Shops (shop_id)
);

CREATE TABLE IF NOT EXISTS Public.Ratings (
  rating_id serial NOT NULL,
  user_id int NOT NULL,
  shop_id  int NOT NULL,
  point int NOT NULL,
  CHECK (point >= 0 AND point <=5),
  PRIMARY KEY (rating_id),
  CONSTRAINT Ratings_user_id_foreign FOREIGN KEY (user_id) REFERENCES Public.Users (user_id),
  CONSTRAINT Ratings_shop_id_foreign FOREIGN KEY (shop_id) REFERENCES Public.Shops (shop_id)
);

CREATE TABLE IF NOT EXISTS Public.Shop_feedbacks (
  shop_feedback_id serial NOT NULL,
  user_id int NOT NULL,
  shop_id  int NOT NULL,
  description text NOT NULL,
  PRIMARY KEY (shop_feedback_id),
  CONSTRAINT Shop_Feedbacks_user_id_foreign FOREIGN KEY (user_id) REFERENCES Public.Users (user_id),
  CONSTRAINT Shop_Feedbacks_shop_id_foreign FOREIGN KEY (shop_id) REFERENCES Public.Shops (shop_id)
);
