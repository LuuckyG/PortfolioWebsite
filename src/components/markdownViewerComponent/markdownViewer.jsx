import React from 'react';
import ReactMarkdown from "react-markdown"

class MarkdownViewer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
         content: null,
         urlGitHubFile: "https://bryantson.github.io/reactjs-tutorials/react-markdown-viewer/docs/walkthrough.md"
      };
    }
  
    componentDidMount() {
      
      axios.get(this.state.urlGitHubFile)
      .then(response => {
         console.log("Success in fetching the file from " + this.state.urlGitHubFile);
         this.setState({ content: response.data });
      })
      .catch(error => {
         console.err("Error in fetching the file from " + this.state.urlGitHubFile);
      });
    }
  
    render() {
      const { urlGitHubFile, content } = this.state;
  
      return (
        <div>
           <h3> Fetched from: </h3> { urlGitHubFile }
           
       <hr />
       <p>
          <ReactMarkdown source={content} />
       </p>
        </div>
    )};
      
  }

export default MarkdownViewer;