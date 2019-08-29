import React from 'react';
import ReactDOM from 'react-dom';
import Draft from 'draft-js';
import Editor from 'draft-js-plugins-editor';


const { EditorState, ContentState } = Draft;


export default class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    //const content =  this.props.location.state.message
    const plainText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';
    var ContentState = Draft.ContentState;
    this.state = {
      editorState: EditorState.createWithContent("Tets")
    };
    this.onChange = (editorState) => this.setState({editorState});
    this.setEditor = (editor) => {
      this.editor = editor;
    };
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };
  }

  componentDidMount() {
    this.focusEditor();
  }

  render() {
    let { editorState } = this.props.location.state.message

    return (
      <div className= 'container-fluid' style={styles.editor} onClick={this.focusEditor}>
        
        <Editor
          ref={this.setEditor}
          editorState={editorState}
          onChange={this.onChange}
          
        />
       
        
      </div>
    );
  }
}

const styles = {
  editor: {
    border: '1px solid grey',
    minHeight: '6em',
    backgroundColor: 'black',
  
    color: 'orange',
    fontSize: 16,
  }
};