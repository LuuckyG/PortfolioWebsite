import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';

import Grid from '../components/Grid';
import Column from '../components/Column';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Text from '../components/Text';
import SEO from '../components/SEO';

const ContactForm = styled.form`
  text-align: center;
  margin: 0 auto;
`;

const FormField = styled.div`
  width: 80%;
  margin: 10px auto;
`;

const FormFieldLabel = styled.div`
  text-align: left;
`;

const FormFieldControl = styled.div`
  text-align: left;

  &:focus {
    outline-color: #28a745;
  }
`;

const FormFieldInput = styled.input`
  width: 100%;
  padding: 10px;

  &:focus {
    border: 3px solid #28a745;
    outline-color: #28a745;
  }
`;

const FormFieldTextArea = styled.textarea`
  width: 100%;  
  padding: 10px;
  min-height: 15em;
  resize: vertical;

  &:focus {
    border: 3px solid #28a745;
    outline-color: #28a745;
  }
`;

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICEID,
      process.env.REACT_APP_EMAILJS_TEMPLATEID,
      e.target,
      process.env.REACT_APP_EMAILJS_USERID)
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  render() {
    return (
      <>
        <SEO title="Contact" />
        <Grid>
          <Column centered largeMonitor={8} computer={8} tablet={10} mobile={12}>
            <Heading size="small">Contact Me!</Heading>
            <Text>If you want to get in touch with me after all you've seen, then please fill this form and I'll get back to you within a few hours.
          Alternatively, feel free to email me directly at <a href="mailto:luuk.geelen@hotmail.com" type="email">luuk.geelen@hotmail.com</a>.</Text>

            <ContactForm onSubmit={this.sendEmail}>
              <FormField>
                <FormFieldLabel>Name</FormFieldLabel>
                <FormFieldControl>
                  <FormFieldInput name="from_name" id="name" type="text" placeholder="Your name" />
                </FormFieldControl>
              </FormField>

              <FormField>
                <FormFieldLabel>Email</FormFieldLabel>
                <FormFieldControl>
                  <FormFieldInput name="reply_to" id="email" type="email" placeholder="Your email address" />
                </FormFieldControl>
              </FormField>

              <FormField>
                <FormFieldLabel>Subject</FormFieldLabel>
                <FormFieldControl>
                  <FormFieldInput name="subject" id="subject" type="text" placeholder="Subject of the mail" />
                </FormFieldControl>
              </FormField>

              <FormField>
                <FormFieldLabel>Message</FormFieldLabel>
                <FormFieldControl>
                  <FormFieldTextArea name="message" id="message" placeholder="Tell my about your next project!"></FormFieldTextArea>
                </FormFieldControl>
              </FormField>

              <FormField>
                <FormFieldControl>
                  <Button
                    type='submit'
                  // onClick={this.sendMessage.bind(this)}
                  >
                    Send Message <FaPaperPlane style={{ marginLeft: 10 }} />
                  </Button>
                </FormFieldControl>
              </FormField>
            </ContactForm>
          </Column>
        </Grid>
      </>
    )
  }
};

export default Contact;
