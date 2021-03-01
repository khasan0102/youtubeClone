let form = document.querySelector('#form');
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
form.onsubmit = (e) => {
      e.preventDefault();
      let base = JSON.parse(window.localStorage.getItem('videos')) || videos;
      let el = {
            iframe: videoLink.value,
            img:imageLink.value,
            title: vtitle.value
      };
      console.log(base);
      base[base.length] = el;
      videoLink.value = "";
      imageLink.value = "";
      vtitle.value = "";
      window.localStorage.setItem('videos', JSON.stringify(base));
}

//title Headless CMS & GraphQL API with KeystoneJS
// img https://i.ytimg.com/vi/3cH1BXJbfa4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt4L9j4NmJJ3GD8K4Rg5NUau44YQ;
//video <iframe width="560" height="315" src="https://www.youtube.com/embed/3cH1BXJbfa4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>