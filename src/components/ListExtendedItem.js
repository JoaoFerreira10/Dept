import React from 'react';
import '../styles/ListExtendedItem.scss';

const ListExtendedItem = ({data}) => {
    
    const size = data.extraContent.position;
    const content = data.extraContent.content.map((elem, index) => {
        return(
            <div key={"content" + index} className="extra-content-cell">
                <h4 className="news-extended-title">{elem.title}</h4>
                <p className="news-subcontent">{elem.content}</p>
                <button className="view-case"><div className="triangle-right"></div>VIEW CASE</button>
            </div>
        );
    });

const contentWithImage = <div className="">
                            <img className="news-extended-item-img" src={process.env.PUBLIC_URL + data.image} alt={data.title}></img>
                            <h5 className="news-extended-title">{data.title}</h5>
                            <p className="news-content">{data.content}</p>
                            <button className="view-case"><div className="triangle-right"></div>VIEW CASE</button>
                        </div>;

const extraContent =<div className="extra-content">                   
                        {content}
                    </div>

const layout = (size === "right") ? [contentWithImage, extraContent] : [extraContent, contentWithImage];

    return(
        <div className="desktop-extended-grid mobile-grid">
            <div className= {size ==="left"?"content left":"content"}>
                {layout}
            </div>
        </div>
    );
}

export default ListExtendedItem;