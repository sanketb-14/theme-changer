import React from 'react';
import moment from 'moment'

function Article({id,title,date,snippet,length}) {
  return (
    <article className="content">
      <h2>{title}</h2>
      <p>
        {" "}
        <span>{moment(date).format("dddd Do, YYYY")}  </span>
         ({length} min read)
      </p>
    
      <p>{snippet}</p>
    </article>
  );
}

export default Article