var reloading;

function reload() {
  reloading = setTimeout("window.location.reload();", 25 * 1000);
  document.getElementById("reloadCB").checked = true;
}

function checkReloading() {
  if (document.getElementById("reloadCB").checked) {
    reload();
  }
}

function toggleAutoRefresh(cb) {
  if (cb.checked) {
    reload();
  } else {
    clearTimeout(reloading);
  }
}

window.onload = checkReloading;
