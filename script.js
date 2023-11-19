document.getElementById("toggle-menu-btn").addEventListener("click", function(){
    document.getElementById("toggleMenu").style.left="0";
    document.getElementById("cover").style.display="block";
});

document.getElementById("closetoggle").addEventListener("click", function(){
    document.getElementById("toggleMenu").style.left="-269px";
    document.getElementById("cover").style.display="none";
});

document.getElementById("cover").addEventListener("click", function(){
  var toggleMenu = document.getElementById("toggleMenu");
  if(toggleMenu.style.left === "0px"){
      toggleMenu.style.left = "-269px";
      document.getElementById("cover").style.display = "none";
  } else {
      toggleMenu.style.left = "0px";
      document.getElementById("cover").style.display = "block";
  }
});


document.getElementById("sort").addEventListener("click", function(){
    if(document.getElementById("sortMenu").style.display==="block"){
        document.getElementById("sortMenu").style.display="none";
        document.getElementById("sortBtn").style.border="none";
        document.getElementById("sortBtn").style.color="#000";
      document.getElementById("sort").style.color="#000";
    }
    else{
        document.getElementById("sortMenu").style.display="block";
        document.getElementById("sortBtn").style.border="#0e78e3 1px solid";
        document.getElementById("sortBtn").style.color="#0e78e3";
      document.getElementById("sort").style.color="#0e78e3";
    }
});


document.getElementById("recommended").addEventListener("click", function(){
    document.getElementById("sortMenu").style.display="none";
    document.getElementById("sortBtn").style.border="none";
    document.getElementById("sortBtn").style.color="#000";
  document.getElementById("sort").style.color="#000";
  document.getElementById("sort").innerHTML="Recommended &#9662;";
})

document.getElementById("curated").addEventListener("click", function(){
    document.getElementById("sortMenu").style.display="none";
    document.getElementById("sortBtn").style.border="none";
    document.getElementById("sortBtn").style.color="#000";
  document.getElementById("sort").style.color="#000";
  document.getElementById("sort").innerHTML="Curated &#9662;";
})

document.getElementById("mostappreciated").addEventListener("click", function(){
    document.getElementById("sortMenu").style.display="none";
    document.getElementById("sortBtn").style.border="none";
    document.getElementById("sortBtn").style.color="#000";
  document.getElementById("sort").style.color="#000";
  document.getElementById("sort").innerHTML="Most Appreciated &#9662;";
})

document.getElementById("mostviewed").addEventListener("click", function(){
    document.getElementById("sortMenu").style.display="none";
    document.getElementById("sortBtn").style.border="none";
    document.getElementById("sortBtn").style.color="#000";
  document.getElementById("sort").style.color="#000";
  document.getElementById("sort").innerHTML="Most Viewed &#9662;";
})

document.getElementById("mostdiscussed").addEventListener("click", function(){
    document.getElementById("sortMenu").style.display="none";
    document.getElementById("sortBtn").style.border="none";
    document.getElementById("sortBtn").style.color="#000";
  document.getElementById("sort").style.color="#000";
  document.getElementById("sort").innerHTML="Most Discussed &#9662;";
})

document.getElementById("mostrecent").addEventListener("click", function(){
    document.getElementById("sortMenu").style.display="none";
    document.getElementById("sortBtn").style.border="none";
    document.getElementById("sortBtn").style.color="#000";
  document.getElementById("sort").style.color="#000";
  document.getElementById("sort").innerHTML="Most Recent &#9662;";
})