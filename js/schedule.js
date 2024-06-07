const initialize = () => {
  addPreventZoomEventListener();
};

window.onload = initialize;

const addPreventZoomEventListener = () => {
  const body = document.body;
  body.addEventListener("touchstart", preventZoom);
  body.addEventListener("touchmove", preventZoom);
  body.addEventListener("dragenter", preventZoom);
  body.addEventListener("dragleave", preventZoom);
  body.addEventListener("touchend", preventZoom);
};

const preventZoom = () => {
  document.body.style.zoom = 1;
};
