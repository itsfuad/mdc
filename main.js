const content = document.getElementById("contents");
const btn = document.getElementById("convert-btn");
const viewbox = document.getElementById("viewbox");

const cvt = ()=>{
  console.log("converted");
  viewbox.innerHTML = marked(content.value);
  return false;
}
