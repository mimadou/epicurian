import React from 'react';

const Article = ({article}) => {

    const dateFormater = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          
        });
        return newDate;
      };
    
    return (
        <div className='card-article'>
            <h3> {article.author}</h3>
            <p> {article.content}</p>
            <em>publié le {dateFormater(article.date).toLocaleString()}</em>
        </div>
    );
};

export default Article;