class Github{
    constructor(){
        this.client_id= '6aa0b7088faeae4cc7b6';
        this.client_secret = 'd205dc46fc0dc0b553ef0b5de54aa6547db57ce0';
        this.repo_count = 4;
        this.repos_sort = 'created:asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const repos = await repResponse.json();

        return {
            profile,
            repos
        }
    }
}