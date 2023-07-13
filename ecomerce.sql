-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: b2onei5osemqiziazava-mysql.services.clever-cloud.com:3306
-- Generation Time: Jul 07, 2023 at 04:23 AM
-- Server version: 8.0.15-5
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `b2onei5osemqiziazava`
--

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` varchar(255) NOT NULL,
  `idUser` varchar(256) DEFAULT NULL,
  `idPromo` varchar(256) DEFAULT NULL,
  `invoice` varchar(64) DEFAULT NULL,
  `tax` int(12) DEFAULT NULL,
  `subTotal` int(12) DEFAULT NULL,
  `total` int(12) DEFAULT NULL,
  `paymentMethod` varchar(16) DEFAULT NULL,
  `paymentStatus` enum('pending','success','failed') NOT NULL DEFAULT 'pending',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `idUser`, `idPromo`, `invoice`, `tax`, `subTotal`, `total`, `paymentMethod`, `paymentStatus`) VALUES
('17a2d2f3-09ca-4a89-80a5-e50b339b117f', 'c6399bdd-4ede-4b1c-abce-cdb238261386', NULL, 'CS-6MO79NIEI', 1700, 17000, 18700, 'Bank Account', 'success'),
('235092d9-8296-45c6-ba69-b6d819c6df16', '531c2330-69f4-4d5a-b140-ee3670c2747c', NULL, 'CS-QR6CE0GX8', 12000, 120000, 132000, 'Bank Account', 'success'),
('3990f09a-e26c-4fd0-86fe-c4a18f2ee61c', '14a28fd5-5543-40a3-8e4f-65ef1f36dbd7', NULL, 'CS-2EBTFQLUZ', 1200, 12000, 13200, 'Bank Account', 'success'),
('3af4b2aa-a74b-4d73-abf8-1a899545056f', '4e04cc2d-bff6-4be9-8939-cf36df350843', NULL, 'CS-MDO3IH6FN', 1992, 19924, 21916, 'Bank Account', 'success'),
('428a7e16-e9a6-46de-88d2-65e24022a9a3', 'b34baa61-f329-4233-ac00-35741ea30a90', NULL, 'CS-1X1PB8PBU', 1200, 12000, 13200, 'Bank Account', 'success'),
('4dabd035-bb17-4e58-9165-7761dd4275df', '707b28d6-cd04-4dbf-a299-60d6a7ccdea2', NULL, 'CS-3BIDWZVYM', 11900, 119000, 130900, 'Cash On Delivery', 'success'),
('53c87143-d65c-4dec-8bcd-c7fb6bf3443b', '4e04cc2d-bff6-4be9-8939-cf36df350843', NULL, 'CS-5A72UBQTC', 12000, 120000, 132000, 'Bank Account', 'success'),
('621a92ae-2bc9-4ee7-b88f-fbe77a0cc112', 'b34baa61-f329-4233-ac00-35741ea30a90', NULL, 'CS-CAMM7EQKG', 623, 6231, 6854, 'Bank Account', 'success'),
('66ccc768-d97a-4faa-ac6e-2f67770c9d81', 'b34baa61-f329-4233-ac00-35741ea30a90', NULL, 'CS-VUL0MHFRP', 2492, 24924, 27416, 'Cash On Delivery', 'success'),
('6ba904bf-6556-42bf-899c-014d469f6060', '4e04cc2d-bff6-4be9-8939-cf36df350843', NULL, 'CS-KX69265FU', 1992, 19924, 21916, 'Bank Account', 'success'),
('70335d3f-38fe-4302-9754-8b7b5516c7f3', '4e04cc2d-bff6-4be9-8939-cf36df350843', NULL, 'CS-4T84QFU07', 1869, 18693, 20562, 'Bank Account', 'success'),
('721203cd-b6cf-4fb2-8dfd-3c9eac4ad8a9', '707b28d6-cd04-4dbf-a299-60d6a7ccdea2', NULL, 'CS-JI0UW5EQX', 1200, 12000, 13200, 'Bank Account', 'success'),
('749a4d19-6bcf-48dc-bb66-d1fbe2cb6d3e', '707b28d6-cd04-4dbf-a299-60d6a7ccdea2', NULL, 'CS-5MX45J8SB', 11900, 119000, 130900, 'Bank Account', 'success'),
('7d0926db-6d56-4d72-ac75-78fb36da89c4', '707b28d6-cd04-4dbf-a299-60d6a7ccdea2', NULL, 'CS-O7S5V599J', 12023, 120231, 132254, 'Bank Account', 'success'),
('801f7139-a04e-4f4d-a9e4-08b60faaa1b7', '4e04cc2d-bff6-4be9-8939-cf36df350843', NULL, 'CS-I7MUQZHJ1', 1869, 18693, 20562, 'Bank Account', 'success'),
('80ecd381-8953-4408-9b1d-efd29fb3129e', '707b28d6-cd04-4dbf-a299-60d6a7ccdea2', NULL, 'CS-QDHZ2OD96', 11900, 119000, 130900, 'Bank Account', 'success'),
('823acadd-df91-4d18-b032-d7503c68a058', '4e04cc2d-bff6-4be9-8939-cf36df350843', NULL, 'CS-TCNXQ83V6', 1992, 19924, 21916, 'Bank Account', 'success'),
('823bc8c9-a457-4f0f-a018-d934191ea905', '707b28d6-cd04-4dbf-a299-60d6a7ccdea2', NULL, 'CS-TLSO18BWL', 12023, 120231, 132254, 'Bank Account', 'success'),
('83e9f2e5-323c-4487-ac26-58af750ea031', '4e04cc2d-bff6-4be9-8939-cf36df350843', NULL, 'CS-0JN3C4L3A', 1869, 18693, 20562, 'Cash On Delivery', 'success'),
('84f70816-752e-4e2c-bfe5-54b5b32885ac', '14a28fd5-5543-40a3-8e4f-65ef1f36dbd7', NULL, 'CS-ZTL4Y5AEL', 12000, 120000, 132000, 'Bank Account', 'success'),
('921f06dd-e6ee-415d-9280-48b8ed3a4e4a', '83ed25a1-04a0-4baa-a10d-e4b907ea82de', NULL, 'CS-2ANBKWAWU', 20000, 200000, 220000, 'Card', 'success'),
('923f274c-264b-4712-8dc5-cff1c3180bfc', '707b28d6-cd04-4dbf-a299-60d6a7ccdea2', '76e841dd-d781-4c50-b063-5abb36e6caa5', 'CS-XUB0KPN5Y', 2500, 25000, 26500, 'Bank Account', 'success'),
('9598f8fd-0a29-4f85-94b3-96380bede714', '707b28d6-cd04-4dbf-a299-60d6a7ccdea2', '76e841dd-d781-4c50-b063-5abb36e6caa5', 'CS-NCDIN9RS5', 2500, 25000, 26500, 'Bank Account', 'success'),
('97d2eebf-898e-47d2-8e74-b0d385998205', '14a28fd5-5543-40a3-8e4f-65ef1f36dbd7', NULL, 'CS-N2NGR3Y5M', 12000, 120000, 132000, 'Bank Account', 'success'),
('b0260284-5b20-4df9-8629-6edf03b8e002', 'c6399bdd-4ede-4b1c-abce-cdb238261386', '72673102-0da8-4f2f-b104-f07bf26906b4', 'CS-5ZTOYZX2K', 1200, 12000, 13200, 'Card', 'success'),
('b2d4355e-52b7-480a-9570-6e21f32a5428', '14a28fd5-5543-40a3-8e4f-65ef1f36dbd7', NULL, 'CS-5ZODLMZQU', 1200, 12000, 13200, 'Cash On Delivery', 'success'),
('b5f56e2f-0ad9-4f5b-a219-9c77759a789e', '4e04cc2d-bff6-4be9-8939-cf36df350843', NULL, 'CS-N0GH5SZOW', 1992, 19924, 21916, 'Bank Account', 'success'),
('b8734e0d-e4e5-44b9-b7c7-1fabe9c6d4bb', '707b28d6-cd04-4dbf-a299-60d6a7ccdea2', NULL, 'CS-4LCRH0G4Z', 11900, 119000, 130900, 'Bank Account', 'success'),
('bc545cfb-fee9-4c80-9615-badd89b32b99', '4e04cc2d-bff6-4be9-8939-cf36df350843', NULL, 'CS-8S1R02MCB', 1869, 18693, 20562, 'Bank Account', 'success'),
('c1767579-6c14-46e7-8df6-bab7146b5265', 'c6399bdd-4ede-4b1c-abce-cdb238261386', NULL, 'CS-HKIGUL89F', 1123, 11231, 12354, 'Bank Account', 'success'),
('c90fe8f2-b0f4-4f79-99c3-1e968ed013b3', '14a28fd5-5543-40a3-8e4f-65ef1f36dbd7', NULL, 'CS-AR0FM7WOX', 12000, 120000, 132000, 'Bank Account', 'success'),
('cb778091-4ba6-40ac-93d5-d84d3d96b147', '707b28d6-cd04-4dbf-a299-60d6a7ccdea2', NULL, 'CS-Q1XKOU4B0', 12023, 120231, 132254, 'Bank Account', 'success'),
('e53d0980-cb28-4a58-8c47-2206896c331a', '14a28fd5-5543-40a3-8e4f-65ef1f36dbd7', NULL, 'CS-8GPQX5DYQ', 12000, 120000, 132000, 'Bank Account', 'success'),
('e8e53df1-6648-45be-9085-a0685703534c', '14a28fd5-5543-40a3-8e4f-65ef1f36dbd7', NULL, 'CS-FPRXPLQKK', 12000, 120000, 132000, 'Card', 'success'),
('eff7b988-9515-42b0-bc11-a3301fcd38db', '531c2330-69f4-4d5a-b140-ee3670c2747c', NULL, 'CB-HSB17OVWY', 24000, 240000, 264000, 'Bank Account', 'success'),
('f039d143-8d8f-4bca-a72e-ce9e7c3d9a17', 'c6399bdd-4ede-4b1c-abce-cdb238261386', NULL, 'CS-FB1URPVQJ', 1200, 12000, 13200, 'Bank Account', 'success'),
('f03cf23e-0344-4daa-9e34-87673fa25f45', 'c6399bdd-4ede-4b1c-abce-cdb238261386', NULL, 'CS-O4ZR45D0S', 1123, 11231, 12354, 'Bank Account', 'success'),
('f846b864-fb61-4c1c-b31c-2dd0cc3629c0', '531c2330-69f4-4d5a-b140-ee3670c2747c', NULL, 'CB-DM68ANW01', 24000, 240000, 264000, 'Bank Account', 'success');

-- --------------------------------------------------------

--
-- Table structure for table `orderitem`
--

CREATE TABLE `orderitem` (
  `id` varchar(255) NOT NULL,
  `orderId` varchar(256) DEFAULT NULL,
  `productId` varchar(256) DEFAULT NULL,
  `qty` int(12) DEFAULT NULL,
  `total` int(12) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `orderitem`
--

INSERT INTO `orderitem` (`id`, `orderId`, `productId`, `qty`, `total`, `updatedAt`) VALUES
('02364a1e-47e9-4c0a-a19d-35b9b80d26fd', 'b2d4355e-52b7-480a-9570-6e21f32a5428', 'fa190987-f8c1-41e4-bae3-faf702dc3ba9', 1, 12000, NULL),
('0c5fa850-d759-4f86-b5d3-87e8de70fe07', 'b8734e0d-e4e5-44b9-b7c7-1fabe9c6d4bb', 'a88daa0f-4ecf-4a3c-8200-6b347103df3b', 7, 119000, NULL),
('15aab844-2d8c-491e-be6e-04ca294f38b2', '84f70816-752e-4e2c-bfe5-54b5b32885ac', '37a7d451-164a-46d4-b4c2-caac2898145b', 1, 120000, NULL),
('1af2514a-ed77-40b6-9230-19c827db757a', '5b1c75b3-8a55-48a5-ac99-1cbf660b956c', 'a88daa0f-4ecf-4a3c-8200-6b347103df3b', 1, 12000, NULL),
('1bce2ab6-765d-4ffe-9bce-a1ca7afe85a1', 'f039d143-8d8f-4bca-a72e-ce9e7c3d9a17', 'fa190987-f8c1-41e4-bae3-faf702dc3ba9', 1, 12000, NULL),
('1e7b1e48-aeb6-4fd1-995f-bc5259732cdb', '97d2eebf-898e-47d2-8e74-b0d385998205', '37a7d451-164a-46d4-b4c2-caac2898145b', 1, 120000, NULL),
('3a1c2c7e-7617-42ea-9bb4-c5a5586081d5', '921f06dd-e6ee-415d-9280-48b8ed3a4e4a', 'a630770f-7171-47ec-8211-765672fa1b99', 1, 200000, NULL),
('3c2eb799-59fd-4f76-8a0c-952e68a70db3', 'd54dd71a-c32f-4fab-b874-929e4eab6a81', 'a88daa0f-4ecf-4a3c-8200-6b347103df3b', 1, 12000, NULL),
('67a16c9d-7af2-4faf-9714-36a7c1be849d', '721203cd-b6cf-4fb2-8dfd-3c9eac4ad8a9', 'fa190987-f8c1-41e4-bae3-faf702dc3ba9', 1, 12000, NULL),
('6fe831da-d205-40e5-b0f6-57dee2056713', '80ecd381-8953-4408-9b1d-efd29fb3129e', 'a88daa0f-4ecf-4a3c-8200-6b347103df3b', 7, 119000, NULL),
('71489306-e981-4082-8d73-5a4ebaa7d0bb', '4dabd035-bb17-4e58-9165-7761dd4275df', 'a88daa0f-4ecf-4a3c-8200-6b347103df3b', 7, 119000, NULL),
('74d952ca-cb97-4e7d-a865-00eed6348e7d', '67fe7a0a-de6e-4bcf-9699-898e229bccc1', 'a88daa0f-4ecf-4a3c-8200-6b347103df3b', 1, 17000, NULL),
('7e7643ff-18f6-42be-8dd2-35043b46621d', 'abc6d7c4-54a1-43e5-8f70-d5cf31b2c5a5', 'fa190987-f8c1-41e4-bae3-faf702dc3ba9', 6, 72000, NULL),
('826b4ccc-0190-4943-9ffd-3526a00c8b4d', '235092d9-8296-45c6-ba69-b6d819c6df16', '37a7d451-164a-46d4-b4c2-caac2898145b', 1, 120000, NULL),
('8d65badc-ca14-4750-9027-8a6085a39143', 'abc6d7c4-54a1-43e5-8f70-d5cf31b2c5a5', '37a7d451-164a-46d4-b4c2-caac2898145b', 1, 120000, NULL),
('8d7681d3-b666-4053-b3eb-69b3cd2ae440', 'e8e53df1-6648-45be-9085-a0685703534c', '37a7d451-164a-46d4-b4c2-caac2898145b', 1, 120000, NULL),
('8dc17a04-b538-4674-8d79-21dcda7977df', 'a7531126-5b4a-4fe9-bfbf-8290b8effd48', '37a7d451-164a-46d4-b4c2-caac2898145b', 1, 120000, NULL),
('916c6e50-aafc-4bb2-bdc8-30851817016c', '9598f8fd-0a29-4f85-94b3-96380bede714', '09485731-a919-4f23-870f-e4d5b90c7ac9', 1, 25000, NULL),
('961d6270-eb15-43c0-939e-fd4e431bf5c4', '17a2d2f3-09ca-4a89-80a5-e50b339b117f', 'a88daa0f-4ecf-4a3c-8200-6b347103df3b', 1, 17000, NULL),
('97a83ca7-044d-4ebe-b30e-9d4b0075edbb', '749a4d19-6bcf-48dc-bb66-d1fbe2cb6d3e', 'a88daa0f-4ecf-4a3c-8200-6b347103df3b', 7, 119000, NULL),
('9de8aca1-ea1e-4f06-b34e-be74c1f13e2a', '5f37a9e2-acc7-45e8-b1a3-10821df81f78', 'a88daa0f-4ecf-4a3c-8200-6b347103df3b', 1, 17000, NULL),
('a512c361-ac2f-4247-b5ee-8db52ef13f86', 'b0260284-5b20-4df9-8629-6edf03b8e002', 'a88daa0f-4ecf-4a3c-8200-6b347103df3b', 1, 12000, NULL),
('afe581b9-9d82-49b4-8fa3-b11abd9c0096', 'fc274ca1-c5b8-4219-afc0-a2cd3ae23196', 'fa190987-f8c1-41e4-bae3-faf702dc3ba9', 4, 48000, NULL),
('b0817bb1-9fb4-4f59-aa43-17cefbcc77bd', 'eff7b988-9515-42b0-bc11-a3301fcd38db', '37a7d451-164a-46d4-b4c2-caac2898145b', 2, 240000, NULL),
('c892fbdd-e3a8-49de-b568-ba2317bbd049', 'c90fe8f2-b0f4-4f79-99c3-1e968ed013b3', '37a7d451-164a-46d4-b4c2-caac2898145b', 1, 120000, NULL),
('d3d263c7-7c04-45a9-9c6d-1527fba96901', 'e53d0980-cb28-4a58-8c47-2206896c331a', '37a7d451-164a-46d4-b4c2-caac2898145b', 1, 120000, NULL),
('d3e309ff-cce7-4c81-beff-56e1fda807fc', '53c87143-d65c-4dec-8bcd-c7fb6bf3443b', '37a7d451-164a-46d4-b4c2-caac2898145b', 1, 120000, NULL),
('d6a6274d-5a35-4a9d-b0b7-9b9a5cfadd9c', '428a7e16-e9a6-46de-88d2-65e24022a9a3', 'fa190987-f8c1-41e4-bae3-faf702dc3ba9', 1, 12000, NULL),
('e9eadc68-499c-4427-bc90-94991aa65388', '38659544-f6ea-411d-ab7b-000a248415d7', '37a7d451-164a-46d4-b4c2-caac2898145b', 1, 120000, NULL),
('e9fdb42e-9add-4654-9cbb-720217c9069f', '3990f09a-e26c-4fd0-86fe-c4a18f2ee61c', 'fa190987-f8c1-41e4-bae3-faf702dc3ba9', 1, 12000, NULL),
('ed3e02d5-0a9a-4bf9-a719-ee39fc6cf983', '923f274c-264b-4712-8dc5-cff1c3180bfc', '09485731-a919-4f23-870f-e4d5b90c7ac9', 1, 25000, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` varchar(255) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `image` varchar(256) DEFAULT NULL,
  `size` varchar(64) DEFAULT NULL,
  `price` int(24) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  `category` varchar(64) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `image`, `size`, `price`, `description`, `category`, `updatedAt`) VALUES
