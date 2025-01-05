-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2022 at 12:51 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo`
--

-- --------------------------------------------------------

--
-- Table structure for table `nextweek`
--

CREATE TABLE `nextweek` (
  `idNext` int(11) NOT NULL,
  `nextweekTodo` varchar(200) NOT NULL,
  `nextPriority` varchar(200) NOT NULL,
  `nextStatus` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nextweek`
--

INSERT INTO `nextweek` (`idNext`, `nextweekTodo`, `nextPriority`, `nextStatus`) VALUES
(26, 'fasdf', 'asdfasdf', 'asdfasdf'),
(25, 'dfaf', 'asdf', 'sdaf'),
(31, 'dfas', 'asdf', 'asdf'),
(29, 'adsf', 'asdf', 'asdf'),
(30, 'asdfasdf', 'adsfadsf', 'adfadsf');

-- --------------------------------------------------------

--
-- Table structure for table `thisweek`
--

CREATE TABLE `thisweek` (
  `idTodo` int(11) NOT NULL,
  `thisweekTodo` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `priorityTodo` varchar(128) NOT NULL,
  `statusTodo` varchar(128) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `thisweek`
--

INSERT INTO `thisweek` (`idTodo`, `thisweekTodo`, `priorityTodo`, `statusTodo`) VALUES
(43, 'monday', 'design patterns', 'undone'),
(44, 'tuesday', 'learning api', 'undone');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nextweek`
--
ALTER TABLE `nextweek`
  ADD PRIMARY KEY (`idNext`);

--
-- Indexes for table `thisweek`
--
ALTER TABLE `thisweek`
  ADD PRIMARY KEY (`idTodo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nextweek`
--
ALTER TABLE `nextweek`
  MODIFY `idNext` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `thisweek`
--
ALTER TABLE `thisweek`
  MODIFY `idTodo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
