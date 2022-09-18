
-- CREATE Queries START ----------------------------

CREATE SCHEMA `sithumina`;

use `sithumina`;

CREATE TABLE `sithumina`.`userdata` (
`user_id` INT INT NOT NULL AUTO_INCREMENT,
`user_type` VARCHAR(100) NULL,
`user_name` VARCHAR(100) NULL,
`user_password` VARCHAR(100) NULL,
PRIMARY KEY (`user_id`));


CREATE TABLE `sithumina`.`category` (
`category_id` INT NOT NULL AUTO_INCREMENT,
`category_name` VARCHAR(100) NULL,
`created_user` VARCHAR(100) NULL,
PRIMARY KEY (`category_id`));
  
CREATE TABLE `sithumina`.`brand` (
`brand_id` INT NOT NULL AUTO_INCREMENT,
`brand_name` VARCHAR(100) NULL,
`created_user` VARCHAR(100) NULL,
PRIMARY KEY (`brand_id`));
  
  
CREATE TABLE `sithumina`.`branch` (
`branch_id` INT NOT NULL AUTO_INCREMENT,
`branch_name` VARCHAR(100) NULL,
`branch_address` VARCHAR(255) NULL,
`created_user` VARCHAR(100) NULL,
PRIMARY KEY (`branch_id`));

CREATE TABLE `sithumina`.`category_branch` (
`id` INT NOT NULL AUTO_INCREMENT,
`category_id` INT NOT NULL,
`branch_id` INT NOT NULL,
PRIMARY KEY (`id`));  ;
  
CREATE TABLE `sithumina`.`item` (
`item_id` INT NOT NULL AUTO_INCREMENT,
`item_name` VARCHAR(255) NULL,
`item_image` VARCHAR(255) NULL,
`unit_price` INT NOT NULL,
`category_id` INT NOT NULL,
`brand_id` INT NOT NULL,
`branch_id` INT NOT NULL,
`created_user` VARCHAR(100) NULL,
PRIMARY KEY (`item_id`));  
  
CREATE TABLE `sithumina`.`cart` (
`cart_id` INT NOT NULL AUTO_INCREMENT,
`cart_status` VARCHAR(45) NULL,
`cart_owner_id` VARCHAR(100) NULL,
PRIMARY KEY (`cart_id`));

CREATE TABLE `sithumina`.`cart_item` (
`id` INT NOT NULL AUTO_INCREMENT,
`cart_id` INT NOT NULL,
`item_id` INT NOT NULL,
`item_qty` INT NOT NULL,
`item_qty_price` INT NOT NULL,
`cart_itemcol` VARCHAR(45) NOT NULL,
PRIMARY KEY (`id`));

  
CREATE TABLE `sithumina`.`transactiondata` (
`transaction_id` INT NOT NULL AUTO_INCREMENT,
`transaction_amount` INT NOT NULL,
`transaction_status` VARCHAR(45) NULL,
`cart_id` INT NOT NULL,
PRIMARY KEY (`transaction_id`));

CREATE TABLE `sithumina`.`inquiry` (
`inquiry_id` INT NOT NULL AUTO_INCREMENT,
`inquiry_desc` VARCHAR(45) NULL,
`user_id` INT NOT NULL,
PRIMARY KEY (`inquiry_id`));

-- CREATE Queries END ----------------------------

-- DATA INSERT Queries START ----------------------------

INSERT INTO `sithumina`.`category` (`category_id`, `category_name`, `created_user`) 
VALUES
('1', 'Pharmacy', '1'),
('2', 'Vegetables', '1'),
('3', 'Fruits', '1'),
('4', 'Meats', '1'),
('5', 'Meats', '1'),
('6', 'Rice', '1'),
('7', 'Tobacco', '1'),
('8', 'Gifting', '1'),
('9', 'Bakery', '1'),
('10', 'Flower Shop', '2'),
('11', 'Beverages', '2'),
('12', 'Seafood', '2'),
('13', 'Pet Products', '2'),
('14', 'Household', '2'),
('15', 'Tea & Coffee', '2'),
('16', 'Party Shop', '2'),
('17', 'Stationery', '2'),
('18', 'Frozen Foods', '2'),
('20', 'Desserts', '2'),
('21', 'Snacks', '2');


