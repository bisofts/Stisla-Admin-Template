$('#toggle-modal').fireModal({
  title: 'My Modal',
  body: 'Hello!'
});
$('#toggle-modal-1').fireModal({
  title: 'My Modal',
  body: 'Hello, dude!',
  buttons: [
    {
      text: 'Close',
      class: 'btn btn-secondary',
      handler: function(current_modal) {
      $.destroyModal(current_modal);
      }
    }
  ]
});
$.chatCtrl('#mychatbox', {
  text: 'Halo',
  picture: '../dist/img/avatar/avatar-1.png'
});
$("#chat-form").submit(function() {
  var me = $(this),
      this_text = me.find('input').val(),
      this_picture = '../dist/img/avatar/avatar-1.png';

  me.find('input').val('');
  $.chatCtrl("#mychatbox-1", {
    text: this_text,
    picture: this_picture
  });
  return false;
});

let sticky = false, ls = 0, scrollup = false, lp = 0;
$(window).scroll(function() {
  let nav = $('.docs-nav'), st = $(this).scrollTop();

  $(".nav-pills a").each(function() {
    let href = $(this).attr('href');

    if($(href).length) {
      if(st >= $(href).offset().top - 5) {
        $(".nav-pills a").removeClass('active');
        $(".nav-pills a[href='" + href + "']").addClass('active');
      }
    }
  });
});

let responsive = function() {
  if($(window).outerWidth() > 768) {
    $(".docs-nav").stick_in_parent();
  }else{
    $(".docs-nav").trigger("sticky_kit:detach");
  }
}

responsive();
$(window).resize(function() {
  responsive();
});

$(".docs-toggle").click(function() {
  $(".docs-nav").fadeToggle();
  return false;
});