import React from 'react';
import PageHeader from '../components/PageHeader'

class About extends React.Component {
  
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  render() {
    return (
      <div className="container">
        <PageHeader title="About Me">
          <p>
          Hi! I am Luuk, a self-taught programmer. 
          Started by using Python for healthcare focussed Machine and 
          Deep Learning projects. I currently focus on the development of 
          web applications. Creating meaningful and fun projects for everyone 
          to enjoy is what motivates me to keep creating and learning!
          </p>  
        </PageHeader>
      </div>
      )}
}

export default About;