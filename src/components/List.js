import React from 'react';
import ListItem from './ListItem';
import ListExtendedItem from './ListExtendedItem';
import Quotes from './Quotes';
import '../styles/List.scss';

const List = ({data}) => {

    const content = data.map((elem, index) => {

        return elem.contentType === "quote" ? 
        <Quotes key={"Q" + index} data={elem}/> :
        ( elem.extraContent? 
         <ListExtendedItem key={"L" + index} data={elem} /> :
         <ListItem key={"I" + index} data={elem} />)
    });

    return(
        <div className="content">
            {content}
        </div>
    );    
}

export default List;