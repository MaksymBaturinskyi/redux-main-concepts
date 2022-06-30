const html = document.documentElement;
const body = document.body;
const div = document.querySelector('div');
const ul = document.querySelector("ul");
const li = document.querySelector("li");
const pause = 200;

//Bubble

html.addEventListener("click", callback);
body.addEventListener("click", callback);
div.addEventListener("click", callback);
ul.addEventListener("click", callback);
li.addEventListener("click", callback);

//Capture

html.addEventListener("click", callback, true);
body.addEventListener("click", callback, true);
div.addEventListener("click", callback, true);
ul.addEventListener("click", callback, true);
li.addEventListener("click", callback, true);


function callback(e) {
  var ms = e.timeout = (e.timeout + pause) || 0;
  var target = e.currentTarget;
  console.log(ms, target);

  setTimeout(function () {
    target.classList.add("highlight");
    setTimeout(function () {
      target.classList.remove("highlight");
    }, pause);
  }, ms);
}

