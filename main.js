const content = document.getElementById("contents");
const btn = document.getElementById("convert-btn");
const viewbox = document.getElementById("viewbox");
const bk = document.getElementById('bk');
let markdown;
const cvt = ()=>{
  console.log("converted");
  markdown = content.value;
  let html = marked(markdown);
  viewbox.innerHTML = html;
  content.value = html;
  btn.value = "Converted to HTML";
  btn.disabled = true;
  bk.disabled = false;
  return false;
}
bk.addEventListener('click', ()=>{
  content.value = markdown;
  btn.disabled = false;
  btn.value = "Convert to HTML";
});