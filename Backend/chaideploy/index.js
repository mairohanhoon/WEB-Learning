require('dotenv').config()
const express = require('express') 
const app = express()
const port = 4000

const githubData = {
    "login": "mairohanhoon",
    "id": 119288641,
    "node_id": "U_kgDOBxwzQQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/119288641?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mairohanhoon",
    "html_url": "https://github.com/mairohanhoon",
    "followers_url": "https://api.github.com/users/mairohanhoon/followers",
    "following_url": "https://api.github.com/users/mairohanhoon/following{/other_user}",
    "gists_url": "https://api.github.com/users/mairohanhoon/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mairohanhoon/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mairohanhoon/subscriptions",
    "organizations_url": "https://api.github.com/users/mairohanhoon/orgs",
    "repos_url": "https://api.github.com/users/mairohanhoon/repos",
    "events_url": "https://api.github.com/users/mairohanhoon/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mairohanhoon/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Rohan Tiwari",
    "company": null,
    "blog": "",
    "location": "Dehradun, Uttrakhand, India ",
    "email": null,
    "hireable": null,
    "bio": "Contest Rating 4671(Top 0.1%)& 4 Times College Topper🏆@ CodingNinja || 2⭐CodeChef(max(1476) || 2⭐LeetCode(max1559)",
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 14,
    "following": 18,
    "created_at": "2022-11-28T07:59:14Z",
    "updated_at": "2024-05-11T12:35:24Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('rohandotcom')
}) 

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
}) 

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur Code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})