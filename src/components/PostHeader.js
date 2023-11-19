import posts from '../data/posts.json';


export const PostHeader = () => {
    const targetPath = "/posts/testmd.md"; // Replace with the path of the desired post

    // Use Array.prototype.find to find the post with the specified path
    const targetPost = posts.find(post => post.path === targetPath);

    if (!targetPost) {
        return <p>Post not found</p>;
    }

    // Now you can access the data for the specific post (targetPost)
    const { titulo, data, path } = targetPost;

    return (
        <div>
            <h1>{titulo}</h1>
            <p>Date: {data}</p>
            <p>Path: {path}</p>
            {/* Render other details as needed */}
        </div>
    );
}

