import React from 'react';
import MenuBar from './MenuBar';
import Filter from './Filter';
import List from './List';
import Api from '../api/Api';
import Clients from './Clients';
import Form from './Form';
import Footer from './Footer';
import '../styles/App.scss';

class App extends React.Component{

    state = {content: []};
    
    scrollUp() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }

    filterByIndutryId = (id) => {
      Api.getInstance().getDataContentByIndustryId(id).then((data) => {
        console.log(data);
        this.setState({content: data});
      });
    }

    validateFormData(e) {
      e.preventDefault();
    }

    constructor() {
      super();
      Api.getInstance().getDataContent()
      .then(data => {
        this.setState({content: data});
        console.log(data);
      });
    }

    render () {
        return (
          <div className="Dept-Work-Desktop-Google-Font">
            <MenuBar />
            <div className="data-content">
              <Filter filterByIndutryId={this.filterByIndutryId}/>
              <List data={this.state.content}/>
            </div>
            <Clients />
            <Form  validateFormData={this.validateFormData}/>
            <Footer  scrollUp={this.scrollUp}/>
          </div>);
    }
}

export default App;
