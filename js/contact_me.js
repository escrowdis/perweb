function copyToClipboard(element) {
    var el = document.getElementById("copy_email");
    var t_copied = "Copied!";
    if (el.firstChild.data == t_copied) return;
    
    $temp_data = el.firstChild.data;
    var $temp_bg_color = window.getComputedStyle(el).backgroundColor;
    var $temp_border_color = window.getComputedStyle(el).borderColor;
    
    el.firstChild.data = t_copied;
    el.style.borderColor = "rgb(26, 184, 75)";
    el.style.backgroundColor = "rgb(11, 184, 65)";
    setTimeout(function() {
      el.firstChild.data = $temp_data;
      el.style.backgroundColor = $temp_bg_color;
      el.style.borderColor = $temp_border_color;
    }, 1500);
  }