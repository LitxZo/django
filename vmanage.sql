/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 80031
 Source Host           : localhost:3306
 Source Schema         : vmanage

 Target Server Type    : MySQL
 Target Server Version : 80031
 File Encoding         : 65001

 Date: 08/02/2023 21:04:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for app1_address_info
-- ----------------------------
DROP TABLE IF EXISTS `app1_address_info`;
CREATE TABLE `app1_address_info`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `longitude` double NOT NULL,
  `latitude` double NOT NULL,
  `data` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app1_address_info
-- ----------------------------
INSERT INTO `app1_address_info` VALUES (1, 118.309814, 32.30024, '摄像头1', 'http://127.0.0.1:8000/display');

-- ----------------------------
-- Table structure for app1_message
-- ----------------------------
DROP TABLE IF EXISTS `app1_message`;
CREATE TABLE `app1_message`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `sender` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `recipient` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `message` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `time` datetime(6) NOT NULL,
  `recipient_id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sender_id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app1_message
-- ----------------------------
INSERT INTO `app1_message` VALUES (1, '刘璇', 'root', '这是一条测试信息', '2023-01-04 20:12:16.000000', '11', '3');
INSERT INTO `app1_message` VALUES (2, 'root', '刘璇', '这是一条测试消息', '2023-01-04 22:04:34.487506', '3', '11');
INSERT INTO `app1_message` VALUES (3, 'root', '邹敏', 'ahahahahahahaha', '2023-01-04 22:05:54.601072', '14', '11');

-- ----------------------------
-- Table structure for app1_permission
-- ----------------------------
DROP TABLE IF EXISTS `app1_permission`;
CREATE TABLE `app1_permission`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `role` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app1_permission
-- ----------------------------
INSERT INTO `app1_permission` VALUES (1, '超级管理员');
INSERT INTO `app1_permission` VALUES (2, '无权限人员');
INSERT INTO `app1_permission` VALUES (3, '贲集村管理员');
INSERT INTO `app1_permission` VALUES (4, '蒋庄村管理员');

-- ----------------------------
-- Table structure for app1_record
-- ----------------------------
DROP TABLE IF EXISTS `app1_record`;
CREATE TABLE `app1_record`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `content` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `handler_id` bigint(0) NOT NULL,
  `number_id` bigint(0) NOT NULL,
  `handle_time` datetime(6) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `app1_record_handler_id_2ac8849b_fk_app1_userinfo_id`(`handler_id`) USING BTREE,
  INDEX `app1_record_number_id_db068298_fk_app1_workorder_id`(`number_id`) USING BTREE,
  CONSTRAINT `app1_record_handler_id_2ac8849b_fk_app1_userinfo_id` FOREIGN KEY (`handler_id`) REFERENCES `app1_userinfo` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `app1_record_number_id_db068298_fk_app1_workorder_id` FOREIGN KEY (`number_id`) REFERENCES `app1_workorder` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app1_record
-- ----------------------------
INSERT INTO `app1_record` VALUES (1, '处理测试1', 11, 1, '2023-01-04 07:07:38.161384');
INSERT INTO `app1_record` VALUES (2, '长记录测试长记录测试长记录测试长记录测试长记录测试长记录测试长记录测试长记录测试长记录测试长记录测试长记录测试长记录测试长记录测试长记录测试长记录测试长记录测试长记录测试长记录测试长记录测试', 11, 1, '2023-01-04 07:11:13.176520');
INSERT INTO `app1_record` VALUES (3, '修改了工单内容', 11, 2, '2023-01-06 07:28:34.093639');
INSERT INTO `app1_record` VALUES (4, '测试处理1', 20, 4, '2023-01-28 13:30:32.422332');
INSERT INTO `app1_record` VALUES (5, '测试处理2', 20, 4, '2023-01-28 13:30:45.317440');
INSERT INTO `app1_record` VALUES (6, '1111', 11, 4, '2023-01-28 13:45:33.625635');
INSERT INTO `app1_record` VALUES (7, '222', 11, 4, '2023-02-07 07:11:14.792947');
INSERT INTO `app1_record` VALUES (8, '修改了工单内容：5-->测试\n修改了工单类型：1-->0\n修改了工单状态：1-->2\n修改了处理时间：2023-01-01 00:02:00+00:00-->2023-01-01 00:03:00+00:00\n', 11, 4, '2023-02-08 12:49:33.246957');
INSERT INTO `app1_record` VALUES (9, '修改了工单类型：类型1-->0\n修改了工单状态：提交-等待审批-->0\n', 11, 4, '2023-02-08 12:53:07.217800');
INSERT INTO `app1_record` VALUES (10, '修改了工单类型：类型1-->1\n修改了工单状态：工单已退回-->1\n', 11, 4, '2023-02-08 12:57:06.054961');
INSERT INTO `app1_record` VALUES (11, '修改了工单类型：类型2-->2\n修改了工单状态：新建-保存-->2\n', 11, 4, '2023-02-08 12:57:57.880786');
INSERT INTO `app1_record` VALUES (12, '修改了工单类型：类型3-->类型1\n修改了工单状态：提交-等待审批-->2\n', 11, 4, '2023-02-08 12:59:41.334548');
INSERT INTO `app1_record` VALUES (13, '修改了工单内容：测试-->测试2\n修改了工单类型：类型1-->类型3\n修改了工单状态：提交-等待审批-->已审批-等待执行\n修改了处理时间：2023-01-01 00:03:00+00:00-->2023-01-01 00:04:00+00:00\n', 11, 4, '2023-02-08 13:00:36.850394');
INSERT INTO `app1_record` VALUES (14, '修改了工单内容：测试2-->测试3\r修改了工单类型：类型3-->类型2\r修改了工单状态：已审批-等待执行-->提交-等待审批\r', 11, 4, '2023-02-08 13:01:53.305092');
INSERT INTO `app1_record` VALUES (15, '修改了工单内容：测试3-->测试4	\r修改了工单类型：类型2-->类型1	\r修改了工单状态：提交-等待审批-->已审批-等待执行	\r', 11, 4, '2023-02-08 13:02:28.012276');
INSERT INTO `app1_record` VALUES (16, '修改了工单内容：测试4-->测试5    \r修改了工单类型：类型1-->类型2    \r修改了工单状态：已审批-等待执行-->提交-等待审批    \r', 11, 4, '2023-02-08 13:02:52.027777');

-- ----------------------------
-- Table structure for app1_userinfo
-- ----------------------------
DROP TABLE IF EXISTS `app1_userinfo`;
CREATE TABLE `app1_userinfo`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `phonenum` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `permission_id` bigint(0) NOT NULL,
  `village_id` bigint(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `app1_userinfo_permission_id_7c17c7c9_fk_app1_permission_id`(`permission_id`) USING BTREE,
  INDEX `app1_userinfo_village_id_c90a5739_fk_app1_village_id`(`village_id`) USING BTREE,
  CONSTRAINT `app1_userinfo_permission_id_7c17c7c9_fk_app1_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `app1_permission` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `app1_userinfo_village_id_c90a5739_fk_app1_village_id` FOREIGN KEY (`village_id`) REFERENCES `app1_village` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app1_userinfo
