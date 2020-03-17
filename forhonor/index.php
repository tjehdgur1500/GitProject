<?php include_once('head.php') ?>
<section id="scroll-wrapper">
<div class="page-wrapper" id="color-1">
<nav class="nav_controls">
    <img src="./img/icon/icon_move.png" alt="scroll" class="movement">
    <ul class="top_controls">
        <audio src="./img/video/main.mp3" autoplay loop id="main_audio"></audio>
        <li>
            <a href="https://www.ubisoft.com/en-us/" target="_blank" rel="noopener noreferrer"><img src="./img/icon/icon_company.png" alt="link"></a>
        </li>
        <li id="audio_btn" >
            <img src="./img/icon/icon_vol_off.png" alt="play" style="cursor:pointer" class="btnAudio" onclick="audioPlay()">
        </li>
        <li id="audio_btn_off" >
            <img src="./img/icon/icon_vol_on.png" alt="pause" style="cursor:pointer" class="btnAudio" onclick="audioPause()">
        </li>
    </ul>
    <ul class="bottom_controls">
        <li>
            <img src="./img/icon/icon_update.png" alt="Update" id="update-btn">
            <p>UPDATE</p>
        </li>
        <li>
            <img src="./img/icon/icon_buy.png" alt="buy" id="buy-btn">
            <p>BUY</p>
        </li>
    </ul>
</nav>
<div class="main_content">
    <h1 id="title"><img src="./img/logo/logo.png" alt="logo"></h1>  
    <p class="title_text">
        대격변 이후 가장 치열한<br>  
        포아너의 전투에 참가하세요 
    </p>
    <ul class="main-list">
        <li>
            <p><strong>게임소개</strong></p>
            <img src="./img/item/item_main_01.png" alt="info">
        </li>
        <li>
            <p><strong>모드</strong></p>
            <img src="./img/item/item_main_02.png" alt="mod">
        </li>
        <li>
            <p><strong>진영</strong></p>
            <img src="./img/item/item_main_03.png" alt="faction">
        </li>
        <li>
            <p><strong>영웅</strong></p>
            <img src="./img/item/item_main_04.png" alt="char">
        </li>
    </ul>
    <script>
        var audio = document.querySelector("#main_audio");
        var audioOn = document.querySelector("#audio_btn");
        var audioOff = document.querySelector("#audio_btn_off");
    function audioPlay() {
    audio.play();
    audioOn.style.display = "block";
    audioOff.style.display = "block";
    }

    function audioPause() {
    audio.pause();
    audioOff.style.display = "none";
    }
    </script>
</div>
<img src="./img/item/dust.png" alt="dust" class="dust">
</div>
<?php include_once('info.php') ?>
<?php include_once('mode.php') ?>
<?php include_once('faction.php') ?>
<?php include_once('status.php') ?>
<?php include_once('char.php') ?>
<?php include_once('buy.php') ?>
<?php include_once('footer.php') ?>

<!-- tail -->
<?php include_once('tail.php') ?>