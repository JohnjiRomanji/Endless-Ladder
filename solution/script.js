/*

	Image Sources: 
		 - Share Icon: https://icons8.com/icon/97424/share-rounded
		 - Github Logo: https://github.com/logos
		 - Lightbulb Icon: https://www.clipartkey.com/view/iiiwTbT_lightbulb-png-icon-light-bulb-svg-icon/
		 - Back Arrow Icon: https://www.freepik.com/free-icon/back-arrow_781308.htm
*/

const shareData = {
  title: 'Endless Ladder Solution! ',
  text: 'Check out this hush-hush endless ladder website solution I found!',
  url: 'https://endless-ladder.netlify.app/soolution 🤫',
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
