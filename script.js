document.querySelectorAll('.butterfly').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left = (Math.random() * 870 + 10) + "px";
    el.style.top = (Math.random() * 145 + 325) + "px";
  });
});

document.querySelectorAll('.foo').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left = (Math.random() * 455 + 365) + "px";
    el.style.top = (Math.random() * 115 + 195) + "px";
  });
});