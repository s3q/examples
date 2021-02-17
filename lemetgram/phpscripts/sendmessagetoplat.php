<?php

if (
    isset($_SERVER["HTTP_REFERER"])
    &&
    ($_SERVER["HTTP_REFERER"] === $_SERVER["REQUEST_SCHEME"] . '://' . $_SERVER['HTTP_HOST'] . str_replace(basename(__FILE__), "index.php", $_SERVER["REQUEST_URI"])
        ||
        $_SERVER["HTTP_REFERER"] === $_SERVER["REQUEST_SCHEME"] . '://' . $_SERVER['HTTP_HOST'] . str_replace(basename(__FILE__), "login.php", $_SERVER["REQUEST_URI"])
        ||
        $_SERVER["REQUEST_SCHEME"] . '://' . $_SERVER['HTTP_HOST'] . str_replace(basename(__FILE__), "", $_SERVER["REQUEST_URI"]))
) {

    session_start();

    if (isset($_POST['submit-message'])) {
        $message = $_POST["message"];
        $toper = $_POST["toper"];

        $connect = new mysqli("localhost", "root", "", "chattables");

        if (!$connect)
            exit();

        date_default_timezone_set("Asia/Muscat");

        $time = strtotime("now");
        $date = date('y-m-d h:i:s', $time);

        if (isset($_SESSION["username"])) {

            $fromper = $_SESSION["username"];
            $arrftper = array($fromper, $toper);
            $tablename = $fromper . "&" . $toper;
            $tablenamer = $toper . "&" . $fromper;

            $tableex = false;

            $q1 = "SHOW TABLES";

            if ($result = $connect->query($q1)) {
                $result->data_seek(0);
                
                $rows_array = $result->fetch_all();
                
                $arrrtables = array();
                foreach ($rows_array as $key => $tables) {
                    $table = $tables[0];
                    $arrrtables[] = $table;
                }

                if (in_array($tablename, $arrrtables) || in_array($tablenamer, $arrrtables)) {
                    $tableex = true;
                }                  
                
            }

            if (!$tableex) {
                $q2 = "CREATE TABLE IF NOT EXISTS `chattables`.`$tablename`
                    ( `id` INT(11) NOT NULL AUTO_INCREMENT, `fromper` CHAR(255) NOT NULL , `toper` CHAR(255) NOT NULL , `content` VARCHAR(6000) NOT NULL , `date` CHAR(255) NOT NULL , PRIMARY KEY (`id`)) 
                    ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;";
                $connect->query($q2);
            }


            $q3 = "INSERT INTO `$tablename` (`id`, `fromper`, `toper`, `content`, `date`) VALUES (NULL, '$fromper', '$toper', '$message', '$date')";
            if (!$connect->query($q3)) {
                $q4 = "INSERT INTO `$tablenamer` (`id`, `fromper`, `toper`, `content`, `date`) VALUES (NULL, '$fromper', '$toper', '$message', '$date')";
                $connect->query($q4);
            }
        }
    }
}
