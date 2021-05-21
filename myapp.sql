-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 21, 2021 lúc 09:21 AM
-- Phiên bản máy phục vụ: 10.4.13-MariaDB
-- Phiên bản PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `myapp`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `admin_ID` int(11) NOT NULL,
  `admin_Name` varchar(255) NOT NULL,
  `admin_Email` varchar(150) NOT NULL,
  `admin_Username` varchar(255) NOT NULL,
  `admin_Password` varchar(255) NOT NULL,
  `admin_Role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_amdat`
--

CREATE TABLE `tbl_amdat` (
  `amdat_ID` int(11) NOT NULL,
  `amdat_Time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `amdat_Value` varchar(255) NOT NULL,
  `amdat_GardenID` int(11) NOT NULL,
  `amdat_Status` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_amdat`
--

INSERT INTO `tbl_amdat` (`amdat_ID`, `amdat_Time`, `amdat_Value`, `amdat_GardenID`, `amdat_Status`) VALUES
(15, '2021-05-21 03:15:36', '500', 1, '1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_condition`
--

CREATE TABLE `tbl_condition` (
  `condition_ID` int(11) NOT NULL,
  `condition_Amdat` varchar(255) NOT NULL,
  `condition_Light` varchar(255) NOT NULL,
  `condition_Temp` varchar(255) NOT NULL,
  `condition_Humid` varchar(255) NOT NULL,
  `condition_GardenID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_dht11`
--

CREATE TABLE `tbl_dht11` (
  `dht_ID` int(11) NOT NULL,
  `dht_Time` timestamp NOT NULL DEFAULT current_timestamp(),
  `dht_Temp` varchar(255) NOT NULL,
  `dht_Humid` varchar(255) NOT NULL,
  `dht_status` varchar(150) NOT NULL,
  `dht_GardenID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_garden`
--

CREATE TABLE `tbl_garden` (
  `garden_ID` int(11) NOT NULL,
  `garden_OwnerID` int(11) NOT NULL,
  `garden_Location` varchar(255) NOT NULL,
  `garden_Status` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_garden`
--

INSERT INTO `tbl_garden` (`garden_ID`, `garden_OwnerID`, `garden_Location`, `garden_Status`) VALUES
(1, 1, '1', '1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_light`
--

CREATE TABLE `tbl_light` (
  `light_ID` int(11) NOT NULL,
  `light_Time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `light_Value` varchar(255) NOT NULL,
  `light_GardenID` int(11) NOT NULL,
  `light_Status` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_light`
--

INSERT INTO `tbl_light` (`light_ID`, `light_Time`, `light_Value`, `light_GardenID`, `light_Status`) VALUES
(1, '2021-05-21 03:32:36', '111', 1, '1'),
(2, '2021-05-21 03:33:01', '222', 1, '1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_motor`
--

CREATE TABLE `tbl_motor` (
  `motor_ID` int(11) NOT NULL,
  `motor_TimeS` timestamp NOT NULL DEFAULT current_timestamp(),
  `motor_TimeE` timestamp NOT NULL DEFAULT current_timestamp(),
  `motor_Adjustment` varchar(255) NOT NULL,
  `motor_GardenID` int(11) NOT NULL,
  `motor_Status` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_relay`
--

CREATE TABLE `tbl_relay` (
  `relay_ID` int(11) NOT NULL,
  `relay_Time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `relay_Value` varchar(255) NOT NULL,
  `relay_gardenID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_relay`
--

INSERT INTO `tbl_relay` (`relay_ID`, `relay_Time`, `relay_Value`, `relay_gardenID`) VALUES
(1, '2021-05-21 03:24:42', '1', 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_ID` int(11) NOT NULL,
  `user_Name` varchar(255) NOT NULL,
  `user_Email` varchar(255) NOT NULL,
  `user_Username` varchar(255) NOT NULL,
  `user_Password` varchar(255) NOT NULL,
  `user_Phone` varchar(255) NOT NULL,
  `user_Address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_user`
--

INSERT INTO `tbl_user` (`user_ID`, `user_Name`, `user_Email`, `user_Username`, `user_Password`, `user_Phone`, `user_Address`) VALUES
(1, 'nguyen B', 'nguyenB@gmail.com', 'nguyen_B', '*23AE809DDACAF96AF0FD78ED04B6A265E05AA257', '0123', 'abcd'),
(3, 'nguyen van A', 'anguyen@gmail.com', 'anguyen', '*23AE809DDACAF96AF0FD78ED04B6A265E05AA257', '123456', 'abc'),
(4, 'tranC', 'tranC@gmail.com', 'tranC', '123', '0123', 'abcde');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`admin_ID`);

--
-- Chỉ mục cho bảng `tbl_amdat`
--
ALTER TABLE `tbl_amdat`
  ADD PRIMARY KEY (`amdat_ID`);

--
-- Chỉ mục cho bảng `tbl_condition`
--
ALTER TABLE `tbl_condition`
  ADD PRIMARY KEY (`condition_ID`);

--
-- Chỉ mục cho bảng `tbl_dht11`
--
ALTER TABLE `tbl_dht11`
  ADD PRIMARY KEY (`dht_ID`);

--
-- Chỉ mục cho bảng `tbl_garden`
--
ALTER TABLE `tbl_garden`
  ADD PRIMARY KEY (`garden_ID`);

--
-- Chỉ mục cho bảng `tbl_light`
--
ALTER TABLE `tbl_light`
  ADD PRIMARY KEY (`light_ID`);

--
-- Chỉ mục cho bảng `tbl_motor`
--
ALTER TABLE `tbl_motor`
  ADD PRIMARY KEY (`motor_ID`);

--
-- Chỉ mục cho bảng `tbl_relay`
--
ALTER TABLE `tbl_relay`
  ADD PRIMARY KEY (`relay_ID`);

--
-- Chỉ mục cho bảng `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_ID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `admin_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_amdat`
--
ALTER TABLE `tbl_amdat`
  MODIFY `amdat_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `tbl_condition`
--
ALTER TABLE `tbl_condition`
  MODIFY `condition_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_dht11`
--
ALTER TABLE `tbl_dht11`
  MODIFY `dht_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_garden`
--
ALTER TABLE `tbl_garden`
  MODIFY `garden_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `tbl_light`
--
ALTER TABLE `tbl_light`
  MODIFY `light_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `tbl_motor`
--
ALTER TABLE `tbl_motor`
  MODIFY `motor_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_relay`
--
ALTER TABLE `tbl_relay`
  MODIFY `relay_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
