// Post.js
import React, { useState, useEffect } from 'react';


// ... (your other imports)
// Markdown Processing (with LaTeX) imports
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as prismStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "katex/dist/katex.min.css";


export const About = () => {

    const [markdown, setMarkdown] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/markdown/CV.md`);
                const md = await response.text();
                setMarkdown(md);
            } catch (error) {
                console.error('Error fetching Markdown:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <article>

            <h1> ** About.</h1>
            <p>I'm a recently graduated math student, without much of an idea of what to do next. Currently, I'm spending my time exploring some of my interests, which involve mathematics, web development, coding, videography, cooking, basketball and chess. Below you can find my CV.</p>

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
                {markdown}
            </Markdown>
        </article>
    );
};

