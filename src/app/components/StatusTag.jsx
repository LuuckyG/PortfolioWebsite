const StatusTag = ({ status }) => {
  switch (status) {
    case 'IN_PROGRESS':
      return (<span className="tag is-small is-warning" style={{ marginLeft: 20 }}>In Progress</span>)
    case 'ARCHIVED':
      return (<span className="tag is-small is-danger" style={{ marginLeft: 20 }}>Archived</span>)
    default:
      return (<></>)
  }
}

export default StatusTag;