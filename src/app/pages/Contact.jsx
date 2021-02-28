import React from 'react';
import PageHeader from '../components/PageHeader'


class Contact extends React.Component {
  
  render() {
    return (
      <div className="container" style={{width: '40%', margin: 'auto'}}>
        <PageHeader title="Contact Me!">
          <p>
          If you want to get in touch with me after all you've seen, then please fill this form and I'll get back to you within a few hours. 
          Alternatively, feel free to email me directly at <a type="email">luuk.geelen@hotmail.com</a>.
          </p>
        </PageHeader>

          <div className="contact-form">
            <div className="field">
              <label className="label">Name</label>
              <div className="control is-extended">
                <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email input" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea class="textarea" placeholder="Textarea"></textarea>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" style={{marginRight: 10}}/>I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link"> <span className="icon is-small is-left" style={{marginRight: 10}}>
                  <i className="fa fa-paper-plane"></i>
                </span>Send Message</button>
              </div>
            </div>
          </div>
    </div>
  )};
}

export default Contact;
