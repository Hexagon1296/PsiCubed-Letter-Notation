let coll = document.getElementsByClassName("opened");

for(let i = 0;i<coll.length;i++){
  let el = coll[i];
  let content = el.parentElement;
  if (content.constructor.name=="HTMLDivElement"){
    content = el;
  }
  content = content.nextElementSibling
  content.style.maxHeight = content.scrollHeight + "px";
  el.addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.parentElement;
    if (content.constructor.name=="HTMLDivElement"){
      content = this;
    }
    content = content.nextElementSibling
    if (content.style.maxHeight!="0px"){
      content.style.maxHeight = "0";
    } else {
      height = content.scrollHeight
      content.style.maxHeight = height + "px";
      content = content.parentElement
      while (content.constructor.name!="HTMLDivElement"){
        content.style.maxHeight = height+(content.style.maxHeight.slice(0,-2)) + "px";
        content = content.parentElement
      }
    }
  });
}
