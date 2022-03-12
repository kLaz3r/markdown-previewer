import React from 'react';
import classes from './Previewer.module.scss';

const Previewer = (props) => {
  console.log(props.marked);
  let markdown;
  if (props.marked) {
    markdown = (
      <div
        id='preview'
        dangerouslySetInnerHTML={props.marked}
        className={classes.Marked}
      ></div>
    );
  } else {
    markdown = (
      <div id='preview' className={classes.Marked}>
        Scrie ceva acolo wa
      </div>
    );
  }
  return (
    <div className={classes.Previewer}>
      <h3>Previewer</h3>
      <div className={classes.BottomLine}></div>
      <p>
        The text you typed in the left field will pe parsed and displayed here
      </p>
      {markdown}
    </div>
  );
};

export default Previewer;
