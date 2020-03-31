<?php include_once('head.php') ?>
<main>
<p class="packman"><img src="./img/item_ghost.png" alt="pack"></p>
<nav id="gnb">
<div class="btn_close"><p><img src="./img/icon_btn.png" alt="active_btn"></p></div>
    <ul>
        <li id="scroll1" class="nav_list">
            <p class="page_Text">Home</p>
            <a href="#profile_section"><img src="./img/icon_nav_5.png" alt="nav_icon1"></a>
        </li>
        <li id="scroll2" class="nav_list">
        <p class="page_Text">Profile</p>
            <a href="#skill_section"><img src="./img/icon_nav_1.png" alt="nav_icon1"></a
            ></li>
        <li id="scroll3" class="nav_list">
        <p class="page_Text">Skill</p>
            <a href="#portfolio_section"><img src="./img/icon_nav_2.png" alt="nav_icon2"></a>
        </li>
        <li id="scroll4" class="nav_list">
        <p class="page_Text">Portfolio</p>
            <a href="#contact_section"><img src="./img/icon_nav_3.png" alt="nav_icon4"></a>
        </li>
        <li id="scroll5" class="nav_list">
        <p class="page_Text">Contact</p>
            <a href="#contact_section"><img src="./img/icon_nav_4.png" alt="nav_icon4"></a>
        </li>
    </ul>
</nav>
<section id="main_section"  class="m_mainSection" tabindex="0">
    <div class="main_txt_wrapper">
        <h1 id="title">WEB PUBLISHER</h1>
        <p>개발자를 꿈꾸는 웹 퍼블리셔<br>
            서동혁입니다</p>
        <p id="play_txt" class="text_main">
            - Press any key -
        </p>
        <p id="mobile_txt" class="text_main">
            - Scroll ! -
        </p>
    </div>
</section>
<?php include_once('profile.php') ?>
<?php include_once('portfolio.php') ?>
<?php include_once('contact.php') ?>
</main>
<?php include_once('tail.php') ?>