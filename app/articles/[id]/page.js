import React from 'react';

const ArticlePage = ({params}) => {

    const articleId = params.id

    return (
        <div>
            <h3>The Article Page</h3>
            <p>This is page {id}</p>
        </div>
    );
};

export default ArticlePage;