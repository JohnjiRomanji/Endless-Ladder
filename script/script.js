/*

	Image Sources: 
		 - Share Icon: https://icons8.com/icon/97424/share-rounded
		 - Github Logo: https://github.com/logos
		 - Lightbulb Icon: https://www.clipartkey.com/view/iiiwTbT_lightbulb-png-icon-light-bulb-svg-icon/
		 - Back Arrow Icon: https://www.freepik.com/free-icon/back-arrow_781308.htm
*/


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
	
}
document.querySelector("body").style.height = "1000px";

const ascii = "		╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>"

const person = "<span class='person'>╬═╬ ☻/<br>╬═╬/▌ <br>╬═╬/  \<br></span>"

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
				let e = document.getElementById('hpeople')
				if (parseInt(p.innerHTML)>parseInt(e.innerHTML)){
					localStorage.setItem('people', parseInt(p.innerHTML))
					e.innerHTML=p.innerHTML
					
			}}
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
				checkScroll();
    };
}());

function change() {
	let i = document.getElementById('footer');
	i.style.backgroundColor='#C0C0C0';

}
function change_back() {
	let i = document.getElementById('footer')
	i.style.backgroundColor='transparent'

}

function change_two() {
	let i = document.getElementById('btn');
	i.style.backgroundColor='#C0C0C0';

}
function change_back_two() {
	let i = document.getElementById('btn')
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

const btn = document.querySelector('button');
const resultPara = document.querySelector('.result');

// Must be triggered some kind of "user activation"
btn.addEventListener('click', async () => {
  try {
    await navigator.share(shareData)
  } catch(err) {
    console.log('Error: ' + err)
  }
});

