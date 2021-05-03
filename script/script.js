/*

	Image Sources: 
		 - Share Icon: https://icons8.com/icon/97424/share-rounded
		 - Github Logo: https://github.com/logos
		 - Lightbulb Icon: https://www.clipartkey.com/view/iiiwTbT_lightbulb-png-icon-light-bulb-svg-icon/
		 - Back Arrow Icon: https://www.freepik.com/free-icon/back-arrow_781308.htm
*/

var top_people=null
var top_people_user=null

var top_score=null
var top_score_user=null

var views=null

var ip=null

function get_ip(){
	var url = "https://api.ipify.org?format=json";
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	
	xhr.onreadystatechange = function () {
	   if (xhr.readyState === 4) {
	      console.log(xhr.status);
	      console.log(xhr.responseText);
	      ip=JSON.parse(xhr.responseText)["ip"];
	   }};
	
	xhr.send();
}

function view(x, t){
	if (ip===null) {
		get_ip()
	}
	var url = "https://back.johnjiromanji.repl.co/visit/";
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url);
	
	xhr.setRequestHeader("Content-Type", "application/json");
	
	xhr.onreadystatechange = function () {
	   if (xhr.readyState === 4) {
	      console.log(xhr.status);
	      console.log(xhr.responseText);
	      views= JSON.parse(xhr.responseText)["views"];
	      document.getElementById("views").innerHTML=JSON.parse(xhr.responseText)["views"]
	   }};
	
	var data = `{"ip":"${x}", "new":"${t}"}`;
	
	xhr.send(data);
	


	/*
	var url = "https://back.johnjiromanji.repl.co/visit-test/";
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url);
	
	xhr.setRequestHeader("Content-Type", "application/json");
	
	xhr.onreadystatechange = function () {
	   if (xhr.readyState === 4) {
	      console.log(xhr.status);
	      console.log(xhr.responseText);
	      views = JSON.parse(xhr.responseText)["views"]
	      document.getElementById("views").innerHTML=views
	   }};
	
	var data = `{"ip":${x}, "new":${t}}`;
	
	xhr.send(data);*/
}

function get_top_people(){
	let url = "https://back.johnjiromanji.repl.co/top-people/";
	
	let xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			console.log(xhr.status);
			console.log(xhr.responseText);
			top_people=JSON.parse(xhr.responseText)["score"]
			top_people_user=JSON.parse(xhr.responseText)["user"]
			document.getElementById("lb-people").innerHTML = top_people;
			document.getElementById("lb-people-user").innerHTML = top_people_user;
		}};
	
	xhr.send();
}

function get_top_score(){
	var url = "https://back.johnjiromanji.repl.co/top-score/";
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			console.log(xhr.status);
			console.log(xhr.responseText);
			top_score=JSON.parse(xhr.responseText)["score"]
			top_score_user=JSON.parse(xhr.responseText)["user"]
			document.getElementById("lb-score").innerHTML = top_score;
			document.getElementById("lb-score-user").innerHTML = top_score_user;
		}};
	
	xhr.send();
}

function update(type, score, user){
	var url = "https://back.johnjiromanji.repl.co/update-top/";
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url);
	
	xhr.setRequestHeader("Content-Type", "application/json");
	
	xhr.onreadystatechange = function () {
	   if (xhr.readyState === 4) {
	      console.log(xhr.status);
	      console.log(xhr.responseText);
	      get_top_score();
	      get_top_people();
	   }};
	
	var data = `{"type":"${type}", "score":${score}, "user":"${user}"}`;
	
	xhr.send(data);
	

}

function on_load(){
	if (localStorage.getItem('score')===null || localStorage.getItem('score')==='hi'){
		localStorage.setItem('score', 0)
	}
	if (localStorage.getItem('people')===null){
		localStorage.setItem('people', 0)
	}
	let p = document.getElementById('hscore')
	p.innerHTML = localStorage.getItem('score')
	let c = document.getElementById('hpeople')
	c.innerHTML = localStorage.getItem('people')
	get_top_score();
	get_top_people();

	let name = window.prompt("Enter a username for if you beat the top score: ")
	if (name===null){name="unnamed"}
	localStorage.setItem('user', name)
	if (localStorage.getItem("totalScore")===null){localStorage.setItem("totalScore", 0)}
	if (localStorage.getItem("totalPeople")===null){localStorage.setItem("totalPeople", 0)}
	get_ip()
	if (localStorage.getItem("isNew")=="no"){
		view(ip, "no");
	} else{
		view(ip, "yes");
	}
	
	localStorage.setItem("isNew", "no")
}

window.setInterval(
	function() {
		get_top_people();
		get_top_score();
	},
	40000
)

document.querySelector("body").style.height = "1000px";

const ascii = "		╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>"

