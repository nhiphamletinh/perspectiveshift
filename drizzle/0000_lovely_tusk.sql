CREATE TABLE `records` (
	`id` text PRIMARY KEY NOT NULL,
	`kind` text NOT NULL,
	`class_id` text NOT NULL,
	`owner` text NOT NULL,
	`data` text NOT NULL
);
