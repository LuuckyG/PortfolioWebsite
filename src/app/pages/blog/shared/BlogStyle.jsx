import styled from 'styled-components';

const BlogStyle = styled.div`
  font-size: ${props => (props.size === 'small' ? '0.75rem'
    : (props.size === 'medium' ? '1.25rem'
      : (props.size === 'large' ? '1.5rem'
        : '1rem')))};
  
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }

  li {
    margin-top: 0.25em;
  }

  p:not(:last-child), 
  dl:not(:last-child), 
  ol:not(:last-child), 
  ul:not(:last-child), 
  blockquote:not(:last-child), 
  pre:not(:last-child), 
  table:not(:last-child) {
    margin-bottom: 1em;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #363636;
    font-weight: 600;
    line-height: 1.125;
  }

  h1 {
   font-size: 2em;
   margin-bottom: 0.5em;

   :not(:first-child) {
      margin-top: 1em;
    }
  }

  h2 {
   font-size: 1.75em;
   margin-bottom: 0.5714em;
  
   :not(:first-child) {
    margin-top: 1.1428em;
    }
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 0.6666em;
    
    :not(:first-child) {
      margin-top: 1.3333em;
    }
  }

  h4 {
    font-size: 1.25em;
    margin-bottom: 0.8em;
  }

  h5 {
    font-size: 1.125em;
    margin-bottom: 0.8888em;
  }

  h6 {
    font-size: 1em;
    margin-bottom: 1em;
  }

  blockquote {
    background-color: whitesmoke;
    border-left: 5px solid #dbdbdb;
    padding: 1.25em 1.5em;
  }

  ol {
   list-style-position: outside;
   margin-left: 2em;
   margin-top: 1em;
  
    :not([type]) {
      list-style-type: ${props => (props.list_style_type === 'lower-alpha' ? 'lower-alpha'
    : (props.list_style_type === 'lower-roman' ? 'lower-roman'
      : (props.list_style_type === 'upper-alpha' ? 'upper-alpha'
        : (props.list_style_type === 'upper-roman' ? 'upper-roman'
          : 'decimal'))))};
  }

  ul {
    list-style: disc outside;
    margin-left: 2em;
    margin-top: 1em;
  
    ul {
      list-style-type: circle;
      margin-top: 0.5em;
    
      ul {
        list-style-type: square;
      }
    }
  }

  dd {
    margin-left: 2em;
  }

  figure {
    margin-left: 2em;
    margin-right: 2em;
    text-align: center;
  
    :not(:first-child) {
      margin-top: 2em;
    }

    :not(:last-child) {
      margin-bottom: 2em;
    }

    img {
      display: inline-block;
    }

    figcaption {
      font-style: italic;
    }
  }

  pre {
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    padding: 1.25em 1.5em;
    white-space: pre;
    word-wrap: normal;
  }

  sup,
  sub {
    font-size: 75%;
  }

  table {
    width: 100%;

    td,
    th {
      border: 1px solid #dbdbdb;
      border-width: 0 0 1px;
      padding: 0.5em 0.75em;
      vertical-align: top;
    }

    th {
      color: #363636;
      
      :not([align]) {
        text-align: inherit;
      }
    }

    thead td,
    thead th {
      border-width: 0 0 2px;
      color: #363636;
    }

    tfoot td,
    tfoot th {
      border-width: 2px 0 0;
      color: #363636;
    }

    tbody tr:last-child td,
    tbody tr:last-child th {
      border-bottom-width: 0;
    }

  .tabs li + li {
    margin-top: 0;
  }

  .notification  {
    color: inherit;
  }

  :not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

export default BlogStyle