('a630770f-7171-47ec-8211-765672fa1b99', 'Spagetti Sauce', '2023-07-07T04-08-18.314Zpexels-engin-akyurt-1527603.jpg', 'Pedas,Sedang', 200000, 'Foods sauce delicious', 'Foods', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `promo`
--

CREATE TABLE `promo` (
  `id` varchar(255) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `discount` int(12) DEFAULT NULL,
  `image` varchar(256) DEFAULT NULL,
  `minTotalPrice` int(12) DEFAULT NULL,
  `maxDiscount` int(12) DEFAULT NULL,
  `promoCode` varchar(32) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  `dateStart` date DEFAULT NULL,
  `dateEnd` date DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `promo`
--

INSERT INTO `promo` (`id`, `name`, `discount`, `image`, `minTotalPrice`, `maxDiscount`, `promoCode`, `description`, `dateStart`, `dateEnd`, `updatedAt`) VALUES
('480e6138-752b-4c6d-ad96-2af7728af3c1', 'Voucher Nutrimart Diskon 50% Belanja Pertama\n', 50, '2021-11-26T14-30-02.366Zpromo-card-1.png', 10000, 50, 'CBEXCEL67', 'Dapatkan promo diskon sebesar 50% untuk setiap pembelian produk apa saja di Coffee-Brings khusus pembelian pertama', '2021-11-29', '2021-12-23', NULL),
('5fa3440e-e44d-422d-83df-bd4ecd1bf249', 'SELASA HEMAT BERSAMA MAMAT', 0, '2023-07-04T17-11-55.445ZScreenshot 2023-07-04 at 22.54.40.png', 10000, 2000, 'selasa ceria', 'BAWA TUMBLER UNTUK SELASA HEAMT', '2023-07-12', '2023-07-08', NULL),
('76b31ee7-4c77-4bdd-b68d-612cf15d437e', 'Nantikan Promo Hari Ibu Menakjubkan dari Resto-Krisna', 50, '2021-11-26T14-33-32.993Zpromo-card-2.png', 10000, 50, 'CBWELL98', 'Jangan sampai ketinggalan diskon fantastis dari Coffe-Brings selama Hari Ibu diskon 50%', '2021-12-22', '2021-12-22', NULL),
('76e841dd-d781-4c50-b063-5abb36e6caa5', 'Promo Ceria ', 10, NULL, 5000, 1000, 'CeriaMax', 'promo ceria 2 hari saja', '2023-07-06', '2023-07-09', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(255) NOT NULL,
  `displayName` varchar(32) DEFAULT NULL,
  `firstName` varchar(32) DEFAULT NULL,
  `lastName` varchar(32) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `image` varchar(256) DEFAULT NULL,
  `phoneNumber` varchar(16) DEFAULT NULL,
  `deliveryAddress` varchar(256) DEFAULT NULL,
  `gender` enum('male','female') DEFAULT NULL,
  `status` enum('active','notActive') NOT NULL DEFAULT 'notActive',
  `role` enum('user','admin') NOT NULL DEFAULT 'user',
  `birthDay` date DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `displayName`, `firstName`, `lastName`, `email`, `image`, `phoneNumber`, `deliveryAddress`, `gender`, `status`, `role`, `birthDay`, `password`, `updatedAt`) VALUES
('03b0bba8-4279-48cf-b6c4-c82f1daa723a', NULL, NULL, NULL, 'kk@gmail.com', NULL, '12312313', NULL, NULL, 'active', 'user', NULL, '$2b$10$oT1weS1NPZM03uiBkQvK3.8rk8ORlz8PbZJdg49tugoiySGkEccKO', NULL),
('14a28fd5-5543-40a3-8e4f-65ef1f36dbd7', 'krisna', 'krisna', 'pramulya', 'k@gmail.com', '2023-06-28T15-22-27.404ZScreenshot 2023-06-19 at 19.02.02.png', '089520988625', 'jln jalanin aja', 'male', 'active', 'user', '2023-06-28', '$2b$10$ENIJ1h5sHBtG216PwnA19Om2e2hbvGgPOu/eZ9OMUAL4e1R60o4Oy', '2023-06-28 22:22:33'),
('3ef90fe7-2b55-4099-bc95-cb8ad8488b1a', NULL, NULL, NULL, '123@gmail.com', '2023-07-02T16-53-48.405ZScreenshot 2023-06-21 at 11.08.17.png', '123456789123', NULL, 'male', 'active', 'user', '2023-07-02', '$2b$10$WPA3YX9vVE8r1OWkSBQsZe2PiaUH0nTJwD1rBGQRtSI0TGSivNF7y', '2023-07-02 23:53:53'),
('46193825-c16b-4432-9ba2-681cc7e098db', NULL, NULL, NULL, 's', NULL, '1', NULL, NULL, 'active', 'user', NULL, '$2b$10$6V/hJGvR5DHkF2krUwfIs.zMCIw9nIGUomjaDjKLBjo93GGKcppdS', NULL),
('4e04cc2d-bff6-4be9-8939-cf36df350843', 'krisna', 'krisna', 'krisna', 'kkk@gmail.com', NULL, '081234567890', 'test', 'male', 'active', 'user', '2023-07-02', '$2b$10$G6hcsdMmGOEJhlqg81ZpQ.uvEnUnL9IG3vxRO1ZYB/QjHSLtG24kK', '2023-07-02 17:57:25'),
('531c2330-69f4-4d5a-b140-ee3670c2747c', 'fachri', 'fachri', NULL, 'fachrimaulanapakpahan@gmail.com', NULL, '081213141516', 'medan', NULL, 'active', 'user', '2023-06-28', '$2b$10$eUDHqK8zr2QceISTDIS5auntiSVjuJj1Bt8TC.O8jO/Xq/2nyHon6', '2023-06-28 10:12:38'),
('63306e34-29a5-435c-8894-f0b38fb198a6', NULL, NULL, NULL, 'kkkk@gmail.com', NULL, '081208120812', NULL, NULL, 'active', 'user', NULL, '$2b$10$ysOiQ0guFnmPcAzJTcrDTedAtsX/VEBfbaRIcsbvElzpX5omjHSxO', NULL),
('6b5b6374-522b-43f3-becf-009064bbf784', NULL, NULL, NULL, 'fachryfachry1997@gmail.com', NULL, '1235678', NULL, NULL, 'active', 'user', NULL, '$2b$10$igjJ3bWerxRp3hH0PZxKSOtzUnAixIPvh7rqh2w.5y34RjDI.vdD6', '2021-11-25 17:10:22'),
('707b28d6-cd04-4dbf-a299-60d6a7ccdea2', 'kris', NULL, NULL, 'kris@gmail.com', NULL, '13', 'jalan', 'male', 'active', 'user', '2023-07-04', '$2b$10$1pBeNi71TGU7iWFvlhsIae3CNBuyiSaTRB4/zZZb5l9wGgRGzfeC2', '2023-07-05 00:16:00'),
('83ed25a1-04a0-4baa-a10d-e4b907ea82de', 'Budi men', 'men', 'budi', 'budi@gmail.com', NULL, '082258022744', 'indonesia', 'male', 'active', 'user', '2011-06-16', '$2b$10$1jee7L6V1BX1bHzyDkdM.etfFVmL.lMl0GnErIrzx6lv4PuTd1KjW', '2023-07-07 11:20:47'),
('9ce26dbf-7372-4895-b36b-4a21a0f35ad5', NULL, NULL, NULL, 'l@gmail.com', NULL, '321321321', NULL, NULL, 'active', 'user', NULL, '$2b$10$sePlFlA0HMv0fPZzX7fxu.Xh2EqMWITsUSHiFgihZjtueEYSy0siK', NULL),
('aae25cb5-d6eb-42e3-88e5-4d34683d80a0', NULL, NULL, NULL, 'krisnaa@gmail.com', NULL, '123123123', NULL, NULL, 'active', 'user', NULL, '$2b$10$2hiP6dKr3F80gunh0M9OF.paR0eCThECq3iLzPtRi/pEZZ7eYpbxW', NULL),
('b30e5f4e-ab88-49af-afdc-e25ec711431a', NULL, NULL, NULL, 'krisnap@gmail.com', NULL, '132132132', NULL, NULL, 'active', 'user', NULL, '$2b$10$oc79vd68mgAJjZkVMujEw.RXBYxWqSbkPjA02Ogz/5P4fRrxpIHPe', NULL),
('b34baa61-f329-4233-ac00-35741ea30a90', 'krisna', NULL, NULL, 'kasa@gmail.com', NULL, '123123123123', 'jalanin aja dulu', NULL, 'active', 'user', '2023-07-03', '$2b$10$LDa0B2pQ22kNYbm9ftQLzuypcafwHAmSn.Y2FTzVNOv/w4ZaJ1n5u', '2023-07-04 22:43:12'),
('b7ee9215-c36e-4c32-b00f-017a52f44e46', NULL, NULL, NULL, 'ada@gmail.cons', NULL, '1231231231231233', NULL, NULL, 'active', 'user', NULL, '$2b$10$hnMz4ljije2UhtyiZtv9Su8dOFWS4f5nImJt7ubI4m3dT7KDDIH1.', NULL),
('bd2f7c60-7605-4722-88e0-2d4d9eafdbb8', NULL, NULL, NULL, 'krisna@gmail.com', NULL, '089520988625', NULL, NULL, 'active', 'user', NULL, '$2b$10$bxMt0x7FwfIvmakDmgU46OCij8G69ZpsAT4ST/uxSB1oxLKF96uJO', NULL),
('c6399bdd-4ede-4b1c-abce-cdb238261386', 'Krisna Pramulya', 'Krisna Pramulya', 'Putra', 'check@gmail.com', '2023-07-06T11-21-53.832ZScreenshot 2023-07-06 at 00.32.56.png', '89520988624', 'Jalan Matraman Dalam 3 No 32 rt 10 rw 7, pegangsaan, menteng', 'male', 'active', 'user', '2001-07-13', '$2b$10$JrHOFUcqU.sjKek4LDQbRuo7VEbaXwA3znajuBjOvEKg3lZuf9zY6', '2023-07-06 18:22:53'),
('e66b8d36-4de4-403d-ba5a-ce61a5ed4873', 'admin new', 'admin', 'admin', 'testemailnew@gmail.com', '2023-07-07T04-11-28.220ZBoy2.png', '082258022744', 'indonesia', NULL, 'active', 'admin', '2023-07-07', '$2b$10$mD..Vli5U2vMMw4JYejjKOBJEMygSo984rvVYDLeQ3MUYnGESRFjC', '2023-07-07 11:11:48'),
('ef5f22ec-c179-4195-a763-b62985bd23fe', NULL, NULL, NULL, 'kris', NULL, '123123123', NULL, NULL, 'active', 'user', NULL, '$2b$10$CdGx1KaKMECfC3F9lckkGucSPMdnoayOdXJAmmJNin17CDEH33E.m', NULL),
('f92226b0-2018-45b7-8eae-a23aa9691bdb', NULL, NULL, NULL, 'testt@gmail.com', NULL, '12345678', NULL, NULL, 'active', 'user', NULL, '$2b$10$9.bmBTVxJSyFoF/BwVuVj.saYPUGpyZbnfVj1em0msACcAUSEe7Zi', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderitem`
--
ALTER TABLE `orderitem`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `promo`
--
ALTER TABLE `promo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
