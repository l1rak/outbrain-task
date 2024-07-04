# Outbrain Task

This repository contains solutions for the Outbrain interview task, specifically for the HTML/JavaScript component. 

## HTML/JS Task

### Description

This task involves creating an HTML page with two buttons. Each button, when clicked, triggers a JavaScript function that performs certain operations involving fetching data from a public API (`https://jsonplaceholder.typicode.com`).

### Instructions

1. **Fetch and Modify Posts:**
   - A button labeled "Fetch and Modify Posts" triggers a function that sends a GET request to fetch a list of posts from `https://jsonplaceholder.typicode.com/posts`.
   - The function iterates over the posts and converts the `title` of each post with an even `id` to uppercase.
   - The modified array of posts is printed to the console.

2. **Fetch Users and Related Data:**
   - A button labeled "Fetch Users and Related Data" triggers a function that sends GET requests to fetch a list of users, posts, and todos.
   - The function returns an array of users, each with the keys: ID, username, email, phone, along with their associated posts and todos.
   - The result is printed to the console.

### Files

- `index.html`: The HTML file containing the structure of the page and the buttons.
- `script.js`: The JavaScript file containing the functions that handle the API requests and data processing.

### Usage

To test the implementation on your local machine:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/outbrain-task.git
