import React, { Component } from 'react';
import Header from '../components/Header.js';
import Panel from '../components/Panel.js';
import Basic from '../components/Basic.js';
import Link from '../components/Link.js';
import Entity from '../components/Entity.js';
import Color from '../components/Color.js';
import PlainText from '../components/PlainText.js';
import Rich from '../components/Rich.js';
import TexEditorExample from '../components/TexEditorExample.js';
import Tweet from '../components/Tweet.js';
import DraftJSPluginsEditor from '../components/DraftJSPluginsEditor.js';

class Examples extends Component {
  render() {
    return (
      <div>
        <Header />
        <br/><br/>
        <div className="container">
       	<Panel title="Basic" source="https://github.com/facebook/draft-js/blob/master/examples/plaintext/plaintext.html" features="Basic">
        	<Basic />
       	</Panel>
       	<br/><br/>
       	<Panel title="Plain Text" source="https://github.com/facebook/draft-js/blob/master/examples/plaintext/plaintext.html" features="Log contents to console">
        	<PlainText />
       	</Panel>
        <Panel title="Link" source="https://github.com/facebook/draft-js/blob/master/examples/link/link.html" features="Add a link">
        	<Link />
        </Panel>
        <Panel title="Entity" source="https://github.com/facebook/draft-js/blob/master/examples/entity/entity.html" features="Try different entities">
        	<Entity />
        </Panel>
        <Panel title="Color" source="https://github.com/facebook/draft-js/blob/master/examples/color/color.html" features="Color Buttons">
        	<Color />
        </Panel>
        <Panel title="Rich Text" source="https://github.com/facebook/draft-js/blob/master/examples/rich/rich.html" features="Classic Rich text editor">
        	<Rich />
        </Panel>
        <Panel title="TeXEditorExample" source="https://github.com/facebook/draft-js/blob/master/examples/tex" features="Click on the equation to edit; Add new equation">
        	<TexEditorExample />
        </Panel>
        <Panel title="@mention #hashtag" source="https://github.com/facebook/draft-js/blob/master/examples/tweet" features="@mention and #hashtag">
          <Tweet />
        </Panel>
        <Panel title="DraftJS-Plugins Editor" source="https://www.draft-js-plugins.com/" features="1. @mention w/ menu 2. Stickers! 3. colorful links 4. Hashtags 5. Undo/Redo">
          <DraftJSPluginsEditor />
        </Panel>

        <Panel title="https://react-rte.org/demo" source="https://react-rte.org/demo" features="Rich Text Buttons">
             <iframe src="https://react-rte.org/demo"  style={{display: 'block', width: '100%', height: 500}} frameBorder="0"/>
        </Panel>
        <Panel title="Facebook Notes clone" source="https://github.com/andrewcoelho/react-text-editor" features="Add images, bold, italics, numbered rows">
        	   Note: If you are not seeing anything, reload this app in HTTP(not HTTPS) I'm just iframing it from <a href="http://www.andrewcoelho.com/react-text-editor/" target="_blank">http://www.andrewcoelho.com/react-text-editor/</a>)
             <iframe src="http://www.andrewcoelho.com/react-text-editor/" height="1000px" width="1100px" frameBorder="0"/>
        </Panel>
        <Panel title="Megadraft" source="http://globocom.github.io/megadraft" features="Add images, links, bold, italics, etc">
        	   Note: If you are not seeing anything, reload this app in HTTP(not HTTPS) I'm just iframing it from <a href="http://globocom.github.io/megadraft" target="_blank">http://globocom.github.io/megadraft</a>)
             <iframe src="http://globocom.github.io/megadraft" height="1000px" width="1100px" frameBorder="0"/>
        </Panel>

        </div>
      </div>
    );
  }
}


export default Examples;
