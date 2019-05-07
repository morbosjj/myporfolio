var modal = document.getElementById('myModal');
var i;
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");
var caption = document.getElementById('caption');
var TwiceImg = document.getElementById('twiceRedesign');
var jstoreImg = document.getElementById('jstoreProj');
var shiradorImg = document.getElementById('shiradorProj');

for(i=0; i<img.length; i++){
    img[i].onclick = function() {

        modal.style.display = "block";
        modalImg.src= this.src;
        caption.innerHTML = this.alt;

        if(this.alt == "Twice Redesign"){
            TwiceImg.style.display = "block";
            modalImg.style.display = "none";
            jstoreImg.style.display = "none";
           shiradorImg.style.display = "none";

        }else if(this.alt == "Jstore"){
           TwiceImg.style.display = "none";
           shiradorImg.style.display = "none";
           jstoreImg.style.display = "block";
           jstoreImg.style.marginTop = "30px";
           modalImg.style.display = "block";
        
       }else if(this.alt == "shirador-dashboard"){
           TwiceImg.style.display = "none";
           jstoreImg.style.display = "none";
           modalImg.style.display = "block";
           shiradorImg.style.display = "block";
       }else{
           modalImg.style.display = "block";
           TwiceImg.style.display = "none";
           jstoreImg.style.display = "none";
        }
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
