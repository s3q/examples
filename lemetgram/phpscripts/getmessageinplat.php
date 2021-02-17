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

    $connect = new mysqli("localhost", "root", "", "chattables");


    if (!$connect)
        exit();

    date_default_timezone_set("Asia/Muscat");

    $time = strtotime("now");
    $date = date('y-m-d h:i:s', $time);


    if (isset($_POST['get-messages'])) {
        $toper = $_POST["toper"];

        if (isset($_SESSION["username"])) {
            $fromper = $_SESSION["username"];
            $tablename = $fromper . "&" . $toper;
            $tablenamer = $toper . "&" . $fromper;

            $q1 = "SELECT * FROM `$tablename` WHERE 1";
            $q2 = "SELECT * FROM `$tablenamer` WHERE 1";


            if ($result = $connect->query($q1)) {

                $result->data_seek(0);
                $rows_array = $result->fetch_all(MYSQLI_ASSOC);

                foreach ($rows_array as $arruserinfo) {
                    if ($arruserinfo["fromper"] == $fromper && $arruserinfo["toper"] == $toper) {
                        echo '<div class="chatboxcontent fromm">' . $arruserinfo['content'] . '</div>';
                    } elseif ($arruserinfo["fromper"] == $toper && $arruserinfo["toper"] == $fromper) {
                        echo '<div class="chatboxcontent fromh">' . $arruserinfo['content'] . '</div>';
                    }
                }
            }

            if ($result = $connect->query($q2)) {

                $result->data_seek(0);
        
                $rows_array = $result->fetch_all(MYSQLI_ASSOC);

                foreach ($rows_array as $arruserinfo) {
                    if ($arruserinfo["fromper"] == $fromper && $arruserinfo["toper"] == $toper) {
                        echo '<div class="chatboxcontent fromm">' . $arruserinfo['content'] . '</div>';
                    } elseif ($arruserinfo["fromper"] == $toper && $arruserinfo["toper"] == $fromper) {
                        echo '<div class="chatboxcontent fromh">' . $arruserinfo['content'] . '</div>';
                    }
                }
            }
        }
    }
    if (isset($_POST["get-alluserm"])) {
        $q3 = "SHOW TABLES";

        if ($result = $connect->query($q3)) {
            $result->data_seek(0);
            $rows_array = $result->fetch_all();

            if (isset($_SESSION["username"])) {
                $fromper = $_SESSION["username"];
                // $arrcheck = array();
                foreach ($rows_array as $tablearr => $table) {
                    $fromperi = explode("&", $table[0])[0];
                    $toperi = explode("&", $table[0])[1];

                    if ($fromperi == $fromper && $toperi == $fromper) {
                        echo '<div class="userchatbox bnselectsendmessageforh" data-selected-to-send="false">
                        <div class="userprofileimg"></div>
                        <div class="userprofilename">' . $fromper . '</div>
                    </div>';
                    } elseif ($fromperi == $fromper && $toperi != $fromper) {
                        echo '<div class="userchatbox bnselectsendmessageforh" data-selected-to-send="false">
                        <div class="userprofileimg"></div>
                        <div class="userprofilename">' . $toperi . '</div>
                    </div>';
                    } elseif ($fromperi != $fromper && $toperi == $fromper) {
                        echo '<div class="userchatbox bnselectsendmessageforh" data-selected-to-send="false">
                        <div class="userprofileimg"></div>
                        <div class="userprofilename">' . $fromperi . '</div>
                    </div>';
                    }
                }
            }
        }
    }
}
