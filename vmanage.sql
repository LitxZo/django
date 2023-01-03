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

 Date: 03/01/2023 15:44:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for app1_message
-- ----------------------------
DROP TABLE IF EXISTS `app1_message`;
CREATE TABLE `app1_message`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `sender` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `recipient` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `message` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `time` time(6) NOT NULL,
  `recipient_id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sender_id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app1_message
-- ----------------------------
INSERT INTO `app1_message` VALUES (1, '刘璇', 'root', '这是一条测试信息', '20:12:16.000000', '11', '3');
INSERT INTO `app1_message` VALUES (2, 'root', '刘璇', '这是一条测试消息', '22:04:34.487506', '3', '11');
INSERT INTO `app1_message` VALUES (3, 'root', '邹敏', 'ahahahahahahaha', '22:05:54.601072', '14', '11');

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
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app1_userinfo
-- ----------------------------
INSERT INTO `app1_userinfo` VALUES (3, '刘璇', '6a6ff412bb3c93fc1ce44ac567c10fba', '911', 2, 1);
INSERT INTO `app1_userinfo` VALUES (4, '杨嘉园', '9bf2928cee121ca9bd6d17f22ff68923', '10086', 2, 2);
INSERT INTO `app1_userinfo` VALUES (5, '卢幺', '123456', '1987786', 2, 1);
INSERT INTO `app1_userinfo` VALUES (6, '伟杰', '123445', '12908376', 2, 1);
INSERT INTO `app1_userinfo` VALUES (7, '申伟杰', '95565ef4d6344ad1906b266471681393', '12908376', 2, 2);
INSERT INTO `app1_userinfo` VALUES (8, '卓文萱', '1233', '123456', 2, 1);
INSERT INTO `app1_userinfo` VALUES (10, 'yus', '6a6ff412bb3c93fc1ce44ac567c10fba', '123456', 4, 2);
INSERT INTO `app1_userinfo` VALUES (11, 'root', '6a6ff412bb3c93fc1ce44ac567c10fba', '10086', 1, 1);
INSERT INTO `app1_userinfo` VALUES (14, '邹敏', '5c4c63ba570098b1bf86fecdfcac9a3e', '123456', 2, 2);

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
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app1_workorder
-- ----------------------------
INSERT INTO `app1_workorder` VALUES (1, '1', '测试', '0', '1', '2022-12-30 00:00:00.000000', '2022-12-30 07:06:50.815046', '测试', 1);
INSERT INTO `app1_workorder` VALUES (2, '2', '测试2', '0', '2', '2022-01-01 00:00:00.000000', '2023-01-01 12:45:04.421805', '测试内容', 2);

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
) ENGINE = InnoDB AUTO_INCREMENT = 44 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of django_content_type
-- ----------------------------
INSERT INTO `django_content_type` VALUES (1, 'admin', 'logentry');
INSERT INTO `django_content_type` VALUES (9, 'app1', 'message');
INSERT INTO `django_content_type` VALUES (8, 'app1', 'permission');
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
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

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
INSERT INTO `django_session` VALUES ('s3sbjkl81ig6nyfr1v59luwa4zwpmudr', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTF9:1p5SZd:GuQBxHqIdau8anPe_7qBxZZV-6-3bTItOB1ZKgBOmF8', '2022-12-28 14:17:29.503582');
INSERT INTO `django_session` VALUES ('swq3u35c9qatel72w78uz8g0vy11cb5z', 'eyJwZXJtaXNzaW9uIjoiXHU4ZDg1XHU3ZWE3XHU3YmExXHU3NDA2XHU1NDU4IiwibmFtZSI6InJvb3QiLCJpZCI6MTF9:1pBxfz:w36oikMJMao5t7lgm2jxZo-F2Dc-YY5vuokPoWXe8Ls', '2023-01-15 12:42:55.267161');

SET FOREIGN_KEY_CHECKS = 1;
