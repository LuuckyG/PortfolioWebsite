import React from 'react'
import * as Markdown from 'react-markdown'

const HeaderImage = ({bg, title, subtitle}) => (
    <section style={{
        margin: 0,
        padding: 0,
        backgroundImage: `url(${bg})`,
        display: 'flex',
        alignItems: 'center',
        width: "100%",
        height: "600px"
    }}>
      <div style={{
          background: '#333',
          width: '40%',
          height: '300px',
          margin: 'auto',
          opacity: 0.8,
          blurRadius: 90,
          color: '#FFF'
      }}>
          <Markdown className="content" source={title} /><br></br>
          <Markdown className="content" source={subtitle} />
      </div>
    </section>
  )

export default HeaderImage;