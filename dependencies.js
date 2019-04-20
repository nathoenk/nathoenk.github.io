//Load JQuery
function load_jquery() {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js';
  head.appendChild(script);
}

//Load Bootstrap CSS
function load_bootstrap_css() {
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
  head.appendChild(link);
}

//Load Bootstrap JS
function load_bootstrap_js() {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js';
  head.appendChild(script);
}

//Load popper.js
function load_popper() {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js';
  head.appendChild(script);
}

load_jquery();
load_bootstrap_css();
load_bootstrap_js();
load_popper();
