const content = document.getElementById("contents");
const btn = document.getElementById("convert-btn");
const viewbox = document.getElementById("viewbox");
const copy = document.getElementById("copy-icon");
let markdown, html, mode;

let typingTimer; //timer identifier
let doneTypingInterval = 500; //time in ms (5 seconds)
let myInput = document.getElementById('contents');


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//on keyup, start the countdown
myInput.addEventListener('keyup', () => {
  clearTimeout(typingTimer);
  if (myInput.value) {
    typingTimer = setTimeout(updateviewbox, doneTypingInterval);
  }
});

//user is "finished typing," do something
const updateviewbox = ()=> {
  //do something
  markdown = content.value;
  html = marked(markdown);
  viewbox.innerHTML = html;
  hljs.highlightAll();
  document.getElementById("copy-icon").value = "Copy Code";
}

btn.addEventListener('click', ()=>{
  if (content.value != "") {
    if (btn.value === "Show HTML") {
      content.readOnly = true;
      btn.value = "Show Markdown";
      markdown = content.value;
      html = marked(markdown);
      viewbox.innerHTML = html;
      content.value = html;
    }
    else {
      btn.value = "Show HTML";
      content.value = markdown;
      content.readOnly = false;
    }
  } else {
    alert("Write something first");
  }
  hljs.highlightAll();
});


copy.addEventListener("click", ()=>{
  document.getElementById("copy-icon").value = "Copied!";
  content.select();
  document.execCommand("copy");
});