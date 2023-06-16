# ************************************************************
# Sequel Ace SQL dump
# Version 20046
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.11.2-MariaDB-1:10.11.2+maria~ubu2204)
# Database: doctor_surgery
# Generation Time: 2023-06-16 14:31:21 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table appointments
# ------------------------------------------------------------

DROP TABLE IF EXISTS `appointments`;

CREATE TABLE `appointments` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `patientId` int(11) DEFAULT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;

INSERT INTO `appointments` (`id`, `patientId`, `doctorId`, `date`, `time`)
VALUES
	(1,4,3,'2023-07-03',15),
	(2,26,2,'2023-05-01',10),
	(3,18,2,'2023-04-27',16),
	(4,7,5,'2023-03-26',15),
	(5,42,5,'2022-10-14',13),
	(6,31,3,'2022-08-23',9),
	(7,4,1,'2022-11-21',14),
	(8,33,1,'2022-07-15',12),
	(9,15,3,'2022-07-08',16),
	(10,9,2,'2023-01-27',13),
	(11,3,5,'2022-11-17',9),
	(12,6,3,'2022-11-05',9),
	(13,13,3,'2022-08-23',12),
	(14,29,4,'2022-12-28',12),
	(15,11,5,'2023-04-02',15),
	(16,7,1,'2023-06-22',10),
	(17,20,5,'2023-02-10',9),
	(18,27,2,'2023-02-23',12),
	(19,26,4,'2023-06-07',10),
	(20,29,3,'2022-09-13',15),
	(21,42,3,'2023-04-20',13),
	(22,9,2,'2022-09-05',9),
	(23,1,3,'2023-05-21',15),
	(24,33,5,'2022-11-01',13),
	(25,25,3,'2023-01-21',11),
	(26,26,4,'2022-08-12',15),
	(27,50,4,'2022-10-14',13),
	(28,7,5,'2022-06-27',15),
	(29,43,4,'2022-12-09',13),
	(30,50,2,'2022-06-26',10),
	(31,6,4,'2022-06-23',12),
	(32,47,5,'2022-07-21',16),
	(33,42,2,'2022-11-13',10),
	(34,13,2,'2023-05-30',12),
	(35,14,2,'2022-10-12',15),
	(36,41,2,'2022-07-12',13),
	(37,34,1,'2023-04-01',11),
	(38,22,1,'2023-02-11',9),
	(39,26,1,'2022-09-19',11),
	(40,26,3,'2022-10-15',16),
	(41,37,5,'2022-09-03',12),
	(42,42,5,'2023-01-29',9),
	(43,22,4,'2022-10-16',16),
	(44,48,2,'2023-06-22',16),
	(45,10,4,'2023-05-10',16),
	(46,5,5,'2022-11-04',12),
	(47,47,5,'2023-05-21',14),
	(48,11,5,'2022-11-07',14),
	(49,10,3,'2022-09-10',10),
	(50,2,4,'2023-05-26',10),
	(51,8,1,'2023-01-22',14),
	(52,36,4,'2022-07-04',10),
	(53,15,1,'2023-05-24',14),
	(54,14,2,'2022-08-18',14),
	(55,33,5,'2023-04-15',9),
	(56,50,2,'2022-08-31',11),
	(57,32,3,'2022-08-02',14),
	(58,49,3,'2023-06-22',15),
	(59,50,1,'2023-05-04',12),
	(60,42,4,'2023-01-03',11),
	(61,46,3,'2022-11-19',16),
	(62,20,5,'2023-05-03',10),
	(63,4,5,'2023-05-19',11),
	(64,48,5,'2023-02-20',11),
	(65,49,1,'2023-03-11',16),
	(66,8,2,'2023-04-21',14),
	(67,19,1,'2022-12-05',10),
	(68,29,2,'2023-06-17',15),
	(69,36,1,'2023-04-19',9),
	(70,25,4,'2023-04-09',10),
	(71,11,4,'2022-10-31',9),
	(72,33,2,'2022-12-27',14),
	(73,16,1,'2023-04-23',16),
	(74,19,4,'2023-04-21',13),
	(75,29,1,'2022-08-20',14),
	(76,48,1,'2022-12-26',12),
	(77,18,4,'2022-10-06',10),
	(78,4,5,'2023-05-20',16),
	(79,33,1,'2023-01-02',11),
	(80,11,2,'2022-11-15',13),
	(81,22,4,'2023-04-05',9),
	(82,10,1,'2022-11-23',14),
	(83,17,5,'2022-09-20',11),
	(84,45,5,'2022-12-31',10),
	(85,20,2,'2023-02-14',12),
	(86,24,4,'2023-06-11',12),
	(87,26,3,'2022-11-09',12),
	(88,45,1,'2023-03-24',13),
	(89,5,2,'2022-12-21',12),
	(90,15,3,'2022-09-09',14),
	(91,13,1,'2022-07-28',11),
	(92,38,3,'2023-02-10',12),
	(93,28,5,'2022-10-11',12),
	(94,18,4,'2022-08-13',11),
	(95,20,2,'2022-08-29',9),
	(96,38,1,'2022-11-01',15),
	(97,35,1,'2022-11-05',10),
	(98,24,2,'2022-08-05',9),
	(99,19,5,'2023-05-02',15),
	(100,21,2,'2022-11-28',13);