SELECT * FROM sithumina.brand;

INSERT INTO `sithumina`.`brand` (`brand_id`, `brand_name`, `created_user`) 
VALUES 
('1', 'Unilever', '1'),
('2', 'Kells', '1'),
('3', 'Hemas', '1'),
('4', 'Maliban', '1'),
('5', 'Munchee', '1'),
('6', 'Anchor', '1'),
('7', 'HighLand', '2'),
('8', 'Siddhalepa', '2'),
('9', 'Araliya', '2'),
('10', 'Eliphant House', '2');


SELECT * FROM sithumina.branch;
INSERT INTO `sithumina`.`branch` (`branch_id`, `branch_name`, `branch_address`, `created_user`) 
VALUES 
('1', 'Colombo Branch', 'No 011,Colombo Branch,Radana', '1'),
('2', 'Kandy Branch', 'No 011,Colombo Branch,Radana', '2'),
('3', 'Kiribathgoda Branch', 'No 011,Colombo Branch,Radana', '1'),
('4', 'Mathara Branch', 'No 011,Colombo Branch,Radana', '1'),
('5', 'Badulla Branch', 'No 011,Colombo Branch,Radana', '2'),
('6', 'Rakwana Branch', 'No 011,Colombo Branch,Radana', '1');



INSERT INTO 
`sithumina`.`item` 
(`item_id`, `item_name`, `item_image`, `unit_price`, `category_id`,`brand_id`, `branch_id`, `created_user`) 
VALUES 
('1', 'Orange', 'muncheOrange', '210', '21', '5','1', '1'),
('2', 'Snack', 'muncheSnack', '340', '21', '5', '1','1'),
('3', 'Fanta', 'fanta4', '200', '11', '0', '1','1'),
('4', 'Beet Root', 'beetRoot', '240', '2', '0','1', '1'),
('5', 'Carrot', 'carrot', '240', '2', '0','1', '1'),
('6', 'Potato', 'potato', '240', '2', '0','1', '1'),
('7', 'Orange', 'orange', '43', '3', '0', '1','1'),
('8', 'Sprite', 'sprite', '355', '11', '0','1', '1'),
('9', 'Creeam Soda', 'creeamSoda', '40', '11', '0','2', '1'),
('10', 'Mango', 'mango', '55', '3', '0','2', '1'),
('11', 'Fanta', 'fanta3', '230', '11', '0', '2','1'),
('12', 'Cashu Gift', 'gift2', '840', '8', '3','2', '1'),
('13', 'Fanta', 'fanta1', '250', '11', '0','2', '1'),
('14', 'Sunlight', 'sunlight3', '55', '3', '1', '2','1'),
('15', 'Pork', 'meat2', '850', '5', '0','2', '1'),
('16', 'Progesterone', 'medicine2', '850', '1', '0','2', '1'),
('17', 'Grapes', 'grapes', '230', '3', '0','2', '1'),
('18', 'Maliban Milk', 'malibanKiri', '250', '21', '4', '2','1'),
('19', 'Pear', 'pear', '45', '3', '0','2', '1'),
('20', 'Val GIft', 'gift1', '235', '8', '3', '2','1'),
('21', 'Panda Toy', 'toys1', '253', '13', '0','3', '1'),
('22', 'Car Toy', 'toys2', '430', '13', '0','3', '1'),
('23', 'Vim', 'Vim', '405', '3', '0','3', '1'),
('24', 'CocaCola', 'cocaCola', '350', '11', '0','3', '1'),
('25', 'Sunlight', 'sunlight2', '85', '3', '1','3', '1'),
('26', 'Chocalate', 'malibanChocolate', '240', '21', '3', '5','1'),
('27', 'Saman Ball', 'seafood2', '760', '5', '0','4', '1'),
('28', 'Cone', 'ElephantHouseCone', '85', '21', '10','4', '1'),
('29', 'Ice Cream', 'ElephantHouseFruitandNut', '255', '21', '10','4', '1'),
('30', 'Chicken', 'meat1', '505', '5', '0','4', '1'),
('31', 'Korali', 'seafood1', '235', '5', '0', '4','1'),
('32', 'Fanta', 'fanta2', '130', '11', '0','4', '1'),
('33', 'Chocalte Puff', 'muncheLoamonPuff', '120', '21', '5', '4','1'),
('34', 'Prowns', 'seafood4', '1050', '5', '0','5', '1'),
('35', 'Veenat', 'medicine1', '505', '1', '0', '5','1'),
('36', 'Gabapentin', 'medicine3', '1050', '1', '0','5', '1'),
('37', 'Sunlight', 'sunlight1', '97', '3', '1', '5','1'),
('38', 'Wa Gift', 'gift3', '399', '8', '3', '5','1'),
('39', 'Carrot', 'carrot', '240', '2', '0','5', '1'),
('40', 'Fanta', 'fanta1', '250', '11', '0', '5','1'),
('41', 'Lemon Puff', 'malibanLemon', '150', '21', '4','5', '1'),
('42', 'Guwawa', 'guwawa', '36', '3', '0','5', '1'),
('43', 'Maliban Marie', 'malibanMari', '170', '21', '4', '6','1'),
('44', 'Wafferes', 'malibanWaffeers', '150', '21', '4','6', '1'),
('45', 'Cutple Fish', 'seafood3', '405', '5', '0','6', '1'),
('46', 'Munche Ginger', 'muncheGinger', '340', '21', '5','6', '1'),
('47', 'keels Buscuits', 'keelsBuscuits', '150', '21', '2', '6','1'),
('48', 'Chicken', 'meat1', '505', '5', '0','6', '1');

