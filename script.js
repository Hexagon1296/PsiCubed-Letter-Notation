let coll = document.getElementsByClassName("open");

for(let i = 0;i<coll.length;i++){
 coll[i].addEventListener("click", function() {
    this.classList.toggle("closed");
    var content = this.parentElement.nextElementSibling;
    alert(content);
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
