import React from 'react';

const CategoryTag = ({status}) => {
    switch(status) {
      case 'Python':
        return (<span className="tag is-small is-success" style={{ marginRight: 20 }}>In Progress</span>)
      case 'Web Development':
        return (<span className="tag is-small is-primary" style={{ marginRight: 20 }}>Archived</span>)
      case 'Machine Learning':
        return (<span className="tag is-small is-danger" style={{ marginRight: 20 }}>Archived</span>)
      case 'JavaScript':
        return (<span className="tag is-small is-warning" style={{ marginRight: 20 }}>Archived</span>)
      default:
        return (<span></span>)
    }
  }

  export default CategoryTag;