"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  var topBtn = $('.c-page-top');
  topBtn.hide(); // ボタンの表示設定

  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  }); // ボタンをクリックしたらスクロールして上に戻る

  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  }); //ドロワーメニュー

  $(".js-hamburger").on('click', function () {
    // if ($(".js-hamburger").hasClass("open")) {
    //   $(".js-drawer-menu").fadeOut();
    //   $(this).removeClass("open"); 
    $(".js-hamburger").toggleClass("open");
    $(".js-drawer-menu").toggleClass("open"); // } else {
    // $(this).toggleClass("open");
    // $(".menu").toggleClass("open");
    // $("html").toggleClass("is-fixed");
    // $(".js-drawer-menu").fadeIn();
    // $(this).addClass("open");
  }); // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    var time = 400;
    var header = $('header').innerHeight();
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top - header;
    $('html,body').animate({
      scrollTop: targetY
    }, time, 'swing');
    return false;
  }); //ヘッダー透過から変色

  $(function () {
    var imgHeight = $('.js-mv').outerHeight(); //画像の高さを取得。これがイベント発火位置になる。

    var header = $('.js-header'); //ヘッダーコンテンツ

    $(window).on('load scroll', function () {
      if ($(window).scrollTop() < imgHeight) {
        //メインビジュアル内にいるので、クラスを外す。
        header.removeClass('p-headerColor');
      } else {
        //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
        header.addClass('p-headerColor');
      }
    });
  }); //slickスライダー

  $(function () {
    $('#p-works-slick').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 3,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      dots: true,
      arrows: false,
      centerPadding: 0,
      centerMode: true,
      responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          centerPadding: 0,
          centerMode: true
        }
      }]
    });
  });
});