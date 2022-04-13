function change(){
    var section = document.querySelectorAll('.about-box, .img-box, .about-me-text, .about-me-title')
    var section2 =  document.querySelectorAll('.main-box, .sub-box, .sub-box2, .box2-title')
    
    if(btn.value=="Day"){
        btn.value= "Night";

        document.querySelector('body').style.backgroundColor='#282828';
        document.querySelector('body').style.color='white';

        for (var i = 0; i < section.length; i++) {
            var item = section.item(i);
            item.style.color = "white";
          }

        for (var i = 0; i < section2.length; i++) {
        var item = section2.item(i);
        item.style.color = "white";
        } 
    }
    else{
        btn.value="Day";

        document.querySelector('body').style.backgroundColor='white';
        document.querySelector('body').style.color='black';  

        for (var i = 0; i < section.length; i++) {
            var item = section.item(i);
            item.style.color = "black";
          }
        for (var i = 0; i < section2.length; i++) {
        var item = section2.item(i);
        item.style.color = "black";
        }   
    }
}

function typing(){
    if(index < content.length){
        txt += content[index];
        text.innerText = txt;
        index++;
    }
}

var btn = document.getElementById('day');

const content = "안녕하세요 김가빈입니다!"
const text = document.getElementById("dynamic");
let index=0;
let txt="";

setInterval(typing,120);


scrollTop('scrollButton', 500);

function scrollTop(elem_id,duration) {
	let target = document.getElementById(elem_id);

	target.addEventListener('click', function() {
		let currentY = window.pageYOffset; 
        let step;
        if ( duration/currentY > 1 ){
            step = 10;
        }
        else {
            step=100;
        }
		let timeStep = duration/currentY * step;
		let intervalID = setInterval(scrollUp, timeStep);

		function scrollUp(){
			currentY = window.pageYOffset;
			if(currentY === 0) {
				clearInterval(intervalID);
			} else {
				scrollBy( 0, -step );
			}
		}
	});
}