-- DATA INSERT Queries END ----------------------------





-- Other Data Queries used for testing.. START ----------------------------



INSERT INTO `sithumina`.`branch` (`branch_id`, `branch_name`, `branch_address`, `created_user`) VALUES ('1', 'branch one', 'branch one, address', '1');
INSERT INTO `sithumina`.`userdata` (`user_id`, `user_type`, `user_name`, `user_password`) VALUES ('1', 'A', 'admin user one', '123');
INSERT INTO `sithumina`.`brand` (`brand_id`, `brand_name`, `created_user`) VALUES ('1', 'brand one', '1');
INSERT INTO `sithumina`.`cart` (`cart_id`, `cart_status`, `cart_owner_id`) VALUES ('1', 'S', '1');
INSERT INTO `sithumina`.`cart_item` (`cart_id`, `item_id`) VALUES ('1', '1');
INSERT INTO `sithumina`.`category` (`category_id`, `category_name`, `created_user`) VALUES ('1', 'category one', '1');
INSERT INTO `sithumina`.`category_branch` (`category_id`, `branch_id`) VALUES ('1', '1');
INSERT INTO `sithumina`.`inquiry` (`inquiry_id`, `inquiry_desc`) VALUES ('1', 'something..');
INSERT INTO `sithumina`.`item` (`item_id`, `item_name`, `item_image`, `unit_price`, `category_id`, `branch_id`, `created_user`) VALUES ('1', 'item one', 'item image', '120', '1', '1', '1');
INSERT INTO `sithumina`.`transactiondata` (`transaction_id`, `transaction_status`, `cart_id`) VALUES ('1', 'S', '1');


 -- Other Data Queries used for testing.. END ----------------------------





-- DROP Queries START ----------------------------


DROP DATABASE `sithumina`;


DROP TABLE 
`sithumina`.`branch`, 
`sithumina`.`brand`, 
`sithumina`.`cart`, 
`sithumina`.`cart_item`,
`sithumina`.`category`, 
`sithumina`.`category_branch`,
`sithumina`.`inquiry`,
`sithumina`.`item`,
`sithumina`.`transactiondata`, 
`sithumina`.`userdata`;

-- DROP Queries START ----------------------------