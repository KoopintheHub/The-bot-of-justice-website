$(document).ready(function() {
  $('body').on('contextmenu', function() {
    return false;
  });
  $('body').on('dragstart', function() {
    return false;
  });
});
