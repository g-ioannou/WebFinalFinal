-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 28, 2020 at 07:48 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `harrowDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `entry`
--

CREATE TABLE `entry` (
  `entry_ID` int(11) NOT NULL,
  `startedDateTime` datetime NOT NULL DEFAULT current_timestamp(),
  `wait` float NOT NULL,
  `server_IP` varchar(255) NOT NULL,
  `response_ID` int(11) NOT NULL,
  `request_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `HAR_file`
--

CREATE TABLE `HAR_file` (
  `file_ID` int(11) NOT NULL,
  `upload_provider` varchar(255) NOT NULL,
  `uploader_city` varchar(255) NOT NULL,
  `date_registered` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `has_entry`
--

CREATE TABLE `has_entry` (
  `entry_ID` int(11) NOT NULL,
  `file_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `has_file`
--

CREATE TABLE `has_file` (
  `user_ID` int(11) NOT NULL,
  `file_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `has_header`
--

CREATE TABLE `has_header` (
  `header_ID` int(11) NOT NULL,
  `response_ID` int(11) NOT NULL,
  `request_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `has_IP`
--

CREATE TABLE `has_IP` (
  `user_ID` int(11) NOT NULL,
  `IP_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `header`
--

CREATE TABLE `header` (
  `headery_id` int(11) NOT NULL,
  `content-type` varchar(255) DEFAULT NULL,
  `cache-contol` varchar(255) DEFAULT NULL,
  `pragma` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `last_modified` varchar(255) DEFAULT NULL,
  `host` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `IP`
--

CREATE TABLE `IP` (
  `IP_ID` int(11) NOT NULL,
  `provider_ID` int(11) NOT NULL,
  `IP_adrress` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `provider`
--

CREATE TABLE `provider` (
  `provider_ID` int(11) NOT NULL,
  `provider_name` varchar(255) NOT NULL,
  `provider_IP` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `request_ID` int(11) NOT NULL,
  `method` varchar(7) NOT NULL,
  `domain` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `response`
--

CREATE TABLE `response` (
  `response_ID` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `statusText` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_ID` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL COMMENT 'SHA',
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `is_Admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `entry`
--
ALTER TABLE `entry`
  ADD PRIMARY KEY (`entry_ID`),
  ADD KEY `request_ID` (`request_ID`),
  ADD KEY `response_ID` (`response_ID`);

--
-- Indexes for table `HAR_file`
--
ALTER TABLE `HAR_file`
  ADD PRIMARY KEY (`file_ID`);

--
-- Indexes for table `has_entry`
--
ALTER TABLE `has_entry`
  ADD PRIMARY KEY (`entry_ID`),
  ADD KEY `file_ID` (`file_ID`);

--
-- Indexes for table `has_file`
--
ALTER TABLE `has_file`
  ADD PRIMARY KEY (`file_ID`),
  ADD KEY `user_ID` (`user_ID`);

--
-- Indexes for table `has_header`
--
ALTER TABLE `has_header`
  ADD PRIMARY KEY (`header_ID`),
  ADD KEY `request_ID` (`request_ID`),
  ADD KEY `response_ID` (`response_ID`);

--
-- Indexes for table `has_IP`
--
ALTER TABLE `has_IP`
  ADD KEY `IP_ID` (`IP_ID`),
  ADD KEY `user_ID` (`user_ID`);

--
-- Indexes for table `header`
--
ALTER TABLE `header`
  ADD PRIMARY KEY (`headery_id`);

--
-- Indexes for table `IP`
--
ALTER TABLE `IP`
  ADD PRIMARY KEY (`IP_ID`),
  ADD KEY `IP_ibfk_1` (`provider_ID`);

--
-- Indexes for table `provider`
--
ALTER TABLE `provider`
  ADD PRIMARY KEY (`provider_ID`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`request_ID`);

--
-- Indexes for table `response`
--
ALTER TABLE `response`
  ADD PRIMARY KEY (`response_ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_ID`,`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `entry`
--
ALTER TABLE `entry`
  MODIFY `entry_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `HAR_file`
--
ALTER TABLE `HAR_file`
  MODIFY `file_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `has_header`
--
ALTER TABLE `has_header`
  MODIFY `header_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `header`
--
ALTER TABLE `header`
  MODIFY `headery_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `IP`
--
ALTER TABLE `IP`
  MODIFY `IP_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `provider`
--
ALTER TABLE `provider`
  MODIFY `provider_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `request_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `response`
--
ALTER TABLE `response`
  MODIFY `response_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `entry`
--
ALTER TABLE `entry`
  ADD CONSTRAINT `entry_ibfk_1` FOREIGN KEY (`request_ID`) REFERENCES `request` (`request_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `entry_ibfk_2` FOREIGN KEY (`response_ID`) REFERENCES `response` (`response_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `has_entry`
--
ALTER TABLE `has_entry`
  ADD CONSTRAINT `has_entry_ibfk_1` FOREIGN KEY (`file_ID`) REFERENCES `HAR_file` (`file_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `has_entry_ibfk_2` FOREIGN KEY (`entry_ID`) REFERENCES `entry` (`entry_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `has_file`
--
ALTER TABLE `has_file`
  ADD CONSTRAINT `has_file_ibfk_1` FOREIGN KEY (`file_ID`) REFERENCES `HAR_file` (`file_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `has_file_ibfk_2` FOREIGN KEY (`user_ID`) REFERENCES `user` (`user_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `has_header`
--
ALTER TABLE `has_header`
  ADD CONSTRAINT `has_header_ibfk_1` FOREIGN KEY (`request_ID`) REFERENCES `request` (`request_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `has_header_ibfk_2` FOREIGN KEY (`response_ID`) REFERENCES `response` (`response_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `has_header_ibfk_3` FOREIGN KEY (`header_ID`) REFERENCES `header` (`headery_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `has_IP`
--
ALTER TABLE `has_IP`
  ADD CONSTRAINT `has_IP_ibfk_1` FOREIGN KEY (`IP_ID`) REFERENCES `IP` (`IP_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `has_IP_ibfk_2` FOREIGN KEY (`user_ID`) REFERENCES `user` (`user_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `IP`
--
ALTER TABLE `IP`
  ADD CONSTRAINT `IP_ibfk_1` FOREIGN KEY (`provider_ID`) REFERENCES `provider` (`provider_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
