<?php session_start();?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lemetgram</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans&family=Raleway:wght@200;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style/styleu.css">
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="icons/css/icons.min.css">
</head>

<body>

    <?php

    $connect = new mysqli("localhost", "root", "", "new");

    if (!$connect)
        exit();

    $q1 = "SELECT * FROM `users` WHERE 1";

    if (isset($_POST["submit"])) {
        $username = $_POST["username"];
        $password = $_POST["password"];

        if ($result = $connect->query($q1)) {

            $result->data_seek(0);
            $rows_array = $result->fetch_all(MYSQLI_ASSOC);

            foreach ($rows_array as $arruserinfo) {
                if ($arruserinfo["username"] == $username) {
                    if ($arruserinfo["password"] == $password) {
                        require_once "getinfo/Userinfo.php";
                        $ip = (string) Userinfo::get_ip();
                        $os = (string) Userinfo::get_os();
                        $browser = (string) Userinfo::get_browser();
                        $device = (string) Userinfo::get_device();

                        date_default_timezone_set("Asia/Muscat");

                        $time = strtotime("now");
                        $date = date('y-m-d h:i:s', $time);

                        $_SESSION["userdes"] = "olduser";
                        $_SESSION["username"] = $username;
                        $_SESSION["password"] = $password;
                        $_SESSION["ip"] = $ip;
                        $_SESSION["os"] = $os;
                        $_SESSION["browser"] = $browser;
                        $_SESSION["device"] = $device;
                    }
                }
            }
        }
    }

    ?>

    <div class="maincontainer">
        <header class="mainheader w-100 pt-5 pb-10 bo-bottom-gray">
            <a class="bn bn-light" href="index.php" style="font-family: 'Dancing Script', cursive; font-size: 25px;">lemetgram</a>
            <button class="bn bn-transparent ml-auto" aria-controls="usersinplat" data-fade="alert" data-duration="100"><i class="fas fa-th-large color-gray io-sm"></i></button>
            <?php
            if (isset($_SESSION["username"]) && isset($_SESSION["password"])) {
                echo '<div class="userprofileimg"></div>';
            } else {
                echo '<button class="bn bn-yellow" aria-controls="alert-window" data-fade="alert" data-duration="100">sign-up</button>';
            }
            ?>
        </header>

        <?php

        if (!isset($_SESSION["useranme"]) && !isset($_SESSION["password"])) {
            echo '<div class="backdrop-window" id="alert-window" aria-expanded="false" data-event="click" style="display: none;" role="alert">
            <div class="alert-window" style="border-radius: 20px;">
                <div class="alert-window-head">
                    <button aria-controls="alert-window" data-fade="alert" data-duration="100" class="bn-close"><i class="fas fa-times"></i></button>
                    <span class="color-yellow">sign up</span>
                </div>
                <form action="index.php" method="POST" class="p-5 inputs-lg">
                    <div class="group-input-vr">
                        <label for="username">username :</label>
                        <input type="text" name="username" id="username" class="custom-input" placeholder="username ...." autocomplete="off" spellcheck="false" required>
                        <i class="input-des" id="input-des-username">.</i>
                        <label class="mt-5" for="password">password :</label>
                        <input type="text" name="password" id="password" class="custom-input" placeholder="password ...." autocomplete="off" spellcheck="false" required>
                        <i class="input-des" id="input-des-password">.</i>
                    </div>
                    <div class="mt-2 text-center">
                        <button type="submit" name="submit" id="submit" class="bn bn-purple">sign-up</button>
                        <a class="ml-10 color-blue" href="login.php">create new user</a>
                    </div>
                </form>
            </div>
        </div>';
        }
        ?>

        <div class="minchatbox">
            <div class="thuuserschatbox" id="thuuserschatbox">
                <!-- <div class="userchatbox bnselectsendmessageforh" data-selected-to-send="true">
                    <div class="userprofileimg"></div>
                    <div class="userprofilename">sassa</div>
                </div> -->
            </div>
            <div class="backdrop-window" id="usersinplat" aria-expanded="false" data-event="click" style="display: none;" role="alert">
                <div class="alert-window" id="alertusersinplat" style="border-radius: 20px;">
                    <div class="alert-window-head">
                        <button id="closealertusersinplat" aria-controls="usersinplat" data-fade="alert" data-duration="100" class="bn-close"><i class="fas fa-times"></i></button>
                        <span class="color-yellow"></span>
                    </div>
                    <div class="p-5 mt-10" id="showusersinplat">
                        <?php

                        if ($result = $connect->query($q1)) {

                            $result->data_seek(0);
                            $rows_array = $result->fetch_all(MYSQLI_ASSOC);

                            foreach ($rows_array as $arruserinfo) {
                                echo '<div class="userchatbox bnsendmessagefortps">
                                    <div class="userprofileimg"></div>
                                    <div class="userprofilename">' . $arruserinfo["username"] . '</div>
                                </div>';
                            }
                        }
                        ?>
                    </div>
                </div>
            </div>
            <div class="thuchatbox" id="thuchatbox">
                <div class="justify-content-center align-items-center h-80" id="introsendmessageao">
                    <div class="flex-col align-items-center" style="padding: 0 50px 0 50px">
                        <i style="font-size: 100px; color: #dcccf9" class="far fa-comments"></i>
                        <p class="color-purple text-center mt-10" style="font-size: 16px;">Communicate with any of the users without preserving your privacy. This is our advantage</p>
                        <button class="bn bn-light-blue mt-10" id="sendmessageforao" aria-controls="usersinplat" data-fade="alert" data-duration="100">send message</button>
                    </div>
                </div>
                <div class="chatbox" id="chatbox" style="border-top: 1px solid #eee;">
                    <!-- <div class="chatboxcontent fromm">kgffgl</div>
                    <div class="chatboxcontent fromh">kgfftyyyyyygl</div> -->
                </div>
                <div class="fixed position-bottom pl-5 pr-5 pt-2 pb-2 bgc-light w-70">
                    <div class="group-input-vr relative" style="max-width: 500px;">
                        <input type="text" name="message" id="message" class="custom-input pill" placeholder="Message ...." autocomplete="off" spellcheck="false" required>
                        <button type="submit" name="submit-message" id="submit-message" class="bn-send-m pill"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </div>

            </div>
        </div>
        <footer>

        </footer>
    </div>

    <script src="scriptal/jquery.min.js"></script>
    <script src="ex.js"></script>
    <script src="scriptal/co.min.js"></script>
    <script src="scriptal/script.js"></script>
    <script>
        document.body.style.height = window.innerHeight + "px";
        console.log("true");
    </script>
</body>

</html>