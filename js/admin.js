let form = document.querySelector('#form');

form.onsubmit = (e) => {
      e.preventDefault();
      let base = JSON.parse(window.localStorage.getItem('videos'));
      base.push({
            iframe: videoLink.value,
            img:imageLink.value,
            title: vtitle.value
      });
      videoLink.value = "";
      imageLink.value = "";
      vtitle.value = "";
      window.localStorage.setItem('videos', JSON.stringify(base));
}

//title Headless CMS & GraphQL API with KeystoneJS
// img https://i.ytimg.com/vi/3cH1BXJbfa4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt4L9j4NmJJ3GD8K4Rg5NUau44YQ;
//video <iframe width="560" height="315" src="https://www.youtube.com/embed/3cH1BXJbfa4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>