let coll = document.getElementsByClassName("collapser");
let next = document.getElementById("next");
let cont = document.getElementsByClassName("content")[0];
next.style.top = next.offsetTop - 15 + "px";

for(let i = 0;i<coll.length;i++){
  let el = coll[i];
  let content = el.parentElement;
  if (content.constructor.name=="HTMLDivElement"){
    content = el.nextElementSibling;
  }
  content = content.nextElementSibling
  content.style.maxHeight = content.scrollHeight + "px";
  el.addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.parentElement;
    if (content.constructor.name=="HTMLDivElement"){
      content = this.nextElementSibling;
    }
    content = content.nextElementSibling;
    if (content.style.maxHeight!="0px"){
      content.style.maxHeight = "0px";
      let height = content.scrollHeight;
      content = content.parentElement;
      while (content.constructor.name!="HTMLDivElement"){
        content.style.maxHeight = (+(content.style.maxHeight.slice(0,-2)))-height + "px";
        content = content.parentElement;
      }
      this.src = "/PsiCubed-Letter-Notation/close.png";
    } else {
      let height = content.scrollHeight
      content.style.maxHeight = height + "px";
      content = content.parentElement;
      while (content.constructor.name!="HTMLDivElement"){
        content.style.maxHeight = height+(+(content.style.maxHeight.slice(0,-2))) + "px";
        content = content.parentElement;
      }
      this.src = "/PsiCubed-Letter-Notation/open.png";
    }
  });
}
