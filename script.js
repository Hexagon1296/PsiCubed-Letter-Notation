let coll = document.getElementsByClassName("opened");

for(let i = 0;i<coll.length;i++){
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    alert(this.parentElement.nextElementSibling.style.maxHeight);
    var content = this.parentElement.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = "0";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
