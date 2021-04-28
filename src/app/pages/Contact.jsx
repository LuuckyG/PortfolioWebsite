import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';

import Grid from '../components/Grid';
import Column from '../components/Column';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Text from '../components/Text';
import SEO from '../components/SEO';

const ContactForm = styled.div`
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


const Contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <Grid>
        <Column centered largeMonitor={8} computer={8} tablet={10} mobile={12}>
          <Heading size="small">Contact Me!</Heading>
          <Text>If you want to get in touch with me after all you've seen, then please fill this form and I'll get back to you within a few hours.
          Alternatively, feel free to email me directly at <a href="mailto:luuk.geelen@hotmail.com" type="email">luuk.geelen@hotmail.com</a>.</Text>

          <ContactForm>
            <FormField>
              <FormFieldLabel>Name</FormFieldLabel>
              <FormFieldControl>
                <FormFieldInput type="text" placeholder="Text input" />
              </FormFieldControl>
            </FormField>

            <FormField>
              <FormFieldLabel>Email</FormFieldLabel>
              <FormFieldControl>
                <FormFieldInput type="email" placeholder="Your email address" />
              </FormFieldControl>
            </FormField>

            <FormField>
              <FormFieldLabel>Subject</FormFieldLabel>
              <FormFieldControl>
                <FormFieldInput type="text" placeholder="Subject of the mail" />
              </FormFieldControl>
            </FormField>

            <FormField>
              <FormFieldLabel>Message</FormFieldLabel>
              <FormFieldControl>
                <FormFieldTextArea placeholder="Tell my about your next project!"></FormFieldTextArea>
              </FormFieldControl>
            </FormField>

            <FormField>
              <FormFieldControl>
                <Button>  Send Message <FaPaperPlane style={{ marginLeft: 10 }} /></Button>
              </FormFieldControl>
            </FormField>
          </ContactForm>
        </Column>
      </Grid>
    </>
  )
};

export default Contact;
