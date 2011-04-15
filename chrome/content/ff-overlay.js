hnsubmitter.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ hnsubmitter.showFirefoxContextMenu(e); }, false);
};

hnsubmitter.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-hnsubmitter").hidden = gContextMenu.onImage;
};

window.addEventListener("load", hnsubmitter.onFirefoxLoad, false);
