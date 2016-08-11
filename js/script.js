$(document).ready(function(){
  $('.background').parallax();
  
  //Phone [booty] shake
  setTimeout(function(){
    $('#phone').addClass('shake');
    setTimeout(function(){
      $('#phone').attr('src', 'img/phoneB.png');
      setTimeout(function(){
        $('#phone').removeClass('shake');
      }, 750);
    }, 100);
  }, 5000);

  //Open the modal box
  $('.openmodal').on('click', function() {
    var id = this.id;
    $('#question-modal').modal('show');
    //FAQs for each item
    switch(id) {
      case 'laptop':
        $('.title').append('Am I allowed to use past projects?');
        $('.answer').append("<p>Using past code is heavily discouraged - do you really want to ruin the fun? However, you're more than welcome to use open-source projects and libraries (e.g., Bootstrap) as well as existing platforms and services (like Twilio's API).</p>");
        break;
      case 'phone':
        $('.title').append('How do I know I\'m eligible? Where do I apply?');
        $('.answer').append("<p>You can apply at the button below! Prior experience isn't required, although it'll make the hackathon 10x more fun. [NOT FINISHED. UP TO APP TEAM TO DECIDE].</p>");
        $('.modal-footer').append('<a href="https://apply.hackgt.com" class="btn btn-small">Apply Here!</a>');
        break;
      case 'notebook':
        $('.title').append('What should I bring?');
        $('.answer').append("<p>Everything you need to be a healthy and hygienic human being for two nights. After you pack your laptops, phones, chargers, headphones, and other electronic gear, be sure to grab your toothbrush, toothpaste, deodorant, contact solution, towel, and whatever else you may need. Keep it minimal.</p>");
        break;
      case 'tea':
        $('.title').append('What about the food?');
        $('.answer').append("<p>We'll be posting SnackGT reveals soon. We'll provide Friday dinner to Sunday breakfast, and yes, we will serve food that is better than pizza.</p>");
        break;        
      case 'headphones':
        $('.title').append('How much does it cost to attend?');
        $('.answer').append("<p>HackGT is absolutely, 100% free of charge. We'll cover all of your meals and associated costs for the entire weekend. Take advantage of this.</p>");
        break;      
      case 'peach':
        $('.title').append('Do you offer travel reimbursement?');
        $('.answer').append("<p>We're offering up to $300 in travel reimbursements for eligible hackers. Let us know what you need through email and we'll reach out personally to you.</p>");
        break;        
      case 'raspberry_pi':
        $('.title').append('What is HackGT?');
        $('.answer').append("<p>HackGT is Georgia Tech's first official national hackathon. Over 1,000 hackers from across the nation travel by bus and plane to represent their universities at the biggest event in the Deep South. Grab up to 3 teammates and prepare to rock n roll.</p>");
        $('.modal-footer').append('<a href="https://sponsors.hackgt.com/" class="btn btn-small">Interested in Sponsoring? Click Here!</a>');
        break;
      default:
        break;
    }

  });

  //close modal box
  $('.close').on('click', function() {
    $('.title').empty();
    $('.answer').empty();
    $('.modal-footer').empty();
    $('#question-modal').modal('hide');
  });

});