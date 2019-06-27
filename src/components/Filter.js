import React from 'react';
import '../styles/Filter.scss';

class Filter extends React.Component {

    render() {
        return(
            <div className="filter">
                <div className="dropdown Show-me-all-work ">
                    <span className="text-style-1">Show me </span>
                    <button className="filter-btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        all work
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    </div>
                </div>
                <div className="dropdown in-all-industries">
                    <span className="text-style-1"> in </span>
                    <button className="filter-btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        all industries
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" value="1" onClick={(ev) => {console.log(ev.target.value);this.props.filterByIndutryId(ev.target.value)}} type="button">Industry 1</button>
                        <button className="dropdown-item" value="2" onClick={(ev) => this.props.filterByIndutryId(ev.target.value)} type="button">Industry 2</button>
                        <button className="dropdown-item" value="0" onClick={(ev) => this.props.filterByIndutryId(ev.target.value)} type="button">all industries</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;