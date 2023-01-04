-- phpMyAdmin SQL Dump
-- version 5.2.0-2.fc37
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 04, 2023 at 01:35 AM
-- Server version: 10.5.18-MariaDB
-- PHP Version: 8.1.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `courses`
--

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `country` varchar(255) NOT NULL,
  `code` varchar(10) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `created_at`, `updated_at`, `country`, `code`, `status`, `created_by`, `updated_by`, `deleted_at`) VALUES
(1, '2023-01-02 02:37:26', '2023-01-02 02:37:26', 'Afghanistan', 'AF', 1, 1, NULL, NULL),
(2, '2023-01-02 02:37:26', '2023-01-02 02:37:26', 'Åland Islands', 'AX', 1, 1, NULL, NULL),
(3, '2023-01-02 02:37:26', '2023-01-02 02:37:26', 'Albania', 'AL', 1, 1, NULL, NULL),
(4, '2023-01-02 02:37:26', '2023-01-02 02:37:26', 'Algeria', 'DZ', 1, 1, NULL, NULL),
(5, '2023-01-02 02:37:26', '2023-01-02 02:37:26', 'American Samoa', 'AS', 1, 1, NULL, NULL),
(6, '2023-01-02 02:37:26', '2023-01-02 02:37:26', 'Andorra', 'AD', 1, 1, NULL, NULL),
(7, '2023-01-02 02:37:26', '2023-01-02 02:37:26', 'Angola', 'AO', 1, 1, NULL, NULL),
(8, '2023-01-02 02:37:26', '2023-01-02 02:37:26', 'Anguilla', 'AI', 1, 1, NULL, NULL),
(9, '2023-01-02 02:37:26', '2023-01-02 02:37:26', 'Antarctica', 'AQ', 1, 1, NULL, NULL),
(10, '2023-01-02 02:37:26', '2023-01-02 02:37:26', 'Antigua and Barbuda', 'AG', 1, 1, NULL, NULL),
(11, '2023-01-02 02:37:26', '2023-01-02 02:37:26', 'Argentina', 'AR', 1, 1, NULL, NULL),
(12, '2023-01-02 02:37:26', '2023-01-02 02:37:26', 'Armenia', 'AM', 1, 1, NULL, NULL),
(13, '2023-01-02 02:37:26', '2023-01-02 02:37:26', 'Aruba', 'AW', 1, 1, NULL, NULL),
(14, '2023-01-02 02:37:26', '2023-01-02 02:37:26', 'Australia', 'AU', 1, 1, NULL, NULL),
(15, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Austria', 'AT', 1, 1, NULL, NULL),
(16, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Azerbaijan', 'AZ', 1, 1, NULL, NULL),
(17, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Bahamas', 'BS', 1, 1, NULL, NULL),
(18, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Bahrain', 'BH', 1, 1, NULL, NULL),
(19, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Bangladesh', 'BD', 1, 1, NULL, NULL),
(20, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Barbados', 'BB', 1, 1, NULL, NULL),
(21, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Belarus', 'BY', 1, 1, NULL, NULL),
(22, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Belgium', 'BE', 1, 1, NULL, NULL),
(23, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Belize', 'BZ', 1, 1, NULL, NULL),
(24, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Benin', 'BJ', 1, 1, NULL, NULL),
(25, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Bermuda', 'BM', 1, 1, NULL, NULL),
(26, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Bhutan', 'BT', 1, 1, NULL, NULL),
(27, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Bolivia, Plurinational State of', 'BO', 1, 1, NULL, NULL),
(28, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Bonaire, Sint Eustatius and Saba', 'BQ', 1, 1, NULL, NULL),
(29, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Bosnia and Herzegovina', 'BA', 1, 1, NULL, NULL),
(30, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Botswana', 'BW', 1, 1, NULL, NULL),
(31, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Bouvet Island', 'BV', 1, 1, NULL, NULL),
(32, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Brazil', 'BR', 1, 1, NULL, NULL),
(33, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'British Indian Ocean Territory', 'IO', 1, 1, NULL, NULL),
(34, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Brunei Darussalam', 'BN', 1, 1, NULL, NULL),
(35, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Bulgaria', 'BG', 1, 1, NULL, NULL),
(36, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Burkina Faso', 'BF', 1, 1, NULL, NULL),
(37, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Burundi', 'BI', 1, 1, NULL, NULL),
(38, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Cambodia', 'KH', 1, 1, NULL, NULL),
(39, '2023-01-02 02:37:27', '2023-01-02 02:37:27', 'Cameroon', 'CM', 1, 1, NULL, NULL),
(40, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Canada', 'CA', 1, 1, NULL, NULL),
(41, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Cape Verde', 'CV', 1, 1, NULL, NULL),
(42, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Cayman Islands', 'KY', 1, 1, NULL, NULL),
(43, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Central African Republic', 'CF', 1, 1, NULL, NULL),
(44, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Chad', 'TD', 1, 1, NULL, NULL),
(45, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Chile', 'CL', 1, 1, NULL, NULL),
(46, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'China', 'CN', 1, 1, NULL, NULL),
(47, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Christmas Island', 'CX', 1, 1, NULL, NULL),
(48, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Cocos (Keeling) Islands', 'CC', 1, 1, NULL, NULL),
(49, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Colombia', 'CO', 1, 1, NULL, NULL),
(50, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Comoros', 'KM', 1, 1, NULL, NULL),
(51, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Congo', 'CG', 1, 1, NULL, NULL),
(52, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Congo, the Democratic Republic of the', 'CD', 1, 1, NULL, NULL),
(53, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Cook Islands', 'CK', 1, 1, NULL, NULL),
(54, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Costa Rica', 'CR', 1, 1, NULL, NULL),
(55, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Côte d\'Ivoire', 'CI', 1, 1, NULL, NULL),
(56, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Croatia', 'HR', 1, 1, NULL, NULL),
(57, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Cuba', 'CU', 1, 1, NULL, NULL),
(58, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Curaçao', 'CW', 1, 1, NULL, NULL),
(59, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Cyprus', 'CY', 1, 1, NULL, NULL),
(60, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Czech Republic', 'CZ', 1, 1, NULL, NULL),
(61, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Denmark', 'DK', 1, 1, NULL, NULL),
(62, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Djibouti', 'DJ', 1, 1, NULL, NULL),
(63, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Dominica', 'DM', 1, 1, NULL, NULL),
(64, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Dominican Republic', 'DO', 1, 1, NULL, NULL),
(65, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Ecuador', 'EC', 1, 1, NULL, NULL),
(66, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Egypt', 'EG', 1, 1, NULL, NULL),
(67, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'El Salvador', 'SV', 1, 1, NULL, NULL),
(68, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Equatorial Guinea', 'GQ', 1, 1, NULL, NULL),
(69, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Eritrea', 'ER', 1, 1, NULL, NULL),
(70, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Estonia', 'EE', 1, 1, NULL, NULL),
(71, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Ethiopia', 'ET', 1, 1, NULL, NULL),
(72, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Falkland Islands (Malvinas)', 'FK', 1, 1, NULL, NULL),
(73, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Faroe Islands', 'FO', 1, 1, NULL, NULL),
(74, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Fiji', 'FJ', 1, 1, NULL, NULL),
(75, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Finland', 'FI', 1, 1, NULL, NULL),
(76, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'France', 'FR', 1, 1, NULL, NULL),
(77, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'French Guiana', 'GF', 1, 1, NULL, NULL),
(78, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'French Polynesia', 'PF', 1, 1, NULL, NULL),
(79, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'French Southern Territories', 'TF', 1, 1, NULL, NULL),
(80, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Gabon', 'GA', 1, 1, NULL, NULL),
(81, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Gambia', 'GM', 1, 1, NULL, NULL),
(82, '2023-01-02 02:37:28', '2023-01-02 02:37:28', 'Georgia', 'GE', 1, 1, NULL, NULL),
(83, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Germany', 'DE', 1, 1, NULL, NULL),
(84, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Ghana', 'GH', 1, 1, NULL, NULL),
(85, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Gibraltar', 'GI', 1, 1, NULL, NULL),
(86, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Greece', 'GR', 1, 1, NULL, NULL),
(87, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Greenland', 'GL', 1, 1, NULL, NULL),
(88, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Grenada', 'GD', 1, 1, NULL, NULL),
(89, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Guadeloupe', 'GP', 1, 1, NULL, NULL),
(90, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Guam', 'GU', 1, 1, NULL, NULL),
(91, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Guatemala', 'GT', 1, 1, NULL, NULL),
(92, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Guernsey', 'GG', 1, 1, NULL, NULL),
(93, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Guinea', 'GN', 1, 1, NULL, NULL),
(94, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Guinea-Bissau', 'GW', 1, 1, NULL, NULL),
(95, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Guyana', 'GY', 1, 1, NULL, NULL),
(96, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Haiti', 'HT', 1, 1, NULL, NULL),
(97, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Heard Island and McDonald Mcdonald Islands', 'HM', 1, 1, NULL, NULL),
(98, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Holy See (Vatican City State)', 'VA', 1, 1, NULL, NULL),
(99, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Honduras', 'HN', 1, 1, NULL, NULL),
(100, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Hong Kong', 'HK', 1, 1, NULL, NULL),
(101, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Hungary', 'HU', 1, 1, NULL, NULL),
(102, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Iceland', 'IS', 1, 1, NULL, NULL),
(103, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'India', 'IN', 1, 1, NULL, NULL),
(104, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Indonesia', 'ID', 1, 1, NULL, NULL),
(105, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Iran, Islamic Republic of', 'IR', 1, 1, NULL, NULL),
(106, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Iraq', 'IQ', 1, 1, NULL, NULL),
(107, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Ireland', 'IE', 1, 1, NULL, NULL),
(108, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Isle of Man', 'IM', 1, 1, NULL, NULL),
(109, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Israel', 'IL', 1, 1, NULL, NULL),
(110, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Italy', 'IT', 1, 1, NULL, NULL),
(111, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Jamaica', 'JM', 1, 1, NULL, NULL),
(112, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Japan', 'JP', 1, 1, NULL, NULL),
(113, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Jersey', 'JE', 1, 1, NULL, NULL),
(114, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Jordan', 'JO', 1, 1, NULL, NULL),
(115, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Kazakhstan', 'KZ', 1, 1, NULL, NULL),
(116, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Kenya', 'KE', 1, 1, NULL, NULL),
(117, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Kiribati', 'KI', 1, 1, NULL, NULL),
(118, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Korea, Democratic People\'s Republic of', 'KP', 1, 1, NULL, NULL),
(119, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Korea, Republic of', 'KR', 1, 1, NULL, NULL),
(120, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Kuwait', 'KW', 1, 1, NULL, NULL),
(121, '2023-01-02 02:37:29', '2023-01-02 02:37:29', 'Kyrgyzstan', 'KG', 1, 1, NULL, NULL),
(122, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Lao People\'s Democratic Republic', 'LA', 1, 1, NULL, NULL),
(123, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Latvia', 'LV', 1, 1, NULL, NULL),
(124, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Lebanon', 'LB', 1, 1, NULL, NULL),
(125, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Lesotho', 'LS', 1, 1, NULL, NULL),
(126, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Liberia', 'LR', 1, 1, NULL, NULL),
(127, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Libya', 'LY', 1, 1, NULL, NULL),
(128, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Liechtenstein', 'LI', 1, 1, NULL, NULL),
(129, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Lithuania', 'LT', 1, 1, NULL, NULL),
(130, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Luxembourg', 'LU', 1, 1, NULL, NULL),
(131, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Macao', 'MO', 1, 1, NULL, NULL),
(132, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Macedonia, the Former Yugoslav Republic of', 'MK', 1, 1, NULL, NULL),
(133, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Madagascar', 'MG', 1, 1, NULL, NULL),
(134, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Malawi', 'MW', 1, 1, NULL, NULL),
(135, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Malaysia', 'MY', 1, 1, NULL, NULL),
(136, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Maldives', 'MV', 1, 1, NULL, NULL),
(137, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Mali', 'ML', 1, 1, NULL, NULL),
(138, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Malta', 'MT', 1, 1, NULL, NULL),
(139, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Marshall Islands', 'MH', 1, 1, NULL, NULL),
(140, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Martinique', 'MQ', 1, 1, NULL, NULL),
(141, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Mauritania', 'MR', 1, 1, NULL, NULL),
(142, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Mauritius', 'MU', 1, 1, NULL, NULL),
(143, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Mayotte', 'YT', 1, 1, NULL, NULL),
(144, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Mexico', 'MX', 1, 1, NULL, NULL),
(145, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Micronesia, Federated States of', 'FM', 1, 1, NULL, NULL),
(146, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Moldova, Republic of', 'MD', 1, 1, NULL, NULL),
(147, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Monaco', 'MC', 1, 1, NULL, NULL),
(148, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Mongolia', 'MN', 1, 1, NULL, NULL),
(149, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Montenegro', 'ME', 1, 1, NULL, NULL),
(150, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Montserrat', 'MS', 1, 1, NULL, NULL),
(151, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Morocco', 'MA', 1, 1, NULL, NULL),
(152, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Mozambique', 'MZ', 1, 1, NULL, NULL),
(153, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Myanmar', 'MM', 1, 1, NULL, NULL),
(154, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Namibia', 'NA', 1, 1, NULL, NULL),
(155, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Nauru', 'NR', 1, 1, NULL, NULL),
(156, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Nepal', 'NP', 1, 1, NULL, NULL),
(157, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Netherlands', 'NL', 1, 1, NULL, NULL),
(158, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'New Caledonia', 'NC', 1, 1, NULL, NULL),
(159, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'New Zealand', 'NZ', 1, 1, NULL, NULL),
(160, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Nicaragua', 'NI', 1, 1, NULL, NULL),
(161, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Niger', 'NE', 1, 1, NULL, NULL),
(162, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Nigeria', 'NG', 1, 1, NULL, NULL),
(163, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Niue', 'NU', 1, 1, NULL, NULL),
(164, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Norfolk Island', 'NF', 1, 1, NULL, NULL),
(165, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Northern Mariana Islands', 'MP', 1, 1, NULL, NULL),
(166, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Norway', 'NO', 1, 1, NULL, NULL),
(167, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Oman', 'OM', 1, 1, NULL, NULL),
(168, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Pakistan', 'PK', 1, 1, NULL, NULL),
(169, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Palau', 'PW', 1, 1, NULL, NULL),
(170, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Palestine, State of', 'PS', 1, 1, NULL, NULL),
(171, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Panama', 'PA', 1, 1, NULL, NULL),
(172, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Papua New Guinea', 'PG', 1, 1, NULL, NULL),
(173, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Paraguay', 'PY', 1, 1, NULL, NULL),
(174, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Peru', 'PE', 1, 1, NULL, NULL),
(175, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Philippines', 'PH', 1, 1, NULL, NULL),
(176, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Pitcairn', 'PN', 1, 1, NULL, NULL),
(177, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Poland', 'PL', 1, 1, NULL, NULL),
(178, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Portugal', 'PT', 1, 1, NULL, NULL),
(179, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Puerto Rico', 'PR', 1, 1, NULL, NULL),
(180, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Qatar', 'QA', 1, 1, NULL, NULL),
(181, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Réunion', 'RE', 1, 1, NULL, NULL),
(182, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Romania', 'RO', 1, 1, NULL, NULL),
(183, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Russian Federation', 'RU', 1, 1, NULL, NULL),
(184, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Rwanda', 'RW', 1, 1, NULL, NULL),
(185, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Saint Barthélemy', 'BL', 1, 1, NULL, NULL),
(186, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Saint Helena, Ascension and Tristan da Cunha', 'SH', 1, 1, NULL, NULL),
(187, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Saint Kitts and Nevis', 'KN', 1, 1, NULL, NULL),
(188, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Saint Lucia', 'LC', 1, 1, NULL, NULL),
(189, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Saint Martin (French part)', 'MF', 1, 1, NULL, NULL),
(190, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Saint Pierre and Miquelon', 'PM', 1, 1, NULL, NULL),
(191, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Saint Vincent and the Grenadines', 'VC', 1, 1, NULL, NULL),
(192, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Samoa', 'WS', 1, 1, NULL, NULL),
(193, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'San Marino', 'SM', 1, 1, NULL, NULL),
(194, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Sao Tome and Principe', 'ST', 1, 1, NULL, NULL),
(195, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Saudi Arabia', 'SA', 1, 1, NULL, NULL),
(196, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Senegal', 'SN', 1, 1, NULL, NULL),
(197, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Serbia', 'RS', 1, 1, NULL, NULL),
(198, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Seychelles', 'SC', 1, 1, NULL, NULL),
(199, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Sierra Leone', 'SL', 1, 1, NULL, NULL),
(200, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Singapore', 'SG', 1, 1, NULL, NULL),
(201, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Sint Maarten (Dutch part)', 'SX', 1, 1, NULL, NULL),
(202, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Slovakia', 'SK', 1, 1, NULL, NULL),
(203, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Slovenia', 'SI', 1, 1, NULL, NULL),
(204, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Solomon Islands', 'SB', 1, 1, NULL, NULL),
(205, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Somalia', 'SO', 1, 1, NULL, NULL),
(206, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'South Africa', 'ZA', 1, 1, NULL, NULL),
(207, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'South Georgia and the South Sandwich Islands', 'GS', 1, 1, NULL, NULL),
(208, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'South Sudan', 'SS', 1, 1, NULL, NULL),
(209, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Spain', 'ES', 1, 1, NULL, NULL),
(210, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Sri Lanka', 'LK', 1, 1, NULL, NULL),
(211, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Sudan', 'SD', 1, 1, NULL, NULL),
(212, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Suricountry', 'SR', 1, 1, NULL, NULL),
(213, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Svalbard and Jan Mayen', 'SJ', 1, 1, NULL, NULL),
(214, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Swaziland', 'SZ', 1, 1, NULL, NULL),
(215, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Sweden', 'SE', 1, 1, NULL, NULL),
(216, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Switzerland', 'CH', 1, 1, NULL, NULL),
(217, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Syrian Arab Republic', 'SY', 1, 1, NULL, NULL),
(218, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Taiwan', 'TW', 1, 1, NULL, NULL),
(219, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Tajikistan', 'TJ', 1, 1, NULL, NULL),
(220, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Tanzania, United Republic of', 'TZ', 1, 1, NULL, NULL),
(221, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Thailand', 'TH', 1, 1, NULL, NULL),
(222, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Timor-Leste', 'TL', 1, 1, NULL, NULL),
(223, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Togo', 'TG', 1, 1, NULL, NULL),
(224, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Tokelau', 'TK', 1, 1, NULL, NULL),
(225, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Tonga', 'TO', 1, 1, NULL, NULL),
(226, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Trinidad and Tobago', 'TT', 1, 1, NULL, NULL),
(227, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Tunisia', 'TN', 1, 1, NULL, NULL),
(228, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Turkey', 'TR', 1, 1, NULL, NULL),
(229, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Turkmenistan', 'TM', 1, 1, NULL, NULL),
(230, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Turks and Caicos Islands', 'TC', 1, 1, NULL, NULL),
(231, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Tuvalu', 'TV', 1, 1, NULL, NULL),
(232, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Uganda', 'UG', 1, 1, NULL, NULL),
(233, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Ukraine', 'UA', 1, 1, NULL, NULL),
(234, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'United Arab Emirates', 'AE', 1, 1, NULL, NULL),
(235, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'United Kingdom', 'GB', 1, 1, NULL, NULL),
(236, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'United States', 'US', 1, 1, NULL, NULL),
(237, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'United States Minor Outlying Islands', 'UM', 1, 1, NULL, NULL),
(238, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Uruguay', 'UY', 1, 1, NULL, NULL),
(239, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Uzbekistan', 'UZ', 1, 1, NULL, NULL),
(240, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Vanuatu', 'VU', 1, 1, NULL, NULL),
(241, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Venezuela, Bolivarian Republic of', 'VE', 1, 1, NULL, NULL),
(242, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Viet Nam', 'VN', 1, 1, NULL, NULL),
(243, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Virgin Islands, British', 'VG', 1, 1, NULL, NULL),
(244, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Virgin Islands, U.S.', 'VI', 1, 1, NULL, NULL),
(245, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Wallis and Futuna', 'WF', 1, 1, NULL, NULL),
(246, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Western Sahara', 'EH', 1, 1, NULL, NULL),
(247, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Yemen', 'YE', 1, 1, NULL, NULL),
(248, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Zambia', 'ZM', 1, 1, NULL, NULL),
(249, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Zimbabwe', 'ZW', 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `course_name` varchar(255) NOT NULL,
  `thumbnile` varchar(255) DEFAULT NULL,
  `description` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `price` decimal(7,2) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `created_at`, `updated_at`, `course_name`, `thumbnile`, `description`, `duration`, `start_date`, `end_date`, `price`, `deleted_at`) VALUES
(1, NULL, NULL, 'Javascript', 'https://embed-ssl.wistia.com/deliveries/fece433e54f817872309273fb46fe6e9.jpg', 'Loop', '3motnh', '2023-01-18', '2023-03-09', '3400.00', NULL),
(2, '2023-01-03 06:10:29', '2023-01-03 06:38:21', 'sasdas', 'sadasdas', 'jbhbnnb', 'adasd', '2023-01-25', '2023-01-26', '345.00', '2023-01-03 06:38:21'),
(3, '2023-01-03 06:10:47', '2023-01-03 06:37:18', 'dasdas', 'asdda', 'daasdasda', 'asdasd', '2023-01-20', '2023-01-18', '1231.00', '2023-01-03 06:37:18'),
(4, '2023-01-03 06:29:31', '2023-01-03 06:46:57', 'CodeIgneter', 'https://miro.medium.com/max/1050/1*Fxa6oJFh2lRD7EnAcZIcQg.png', 'jbhbnnb', '3month', '2023-01-25', '2023-01-26', '10500.00', NULL),
(5, '2023-01-03 06:30:54', '2023-01-03 06:30:54', 'react', 'https://miro.medium.com/max/1050/1*Fxa6oJFh2lRD7EnAcZIcQg.png', 'jbhbnnb', 'adasd', '2023-01-25', '2023-01-26', '345.00', NULL),
(6, '2023-01-03 06:39:01', '2023-01-03 06:39:01', 'React', 'https://miro.medium.com/max/1050/1*Fxa6oJFh2lRD7EnAcZIcQg.png', 'Loop', '3month', '2023-01-25', '2023-01-26', '10500.00', NULL),
(7, '2023-01-03 06:48:48', '2023-01-03 06:48:48', 'HTML', 'https://www.mercuryworks.com/wp-content/uploads/2021/02/react-banner-mobile.jpg', 'ok', '5month', '2023-01-19', '2023-01-21', '4000.00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `districts`
--

CREATE TABLE `districts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `district` varchar(255) NOT NULL,
  `division_id` bigint(20) UNSIGNED NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `districts`
--

INSERT INTO `districts` (`id`, `created_at`, `updated_at`, `district`, `division_id`, `status`, `created_by`, `updated_by`, `deleted_at`) VALUES
(1, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Gazipur', 1, 1, 1, NULL, NULL),
(2, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Chittagong Shodor', 2, 1, 1, NULL, NULL),
(3, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Cox\'s Bazar', 2, 1, 1, NULL, NULL),
(4, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Dhaka City', 1, 1, 1, NULL, NULL),
(5, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Bramnon Baria', 1, 1, 1, NULL, NULL),
(6, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Forid Pur', 1, 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `divisions`
--

CREATE TABLE `divisions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `divison` varchar(255) NOT NULL,
  `country_id` bigint(20) UNSIGNED NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `divisions`
--

INSERT INTO `divisions` (`id`, `created_at`, `updated_at`, `divison`, `country_id`, `status`, `created_by`, `updated_by`, `deleted_at`) VALUES
(1, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Dhaka', 19, 1, 1, NULL, NULL),
(2, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Chittagong', 19, 1, 1, NULL, NULL),
(3, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Rajshahi', 19, 1, 1, NULL, NULL),
(4, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Barishal', 19, 1, 1, NULL, NULL),
(5, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Maymonshinho', 19, 1, 1, NULL, NULL),
(6, '2023-01-02 02:37:30', '2023-01-02 02:37:30', 'Kulna', 19, 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `enrolls`
--

CREATE TABLE `enrolls` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `course_id` bigint(20) UNSIGNED NOT NULL,
  `student_id` bigint(20) UNSIGNED NOT NULL,
  `enroll_date` date NOT NULL,
  `discount` decimal(7,2) NOT NULL,
  `payment` decimal(7,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `enrolls`
--

INSERT INTO `enrolls` (`id`, `course_id`, `student_id`, `enroll_date`, `discount`, `payment`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, '2023-01-02', '0.00', '3400.00', '2023-01-02 03:08:56', '2023-01-02 03:08:56', NULL),
(3, 1, 3, '2023-01-03', '0.00', '3400.00', '2023-01-03 02:19:40', '2023-01-03 02:19:40', NULL),
(4, 1, 4, '2023-01-03', '0.00', '3400.00', '2023-01-03 02:19:57', '2023-01-03 02:19:57', NULL),
(5, 1, 5, '2023-01-03', '0.00', '3400.00', '2023-01-03 02:22:14', '2023-01-03 02:22:14', NULL),
(6, 1, 6, '2023-01-03', '0.00', '3400.00', '2023-01-03 02:25:31', '2023-01-03 02:25:31', NULL),
(7, 1, 7, '2023-01-03', '0.00', '3400.00', '2023-01-03 02:26:33', '2023-01-03 02:26:33', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_11_045552_create_roles_table', 1),
(2, '2014_10_12_000000_create_users_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2022_11_07_044709_create_countries_table', 1),
(7, '2022_11_07_045517_create_divisions_table', 1),
(8, '2022_11_07_045607_create_districts_table', 1),
(9, '2022_12_29_033502_create_courses_table', 1),
(10, '2022_12_29_033503_create_modules_table', 1),
(11, '2022_12_29_034018_create_students_table', 1),
(12, '2022_12_29_040028_create_enrolls_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `module_name` varchar(255) NOT NULL,
  `topics` varchar(500) NOT NULL,
  `course_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(2, 'App\\Models\\Auth\\User', 4, 'ashab1235@gmail.com', '5290ed316f0d79444b7369dbc92520d6b102fa95a2f786d021403f01c4d21f01', '[\"server:update\"]', NULL, NULL, '2023-01-02 04:40:05', '2023-01-02 04:40:05'),
(4, 'App\\Models\\Auth\\User', 5, 'ashabuddin20@hotmail.com', 'eb055cea0a53d2c6ed771866338b8440f1220f5c7c7fe2cd8e15a2de813ee9e9', '[\"*\"]', NULL, NULL, '2023-01-02 06:41:13', '2023-01-02 06:41:13'),
(5, 'App\\Models\\Auth\\User', 6, 'ashabuddin20@hotmail.com', 'f71976b155364d47542b33d6841d567e73773b73e068967b5013d96d7b9b4a57', '[\"*\"]', NULL, NULL, '2023-01-02 06:48:17', '2023-01-02 06:48:17'),
(6, 'App\\Models\\Auth\\User', 7, 'ashabuddin20@hotmail.com', '5fa223329981c775e2cd449e7b66d5f92be780fbf225e79245ce4064df8ef96d', '[\"*\"]', NULL, NULL, '2023-01-02 06:49:51', '2023-01-02 06:49:51'),
(63, 'App\\Models\\Auth\\User', 8, 'test@gmail.com', 'e682addd68e8879f1e0d6b9daa07b096746a93afda60a6b739274fc4d1958286', '[\"*\"]', '2023-01-03 07:51:11', NULL, '2023-01-03 06:44:22', '2023-01-03 07:51:11'),
(67, 'App\\Models\\Auth\\User', 1, 'ashab@gmail.com', 'f046e655943e3955935ef006b78ac380793a6fff9e12a2c63e35fa8e2907e970', '[\"*\"]', '2023-01-03 12:36:22', NULL, '2023-01-03 12:36:09', '2023-01-03 12:36:22');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role` varchar(255) NOT NULL,
  `identify` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role`, `identify`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Admin', 'admin', 1, '2023-01-02 02:37:22', NULL, NULL),
(2, 'Instractor', 'instractor', 1, '2023-01-02 02:37:22', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `father_name` varchar(255) NOT NULL,
  `mother_name` varchar(255) NOT NULL,
  `date_of_birth` varchar(255) DEFAULT NULL,
  `gender` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `country_id` bigint(20) UNSIGNED NOT NULL,
  `division_id` bigint(20) UNSIGNED NOT NULL,
  `district_id` bigint(20) UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `phone`, `email`, `father_name`, `mother_name`, `date_of_birth`, `gender`, `address`, `country_id`, `division_id`, `district_id`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Ashab Uddin', '01840088189', 'ashabuddin20@hotmail.com', 'Jalal Uddin', 'Sadeka Beguam', '2013-09-06', 'male', 'chittagong', 19, 2, 2, NULL, '2023-01-02 03:08:56', '2023-01-02 03:08:56'),
(3, 'Karim', '01840231231', 'karim@gmail.com', 'Father', 'Mother', '2023-01-05', 'male', 'chittagong', 19, 2, 2, NULL, '2023-01-03 02:19:40', '2023-01-03 02:19:40'),
(4, 'Karim', '01840231231', 'karim@gmail.com', 'Father', 'Mother', '2023-01-05', 'male', 'chittagong', 19, 2, 2, NULL, '2023-01-03 02:19:57', '2023-01-03 02:19:57'),
(5, 'Saiful Islam', '019242423', 'saiful@gmail.com', 'Father', 'MOther', '2023-01-19', 'male', 'Chittagong', 19, 2, 2, NULL, '2023-01-03 02:22:14', '2023-01-03 02:22:14'),
(6, 'Kabir', '912131231', 'text@gmail.com', 'test', 'test', '2023-01-12', 'male', 'Chittagong', 19, 2, 2, NULL, '2023-01-03 02:25:31', '2023-01-03 12:25:59'),
(7, 'text', '912131231', 'text@gmail.com', 'test', 'test', '2023-01-12', 'male', 'Chittagong', 19, 2, 2, '2023-01-03 08:28:13', '2023-01-03 02:26:33', '2023-01-03 08:28:13');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `language` enum('en','bd') NOT NULL DEFAULT 'en',
  `remember_token` varchar(100) DEFAULT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `avatar`, `language`, `remember_token`, `role_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Ashab Uddin', 'ashab@gmail.com', NULL, 'eyJpdiI6Ikd3MGkySEdGLzhjZUpkVDhISnMxYnc9PSIsInZhbHVlIjoiVUtQS3prRFM3UkM0dlIwSjVwb2RKdz09IiwibWFjIjoiMGM4NjdhNWE4MzE3Yjg0MjVmNjZlMmQ0NjVjMjI0NjlkMWViZGRjYmY3NDA2MTZkMzA5ODhiYjBlMGJhNzYwMCIsInRhZyI6IiJ9', NULL, 'en', NULL, 1, 1, '2023-01-02 02:37:26', '2023-01-02 03:05:14', NULL),
(2, 'Jahid Rony', 'jahid@gmail.com', NULL, 'eyJpdiI6IkY4V3V6Zk9PQkN6djNaKzJnWU9POVE9PSIsInZhbHVlIjoiNGhzTWhmNEx2MU9XczBGc3JHOVNYZz09IiwibWFjIjoiMmRlZjk2M2IzZTBiYzJiYWMxMjkyYTFmMjA0OTVjZjJiNzgzNzZmODkwMzc2Y2FmOGE5ODhmZWEzZTExNjViMCIsInRhZyI6IiJ9', NULL, 'en', NULL, 2, 1, '2023-01-02 02:37:26', '2023-01-02 02:37:26', NULL),
(4, 'Ashab Uddin', 'ashab1235@gmail.com', NULL, 'eyJpdiI6IithNU03VzFDZExxd044VlZQdG52eVE9PSIsInZhbHVlIjoiZUZEUmZNS01sUCtHMnpnRVZWYUZHUT09IiwibWFjIjoiMzVkYjk1MDFlMWUwNzQ3OGY4YWFmYjEzNjM0NzRiZDFlMDA1MzYwZDkyYTFmMGEwZTgzNzgzYmE1NzkyYzk4YiIsInRhZyI6IiJ9', NULL, 'en', NULL, 2, 1, '2023-01-02 04:40:05', '2023-01-02 04:40:05', NULL),
(7, 'Ashab Uddin', 'ashabuddin20@hotmail.com', NULL, 'eyJpdiI6IlM4cm10M1l4cDU0bGVOaUx3aGtSRWc9PSIsInZhbHVlIjoiNmx4OGFRTnJTdEpIRlBTbzcwN3N6YStmdEdDWDFxUUpsTS84RVR5ekN0QT0iLCJtYWMiOiJkZjAyMDliMmI4NjQ3OTY5ZDA3NDA0OWExMDlkYWVjYTEwYzlmOTNjNDRkZDU1YzM2YmRhMTAyNmE3NjQ4YTk2IiwidGFnIjoiIn0=', NULL, 'en', NULL, 1, 1, '2023-01-02 06:49:51', '2023-01-02 06:49:51', NULL),
(8, 'Ashab Uddin', 'test@gmail.com', NULL, 'eyJpdiI6IjU4K1V5YnFiTUFmR3haUnhpL0JIZ2c9PSIsInZhbHVlIjoib0xYVm1pbEhUWWxzNkhSYk1TZnBGdz09IiwibWFjIjoiNDIzZmY2ZjUwYWI3ODUzNjg5Yjc1YzFmNGU4YmMxMmZiNjBiOGYyOGRiNWE5ODE2Mjg3ODIxODEyOTc1YjkyMSIsInRhZyI6IiJ9', NULL, 'en', NULL, 1, 1, '2023-01-03 06:44:22', '2023-01-03 06:44:22', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `countries_created_by_foreign` (`created_by`),
  ADD KEY `countries_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `districts_division_id_foreign` (`division_id`),
  ADD KEY `districts_created_by_foreign` (`created_by`),
  ADD KEY `districts_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `divisions`
--
ALTER TABLE `divisions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `divisions_country_id_foreign` (`country_id`),
  ADD KEY `divisions_created_by_foreign` (`created_by`),
  ADD KEY `divisions_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `enrolls`
--
ALTER TABLE `enrolls`
  ADD PRIMARY KEY (`id`),
  ADD KEY `enrolls_course_id_foreign` (`course_id`),
  ADD KEY `enrolls_student_id_foreign` (`student_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `modules_course_id_foreign` (`course_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_role_unique` (`role`),
  ADD KEY `roles_identify_index` (`identify`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `students_country_id_foreign` (`country_id`),
  ADD KEY `students_division_id_foreign` (`division_id`),
  ADD KEY `students_district_id_foreign` (`district_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `districts`
--
ALTER TABLE `districts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `divisions`
--
ALTER TABLE `divisions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `enrolls`
--
ALTER TABLE `enrolls`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `countries`
--
ALTER TABLE `countries`
  ADD CONSTRAINT `countries_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `countries_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `districts`
--
ALTER TABLE `districts`
  ADD CONSTRAINT `districts_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `districts_division_id_foreign` FOREIGN KEY (`division_id`) REFERENCES `divisions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `districts_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `divisions`
--
ALTER TABLE `divisions`
  ADD CONSTRAINT `divisions_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `divisions_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `divisions_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `enrolls`
--
ALTER TABLE `enrolls`
  ADD CONSTRAINT `enrolls_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `enrolls_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `modules`
--
ALTER TABLE `modules`
  ADD CONSTRAINT `modules_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `students_district_id_foreign` FOREIGN KEY (`district_id`) REFERENCES `districts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `students_division_id_foreign` FOREIGN KEY (`division_id`) REFERENCES `divisions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
