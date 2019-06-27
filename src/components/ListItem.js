import React from 'react';
import '../styles/ListItem.scss';

const ListItem = ({data}) => {

    return(
        <div className="desktop-grid mobile-grid col-xs-12">
            <img className="news-img" src={process.env.PUBLIC_URL + data.image} alt={data.title}></img>
            <h4 className="name">{data.title}</h4>
            <p className="news-content">{data.content}</p>
            <button className="view-case"><div className="triangle-right"></div>VIEW CASE</button>
        </div>
    );   
}

export default ListItem;