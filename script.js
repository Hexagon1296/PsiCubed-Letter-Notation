let coll = document.getElementsByClassName("opened");

for(let i = 0;i<coll.length;i++){
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.parentElement;
    if (content.constructor.name=="HTMLDivElement"){
      content = this;
    }
    content = content.nextElementSibling
    if (content.style.maxHeight!="0px"){
      content.style.maxHeight = "0";
    } else {
      content.style.maxHeight = "none";
    }
  });
}
