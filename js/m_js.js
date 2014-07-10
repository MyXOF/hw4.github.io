//function $(id){return document.getElementsByClassName(id);}
var autokey = false;

function MoveLPicture(elementClass,final_x,final_y,interval){
	if(!document.getElementsByClassName) return false;
  	if(!document.getElementsByClassName(elementClass)) return false;
  	var elem = document.getElementsByClassName(elementClass);
  	if(elem.movement) {
    	clearTimeout(elem.movement);
  	}
  	if(!elem.style.left){
  		elem.style.left = 0 + "px";
  	}
  	if(!elem.style.top){
  		elem.style.top = 0 + "px";
  	}
  	var xpos = parseInt(elem.style.left);
  	var ypos = parseInt(elem.style.top);

  	if((xpos == final_x) && (ypos == final_y)){
  		return true;
  	}
  	if (xpos < final_x) {
    	var dist = Math.ceil((final_x - xpos)/10);
    	xpos = xpos + dist;
  	}
  	if (xpos > final_x) {
    	var dist = Math.ceil((xpos - final_x)/10);
    	xpos = xpos - dist;
  }
  if (ypos < final_y) {
    	var dist = Math.ceil((final_y - ypos)/10);
    	ypos = ypos + dist;
  }
  if (ypos > final_y) {
    	var dist = Math.ceil((ypos - final_y)/10);
    	ypos = ypos - dist;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+elementClass+"',"+final_x+","+final_y+","+interval+")";
  elem.movement = setTimeout(repeat,interval);
}

function MoveRPicture(elementClass,final_x,final_y,interval){
	if(!document.getElementsByClassName) return false;
  	if(!document.getElementsByClassName(elementClass)) return false;
  	var elem = document.getElementsByClassName(elementClass);
  	if(elem.movement) {
    	clearTimeout(elem.movement);
  	}
  	if(!elem.style.right){
  		elem.style.right = 0 + "px";
  	}
  	if(!elem.style.top){
  		elem.style.top = 0 + "px";
  	}
  	var xpos = parseInt(elem.style.right);
  	var ypos = parseInt(elem.style.top);

  	if((xpos == final_x) && (ypos == final_y)){
  		return true;
  	}
  	if (xpos < final_x) {
    	var dist = Math.ceil((final_x - xpos)/10);
    	xpos = xpos + dist;
  	}
  	if (xpos > final_x) {
    	var dist = Math.ceil((xpos - final_x)/10);
    	xpos = xpos - dist;
  }
  if (ypos < final_y) {
    	var dist = Math.ceil((final_y - ypos)/10);
    	ypos = ypos + dist;
  }
  if (ypos > final_y) {
    	var dist = Math.ceil((ypos - final_y)/10);
    	ypos = ypos - dist;
  }
  elem.style.right = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+elementClass+"',"+final_x+","+final_y+","+interval+")";
  elem.movement = setTimeout(repeat,interval);
}

function manualPlay(txt,direction){
  var box = document.getElementsByClassName("box");
  box.onmouseover = function(){autokey = true;};
  box.onmouseout = function(){autokey = false;};
  if(direction == 1){
    var leftImg = document.getElementsByClassName("lcurrent");
    var rightImg = document.getElementsByClassName("rcurent");
    var curentNum = parseInt(leftImg.id);
    var nextNum = (curentNum + 1) % 5;

    var nextImgL = document.createElement("img");
    nextImgL.src = txt[nextNum].leftpos;
    nextImgL.alt = "";
    var nextImgR = document.createElement("img");
    nextImgR.src = txt[nextNum].rightpos;
    nextImgR.alt = "";

    var ldiv = document.createElement("div");
    ldiv.id = nextNum;
    ldiv.class = "lnext";
    nextImgL.appendTo(ldiv);
    ldiv.appendTo(document.getElementsByClassName("box1"));

    var rdiv = document.createElement("div");
    rdiv.id = nextNum;
    rdiv.class = "rnext";
    nextImgR.appendTo(rdiv);
    rdiv.appendTo(document.getElementsByClassName("box2"));

    moveLPicture(lnext,0,0,5);
    moveRPicture(rnext,0,0,5);
    NextToCurrent();
  }
  else{
    var leftImg = document.getElementsByClassName("lcurrent");
    var rightImg = document.getElementsByClassName("rcurent");
    var curentNum = parseInt(leftImg.id);
    var nextNum = (curentNum - 1) % 5;

    var nextImgL = document.createElement("img");
    nextImgL.src = txt[nextNum].leftpos;
    nextImgL.alt = "";
    var nextImgR = document.createElement("img");
    nextImgR.src = txt[nextNum].rightpos;
    nextImgR.alt = "";

    var ldiv = document.createElement("div");
    ldiv.id = nextNum;
    ldiv.class = "lnext";
    nextImgL.appendTo(ldiv);
    ldiv.appendTo(document.getElementsByClassName("box1"));

    var rdiv = document.createElement("div");
    rdiv.id = nextNum;
    rdiv.class = "rnext";
    nextImgR.appendTo(rdiv);
    rdiv.appendTo(document.getElementsByClassName("box2"));

    moveLPicture(lnext,0,0,5);
    moveRPicture(rnext,0,0,5);
    NextToCurrent();
  }
}

function NextToCurrent(){
	var leftImgC = document.getElementsByClassName("lcurrent");
	var rightImgC = document.getElementsByClassName("rcurent");
	var leftImgN = document.getElementsByClassName("lnext");
	var rightImgN = document.getElementsByClassName("rnext");
	leftImgC.parentNode.removeChild("leftImgC");
	rightImgC.parentNode.removeChild("rightImgC");
	leftImgN.setAttribute("class","lcurrent");	
	rightImgN.setAttribute("class","rcurent");
	//leftImgN.style.z-index = 1;
	//rightImgN.style.z-index = 1;
}


function autoPlay(txt){
	if(auto){
		return false;
	}
	var leftImg = document.getElementsByClassName("lcurrent");
	var rightImg = document.getElementsByClassName("rcurent");
	var curentNum = parseInt(leftImg.id);
	var nextNum = (curentNum + 1) % 5;

	var nextImgL = document.createElement("img");
	nextImgL.src = txt[nextNum].leftpos;
	nextImgL.alt = "";
	var nextImgR = document.createElement("img");
	nextImgR.src = txt[nextNum].rightpos;
	nextImgR.alt = "";

	var ldiv = document.createElement("div");
	ldiv.id = nextNum;
	ldiv.class = "lnext";
	nextImgL.appendTo(ldiv);
	ldiv.appendTo(document.getElementsByClassName("box1"));

	var rdiv = document.createElement("div");
	rdiv.id = nextNum;
	rdiv.class = "rnext";
	nextImgR.appendTo(rdiv);
	rdiv.appendTo(document.getElementsByClassName("box2"));

	moveLPicture(lnext,0,0,5);
	moveRPicture(rnext,0,0,5);
	NextToCurrent();
}

