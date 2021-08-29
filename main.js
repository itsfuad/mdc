const content = document.getElementById("contents");
const btn = document.getElementById("convert-btn");
const viewbox = document.getElementById("viewbox");

let markdown;
const cvt = ()=>{
  console.log("converted");
  markdown = content.value;
  let html = marked(markdown);
  viewbox.innerHTML = html;
  content.value = html;
  return false;
}
document.getElementById('bk').addEventListener('click', ()=>{
  content.value = markdown;
});