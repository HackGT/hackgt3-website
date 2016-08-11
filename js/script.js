$(document).ready(function(e) {
    
    // Navbar Scroll
    $('#test').scrollToFixed();
    $('.res-nav_click').click(function(){
        $('.main-nav').slideToggle();
        return false    
        
    });

    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();

    //Scroll Jacking (commented this out in case if you want to include)
    // $(window).load(function(){
        
    //     $('.main-nav li a').bind('click',function(event){
    //         var $anchor = $(this);
            
    //         $('html, body').stop().animate({
    //             scrollTop: $($anchor.attr('href')).offset().top - 102
    //         }, 1500,'easeInOutExpo');
    //         /*
    //         if you don't want to use the easing effects:
    //         $('html, body').stop().animate({
    //             scrollTop: $($anchor.attr('href')).offset().top
    //         }, 1000);
    //         */
    //         event.preventDefault();
    //     });
    // })

    //Sponsor Filter
      
      $(window).smartresize(function(){
      var $container = $('.sponsorContainer'),
      $body = $('body'),
      colW = 375,
      columns = null;

  
      $container.isotope({
        // disable window resizing
        resizable: true,
        masonry: {
          columnWidth: colW
          }
        });

        // check if columns has changed
        var currentColumns = Math.floor( ( $body.width() -30 ) / colW );
        if ( currentColumns !== columns ) {
          // set new column count
          columns = currentColumns;
          // apply width to container manually, then trigger relayout
          $container.width( columns * colW )
            .isotope('reLayout');
        }
        
      }).smartresize(); // trigger resize to set container width
      $('.tierFilter a').click(function(){
            $('.tierFilter .current').removeClass('current');
            $(this).addClass('current');
     
            var selector = $(this).attr('data-filter');
            $container.isotope({
                
                filter: selector,
             });
             return false;
        });
        
});