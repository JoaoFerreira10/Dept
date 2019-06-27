import React from 'react';
import '../styles/MenuBar.scss';

class MenuBar extends React.Component {


    state = {menuBtnFocus: false};

    changeMenuButton() {
        this.setState({menuBtnFocus: !this.state.menuBtnFocus})
    }
    render() {
        return (<div className="menu">
                <nav className="navbar navbar-light">
                    <span className={this.state.menuBtnFocus?"dept-brand-white": "dept-brand"}>DEPT</span>
                    <button className="navbar-toggler collapsed menu-btn" onClick={()=> this.changeMenuButton()}  type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="menu-name">MENU</span> {this.state.menuBtnFocus? <span className="menu-close-btn">X</span>:<span className="navbar-toggler-icon"></span>}
                    </button>
                    <div className="navbar-collapse collapse navbar-content menu-collapse" id="navbarsExample01">
                            <a className="navbar-item nav-link menu-collapse-btn active" href="#"><div><span className="triangle-right-menu"></span>Home</div></a>
                            <a className="navbar-item nav-link menu-collapse-btn" href="#">WERK</a>
                            <a className="navbar-item nav-link menu-collapse-btn" href="#">OVER</a>
                            <a className="navbar-item nav-link menu-collapse-btn" href="#">DIENSTEN</a>
                            <a className="navbar-item nav-link menu-collapse-btn" href="#">PARTNERS</a>
                            <a className="navbar-item nav-link menu-collapse-btn" href="#">STORIES</a>
                            <a className="navbar-item nav-link menu-collapse-btn" href="#">VACATURES</a>                                            
                    </div>
                </nav>
                <div className="WORK">WORK</div>
                <button className="Rectangle-4">
                    <div className="VIEW-CASE-TITLE">VIEW CASE</div>
                </button>
            </div>);
    }
}

export default MenuBar;