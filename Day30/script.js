document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');
    const postForm = document.getElementById('post-form');
    const userProfile = document.getElementById('profile');
    const createPostSection = document.getElementById('create-post');
    const userEmailSpan = document.getElementById('user-email');
    const feed = document.getElementById('feed');

    // Check if user is already logged in
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        displayUserProfile(user.email);
        displayPosts();
    }

    // Handle login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple validation and storage
        localStorage.setItem('user', JSON.stringify({ email, password }));
        alert('User logged in');
        
        displayUserProfile(email);
        displayPosts();
    });

    function displayUserProfile(email) {
        loginForm.style.display = 'none';
        userProfile.style.display = 'block';
        createPostSection.style.display = 'block';
        userEmailSpan.textContent = email;
    }

    // Handle post form submission
    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const content = document.getElementById('post-content').value;

        // Save post to localStorage
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push({ content, user: JSON.parse(localStorage.getItem('user')).email, createdAt: new Date().toISOString() });
        localStorage.setItem('posts', JSON.stringify(posts));

        document.getElementById('post-content').value = ''; // Clear the textarea
        displayPosts();
    });

    function displayPosts() {
        feed.innerHTML = ''; // Clear existing posts
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.forEach(post => {
            const postEl = document.createElement('div');
            postEl.className = 'post';
            postEl.innerHTML = `
                <p><strong>${post.user}</strong></p>
                <p>${post.content}</p>
                <small>${new Date(post.createdAt).toLocaleString()}</small>
                <button class="like-btn">Like</button> <span class="like-count">0</span>
            `;
            feed.appendChild(postEl);

            // Like button functionality
            postEl.querySelector('.like-btn').addEventListener('click', function() {
                let countEl = this.nextElementSibling;
                let count = parseInt(countEl.textContent);
                countEl.textContent = count + 1;

                // Display notification
                alert(`${post.user} liked your post`);
            });
        });
    }
});

