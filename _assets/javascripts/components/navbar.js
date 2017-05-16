(function () {

  var bodyClassName = document.body.className;
  var bodyClassNameIsScrolled = false;

  window.onscroll = function (event) {
    if (window.scrollY > 0 && bodyClassNameIsScrolled === false) {
      document.body.className = document.body.className.trim() + ' is-scrolled';
      bodyClassNameIsScrolled = true;
    } else if (window.scrollY === 0 && bodyClassNameIsScrolled === true) {
      document.body.className = document.body.className.replace('is-scrolled', '').trim();
      bodyClassNameIsScrolled = false;
    }
  }
}());
