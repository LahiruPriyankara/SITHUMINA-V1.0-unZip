-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sithumina
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `item_id` int NOT NULL AUTO_INCREMENT,
  `item_name` varchar(255) DEFAULT NULL,
  `item_image` varchar(255) DEFAULT NULL,
  `unit_price` int NOT NULL,
  `category_id` int NOT NULL,
  `brand_id` int NOT NULL,
  `branch_id` int NOT NULL,
  `created_user` int NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'Orange','muncheOrange',210,21,5,1,1),(2,'Snack','muncheSnack',340,21,5,1,1),(3,'Fanta','fanta4',200,11,0,1,1),(4,'Beet Root','beetRoot',240,2,0,1,1),(5,'Carrot','carrot',240,2,0,1,1),(6,'Potato','potato',240,2,0,1,1),(7,'Orange','orange',43,3,0,1,1),(8,'Sprite','sprite',355,11,0,1,1),(9,'Creeam Soda','creeamSoda',40,11,0,2,1),(10,'Mango','mango',55,3,0,2,1),(11,'Fanta','fanta3',230,11,0,2,1),(12,'Cashu Gift','gift2',840,8,3,2,1),(13,'Fanta','fanta1',250,11,0,2,1),(14,'Sunlight','sunlight3',55,3,1,2,1),(15,'Pork','meat2',850,5,0,2,1),(16,'Progesterone','medicine2',850,1,0,2,1),(17,'Grapes','grapes',230,3,0,2,1),(18,'Maliban Milk','malibanKiri',250,21,4,2,1),(19,'Pear','pear',45,3,0,2,1),(20,'Val GIft','gift1',235,8,3,2,1),(21,'Panda Toy','toys1',253,13,0,3,1),(22,'Car Toy','toys2',430,13,0,3,1),(23,'Vim','Vim',405,3,0,3,1),(24,'CocaCola','cocaCola',350,11,0,3,1),(25,'Sunlight','sunlight2',85,3,1,3,1),(26,'Chocalate','malibanChocolate',240,21,3,5,1),(27,'Saman Ball','seafood2',760,5,0,4,1),(28,'Cone','ElephantHouseCone',85,21,10,4,1),(29,'Ice Cream','ElephantHouseFruitandNut',255,21,10,4,1),(30,'Chicken','meat1',505,5,0,4,1),(31,'Korali','seafood1',235,5,0,4,1),(32,'Fanta','fanta2',130,11,0,4,1),(33,'Chocalte Puff','muncheLoamonPuff',120,21,5,4,1),(34,'Prowns','seafood4',1050,5,0,5,1),(35,'Veenat','medicine1',505,1,0,5,1),(36,'Gabapentin','medicine3',1050,1,0,5,1),(37,'Sunlight','sunlight1',97,3,1,5,1),(38,'Wa Gift','gift3',399,8,3,5,1),(39,'Carrot','carrot',240,2,0,5,1),(40,'Fanta','fanta1',250,11,0,5,1),(41,'Lemon Puff','malibanLemon',150,21,4,5,1),(42,'Guwawa','guwawa',36,3,0,5,1),(43,'Maliban Marie','malibanMari',170,21,4,6,1),(44,'Wafferes','malibanWaffeers',150,21,4,6,1),(45,'Cutple Fish','seafood3',405,5,0,6,1),(46,'Munche Ginger','muncheGinger',340,21,5,6,1),(47,'keels Buscuits','keelsBuscuits',150,21,2,6,1),(48,'Chicken','meat1',505,5,0,6,1);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-24 10:12:10
