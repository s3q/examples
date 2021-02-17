<?php ob_start();session_start();?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create New User in lemetgram</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans&family=Raleway:wght@200;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style/styleu.css">
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="icons/css/icons.min.css">
</head>

<body>

    <?php
    echo ob_get_contents();

    $error = array();
    if (isset($_POST["submit"])) {
        $username = (string) trim($_POST["username"]);
        $password = (string) trim($_POST["password"]);

        $passwordrepeate = 0;
        $connect = new mysqli("localhost", "root", "", "new");

        if (!$connect)
            exit();


        $q1 = "SELECT * FROM `users` WHERE 1";

        if ($result = $connect->query($q1)) {

            $result->data_seek(0);
            $rows_array = $result->fetch_all(MYSQLI_ASSOC);

            foreach ($rows_array as $arruserinfo) {
                if ($arruserinfo["username"] == $username) {
                    $error["u"] = "invalid account, it is alreadly found";
                }
                if ($arruserinfo["password"] == $password) {
                    $passwordrepeate++;
                    if ($passwordrepeate > 200) {
                        $error["p"] = "invalid password";
                    }
                }
            }
            if (strlen($password) < 6) {
                $error["p"] = "invalid password";
            }
            if (strlen($username) < 2) {
                if (!isset($error["u"]))
                    $error["u"] = "invalid username";
            }
            if (!isset($error["u"]) && !isset($error["p"])) {
                require_once "getinfo/Userinfo.php";
                $ip = (string) Userinfo::get_ip();
                $os = (string) Userinfo::get_os();
                $browser = (string) Userinfo::get_browser();
                $device = (string) Userinfo::get_device();

                date_default_timezone_set("Asia/Muscat");

                $time = strtotime("now");
                $date = date('y-m-d h:i:s', $time);

                $q2 = "INSERT INTO `users` (`id`, `username`, `password`, `ip`, `os`, `browser`, `device`, `date`) VALUES 
                (null," . " '$username', '$password', '$ip', '$os', '$browser', '$device', '$date')";

                if ($connect->query($q2)) {

                    $_SESSION["userdes"] = "newuser";
                    $_SESSION["username"] = $username;
                    $_SESSION["password"] = $password;
                    $_SESSION["ip"] = $ip;
                    $_SESSION["os"] = $os;
                    $_SESSION["browser"] = $browser;
                    $_SESSION["device"] = $device;

                    
                    // ob_start();
                    // header("location: index.php");
                    // ob_end_flush();
                }
            }
        }
    }


    ?>

    <div class="maincontainer">
        <header class="mainheader w-100 pt-5 pb-10 bo-bottom-gray">
            <a class="bn bn-light" href="index.php" style="font-family: 'Dancing Script', cursive; font-size: 25px;">lemetgram</a>
        </header>
        <form class="form-inputs inputs-lg mt-50 p-2" action="login.php" method="POST">
            <h2 class="text-center">Create New User</h2>
            <div class="group-input-vr">
                <label for="username">username :</label>
                <input type="text" name="username" id="username" class="custom-input" value="<?php if (isset($_POST["username"])) {
                                                                                                    echo $username;
                                                                                                } ?>" placeholder="username ...." autocomplete="off" spellcheck="false" required>
                <i class="input-des" id="input-des-username"><?php
                                                                if (isset($error["u"]))
                                                                    echo $error["u"];
                                                                else
                                                                    echo ".";

                                                                ?></i>
                <label class="mt-5" for="password">password :</label>
                <input type="text" name="password" id="password" class="custom-input" value="<?php if (isset($_POST["password"])) {
                                                                                                    echo $password;
                                                                                                } ?>" placeholder="password ...." autocomplete="off" spellcheck="false" required>
                <i class="input-des" id="input-des-password"><?php
                                                                if (isset($error["p"]))
                                                                    echo $error["p"];
                                                                else
                                                                    echo ".";

                                                                ?></i>
            </div>
            <div class="mt-10 text-center">
                <button type="submit" name="submit" id="submit" class="bn bn-purple">craete</button>
                <a class="ml-10 color-yellow" href="index.php">i have account</a>
            </div>
        </form>
    </div>

    <script src="scriptal/jquery.min.js"></script>
    <script src="scriptal/co.min.js"></script>
    <script>
        document.body.style.height = window.innerHeight + "px";
    </script>
</body>

</html>

