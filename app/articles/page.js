import React from 'react';
import ArticleCard from "@/component/article/ArticleCard";

const blogPosts = [
    {
        title: 'Understanding React',
        content: 'React is a powerful JavaScript library for building user interfaces...',
        date: 'October 14, 2024',
        category: 'Technology',
        image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
    {
        title: 'Next.js vs React',
        content: 'Next.js builds on top of React to provide better performance...',
        date: 'October 12, 2024',
        category: 'Development',
        image: 'https://via.placeholder.com/300x200',
    },
];

const Articles = () => {
    return (
        <div>
            {blogPosts.map((post, index) => (
                <ArticleCard
                    key={index}
                    title={post.title}
                    content={post.content}
                    date={post.date}
                    category={post.category}
                    image={post.image}
                />
            ))}        </div>
    );
};

export default Articles;