import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../features/posts/postsSlice";
import { Link } from "react-router-dom";

export const PostsList = () => {
    const posts = useSelector(selectPosts);

    // Grouping posts by year
    const postsByYear = {};
    Object.values(posts).forEach(post => {
        const year = new Date(post.data).getFullYear().toString();
        if (!postsByYear[year]) {
            postsByYear[year] = [];
        }
        postsByYear[year].push(post);
    });

    return (
        <div className="posts-list">
            <h1>** All Posts.</h1>
            {Object.keys(postsByYear).reverse().map(year => (
                <div key={year}>
                    <h2>{year}</h2>
                    {postsByYear[year].map(post => (
                        <div key={post.titulo} className="posts-line">
                            <Link to={`/posts/${post.id}`}>{post.titulo}</Link>
                            <time>
                                {new Date(post.data).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })}
                            </time>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
