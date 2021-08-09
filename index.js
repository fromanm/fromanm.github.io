const thing = import("./info.html");

const info = `
<span><p>Info</p></span>`;

function fetchPage(page, onSuccess) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function (e) {
    onSuccess(e.target.responseXML);
  };
  xhr.open("GET", page, true);
  xhr.responseType = "document";
  //   xhr.onreadystatechange = function (e) {
  //     console.log("READY STATE CHANGE", e.target);
  //     if (e.target.readyState !== 4) {
  //       return;
  //     } else if (e.target.status !== 200) {
  //       return;
  //     }
  //     onSuccess(e.target.responseText);
  //   };
  xhr.send();
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("Loaded", thing);

  //   fetchPage("info.html", function (html) {
  //   document.getElementById("content").innerHTML = thing;
  //   });
});
