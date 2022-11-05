let github, pp, username, name, twitter, repos, followers, followings, link, repocontainer;

window.onload = () => {
  fetch("https://api.github.com/users/mzffr0").then(async (e) => {
    github = await e.json();
  });
  
  fetch("https://api.github.com/users/mzffr0/repos?per_page=199").then(async (e)=>{
    repos = await e.json();
  });

  repocontainer = document.getElementById("repos");
  username = document.getElementById("username");
  pp = document.getElementById("pp");
  followers = document.getElementById("follower");
  followings = document.getElementById("following");
  
  setTimeout(() => {

   username.innerHTML = github.login;
   pp.src = github.avatar_url;
   followers.innerHTML = `${github.followers} Takipçi`;
   followings.innerHTML = `${github.following} Takip Edilen`;
    
   for(let i = 0;i <= repos.length;i++){
     if(repos[i].language != null){
    switch(repos[i].language){
     case 'HTML':
     repocontainer.innerHTML += `
     <div class="repo">
      <h4>${repos[i].name}</h4>
     <p><i class="fa-solid fa-circle" style="color:orange"></i> ${repos[i].language}</p>
     </div>
     `;
      break;
      case 'CSS':
      repocontainer.innerHTML += `
       <div class="repo">
        <h4>${repos[i].name}</h4>
        <p><i class="fa-solid fa-circle" style="color:purple"></i> ${repos[i].language}</p>
       </div>
     `;
      break;
      case 'JavaScript':
      repocontainer.innerHTML += `
       <div class="repo">
        <h4>${repos[i].name}</h4>
        <p><i class="fa-solid fa-circle" style="color:yellow"></i> ${repos[i].language}</p>
       </div>
     `;
      break;
    }
    } else {
     repocontainer.innerHTML += `
     <div class="repo">
      <h4>${repos[i].name}</h4>
     </div>
     `;
    }
   }
  }, 1000);
}
