class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
         <div class="row">
         <div class="col-md-3">
               <img class="img-fluid mb-2" src="${user.avatar_url}" alt="">
               <a href="${user.html_url}" target="_blank" class='btn btn-primary btn-block'>
                   View Profile
               </a>
         </div>
         <div class="col-md-9">
               <span class="badge badge-primary">
                   Public Repos: ${user.public_repos}
               </span>
               <span class="badge badge-primary">
                   Public Gists: ${user.public_gists}
               </span>
               <span class="badge badge-primary">
                   Followers: ${user.followers}
               </span>
               <span class="badge badge-primary">
                   Following: ${user.following}
               </span>
               <br><br>
               <ul class="list-group">
                   <li class="list-group-item">Company: ${user.company}</li>
                   <li class="list-group-item">Website/Blog: ${user.blog}</li>
                   <li class="list-group-item">Location: ${user.location}</li>
                   <li class="list-group-item">Member Since: ${user.created_at}</li>
               
               </ul>
             </div>
          </div>
        </div>
         <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
                      `  
    }

    clearProfile(){
        this.profile.innerHTML = ' ';
    }
    clearMessage(){
        const curale= document.querySelector('.alert');
        if(curale){
              curale.remove()
        }
    }
    showAlert(message, classname){
        this.clearMessage();
        const div = document.createElement('div');
        div.className = classname;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearMessage()
        }
        , 2000)

    }
    showRepos(repos){
         let output = '';
         repos.forEach((repo)=> {
              output+= `
              <div class="Card card-body mb-2">
                 <div class="row">
                     <div class="col-md-6></div>
                 </div>
              </div>`
         })
    }
}