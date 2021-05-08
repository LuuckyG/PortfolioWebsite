const CategoryTag = ({ category }) => {
  switch (category) {
    case 'Python':
      return (<span className="tag is-small is-success" style={{ marginRight: 20 }}>Python</span>)
    case 'Web Development':
      return (<span className="tag is-small is-primary" style={{ marginRight: 20 }}>Web Development</span>)
    case 'Machine Learning':
      return (<span className="tag is-small is-danger" style={{ marginRight: 20 }}>Machine Learning</span>)
    case 'JavaScript':
      return (<span className="tag is-small is-warning" style={{ marginRight: 20 }}>JavaScript</span>)
    default:
      return (<span></span>)
  }
}

export default CategoryTag;