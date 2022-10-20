CREATE DATABASE 'bd_skeletonjs';
USE 'bd_skeletonjs';

CREATE TABLE IF NOT EXISTS `bd_skeletonjs`.`tbl_productos` (
  `idtbl_productos` INT NOT NULL AUTO_INCREMENT,
  `desctbl_productos` VARCHAR(45) NULL DEFAULT NULL,
  `preciotbl_productos` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idtbl_productos`),
  UNIQUE INDEX `idtbl_productos_UNIQUE` (`idtbl_productos` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci
COMMENT = 'Tabla de productos.'