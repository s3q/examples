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
    
    $connect = new mysqli("localhost", "root", "", "new");

    if (!$connect)
        exit();


    $q1 = "SELECT * FROM `users` WHERE 1";

    if ($result = $connect->query($q1)) {

        $result->data_seek(0);
        $rows_array = $result->fetch_all(MYSQLI_ASSOC);

        foreach ($rows_array as $arruserinfo) {
            echo '<div class="userchatbox bnsendmessagefortps">
            <div class="userprofileimg"></div>
            <div class="userprofilename">'.$arruserinfo["username"].'</div>
        </div>';
        }
    }
}
