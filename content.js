if (location.pathname.startsWith("/shorts")) {
  location.replace("https://www.youtube.com/");
}

function blockShorts() {
  if (location.pathname.startsWith("/shorts")) {
    location.replace("https://www.youtube.com/");
  }
}

function removeShortsButton() {
  document.querySelectorAll(".yt-simple-endpoint.style-scope.ytd-guide-entry-renderer")
  .forEach(el => {
    if (el.href && el.href.includes("/shorts")) {
      el.closest("ytd-guide-entry-renderer")?.remove();
    }
  });
}

function clean() {
  blockShorts();
  removeShortsButton();
}

const observer = new MutationObserver(clean);

function start() {
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
  clean();
}

if (document.documentElement) start();
else window.addEventListener("DOMContentLoaded", start);