-- ----------------------------
INSERT INTO `app1_userinfo` VALUES (4, '杨嘉园', '9bf2928cee121ca9bd6d17f22ff68923', '10086', 2, 2);
INSERT INTO `app1_userinfo` VALUES (7, '申伟杰', '95565ef4d6344ad1906b266471681393', '12908376', 2, 2);
INSERT INTO `app1_userinfo` VALUES (8, '卓文萱', '1233', '123456', 2, 1);
INSERT INTO `app1_userinfo` VALUES (10, 'yus', '6a6ff412bb3c93fc1ce44ac567c10fba', '123456', 4, 2);
INSERT INTO `app1_userinfo` VALUES (11, 'root', '6a6ff412bb3c93fc1ce44ac567c10fba', '10086', 1, 1);
INSERT INTO `app1_userinfo` VALUES (20, 'root2', '6a6ff412bb3c93fc1ce44ac567c10fba', '123', 3, 1);
INSERT INTO `app1_userinfo` VALUES (21, 'root3', '6a6ff412bb3c93fc1ce44ac567c10fba', '123', 4, 2);

-- ----------------------------
-- Table structure for app1_village
-- ----------------------------
DROP TABLE IF EXISTS `app1_village`;
CREATE TABLE `app1_village`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `village` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app1_village
-- ----------------------------
INSERT INTO `app1_village` VALUES (1, '贲集村');
INSERT INTO `app1_village` VALUES (2, '蒋庄村');

