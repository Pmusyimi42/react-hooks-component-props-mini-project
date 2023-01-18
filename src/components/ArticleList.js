import React from 'react';
import blogData from '../data/blog';
import Article from './Article';

const ArticleList = () => {
    const posts = blogData.posts
    const articleList = posts.map(article =>{
        return <Article title = {article.title} date = {article.date} preview = {article.preview}/>
    });
    return (
        <main>
            {articleList}
        </main>
    );
}

export default ArticleList;
