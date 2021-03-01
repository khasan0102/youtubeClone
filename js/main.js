navBtn.onclick = () => {
      navSection.classList.toggle('margin-left-minus');
      videoList.classList.toggle('videos-list');
      videoList.classList.toggle('padding-left');
}


const randerModal = () => {
      let items = document.querySelectorAll('.videos-item');
      for(let item of items){
            item.onclick = (event) => {
                 let section = document.createElement('section');
                 let btn = document.createElement('btn');
                 let img = document.createElement('img');
                 let box = document.createElement('div');
                 let iframeLink = item.childNodes[1].childNodes[1].src;
                 let iframe = document.createElement('iframe');
                 iframe.src = iframeLink + "?autoplay=1&mute=0";
                 iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                 iframe.classList.add('iframe');
                 iframe.allowFullscreen = true;
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
                 console.log(item);
                 removeModal();
            }
      }
}

function removeModal(){
      let btn = document.querySelector('#modalBtn');
      btn.onclick = () => {
            let modal = document.querySelector('.modal-window');
            modal.remove();
      }
}
randerModal();

