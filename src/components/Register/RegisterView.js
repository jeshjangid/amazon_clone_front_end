import React from 'react';
import { Link } from 'react-router-dom';

const RegisterView = (props) => {

  const {t} = props;

  return (
    <React.Fragment>
    <div className="container mb-5">
    <div className="card mx-auto mt-5 pb-3 shadow rounded" style={{width: "25rem"}}>
      <div className="card-body">
        <h4 className="card-title">{t('register.title')}</h4>
        <form className="needs-validation" onSubmit={props.handleSubmit} autoComplete="off" noValidate>
          <div className="form-group">
            <label htmlFor="userName">{t('register.lbl_name')} </label>
            <input type="text" name="name" className="form-control" placeholder="Enter Your Name" id="userName" value={props.name} onChange={props.handleChange} required minLength="10" />
            <div className="valid-feedback">
              <i className="far text-success fa-thumbs-up"></i> {t('validation.ok')}
            </div>
            <div className="invalid-feedback">
              <i className="fas text-danger fa-exclamation-triangle"></i> {t('validation.name_error')}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="userEmail">{t('register.lbl_email')} </label>
            <input type="email" name="email" className="form-control" placeholder="Enter Email Address" id="userEmail"
              aria-describedby="emailHelp" value={props.email} onChange={props.handleChange} required />
            <small id="emailHelp" className="form-text text-muted"><i className="fas text-primary fa-info"></i> {t('register.email_info')}</small>
            <div className="valid-feedback">
              <i className="far text-success fa-thumbs-up"></i> {t('validation.ok')}
            </div>
            <div className="invalid-feedback">
              <i className="fas text-danger fa-exclamation-triangle"></i> {t('validation.email_error')}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="userPassword">{t('register.lbl_pass1')} </label>
            <input type="password" className="form-control" placeholder="******" name="password1" id="userPassword"
              aria-describedby="passwordHelp" value={props.password1} onChange={props.handleChange} required minLength="6" />
            <small id="passwordHelp" className="form-text text-muted"><i className="fas text-primary fa-info"></i> {t('register.password_info')}</small>
            <div className="valid-feedback">
              <i className="far text-success fa-thumbs-up"></i> {t('validation.ok')}
            </div>
            <div className="invalid-feedback">
              <i className="fas text-danger fa-exclamation-triangle"></i> {t('validation.password_error')}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="userPassword2">{t('register.lbl_pass2')} </label>
            <input type="password" className="form-control" placeholder="******" name="password2" id="userPassword2"
              aria-describedby="passwordHelp2" value={props.password2} onChange={props.handleChange} required minLength="6" />
            <small id="passwordHelp2" className="form-text text-muted"><i className="fas text-primary fa-info"></i> {t('register.password2_info')}</small>
            <div className="valid-feedback">
              <i className="far text-success fa-thumbs-up"></i> {t('validation.ok')}
            </div>
            <div className="invalid-feedback">
              <i className="fas text-danger fa-exclamation-triangle"></i> {t('validation.password2_error')}
            </div>
          </div>
          <button type="submit" className="btn btn-warning w-100 shadow btn-sm rounded">{t('register.btn_register')}</button>
        </form> 

        
        <hr className="hr-text" data-content={t('register.seperator_text')} />

        <p className="text-center">{t('register.have_account_text')} <Link to="/login">{t('register.btn_signin_text')} <i className="fas fa-caret-right"></i></Link></p>
        <a href="#" className="btn btn-outline-success btn-sm w-100 mt-2">
          <i className="fab fa-google"></i> {t('register.btn_login_google')}
        </a>
        <a href="#" className="btn btn-outline-primary btn-sm w-100 mt-2">
          <i className="fab fa-facebook-square"></i> {t('register.btn_login_facebook')}
        </a>
      </div>
    </div>
  </div>
    </React.Fragment>
  )
}

export default RegisterView