-- ----------------------------
-- Table structure for app1_workorder
-- ----------------------------
DROP TABLE IF EXISTS `app1_workorder`;
CREATE TABLE `app1_workorder`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `number` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `type` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `do_time` datetime(6) NOT NULL,
  `add_time` datetime(6) NOT NULL,
  `content` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `village_id` bigint(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `app1_workorder_village_id_085e4e56_fk_app1_village_id`(`village_id`) USING BTREE,
  CONSTRAINT `app1_workorder_village_id_085e4e56_fk_app1_village_id` FOREIGN KEY (`village_id`) REFERENCES `app1_village` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app1_workorder
-- ----------------------------
INSERT INTO `app1_workorder` VALUES (1, '1', '测试', '0', '1', '2022-12-30 00:00:00.000000', '2022-12-30 07:06:50.815046', '测试', 2);
INSERT INTO `app1_workorder` VALUES (2, '2', '测试2', '0', '2', '2022-01-01 00:00:00.000000', '2023-01-01 12:45:04.421805', '测试内容2', 2);
INSERT INTO `app1_workorder` VALUES (4, '3', '重复测试', '1', '2', '2023-01-01 00:04:00.000000', '2023-01-20 08:04:32.072865', '测试5', 1);

-- ----------------------------
-- Table structure for auth_group
-- ----------------------------
DROP TABLE IF EXISTS `auth_group`;
CREATE TABLE `auth_group`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for auth_group_permissions
-- ----------------------------
DROP TABLE IF EXISTS `auth_group_permissions`;
CREATE TABLE `auth_group_permissions`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `group_id` int(0) NOT NULL,
  `permission_id` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `auth_group_permissions_group_id_permission_id_0cd325b0_uniq`(`group_id`, `permission_id`) USING BTREE,
  INDEX `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm`(`permission_id`) USING BTREE,
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for auth_permission
-- ----------------------------
DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE `auth_permission`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content_type_id` int(0) NOT NULL,
  `codename` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `auth_permission_content_type_id_codename_01ab375a_uniq`(`content_type_id`, `codename`) USING BTREE,
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 52 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of auth_permission
-- ----------------------------
INSERT INTO `auth_permission` VALUES (1, 'Can add log entry', 1, 'add_logentry');
INSERT INTO `auth_permission` VALUES (2, 'Can change log entry', 1, 'change_logentry');
INSERT INTO `auth_permission` VALUES (3, 'Can delete log entry', 1, 'delete_logentry');
INSERT INTO `auth_permission` VALUES (4, 'Can view log entry', 1, 'view_logentry');
INSERT INTO `auth_permission` VALUES (5, 'Can add permission', 2, 'add_permission');
INSERT INTO `auth_permission` VALUES (6, 'Can change permission', 2, 'change_permission');
INSERT INTO `auth_permission` VALUES (7, 'Can delete permission', 2, 'delete_permission');
INSERT INTO `auth_permission` VALUES (8, 'Can view permission', 2, 'view_permission');
INSERT INTO `auth_permission` VALUES (9, 'Can add group', 3, 'add_group');
INSERT INTO `auth_permission` VALUES (10, 'Can change group', 3, 'change_group');
INSERT INTO `auth_permission` VALUES (11, 'Can delete group', 3, 'delete_group');
INSERT INTO `auth_permission` VALUES (12, 'Can view group', 3, 'view_group');
INSERT INTO `auth_permission` VALUES (13, 'Can add user', 4, 'add_user');
INSERT INTO `auth_permission` VALUES (14, 'Can change user', 4, 'change_user');
INSERT INTO `auth_permission` VALUES (15, 'Can delete user', 4, 'delete_user');
INSERT INTO `auth_permission` VALUES (16, 'Can view user', 4, 'view_user');
INSERT INTO `auth_permission` VALUES (17, 'Can add content type', 5, 'add_contenttype');
INSERT INTO `auth_permission` VALUES (18, 'Can change content type', 5, 'change_contenttype');
INSERT INTO `auth_permission` VALUES (19, 'Can delete content type', 5, 'delete_contenttype');
INSERT INTO `auth_permission` VALUES (20, 'Can view content type', 5, 'view_contenttype');
INSERT INTO `auth_permission` VALUES (21, 'Can add session', 6, 'add_session');
INSERT INTO `auth_permission` VALUES (22, 'Can change session', 6, 'change_session');
INSERT INTO `auth_permission` VALUES (23, 'Can delete session', 6, 'delete_session');
INSERT INTO `auth_permission` VALUES (24, 'Can view session', 6, 'view_session');
INSERT INTO `auth_permission` VALUES (25, 'Can add user info', 7, 'add_userinfo');
INSERT INTO `auth_permission` VALUES (26, 'Can change user info', 7, 'change_userinfo');
INSERT INTO `auth_permission` VALUES (27, 'Can delete user info', 7, 'delete_userinfo');
INSERT INTO `auth_permission` VALUES (28, 'Can view user info', 7, 'view_userinfo');
INSERT INTO `auth_permission` VALUES (29, 'Can add permission', 8, 'add_permission');
INSERT INTO `auth_permission` VALUES (30, 'Can change permission', 8, 'change_permission');
INSERT INTO `auth_permission` VALUES (31, 'Can delete permission', 8, 'delete_permission');
INSERT INTO `auth_permission` VALUES (32, 'Can view permission', 8, 'view_permission');
INSERT INTO `auth_permission` VALUES (33, 'Can add message', 9, 'add_message');
INSERT INTO `auth_permission` VALUES (34, 'Can change message', 9, 'change_message');
INSERT INTO `auth_permission` VALUES (35, 'Can delete message', 9, 'delete_message');
INSERT INTO `auth_permission` VALUES (36, 'Can view message', 9, 'view_message');
INSERT INTO `auth_permission` VALUES (37, 'Can add village', 10, 'add_village');
INSERT INTO `auth_permission` VALUES (38, 'Can change village', 10, 'change_village');
INSERT INTO `auth_permission` VALUES (39, 'Can delete village', 10, 'delete_village');
INSERT INTO `auth_permission` VALUES (40, 'Can view village', 10, 'view_village');
INSERT INTO `auth_permission` VALUES (41, 'Can add work order', 11, 'add_workorder');
INSERT INTO `auth_permission` VALUES (42, 'Can change work order', 11, 'change_workorder');
INSERT INTO `auth_permission` VALUES (43, 'Can delete work order', 11, 'delete_workorder');
INSERT INTO `auth_permission` VALUES (44, 'Can view work order', 11, 'view_workorder');
INSERT INTO `auth_permission` VALUES (45, 'Can add record', 12, 'add_record');
INSERT INTO `auth_permission` VALUES (46, 'Can change record', 12, 'change_record');
INSERT INTO `auth_permission` VALUES (47, 'Can delete record', 12, 'delete_record');
INSERT INTO `auth_permission` VALUES (48, 'Can view record', 12, 'view_record');
INSERT INTO `auth_permission` VALUES (49, 'Can add address_info', 13, 'add_address_info');
INSERT INTO `auth_permission` VALUES (50, 'Can change address_info', 13, 'change_address_info');
INSERT INTO `auth_permission` VALUES (51, 'Can delete address_info', 13, 'delete_address_info');
INSERT INTO `auth_permission` VALUES (52, 'Can view address_info', 13, 'view_address_info');

-- ----------------------------
-- Table structure for auth_user
-- ----------------------------
DROP TABLE IF EXISTS `auth_user`;
CREATE TABLE `auth_user`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `last_login` datetime(6) NULL DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `first_name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `last_name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(254) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for auth_user_groups
-- ----------------------------
DROP TABLE IF EXISTS `auth_user_groups`;
CREATE TABLE `auth_user_groups`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `user_id` int(0) NOT NULL,
  `group_id` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `auth_user_groups_user_id_group_id_94350c0c_uniq`(`user_id`, `group_id`) USING BTREE,
  INDEX `auth_user_groups_group_id_97559544_fk_auth_group_id`(`group_id`) USING BTREE,
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for auth_user_user_permissions
-- ----------------------------
DROP TABLE IF EXISTS `auth_user_user_permissions`;
CREATE TABLE `auth_user_user_permissions`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `user_id` int(0) NOT NULL,
  `permission_id` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq`(`user_id`, `permission_id`) USING BTREE,
  INDEX `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm`(`permission_id`) USING BTREE,
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for django_admin_log
-- ----------------------------
DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE `django_admin_log`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `object_repr` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `action_flag` smallint(0) UNSIGNED NOT NULL,
  `change_message` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content_type_id` int(0) NULL DEFAULT NULL,
  `user_id` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `django_admin_log_content_type_id_c4bce8eb_fk_django_co`(`content_type_id`) USING BTREE,
  INDEX `django_admin_log_user_id_c564eba6_fk_auth_user_id`(`user_id`) USING BTREE,
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for django_content_type
-- ----------------------------
DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE `django_content_type`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `model` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `django_content_type_app_label_model_76bd3d3b_uniq`(`app_label`, `model`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of django_content_type
-- ----------------------------
INSERT INTO `django_content_type` VALUES (1, 'admin', 'logentry');
INSERT INTO `django_content_type` VALUES (13, 'app1', 'address_info');
INSERT INTO `django_content_type` VALUES (9, 'app1', 'message');
INSERT INTO `django_content_type` VALUES (8, 'app1', 'permission');
INSERT INTO `django_content_type` VALUES (12, 'app1', 'record');
INSERT INTO `django_content_type` VALUES (7, 'app1', 'userinfo');
INSERT INTO `django_content_type` VALUES (10, 'app1', 'village');
INSERT INTO `django_content_type` VALUES (11, 'app1', 'workorder');
INSERT INTO `django_content_type` VALUES (3, 'auth', 'group');
INSERT INTO `django_content_type` VALUES (2, 'auth', 'permission');
INSERT INTO `django_content_type` VALUES (4, 'auth', 'user');
INSERT INTO `django_content_type` VALUES (5, 'contenttypes', 'contenttype');
INSERT INTO `django_content_type` VALUES (6, 'sessions', 'session');

-- ----------------------------
-- Table structure for django_migrations
-- ----------------------------
DROP TABLE IF EXISTS `django_migrations`;
CREATE TABLE `django_migrations`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of django_migrations
-- ----------------------------
INSERT INTO `django_migrations` VALUES (1, 'contenttypes', '0001_initial', '2022-12-10 06:44:13.514941');
INSERT INTO `django_migrations` VALUES (2, 'auth', '0001_initial', '2022-12-10 06:44:15.409446');
INSERT INTO `django_migrations` VALUES (3, 'admin', '0001_initial', '2022-12-10 06:44:15.770751');
INSERT INTO `django_migrations` VALUES (4, 'admin', '0002_logentry_remove_auto_add', '2022-12-10 06:44:15.795907');
INSERT INTO `django_migrations` VALUES (5, 'admin', '0003_logentry_add_action_flag_choices', '2022-12-10 06:44:15.824343');
INSERT INTO `django_migrations` VALUES (6, 'app1', '0001_initial', '2022-12-10 06:44:15.933534');
INSERT INTO `django_migrations` VALUES (7, 'contenttypes', '0002_remove_content_type_name', '2022-12-10 06:44:16.120902');
INSERT INTO `django_migrations` VALUES (8, 'auth', '0002_alter_permission_name_max_length', '2022-12-10 06:44:16.251479');
INSERT INTO `django_migrations` VALUES (9, 'auth', '0003_alter_user_email_max_length', '2022-12-10 06:44:16.317492');
INSERT INTO `django_migrations` VALUES (10, 'auth', '0004_alter_user_username_opts', '2022-12-10 06:44:16.350497');
INSERT INTO `django_migrations` VALUES (11, 'auth', '0005_alter_user_last_login_null', '2022-12-10 06:44:16.485344');
INSERT INTO `django_migrations` VALUES (12, 'auth', '0006_require_contenttypes_0002', '2022-12-10 06:44:16.511202');
INSERT INTO `django_migrations` VALUES (13, 'auth', '0007_alter_validators_add_error_messages', '2022-12-10 06:44:16.535473');
INSERT INTO `django_migrations` VALUES (14, 'auth', '0008_alter_user_username_max_length', '2022-12-10 06:44:16.668754');
INSERT INTO `django_migrations` VALUES (15, 'auth', '0009_alter_user_last_name_max_length', '2022-12-10 06:44:16.802481');
INSERT INTO `django_migrations` VALUES (16, 'auth', '0010_alter_group_name_max_length', '2022-12-10 06:44:16.858582');
INSERT INTO `django_migrations` VALUES (17, 'auth', '0011_update_proxy_permissions', '2022-12-10 06:44:16.887701');
INSERT INTO `django_migrations` VALUES (18, 'auth', '0012_alter_user_first_name_max_length', '2022-12-10 06:44:17.071487');
INSERT INTO `django_migrations` VALUES (19, 'sessions', '0001_initial', '2022-12-10 06:44:17.280197');
INSERT INTO `django_migrations` VALUES (20, 'app1', '0002_permission_alter_userinfo_phonenum_and_more', '2022-12-10 10:20:11.154513');
INSERT INTO `django_migrations` VALUES (21, 'app1', '0003_message_alter_userinfo_name_alter_userinfo_password_and_more', '2022-12-14 08:55:15.061958');
INSERT INTO `django_migrations` VALUES (22, 'app1', '0004_message_recipient_id_message_sender_id', '2022-12-14 12:08:09.538955');
INSERT INTO `django_migrations` VALUES (23, 'app1', '0005_alter_message_time', '2022-12-14 14:04:22.129480');
INSERT INTO `django_migrations` VALUES (24, 'app1', '0006_village', '2022-12-15 12:24:18.461629');
INSERT INTO `django_migrations` VALUES (25, 'app1', '0007_userinfo_village', '2022-12-15 12:29:08.374565');
INSERT INTO `django_migrations` VALUES (26, 'app1', '0008_alter_userinfo_phonenum', '2022-12-16 14:08:57.433193');
INSERT INTO `django_migrations` VALUES (27, 'app1', '0009_workorder', '2022-12-28 12:36:20.981929');
INSERT INTO `django_migrations` VALUES (28, 'app1', '0010_alter_workorder_type', '2022-12-28 12:38:41.532895');
INSERT INTO `django_migrations` VALUES (29, 'app1', '0011_record', '2023-01-04 05:43:36.325421');
INSERT INTO `django_migrations` VALUES (30, 'app1', '0012_record_handle_time', '2023-01-04 06:12:37.940447');
INSERT INTO `django_migrations` VALUES (31, 'app1', '0013_alter_message_time', '2023-01-04 06:16:08.401667');
INSERT INTO `django_migrations` VALUES (32, 'app1', '0014_address_info', '2023-01-28 10:54:58.432188');

-- ----------------------------
-- Table structure for django_session
-- ----------------------------
DROP TABLE IF EXISTS `django_session`;
CREATE TABLE `django_session`  (
  `session_key` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `session_data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`) USING BTREE,
  INDEX `django_session_expire_date_a5c62663`(`expire_date`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of django_session
-- ----------------------------
INSERT INTO `django_session` VALUES ('1hxnjcs8h0rnh46vpisiw8cykjupv1le', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTEsIl9zZXNzaW9uX2V4cGlyeSI6MH0:1pIlVZ:dRsuWzyL0HHUQ90owqmm5A8YsAUk4FZWxeYnaS-uv60', '2023-02-03 07:08:17.375168');
INSERT INTO `django_session` VALUES ('1k1gmzo95e47m04m6qi8tflw3q0v8r58', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTEsIl9zZXNzaW9uX2V4cGlyeSI6MH0:1pLjnW:wRK-lbRAzhUg6gxNKMStOBD7pT0BrExgg16NTkCeFuQ', '2023-02-11 11:55:06.731565');
INSERT INTO `django_session` VALUES ('1k7t3upyabibe56tbn9a4s72g159icac', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTEsIl9zZXNzaW9uX2V4cGlyeSI6MH0:1pIOxE:xxlvW4BB3c1Vdyv5tCZTfOF-0uKIxPZ-lvmO3_Zw5n0', '2023-02-02 07:03:20.690018');
INSERT INTO `django_session` VALUES ('a814fryqrz5vejhppod9i2wfkiezll74', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTEsIl9zZXNzaW9uX2V4cGlyeSI6MH0:1pLlVd:DGQJZbFcnakyypgH4no7W8_KXxYLs49aLLugzUIU_xs', '2023-02-11 13:44:45.039383');
INSERT INTO `django_session` VALUES ('axdn3j0f38rxiirvyf510eos73lc47z3', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTEsIl9zZXNzaW9uX2V4cGlyeSI6MH0:1pPI19:lF9QoVmiLFCH4j2MITwLFYc4cUWm5qDqiGP8dn8aMgc', '2023-02-21 07:03:51.865816');
INSERT INTO `django_session` VALUES ('i0kbbphu1l2aq0h7t38r9m6koj5cuur5', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTEsIl9zZXNzaW9uX2V4cGlyeSI6MH0:1pLkwd:LVjbr5liKxRf-CuAaIyUgmN6SjbFDEWYyrA21OUuRw0', '2023-02-11 13:08:35.907523');
INSERT INTO `django_session` VALUES ('kdkwsdd7xh7s0c3eauvd64xjkmft8ajc', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTEsIl9zZXNzaW9uX2V4cGlyeSI6MH0:1pPFAV:2EdOISDUYiOh_evyYnjdEvoBDHnY-8seyHesNv-6ms4', '2023-02-21 04:01:19.730245');
INSERT INTO `django_session` VALUES ('kx1027pm4nzk8x2mxuqef3od4t1q22hx', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTEsIl9zZXNzaW9uX2V4cGlyeSI6MH0:1pIOxK:xqHzEzlYA7KYtx0SgvPzuyh2IdVAhJZW-zRyzpeF1BM', '2023-02-02 07:03:26.636710');
INSERT INTO `django_session` VALUES ('lr2r9roih9zs3xr6b5xurslnamqgd3c3', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTEsIl9zZXNzaW9uX2V4cGlyeSI6MH0:1pPjFw:kqt83fpKkKrxiKKpKCPUCZOxu4RKH9C4NdV81ACbH1U', '2023-02-22 12:08:56.928906');
INSERT INTO `django_session` VALUES ('s3sbjkl81ig6nyfr1v59luwa4zwpmudr', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTF9:1p5SZd:GuQBxHqIdau8anPe_7qBxZZV-6-3bTItOB1ZKgBOmF8', '2022-12-28 14:17:29.503582');
INSERT INTO `django_session` VALUES ('swq3u35c9qatel72w78uz8g0vy11cb5z', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTF9:1pBxfz:w36oikMJMao5t7lgm2jxZo-F2Dc-YY5vuokPoWXe8Ls', '2023-01-15 12:42:55.267161');
INSERT INTO `django_session` VALUES ('xas3h9hz1fili1b3hg756g0pha7cgk7n', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTEsIl9zZXNzaW9uX2V4cGlyeSI6MH0:1pIOwu:NBgeDgcG0ayWnpboZ1JP-R1lCI1OM2uMKqToVWSebRo', '2023-02-02 07:03:00.477988');
INSERT INTO `django_session` VALUES ('xww8b6n6eie27v8dc3ja16jrpdbtail8', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTEsIl9zZXNzaW9uX2V4cGlyeSI6MH0:1pLlJC:bzhGwk8d6TM6V3QVNJMkj-tIBKJIy931ffz9reB4Afg', '2023-02-11 13:31:54.163470');
INSERT INTO `django_session` VALUES ('zqexsduy58uay6hly52iq0ul37vhv143', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTEsIl9zZXNzaW9uX2V4cGlyeSI6MH0:1pLkvt:lrcDPUqMLwBNBqPr3h8-o-xdq19STRhWGM97TOdBF4c', '2023-02-11 13:07:49.166714');

SET FOREIGN_KEY_CHECKS = 1;
