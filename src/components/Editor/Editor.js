import React from 'react';
import classes from './Editor.module.scss';

const Editor = (props) => {
  return (
    <div className={classes.Editor}>
      <h3>Editor</h3>
      <div className={classes.BottomLine}></div>
      <p>Type text in here to see it previewed</p>
      <textarea
        name='editor'
        className={classes.EditorTextArea}
        id='editor'
        value={props.editorValue}
        onChange={(e) => props.editorChangedHandler(e)}
      ></textarea>
    </div>
  );
};

export default Editor;
