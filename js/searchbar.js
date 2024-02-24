let gallery = document.getElementsByClassName("img-gallery")[0];
let  counter = 0;
let searchingFlag = false;

function search() {
  let input, filter, imgBoxes, desc, i, txtValue, width;
  counter = 0;
  input = document.getElementById("search");
  if(input.value.length > 0) {
    searchingFlag = true;
  }
  else {
    searchingFlag = false;
  }
  filter = input.value.toUpperCase();
  imgBoxes = document.getElementsByClassName("img-box");

  for (i = 0; i < imgBoxes.length; i++) {
    desc = imgBoxes[i].getElementsByClassName("img-desc")[0];
    txtValue = desc.textContent || desc.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      imgBoxes[i].style.display = "";
      counter++;
    } else {
      imgBoxes[i].style.display = "none";
    }
  }

  //prevent input from toggling
  if(input.value.length > 0 && !input.classList.contains("open")) {
    input.classList.add("open");
  }
  else if(input.value.length == 0 && input.classList.contains("open")) {
    input.classList.remove("open");
  }

  width = window.innerWidth;
  if(width > 1024) {
    if(counter > 2) {
      gallery.style.gridTemplateColumns="auto auto auto";
    }
    else if(counter == 2) {
      gallery.style.gridTemplateColumns="auto auto";
    }
    else {
      gallery.style.gridTemplateColumns="auto";
    }
  }
  else if(width <= 768) {
    gallery.style.gridTemplateColumns="auto";
  }
  else if(width <= 1024) {
    if(counter >= 2) {
      gallery.style.gridTemplateColumns="auto auto";
    }
    else {
      gallery.style.gridTemplateColumns="auto";
    }
  }
}

  //media queries for img-gallery
  let widthSmall = window.matchMedia("(max-width: 768px)");
  let widthMedium = window.matchMedia("(min-width: 769px) and (max-width: 1024px)");
  let widthLarge = window.matchMedia("(min-width: 1025px)");

  if(widthSmall.matches) {
    gallery.style.gridTemplateColumns="auto";
  }
  else if(widthMedium.matches) {
    gallery.style.gridTemplateColumns="auto auto";
  }
  else if(widthLarge.matches) {
    gallery.style.gridTemplateColumns="auto auto auto";
  }

  widthSmall.addEventListener("change", function(event) {
    if (event.matches && !searchingFlag) {
      gallery.style.gridTemplateColumns="auto";
    }
  });
  
  widthMedium.addEventListener("change", function(event) {
    if (event.matches && !searchingFlag) {
      gallery.style.gridTemplateColumns="auto auto";
    }
  });
  
  widthLarge.addEventListener("change", function(event) {
    if (event.matches && !searchingFlag) {
      gallery.style.gridTemplateColumns="auto auto auto";
    }
  });

