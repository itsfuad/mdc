const content = document.getElementById("contents");
const btn = document.getElementById("convert-btn");
const viewbox = document.getElementById("viewbox");
let markdown, html, temp;

let typingTimer; //timer identifier
let doneTypingInterval = 500; //time in ms (5 seconds)
let myInput = document.getElementById('contents');


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
}

btn.addEventListener('click', ()=>{
  if (content.value != "") {
    if (btn.value === "Show HTML") {
      btn.value = "Show Markdown";
      markdown = content.value;
      html = marked(markdown);
      viewbox.innerHTML = html;
      content.value = html;
    }
    else {
      btn.value = "Show HTML";
      content.value = markdown;
    }
  } else {
    alert("Write something first");
  }
  
});