const content = document.getElementById("contents");
const btn = document.getElementById("convert-btn");
const viewbox = document.getElementById("viewbox");
const copy = document.getElementById("copy-icon");
const modeswitch = document.getElementById("mode");
let markdown, html, mode;

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
});


copy.addEventListener("click", ()=>{
  document.getElementById("copy-icon").value = "Copied!";
  content.select();
  document.execCommand("copy");
});

const darkmode = () => {
  modeswitch.classList.add("active");
  document.documentElement.style.setProperty('--primary', " #21252B");
  document.documentElement.style.setProperty('--background', " #111111");
  document.documentElement.style.setProperty('--text', " #EDEDFF");
  mode = "dark";
}

const lightmode = () => {
  modeswitch.classList.remove("active");
  document.documentElement.style.setProperty('--primary', " #FFFFFF");
  document.documentElement.style.setProperty('--background', " #dffaff");
  document.documentElement.style.setProperty('--text', " #111111");
  mode = "light";
}
modeswitch.addEventListener("click",()=>{
  if (mode == "dark") {
    lightmode();
    console.log("changed to lightmode");
    localStorage.setItem("darkmode", false);
  } else {
    darkmode();
    console.log("changed to darkmode");
    localStorage.setItem("darkmode", true);
  }
});


document.addEventListener("DOMContentLoaded", ()=>{
  console.log("Loaded");
  console.log("darkmode: ", localStorage.getItem("darkmode"));
  if(localStorage.getItem("darkmode") == "false"){
    console.log("lightmode");
    lightmode();
  }else{
    console.log("darkmode");
    darkmode();
  }
});