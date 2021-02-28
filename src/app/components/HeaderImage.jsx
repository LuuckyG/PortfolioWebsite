import React from 'react'
import moment from 'moment'
import CategoryTag from '../components/CategoryTag'

// const HeaderImageWrapper = styled.section`
//   margin: 0,
//   padding: 0,
//   backgroundImage: ${`url(${props=>props.bg})`},
//   display: 'flex',
//   alignItems: 'center',
//   width: "100%",
//   height: "600px" 
// `;

// const HeaderImage = ({bg, title, date, category}) => {
//   return <HeaderImageWrapper bg={bg} />
// }

const HeaderImage = ({bg, title, date, category}) => (
    <section style={{
        margin: 0,
        padding: 0,
        backgroundImage: `url(${bg})`,
        display: 'flex',
        alignItems: 'center',
        width: "100%",
        height: "600px",
    }}>
      <div style={{
          background: '#333',
          color: '#FFF',
          width: '40%',
          height: '300px',
          margin: 'auto',
          opacity: 0.8,
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <div className="" style={{
            margin: 'auto',
            textAlign: 'center',
            opacity: 1
          }}>
            <div className="blog-title">{title}</div>
            <div className="blog-info">
              {moment(date).calendar(null, {
              sameDay: '[Today]',
              lastDay: '[Yesterday]',
              lastWeek: '[Last] dddd',
              sameElse: 'MMM Do YYYY'
            })} <br></br>
            <ul className="blog-categories">
              {category.map((c, index) =>
                <CategoryTag category={c} style={{opacity: 1}}/>
              )}
            </ul>
            </div>
            
          </div>
      </div>
    </section>
  )

export default HeaderImage;

