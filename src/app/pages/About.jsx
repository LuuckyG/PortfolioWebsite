import React from 'react';
import PageHeader from '../components/PageHeader'
import SectionContent from '../components/SectionContent'
import TimeLine from './about/TimeLine'


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
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
          type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>  
        </PageHeader>

        <SectionContent>
          <TimeLine />
        </SectionContent>

      </div>
      )}
}

export default About;