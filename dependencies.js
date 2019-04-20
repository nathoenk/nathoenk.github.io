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
  link.integrity = 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T';
  link.crossorigin = 'anonymous';
  head.appendChild(link);
}

//Load Bootstrap JS
function load_bootstrap_js() {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js';
  script.integrity = 'sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM';
  script.crossorigin = 'anonymous';
  head.appendChild(script);
}

//Load popper.js
function load_popper() {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js';
  script.integrity = 'sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1';
  script.crossorigin = 'anonymous';
  head.appendChild(script);
}

load_jquery();
load_bootstrap_css();
load_bootstrap_js();
load_popper();
