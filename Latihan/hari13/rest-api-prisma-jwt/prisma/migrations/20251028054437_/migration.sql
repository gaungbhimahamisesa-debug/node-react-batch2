/*
  Warnings:

  - You are about to drop the column `createAt` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `category` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` DROP COLUMN `createAt`,
    DROP COLUMN `updateAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `movies` ADD COLUMN `userId` INTEGER NULL;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Movies` ADD CONSTRAINT `Movies_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
