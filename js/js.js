$(function(){
    //.Qaの中の.accordion_headerがクリックされたら
    $('.Qa-Box .Qa .accordion_header').click(function(){
      //クリックされた.Qaの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
      $(this).next('.accordion_inner').slideToggle();
      $(this).toggleClass("open");
      //クリックされた.Qaの中の.accordion_header以外の.Qaeの中の.accordion_headerに隣接する.Qaの中の.accordion_innerを閉じる
      $('.Qa-Box .Qa .accordion_header').not($(this)).next('.Qa .accordion_inner').slideUp();
      $('.Qa-Box .Qa .accordion_header').not($(this)).removeClass("open");
      $('.Qa-Box .Qa .accordion_header.stay').not($(this)).toggleClass("open");
    });
  });