import './style.css'
import '/l2d/main'

// document.querySelector('#live2d').innerHTML = ``

// stupid, but i can do nothing
(function prependBase() {
  document.querySelectorAll("a").forEach((link) => {
    let url = link.getAttribute("href");
    if (url?.startsWith("/")) {
      url = import.meta.env.BASE_URL + url.slice(1);
      link.setAttribute("href", url);
    }
  });
})();