// Function to fetch and modify posts
async function fetchAndModifyPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        const modifiedPosts = posts.map(post => {
            if (post.id % 2 === 0) {
                post.title = post.title.toUpperCase();
            }
            return post;
        });

        console.log(modifiedPosts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Function to fetch users and related data
async function fetchUsersAndData() {
    try {
        const [usersResponse, postsResponse, todosResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/todos')
        ]);

        const users = await usersResponse.json();
        const posts = await postsResponse.json();
        const todos = await todosResponse.json();

        const usersWithDetails = users.map(user => {
            const userPosts = posts.filter(post => post.userId === user.id).map(post => ({
                title: post.title,
                body: post.body
            }));

            const userTodos = todos.filter(todo => todo.userId === user.id).map(todo => ({
                title: todo.title
            }));

            return {
                ID: user.id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                posts: userPosts,
                todos: userTodos
            };
        });

        console.log(usersWithDetails);
    } catch (error) {
        console.error('Error fetching users and related data:', error);
    }
}

// Event listeners for buttons
document.getElementById('fetch-posts-btn').addEventListener('click', fetchAndModifyPosts);
document.getElementById('fetch-users-btn').addEventListener('click', fetchUsersAndData);
