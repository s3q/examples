<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="fontawesome/css/all.min.css">

    <style>

        .folder-type-box {
            display: flex;
            align-items: center;
            margin-left: 12px;
            background-color: #B0F;
            color: #ffffff;
            padding: 3px 10px;
            font-size: 12px;
            border-radius: 5px;
        }

        .folder-size-box {
            display: flex;
            align-items: center;
            margin-left: 12px;
            background-color: #7094FF;
            color: #ffffff;
            padding: 3px 10px;
            font-size: 12px;
            border-radius: 5px;
        }

        .file-type-box {
            display: flex;
            align-items: center;
            margin-left: 12px;
            background-color: #E91E63;
            color: #ffffff;
            padding: 3px 10px;
            font-size: 12px;
            border-radius: 5px;
        }

        .file-size-box {
            display: flex;
            align-items: center;
            margin-left: 12px;
            background-color: #F2B500;
            color: #ffffff;
            padding: 3px 10px;
            font-size: 12px;
            border-radius: 5px;
        }

        .buttondele {
            margin-left: auto;
            background-color: #FFDEDB;
        }

    </style>

</head>
<body>

    <?php 
    
    if (isset($_GET["submit"])) {
        $path = $_GET["path"];
        $submit = $_GET["submit"];
        # ------------------
        if ($path != "") {
            if (is_dir($path)) {
                # ------------------
                if ($path[strlen($path) - 1] != "\\" && $path[strlen($path) - 1] != ".") {
                    $path .= "\\";
                }
                $dir = scandir($path);
            }
            # ------------------
            // $_GET["pathValue"] = $path;
        }
    }

    if (isset($_POST["suCreateFile"])) {
        $suCreateFile = $_POST["suCreateFile"];
        $fileName = $_POST["fileName"];

        if ($fileName != "") {
            if (!file_exists($fileName)) {
                file_put_contents($fileName, "");
            }
        }
    }

    if (isset($_POST["suCreateFolder"])) {
        $suCreateFolder = $_POST["suCreateFolder"];
        $folderName = $_POST["folderName"];

        if ($folderName != "") {
            if (!is_dir($folderName)) {
                mkdir($folderName);
            }
        }
    }

    if (isset($_POST["suDelete"])) {
        $suDelete = $_POST["suDelete"];
        $cdorcfName = $_POST["cdorcfName"];

        if ($cdorcfName != "") {
            if (is_dir($cdorcfName)) {
                rmdir($cdorcfName);
            } elseif (is_file($cdorcfName) && file_exists($cdorcfName)) {
                unlink($cdorcfName);
            }
        }
    }


    ?>
    <form action="" method="GET" class="form-inputs mt-50">
        <div class="group-input">
            <input type="text" name="path" id="path" class="custom-input" 
                <?php 

                # ------------------
            
                // if (isset($_GET["pathValue"])) {
                //     $pathValue = $_GET["pathValue"];
                //     echo "value='{$pathValue}'";
                // }

                ?>
            >
            <input type="submit" value="submit" name="submit" id="submitpath" class="bn bn-purple">
        </div>

    </form>

    <div class="form-inputs mt-50">
        <?php 
        
        if (isset($_GET["pathValue"]) && is_dir($_GET["pathValue"]) || isset($_GET["path"]) && is_dir($_GET["path"])) {
            echo 
"<div>
<button id='createFile' class='bn bn-tomato' aria-controls='alert-window-cf' data-fade='alert' data-duration='100'>create file</button>
<button id='createFolder' class='bn bn-yellow' aria-controls='alert-window-cd' data-fade='alert' data-duration='100'>create folder</button>
<button id='deletec' class='bn bn-red' aria-controls='alert-window-delete' data-fade='alert' data-duration='100'>delete</button>
</div>";

        }

        ?>
    </div>


    <!--alert-window-->
    <div class="backdrop-window" id="alert-window-cf" aria-expanded="false" data-event="click" style="display: none;" role="alert">
        <div class="alert-window">
            <div class="alert-window-head">
                <button aria-controls="alert-window-cf" data-fade="alert" data-duration="100" class="bn-close"><i class="fas fa-times"></i></button>
                <span class="color-red">CREATE FILE</span>
            </div>
            <div class="mt-10 p-20">
                <form action="" method="POST" class="mt-50">
                    <div class="group-input">
                        <input type="text" name="fileName" id="fileName" class="custom-input">
                        <input type="submit" value="create file" name="suCreateFile" id="suCreateFile" class="bn bn-tomato">
                    </div>
                </form>
            </div>
        </div>
    </div>

    

    <!--alert-window-->
    <div class="backdrop-window" id="alert-window-cd" aria-expanded="false" data-event="click" style="display: none;" role="alert">
        <div class="alert-window">
            <div class="alert-window-head">
                <button aria-controls="alert-window-cd" data-fade="alert" data-duration="100" class="bn-close"><i class="fas fa-times"></i></button>
                <span class="color-red">CREATE FOLDER</span>
            </div>
            <div class="mt-10 p-20">
                <form action="" method="POST" class="mt-50">
                    <div class="group-input">
                        <input type="text" name="folderName" id="folderName" class="custom-input">
                        <input type="submit" value="create folder" name="suCreateFolder" id="suCreateFolder" class="bn bn-yellow">
                    </div>
                </form>
            </div>
        </div>
    </div>


    <!--alert-window-->
    <div class="backdrop-window" id="alert-window-delete" aria-expanded="false" data-event="click" style="display: none;" role="alert">
        <div class="alert-window">
            <div class="alert-window-head">
                <button aria-controls="alert-window-delete" data-fade="alert" data-duration="100" class="bn-close"><i class="fas fa-times"></i></button>
                <span class="color-red">DELETE</span>
            </div>
            <div class="mt-10 p-20">
                <form action="" method="POST" class="mt-50">
                    <div class="group-input">
                        <input type="text" name="cdorcfName" id="cdorcfName" class="custom-input">
                        <input type="submit" value="delete" name="suDelete" id="suDelete" class="bn bn-red">
                    </div>
                </form>
            </div>
        </div>
    </div>


    <div class="form-inputs mt-40">

        <?php 

        # ------------------ create directory element
        function createDirForm($content, $content2 = "") {
            $deleteButton = "";
            if ($content != "." && $content != "..") {
                $deleteButton = "<button class='bn buttondele'>delete</button>";
            }
            return "<div class='dp-flex p-6 outer-shadow mt-20 mb-20'><button class='bn buttondir'>$content</button>$deleteButton $content2</div>";
        }

        # ------------------ return size 
        function formatSize($sizeByte) {
            if (is_numeric($sizeByte)) {
                if ($sizeByte >= 1073741824) {
                    $sizeByte = number_format($sizeByte / 1073741824, 2) . " GB";
                } elseif ($sizeByte >= 1048576) {
                    $sizeByte = number_format($sizeByte / 1048576, 2) . " MB";
                } elseif ($sizeByte >= 1024) {
                    $sizeByte = number_format($sizeByte / 1024, 2) . " KB";
                } elseif ($sizeByte > 1) {
                    $sizeByte .= " byte";
                } else {
                    $sizeByte = "0 byte";
                }
                return $sizeByte;
            }
        }
        

        /*function getAllSize($arr) {
            $sizeByte = 0;
            foreach($arr as $object) {
                if (is_file($object)) {
                    echo $object . "  ---FILE----  " . __LINE__ . "<br>" . "<br>";
                    $sizeByte += filesize($object);
                } else if (is_dir($object)) {
                    // echo basename($object) . "<br>";
                    if (basename($object) != "." && basename($object) != "..") {
                        echo $object . "  ---FOLDER----  " . __LINE__ . "<br>" . "<br>";
                        getAllSize(scandir($object . "\\"));
                    }
                }
            }
            return $sizeByte;
        }*/

        # ------------------ return size for directory
        function getDirSize($path) {
            $size = 0;
            $path = realpath($path);
            if ($path !== false && $path != '' && file_exists($path) && basename($path) != "." && basename($path) != "..") {
                $pathArr = scandir($path);
                $i = 0;
                foreach ($pathArr as $item) {
                    $item = $path . "\\" . $item;
                    $pathArr[$i] = $item;
                    $i++;
                }
                // echo "<pre>";
                // print_r($pathArr);
                // echo "</pre>";
                //$size = getAllSize($pathArr);
                foreach($pathArr as $object) {
                    if (is_file($object)) {
                        // echo $object . "  ----F----  " . __LINE__ . "<br>" . "<br>";
                        $size += filesize($object);
                    } else if (is_dir($object)) {
                        // echo basename($object) . "<br>";
                        if (basename($object) != "." && basename($object) != "..") {
                            // echo $object . "  ----D----  " . __LINE__ . "<br>" . "<br>";
                            $size += getDirSize($object . "\\");
                        }
                    }
                }
            }
            return $size;
        }

        # ------------------
        if (isset($_GET["submit"])) {
            if ($path != "") {
                if (is_dir($path)) {
                    $dir = scandir($path);
                    foreach ($dir as $item) {
                        $itemPath = "";
                        $itemPath = $path . $item;
                        $_type = "";
                        $typeDes = "";
                        $sizeDes = 0;
                        # ------------------
                        if (is_file($itemPath)) {
                            $typeDes = strchr(basename($item), ".");
                            $sizeDes = formatSize(filesize($itemPath));
                            if ($typeDes == "") {$typeDes = "Unknown";}
                            if ($sizeDes == "") {$sizeDes = "Unknown";}
                            $_type = "<span class='file-size-box'>$sizeDes</span><span class='file-type-box'>$typeDes</span>";
                        # ------------------
                        } elseif (is_dir($itemPath)) {
                            if (basename($itemPath) != "." && basename($itemPath) != "..") {
                                if (count(explode("\\", $itemPath)) > 2) {
                                    $sizeDes = formatSize(getDirSize($itemPath));
                                } else {
                                    $sizeDes = "Unknown";
                                }

                                $_type = "<span class='folder-size-box'>$sizeDes</span><span class='folder-type-box'>Folder</span>";
                            }
                        }
                        echo createDirForm($item, $_type);
                    }
                } else {
                    echo "<i class='color-red'>the directory is not found</i>";
                }
            }
        }

        //file_put_contents(addslashes($path) . "new.txt", "");
        
        ?>

    </div>

    <script src="jquery.min.js"></script>
    <script src="script.js"></script>
    <script src="script2.js"></script>
</body>
</html>