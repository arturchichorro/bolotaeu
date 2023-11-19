// Post.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPosts, selectPostContent, setPostContent } from '../features/posts/postsSlice';

// ... (your other imports)
// Markdown Processing (with LaTeX) imports
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as prismStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "katex/dist/katex.min.css";


export const Post = () => {
    const { postPath } = useParams();
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const postContent = useSelector((state) => selectPostContent(state, postPath));

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!posts[postPath]) {
                    // Check if the post with the specified path exists
                    console.error('Post not found:', postPath);
                    return;
                }

                if (!postContent) {
                    const response = await fetch(`/markdown/${posts[postPath].id}.md`);
                    const md = await response.text();
                    dispatch(setPostContent({ path: postPath, content: md }));
                }
            } catch (error) {
                console.error('Error fetching Markdown:', error);
            }
        };

        fetchData();
    }, [dispatch, postContent, postPath, posts]);

    if (!posts[postPath]) {
        // If the post is not found, you might want to handle this case accordingly
        return <div>Post not found</div>;
    }

    return (
        <article>
            <h1 className="postTitle">{posts[postPath].titulo}</h1>
            <time className="postDate">
                {new Date(posts[postPath].data).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}</time>
            <Markdown className="markdown" remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}
                components={{
                    code(props) {
                        const { children, className, node, ...rest } = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                            <SyntaxHighlighter
                                {...rest}
                                PreTag="div"
                                children={String(children).replace(/\n$/, '')}
                                language={match[1]}
                                style={prismStyle}
                                showLineNumbers={true}
                                wrapLines={true}
                            />
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        )
                    }
                }}>
                {postContent}
            </Markdown>
        </article>
    );
};
