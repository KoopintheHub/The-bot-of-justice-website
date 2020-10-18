$(document).ready(function() {
  $('body').on('contextmenu', function() {
    return false;
  });
  $('code').on('contextmenu', function() {
    return true;
  });
  $('body').on('dragstart', function() {
    return false;
  });
});
