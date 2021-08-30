const content = document.getElementById("contents");
const btn = document.getElementById("convert-btn");
const viewbox = document.getElementById("viewbox");
const copy = document.getElementById("copy-icon");
const modeswitch = document.getElementById("mode");
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


copy.addEventListener("click", ()=>{
  document.getElementById("txtbox").classList.toggle("copied");
  content.select();
  document.execCommand("copy");
});
let mode = "light";
modeswitch.addEventListener("click",()=>{
  if (mode == "dark") {
    modeswitch.classList.remove("active");
    document.documentElement.style.setProperty('--primary', " #EFF6FF");
    document.documentElement.style.setProperty('--background', " #EBEDFF");
    document.documentElement.style.setProperty('--text', " #111111");
    mode = "light";
  } else {
    modeswitch.classList.add("active");
    document.documentElement.style.setProperty('--primary', " #21252B");
    document.documentElement.style.setProperty('--background', " #111111");
    document.documentElement.style.setProperty('--text', " #EDEDFF");
    mode = "dark";
  }
});