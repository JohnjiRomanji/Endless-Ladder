/*
MIT License

Copyright (c) 2021-Present JohnjiRomanji

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*

	Image Sources: 
		 - Share Icon: https://icons8.com/icon/97424/share-rounded
		 - Github Logo: https://github.com/logos

*/

document.querySelector("body").style.height = "1000px";

const ascii = "		╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>╬═╬<br>"

const person = "╬═╬ ☻/<br>╬═╬/▌ <br>╬═╬/  \<br>"

const h = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
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

const shareData = {
  title: 'Endless Ladder! ',
  text: 'Check out this endless ladder website I found!',
  url: 'https://WateryMotionlessFolders.johnjiromanji.repl.co',
}

const btn = document.querySelector('button');
const resultPara = document.querySelector('.result');

// Must be triggered some kind of "user activation"
btn.addEventListener('click', async () => {
  try {
    await navigator.share(shareData)
    resultPara.textContent = 'MDN shared successfully'
  } catch(err) {
    resultPara.textContent = 'Error: ' + err
  }
});