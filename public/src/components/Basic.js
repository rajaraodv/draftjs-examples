import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

class MyEditor extends Component {
  constructor() {
    super();
    this.state = { 
      editorState: EditorState.createEmpty() 
    };
    this.onChange = (editorState) => this.setState({ editorState });
  }
  render() {
    const { editorState } = this.state;
    return (
        <Editor 
          editorState={editorState} 
          onChange={this.onChange}
          placeholder="Write something cool..."
        />
    );
  }
}

export default MyEditor