/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table doctors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `doctors`;

CREATE TABLE `doctors` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;

INSERT INTO `doctors` (`id`, `title`, `first_name`, `last_name`, `email`, `password`)
VALUES
	(1,'Dr','Lèi','Hallbird','shallbird0@ftc.gov','wM4#0jG(N'),
	(2,'Dr','Maéna','Dorman','cdorman1@stumbleupon.com','hD9|v20|Cc81xd'),
	(3,'Dr','Maëline','Lavis','slavis2@artisteer.com','aM8!YB(+m@?D*M'),
	(4,'Dr','Mårten','Sandle','hsandle3@free.fr','qP2?Zc0xP#fH{2'),
	(5,'Dr','Kuí','Gianinotti','bgianinotti4@rambler.ru','uP6~LHbr&bKM');

/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table patients
# ------------------------------------------------------------

DROP TABLE IF EXISTS `patients`;

CREATE TABLE `patients` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;

INSERT INTO `patients` (`id`, `first_name`, `last_name`, `email`)
VALUES
	(1,'Don','Karpman','dkarpman0@nbcnews.com'),
	(2,'Marlane','Bradlaugh','mbradlaugh1@dion.ne.jp'),
	(3,'Audrye','Nelmes','anelmes2@foxnews.com'),
	(4,'Porty','Clemmitt','pclemmitt3@vk.com'),
	(5,'Gaven','Lensch','glensch4@usatoday.com'),
	(6,'Terrence','Butner','tbutner5@disqus.com'),
	(7,'Faythe','Slany','fslany6@imgur.com'),
	(8,'Maison','Hartup','mhartup7@free.fr'),
	(9,'Regan','Rubra','rrubra8@youku.com'),
	(10,'Harwell','Edess','hedess9@abc.net.au'),
	(11,'Jarrod','Haslen','jhaslena@google.co.jp'),
	(12,'Josee','Cory','jcoryb@xrea.com'),
	(13,'Rhys','Lafay','rlafayc@phpbb.com'),
	(14,'Emlyn','Gaythwaite','egaythwaited@shutterfly.com'),
	(15,'Michele','Clemits','mclemitse@icq.com'),
	(16,'Ag','Marchington','amarchingtonf@hostgator.com'),
	(17,'Saundra','Ferry','sferryg@youku.com'),
	(18,'Magdaia','Sidden','msiddenh@examiner.com'),
	(19,'Karel','Esby','kesbyi@pinterest.com'),
	(20,'Aurora','Outram','aoutramj@home.pl'),
	(21,'Vanya','Chastanet','vchastanetk@vinaora.com'),
	(22,'Vale','Meadmore','vmeadmorel@sakura.ne.jp'),
	(23,'Georgeanna','Harg','ghargm@comcast.net'),
	(24,'Lynsey','Oxtarby','loxtarbyn@loc.gov'),
	(25,'Rog','Mallebone','rmalleboneo@dell.com'),
	(26,'Byram','Quimby','bquimbyp@4shared.com'),
	(27,'Padriac','Karolewski','pkarolewskiq@hostgator.com'),
	(28,'Brett','Kirdsch','bkirdschr@cyberchimps.com'),
	(29,'Winny','Saffle','wsaffles@pagesperso-orange.fr'),
	(30,'Beltran','Medd','bmeddt@seattletimes.com'),
	(31,'Pierce','Grinter','pgrinteru@eepurl.com'),
	(32,'Hailey','Agge','haggev@themeforest.net'),
	(33,'Ethelred','Gibling','egiblingw@va.gov'),
	(34,'Napoleon','Carbery','ncarberyx@shutterfly.com'),
	(35,'Eldridge','Givens','egivensy@google.pl'),
	(36,'Bella','Bertelmot','bbertelmotz@nature.com'),
	(37,'Clarabelle','Pingston','cpingston10@deviantart.com'),
	(38,'Marris','Lamborn','mlamborn11@cafepress.com'),
	(39,'Byran','Pirozzi','bpirozzi12@wufoo.com'),
	(40,'Trevor','Cobson','tcobson13@so-net.ne.jp'),
	(41,'Ardelle','Emburey','aemburey14@ibm.com'),
	(42,'Ingaborg','Sleford','isleford15@gnu.org'),
	(43,'Rosamond','Glassopp','rglassopp16@gizmodo.com'),
	(44,'Tito','Gardiner','tgardiner17@technorati.com'),
	(45,'Rozanne','Batter','rbatter18@microsoft.com'),
	(46,'Sabra','Basill','sbasill19@sogou.com'),
	(47,'My','Hedaux','mhedaux1a@imgur.com'),
	(48,'Renelle','Teale','rteale1b@slashdot.org'),
	(49,'Carmen','Trembey','ctrembey1c@ameblo.jp'),
	(50,'Davie','Roullier','droullier1d@hexun.com');

/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
