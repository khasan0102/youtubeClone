let videosList = document.querySelector('#videoList');
let searchInput = document.querySelector('#searchInput');
let searchBtn = document.querySelector('#searchBtn');
let voiceBtn = document.querySelector('#voiceBtn');
let videos = [
      {
            iframe: `<iframe width="560"  height="315" src="https://www.youtube.com/embed/wYzspcKsHSU"  frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe> <img`,
            img: "https://i.ytimg.com/vi/wYzspcKsHSU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMBZWxLFqQRThtFZ7J8LAzaR7dnw",
            title: "Najot talim ochiq dars"
      },
      {
            iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/NT299zIk2JY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            img: "https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2TNleahkp_YHx0E9frBBDhXn2lQ",
            title: "Let's Build a YouTube Clone"
      },
      {
            iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/w7ejDZ8SWv8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            img: "https://i.ytimg.com/vi/w7ejDZ8SWv8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzn-mJ6EYgNMWXlfwSh2Ba-yglMg",
            title: "React JS Crash Course 2021"
      },
      {
            iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/NT299zIk2JY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            img: "https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2TNleahkp_YHx0E9frBBDhXn2lQ",
            title: "Let's Build a YouTube Clone"
      }

];
const video = JSON.parse(window.localStorage.getItem('videos')) || videos;
console.log(video);
function randerVideos (array)  {
      videosList.innerHTML = null;
    for(let el of array){
          let li = document.createElement('li');
          let box = document.createElement('div');
          let boxText = document.createElement('div');
          let img = document.createElement('img');
          let imgIcon1 = document.createElement('img');
          let imgIcon2 = document.createElement('img');
          let imgLogo = document.createElement('img');
          let span1 = document.createElement('span');
          let span2 = document.createElement('span');
          let text = document.createElement('span');
          
          li.classList.add('videos-item');
          box.classList.add('video-box');
          boxText.classList.add('video-text-box');
          span1.classList.add('icon');
          span2.classList.add('icon');
          span2.classList.add('icon2');


          imgLogo.src = "https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s88-c-k-c0x00ffffff-no-rj";
          img.src = el.img;
          imgIcon1.src = "./images/clock.svg";
          imgIcon2.src = "./images/history.svg";
          imgIcon1.classList.add('new');
          imgIcon2.classList.add('new');
          box.innerHTML = el.iframe;
          span1.appendChild(imgIcon1);
          span2.appendChild(imgIcon2);
          box.appendChild(img);
          box.appendChild(span1);
          box.appendChild(span2);
          text.textContent = el.title;

          boxText.appendChild(imgLogo);
          boxText.appendChild(text);
          li.appendChild(box);
          li.appendChild(boxText);
          videosList.appendChild(li);
    }
randerModal();
}


randerVideos(video);






function randerModal  ()  {
      let items = document.querySelectorAll('.videos-item');
      for (let item of items) {
            item.onclick = (event) => {
                  let section = document.createElement('section');
                  let btn = document.createElement('btn');
                  let img = document.createElement('img');
                  let box = document.createElement('div');
                  let iframeLink = item.childNodes[0].childNodes[0].src;
                  console.log(iframeLink);
                  
                  let iframe = document.createElement('iframe');
                  iframe.src = iframeLink + "?autoplay=1&mute=0";
                  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                  iframe.classList.add('iframe');
                  iframe.frameBorder = "0";
                  img.src = "./images/cancel.svg";
                  img.width = '25px';
                  img.height = "25px";
                  section.classList.add('modal-window');
                  box.classList.add('video-box1');
                  btn.id = "modalBtn";
                  btn.classList.add('modal-btn');
                  btn.appendChild(img);
                  box.appendChild(iframe);
                  section.appendChild(btn);
                  section.appendChild(box);
                  body.appendChild(section);
                  removeModal();
            }
      }
}

function removeModal() {
      let btn = document.querySelector('#modalBtn');
      btn.onclick = () => {
            let modal = document.querySelector('.modal-window');
            modal.remove();
      }
}




navBtn.onclick = () => {
      navSection.classList.toggle('margin-left-minus');
      videoList.classList.toggle('videos-list');
      videoList.classList.toggle('padding-left');
}


let arr = [];
searchInput.onkeyup = (e) => {
      if(searchInput.value != ""){
            arr = [];
            let str = searchInput.value.toLowerCase();
            for(let el of video){
                  if(el.title.toLowerCase().includes(str)){
                     arr.push(el);
                  }
            }

      }
       else{
            randerVideos(video);
      }
      
}
function searchFun() {
      if(searchInput.value != ""){
            arr = [];
            let str = searchInput.value.toLowerCase();
            for(let el of video){
                  if(el.title.toLowerCase().includes(str)){
                     arr.push(el);
                  }
            }
         randerVideos(arr);
      }
}


searchBtn.onclick = () => {
    if(searchInput.value == ""){
          randerVideos(video);
    }else{
          randerVideos(arr);
    }
}

voiceBtn.onclick = () => {
            const speechRecognition = window.webkitSpeechRecognition;
            const voice = new speechRecognition();
            voice.lang = 'en-EN';
            voice.continuous = false;
            voice.start();
            searchInput.placeholder = 'Listening...';
        
            voice.onresult = (event) => {
                let result = event.results[0][0].transcript;
                searchInput.value = result;
                searchFun();
                searchInput.placeholder = "Search";
            }
            voice.onspeechend = function() {
                voice.stop();
            }
        

}