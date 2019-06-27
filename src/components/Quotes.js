import React from 'react';
import '../styles/Quotes.scss';



const Quotes = ({data}) => {


    return(<div className="quote-content">
        <blockquote className="quote">{data.quote}</blockquote>
        <cite className="author-quote">{data.author}</cite>
        </div>);

}
export default Quotes;