const person = "<span class='person'>╬═╬ ☻/<br>╬═╬/▌ <br>╬═╬/  \\<br></span>"

const h = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkScroll(){
	let people = document.getElementsByClassName("person");
	for (var f = 0; f < people.length; f++) {
		let c=people.item(f)
		if (!(c.classList.contains('done'))){
			if (window.scrollY > (c.offsetTop + c.offsetHeight)) {
	      console.log("Person passed.");
	      c.classList.add('done')
	      if (localStorage.getItem('people')===null || localStorage.getItem('people')==='hi'){
					localStorage.setItem('people', 0)
				}
				let t = localStorage.getItem('people')
				let p = document.getElementById('people')
				p.innerHTML=parseInt(p.innerHTML)+1
				let u = localStorage.getItem("totalPeople")
				localStorage.setItem("totalPeople", u+1)
				let e = document.getElementById('hpeople')
				if (parseInt(p.innerHTML)>parseInt(e.innerHTML)){
					localStorage.setItem('people', parseInt(p.innerHTML))
					e.innerHTML=p.innerHTML
					
			}
				if (parseInt(p.innerHTML)>parseInt(top_people)){
					get_top_people()
					if (parseInt(p.innerHTML)>parseInt(top_people)){
						if (localStorage.getItem('user')===null){
							let name = window.prompt("Congrats! You have earned a spot on the leaderboard! Enter your name as you would like it to be displayed:")
							if (name===null){
								name="unnamed"
							}
							localStorage.setItem('user', name)
							update("people", parseInt(p.innerHTML), localStorage.getItem('user'))
						}else{
							update("people", parseInt(p.innerHTML), localStorage.getItem('user'))
						}
					}
				}
			}
	}
}
}

window.addEventListener("scroll", function() {
    var body = document.querySelector("body");
    var height = body.style.height;
    height = height.slice(0, -2);
    height = Number(height);
    return function() {
				if (height-h <= 15){
					height += height / 2;
				}
        body.style.height = height + "px";
				let i = document.getElementById("all")
				let element = document.createElement('div');
				element.innerHTML=ascii
				element.classList.add("scrolladd");
				let x = getRandomInt(101);
				if (x>42 && x<47) {
					element.innerHTML+=person;
				}
				let g = document.getElementById('all')
				g.appendChild(element);
				let o = document.getElementById('score')
				let p = document.getElementById('hscore')
				if (parseInt(o.innerHTML)<Math.floor(window.scrollY/50)){
				o.innerHTML=Math.floor(window.scrollY/50);
				if (parseInt(o.innerHTML)>=parseInt(p.innerHTML)){
					p.innerHTML=Math.floor(window.scrollY/50);
					localStorage.setItem('score', Math.floor(window.scrollY/50))
				}
					
				}
				if ((parseInt(o.innerHTML)-top_score)>50){
					get_top_people();
					if ((parseInt(o.innerHTML)-top_score)>50){
							if (localStorage.getItem('user')===null){
								let name = window.prompt("Congrats! You have earned a spot on the leaderboard! Enter your name as you would like it to be displayed:", "<unnamed>")
								if (name===null){name="unnamed"}
								localStorage.setItem('user', name)
								update("score", parseInt(o.innerHTML), localStorage.getItem('user'))
							} else {
								update("score", parseInt(o.innerHTML), localStorage.getItem('user'));
							}
				}
			
    };
    	checkScroll();
}}());

function change() {
	let i = document.getElementById('footer');
	i.style.backgroundColor='#C0C0C0';

}
function change_back() {
	let i = document.getElementById('footer')
	i.style.backgroundColor='transparent'

}

function change_two() {
	let i = document.getElementById('share');
	i.style.backgroundColor='#C0C0C0';

}
function change_back_two() {
	let i = document.getElementById('share')
	i.style.backgroundColor='transparent'

}

function change_three() {
	let i = document.getElementById('s-wrap');
	i.style.backgroundColor='#C0C0C0';

}
function change_back_three() {
	let i = document.getElementById('s-wrap')
	i.style.backgroundColor='transparent'

}

function change_four() {
	let i = document.getElementById('hover-back');
	i.style.backgroundColor='#C0C0C0';

}
function change_back_four() {
	let i = document.getElementById('hover-back')
	i.style.backgroundColor='transparent'

}

const shareData = {
  title: 'Endless Ladder! ',
  text: 'Check out this endless ladder website I found!',
  url: 'https://endless-ladder.netlify.app',
}

const btn = document.getElementById('share');
const resultPara = document.querySelector('.result');

// Must be triggered some kind of "user activation"
btn.addEventListener('click', async () => {
  try {
    await navigator.share(shareData)
  } catch(err) {
    console.log('Error: ' + err)
  }
});

