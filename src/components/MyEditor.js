//this.props.location.state.message


import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import theme from 'prism-react-renderer/themes/nightOwl'
import dedent from "dedent"
import './style.css'

require('prismjs/components/prism-json');

export default class MyEditor extends React.Component  {

  state = {
    code: this.props.location.state.message

  }

  render() {
    return (
      <div >        
        <div className="container_editor_area container-fluid" style={{width: '70%'}}>
            <Editor
              placeholder="Type some code…"
              value={this.state.code}
              onValueChange={code => this.setState({ code })}
              highlight={code => highlight(code, languages.json)}
              padding={10}
              style={{
                fontSize: 14
              }}
              className="container__editor"
            />
          </div>
          <button type="button" class="btn btn-primary btn-sm" style={{fontSize: 14, position: 'absolute',
            left: '18%'}}> Save </button> 
      </div>


    );
  }
}