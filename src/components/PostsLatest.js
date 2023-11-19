import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../features/posts/postsSlice";
import { Link } from "react-router-dom";

export const PostsLatest = () => {

    const posts = useSelector(selectPosts);
    console.log(posts)

    // Sorting posts by date in descending order
    const sortedPosts = Object.values(posts).sort((a, b) => new Date(b.data) - new Date(a.data));

    // Taking the latest 5 posts
    const latestPosts = sortedPosts.slice(0, 5);

    return (
        <div>
            <h3>** Latest Posts.</h3>
            {latestPosts.map(post => (
                <div key={post.titulo} className="posts-line">
                    <Link className="link" to={`/posts/${post.id}`}># {post.titulo}</Link>
                    <time>
                        {new Date(post.data).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </time>
                </div>
            ))}
        </div>
    );
}
