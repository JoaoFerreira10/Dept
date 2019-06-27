import React from 'react';
import '../styles/Form.scss';

const Form = ({validateFormData}) => {
    return(
        <div className="form">
            <h2 className="QUESTION-WE-ARE-HER">QUESTION? WE ARE HERE TO HELP!</h2>
            <form className="form-fields" action="">
                <div className="form-field">
                    <label htmlFor="name" className="input-label">NAME</label>
                    <div className="">
                    <input type="text" className="input-field" id="name" onChange={(e) => validateFormData(e)} required/>
                    </div>
                </div>
                <div className="form-field">
                    <label htmlFor="mail" className="input-label">EMAIL</label>
                    <div className="col-xs-12">
                    <input type="text" className="input-field" id="mail" onChange={(e) => validateFormData(e)} title="Invalid email" pattern="[^ @]*@[^ @]*" required/>
                    </div>
                </div>
                <div className="form-field">
                    <label htmlFor="message" className="input-label">MESSAGE</label>
                    <div className="col-xs-12">
                    <textarea className="input-field message-input-field" id="message" onChange={(e) => validateFormData(e)} />
                    </div>
                </div>
                <input type="submit" className="form-submit-btn" value="SEND"/>
            </form>
        </div>
    );
}

export default Form;