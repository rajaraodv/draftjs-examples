import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createMentionPlugin from 'draft-js-mention-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import createStickerPlugin from 'draft-js-sticker-plugin';
//import createEmojiPlugin from 'draft-js-emoji-plugin';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createUndoPlugin from 'draft-js-undo-plugin';


import  'draft-js-linkify-plugin/lib/plugin.css';
import  'draft-js-mention-plugin/lib/plugin.css';
import  'draft-js-sticker-plugin/lib/plugin.css';
//import  'draft-js-emoji-plugin/lib/plugin.css';
import  'draft-js-hashtag-plugin/lib/plugin.css';
import  'draft-js-undo-plugin/lib/plugin.css';

import { fromJS } from 'immutable';
const mentions = fromJS([
  {
    name: 'Matthew Russell',
    link: 'https://twitter.com/mrussell247',
    avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
  },
  {
    name: 'Julian Krispel-Samsel',
    link: 'https://twitter.com/juliandoesstuff',
    avatar: 'https://pbs.twimg.com/profile_images/477132877763579904/m5bFc8LF_400x400.jpg',
  },
  {
    name: 'Jyoti Puri',
    link: 'https://twitter.com/jyopur',
    avatar: 'https://pbs.twimg.com/profile_images/705714058939359233/IaJoIa78_400x400.jpg',
  },
  {
    name: 'Max Stoiber',
    link: 'https://twitter.com/mxstbr',
    avatar: 'https://pbs.twimg.com/profile_images/681114454029942784/PwhopfmU_400x400.jpg',
  },
  {
    name: 'Nik Graf',
    link: 'https://twitter.com/nikgraf',
    avatar: 'https://pbs.twimg.com/profile_images/535634005769457664/Ppl32NaN_400x400.jpeg',
  },
]);


const stickers = fromJS({
  data: {
    'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b': {
      id: 'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b',
      url: 'https://www.draft-js-plugins.com/images/unicorn-4.png',
    },
    'adec3f13-823c-47c3-b4d1-be4f68dd9d6d': {
      id: 'adec3f13-823c-47c3-b4d1-be4f68dd9d6d',
      url: 'https://www.draft-js-plugins.com/images/unicorn-1.png',
    },
    'e14b5a20-1025-4952-b731-41cd4b118ba0': {
      id: 'e14b5a20-1025-4952-b731-41cd4b118ba0',
      url: 'https://www.draft-js-plugins.com/images/unicorn-6.png',
    },
    '659a0dbf-5f85-4f32-999d-eb9ba6b0f417': {
      id: '659a0dbf-5f85-4f32-999d-eb9ba6b0f417',
      url: 'https://www.draft-js-plugins.com/images/unicorn-2.png',
    },
    'fab0ae95-ae95-4775-b484-72c290437602': {
      id: 'fab0ae95-ae95-4775-b484-72c290437602',
      url: 'https://www.draft-js-plugins.com/images/unicorn-5.png',
    },
    '71853190-8acd-4d3b-b4fd-63f7b0648daa': {
      id: '71853190-8acd-4d3b-b4fd-63f7b0648daa',
      url: 'https://www.draft-js-plugins.com/images/unicorn-3.png',
    },
  },
});

const text = `Try out: 1. type "@" to see context-menu 2. Add Stickers by clicking the button below 3. Themed http://bla.com 4. Themed #hashtags 5. Undo/Redo 6. Emojis:  🙌
🌿☃️🎉🙈 aaaand maybe a few more here 🐲☀️🗻 `;

const mentionPlugin = createMentionPlugin({ mentions });
const linkifyPlugin = createLinkifyPlugin();
const stickerPlugin = createStickerPlugin({ stickers });
const StickerSelect = stickerPlugin.StickerSelect;
//const emojiPlugin = createEmojiPlugin();
const hashtagPlugin = createHashtagPlugin();
const undoPlugin = createUndoPlugin();
const { UndoButton, RedoButton } = undoPlugin;

const plugins = [mentionPlugin, linkifyPlugin, stickerPlugin, hashtagPlugin, undoPlugin];

export default class CustomEditor extends Component {

  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  render() {
    return (
      <div>
        <div onClick={ this.focus }>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref="editor"
          />
        </div>
        <div style={{marginTop: '100px'}}>
          <StickerSelect editor={ this }  />   
          <span style={{marginRight:'10px'}} />       
          <UndoButton
            editorState={ this.state.editorState }
            onChange={ this.onChange }
          />
          <RedoButton
            editorState={ this.state.editorState }
            onChange={ this.onChange }
          />
        </div>
        <div>

        </div>
      </div>
    );
  }
}