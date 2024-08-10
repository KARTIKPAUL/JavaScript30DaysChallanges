function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('user', username);
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('user-name').textContent = username;
    } else {
        alert('Please enter both username and password');
    }
}

document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const content = document.getElementById('post-content').value;
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const newPost = {
        content,
        username: localStorage.getItem('user'),
        timestamp: new Date().toLocaleString(),
        likes: 0,
        comments: []
    };
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts();
    document.getElementById('post-content').value = ''; // Clear the input after posting
});

function displayPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postFeed = document.getElementById('post-feed');
    postFeed.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <p>${post.content}</p>
            <p>Posted by: ${post.username} on ${post.timestamp}</p>
            <div class="actions">
                <span>${post.likes} Likes</span>
                <button onclick="likePost('${post.timestamp}')">Like</button>
                <button onclick="commentPost('${post.timestamp}')">Comment</button>
            </div>
        `;
        postFeed.appendChild(postElement);
    });
}

function likePost(timestamp) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const post = posts.find(post => post.timestamp === timestamp);
    if (post) {
        post.likes++;
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
    }
}

window.onload = function() {
    const user = localStorage.getItem('user');
    if (user) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('user-name').textContent = user;
        displayPosts();
    }
}
//localStorage.clear();


