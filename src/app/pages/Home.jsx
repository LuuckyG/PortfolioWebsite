import React from 'react';
import me from '../assets/img/me.jpg'

class Homepage extends React.Component {
  
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main>
        <div className="intro-page">
          <div className="intro-text">
            <p className="intro-title">Luuk Geelen</p>
            <p>
              Hi, There! Welcome on my Portfolio site!<br></br>
              About me:
              <ul>
                <li>
                  Python Developer
                </li>
                <li>
                  Continuous Learner
                </li>
                <li>
                  Chess Lover
                </li>
              </ul>
            </p>
          </div>       
          <div className="profile-picture-wrapper">
              <img className="profile-picture" src={me} alt="Me!"/>
          </div>
        </div>
      </main>
    )}
}

export default Homepage; 
