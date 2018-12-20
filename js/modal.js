// Change url back to base url after closing modal (for Google Analytics)
$('[id*=portfolioModal]').on('hidden.bs.modal', function (e) {
  window.history.pushState("", "", '/');
  ga('send', 'pageview');
})

// Refresh and redirect to modal
$(document).ready(function() {
  var keyword = window.location.href.indexOf('#portfolioModal');
  if(keyword != -1) {
    var id_post = location.href.substring(keyword, location.href.length);
    $(id_post).modal('show');
  }
});