const stars = document.querySelectorAll('.star');
const output = document.querySelector('.output');

for(x=0; x<stars.length; x++){
    stars[x].starValue = (x+1);

    ["click", "mouseover", "mouseout"].forEach(function(e){
        stars[x].addEventListener(e, showRating);
    })
}

function showRating(e){
    let type = e.type;
    let starValue = this.starValue;

    stars.forEach(function(elem, ind){
        if(type === 'click'){
            if(ind < starValue){
                elem.classList.add("orange");
            }else{
                elem.classList.remove("orange");
            }
        }
        if(type === 'mouseover'){
            if(ind < starValue){
                elem.classList.add("yellow");
            }else{
                elem.classList.remove("yellow");
            }
        }
        if(type === 'mouseout'){
            
                elem.classList.remove("yellow");
        }
    })
}