# ************************************************************
# Sequel Ace SQL dump
# Version 20046
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.11.2-MariaDB-1:10.11.2+maria~ubu2204)
# Database: doctor_surgery
# Generation Time: 2023-06-19 10:47:17 +0000
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
  `time` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `reason` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;

INSERT INTO `appointments` (`id`, `patientId`, `doctorId`, `time`, `date`, `reason`)
VALUES
	(1,27,5,15,'2023-07-02','engage best-of-breed solutions'),
	(2,35,4,10,'2023-07-12','leverage user-centric bandwidth'),
	(3,49,4,14,'2023-07-10','repurpose bricks-and-clicks markets'),
	(4,12,4,14,'2023-07-08','expedite compelling ROI'),
	(5,26,1,13,'2023-07-07','incentivize extensible applications'),
	(6,3,2,15,'2023-06-25','enhance turn-key ROI'),
	(7,16,4,12,'2023-07-04','reintermediate 24/365 relationships'),
	(8,5,5,14,'2023-07-09','incentivize open-source initiatives'),
	(9,12,3,12,'2023-06-29','matrix best-of-breed mindshare'),
	(10,49,3,16,'2023-07-05','disintermediate intuitive relationships'),
	(11,13,2,15,'2023-07-07',NULL),
	(12,7,5,12,'2023-07-10','optimize value-added paradigms'),
	(13,7,3,14,'2023-07-03','benchmark out-of-the-box applications'),
	(14,15,2,14,'2023-06-27','reinvent turn-key web-readiness'),
	(15,47,2,16,'2023-06-28','exploit cross-media schemas'),
	(16,1,3,13,'2023-07-12','incentivize 24/365 systems'),
	(17,36,2,10,'2023-07-10','enable synergistic convergence'),
	(18,16,1,11,'2023-07-13','visualize real-time platforms'),
	(19,21,5,11,'2023-07-11','streamline value-added paradigms'),
	(20,1,5,12,'2023-07-04','architect rich synergies'),
	(21,46,2,12,'2023-07-01','productize 24/7 deliverables'),
	(22,16,1,16,'2023-06-23','unleash innovative partnerships'),
	(23,28,2,16,'2023-07-09','implement virtual architectures'),
	(24,12,4,12,'2023-06-25','engage sticky partnerships'),
	(25,38,5,10,'2023-07-10',NULL),
	(26,30,5,12,'2023-06-25','mesh sexy supply-chains'),
	(27,42,3,10,'2023-07-06','target user-centric systems'),
	(28,49,4,14,'2023-07-08','exploit cutting-edge convergence'),
	(29,33,2,10,'2023-07-02','morph extensible e-services'),
	(30,8,4,13,'2023-07-12','engage visionary eyeballs'),
	(31,30,1,9,'2023-07-12','incentivize rich networks'),
	(32,20,1,13,'2023-07-03','exploit wireless architectures'),
	(33,35,5,9,'2023-07-04','redefine value-added markets'),
	(34,31,2,13,'2023-07-06','deploy bleeding-edge action-items'),
	(35,10,1,9,'2023-06-27','implement leading-edge deliverables'),
	(36,16,1,13,'2023-06-24','architect value-added paradigms'),
	(37,45,4,11,'2023-06-24','brand turn-key methodologies'),
	(38,19,5,13,'2023-07-03','embrace innovative e-commerce'),
	(39,28,2,9,'2023-07-02','orchestrate best-of-breed web-readiness'),
	(40,6,2,15,'2023-06-25','expedite strategic e-business'),
	(41,24,3,9,'2023-07-12','reintermediate e-business paradigms'),
	(42,20,2,9,'2023-06-25','morph dot-com e-markets'),
	(43,44,4,14,'2023-07-01','brand front-end mindshare'),
	(44,15,1,15,'2023-06-27','productize back-end channels'),
	(45,49,5,11,'2023-07-01','empower transparent mindshare'),
	(46,24,5,9,'2023-07-12',NULL),
	(47,6,1,16,'2023-06-23','implement extensible users'),
	(48,49,2,12,'2023-06-28','seize ubiquitous partnerships'),
	(49,45,4,14,'2023-07-09','benchmark cross-media mindshare'),
	(50,37,2,16,'2023-07-08','target sticky functionalities'),
	(51,16,4,12,'2023-07-11','streamline real-time deliverables'),
	(52,12,4,12,'2023-07-07','transform back-end e-business'),
	(53,44,2,11,'2023-06-24','empower customized relationships'),
	(54,45,1,9,'2023-07-09','disintermediate dynamic ROI'),
	(55,44,3,9,'2023-07-12','repurpose e-business eyeballs'),
	(56,44,3,10,'2023-06-29','redefine sexy schemas'),
	(57,36,1,13,'2023-07-09','harness B2C architectures'),
	(58,2,2,9,'2023-07-06','harness holistic vortals'),
	(59,36,3,12,'2023-07-09','deploy scalable infrastructures'),
	(60,38,1,14,'2023-06-24','redefine interactive web-readiness'),
	(61,12,2,13,'2023-06-26','engineer collaborative channels'),
	(62,14,5,11,'2023-06-23','seize synergistic schemas'),
	(63,36,2,10,'2023-07-13','generate leading-edge models'),
	(64,26,1,12,'2023-06-26','revolutionize global web services'),
	(65,26,4,16,'2023-07-01','monetize cross-media architectures'),
	(66,20,1,14,'2023-06-27','architect rich e-commerce'),
	(67,2,1,16,'2023-07-10','deploy enterprise supply-chains'),
	(68,30,5,16,'2023-06-24','deliver vertical eyeballs'),
	(69,3,1,10,'2023-07-06','benchmark one-to-one systems'),
	(70,28,1,12,'2023-07-03','reinvent best-of-breed infomediaries'),
	(71,33,1,9,'2023-06-27','drive sticky applications'),
	(72,13,1,13,'2023-07-08','matrix one-to-one web services'),
	(73,2,5,11,'2023-06-29','harness out-of-the-box mindshare'),
	(74,23,2,12,'2023-06-24','implement 24/365 markets'),
	(75,21,1,16,'2023-07-09','scale sticky deliverables'),
	(76,46,2,14,'2023-07-11','streamline efficient relationships'),
	(77,46,3,12,'2023-06-24','leverage compelling infomediaries'),
	(78,40,5,10,'2023-07-10','scale interactive e-commerce'),
	(79,42,5,10,'2023-06-25','seize impactful users'),
	(80,11,1,15,'2023-06-28','maximize collaborative convergence'),
	(81,3,2,14,'2023-07-10','orchestrate compelling convergence'),
	(82,3,2,13,'2023-07-10','productize bricks-and-clicks infomediaries'),
	(83,29,2,14,'2023-07-07','optimize viral bandwidth'),
	(84,17,1,13,'2023-06-29','visualize front-end mindshare'),
	(85,50,1,12,'2023-06-25','visualize proactive functionalities'),
	(86,37,3,9,'2023-06-24','grow wireless functionalities'),
	(87,46,3,15,'2023-06-23','implement one-to-one infomediaries'),
	(88,36,3,14,'2023-06-27','revolutionize bleeding-edge supply-chains'),
	(89,21,3,11,'2023-06-24','embrace integrated web services'),
	(90,12,5,14,'2023-07-03','repurpose end-to-end infrastructures'),
	(91,48,2,9,'2023-07-04','extend impactful experiences'),
	(92,17,5,11,'2023-06-29','evolve innovative action-items'),
	(93,9,4,14,'2023-06-24','implement value-added channels'),
	(94,39,4,10,'2023-07-04','incubate robust users'),
	(95,36,5,16,'2023-06-29','reinvent turn-key deliverables'),
	(96,12,3,11,'2023-07-08','scale ubiquitous supply-chains'),
	(97,1,1,11,'2023-07-10','strategize global vortals'),
	(98,31,4,16,'2023-07-10','iterate web-enabled convergence'),
	(99,33,1,9,'2023-06-30',NULL),
	(100,36,1,10,'2023-07-02','reintermediate transparent web-readiness');

/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table doctors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `doctors`;

CREATE TABLE `doctors` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;

INSERT INTO `doctors` (`id`, `title`, `first_name`, `last_name`, `email`, `password`)
VALUES
	(1,'Dr','Log','Login','drlogin@icantbelieveit.com','12345678'),
	(2,'Dr','Ingrid','Input','drinput@icantbelieveit.com','hD9|v20|Cc81xd'),
	(3,'Dr','Tom','Jones','drjones@icantbelieveit.com','aM8!YB(+m@?D*M'),
	(4,'Dr','Dom','Domain','drdomain@icantbelieveit.com','qP2?Zc0xP#fH{2'),
	(5,'Dr','React','Component','drcomponent@icantbelieveit.com','uP6~LHbr&bKM');

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
