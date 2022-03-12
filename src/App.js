import classes from './App.module.scss';
import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';
import marked from 'marked';
import { useState } from 'react';

const placeholder = `
# Header h1 Element

## Header h2 Element

The link is [THIS IS THE LINK](https://maiestiprost.com/) \`code shit\`

\`\`\`
 if(condition) {
     function();
 }
\`\`\`

1. First Item
2. Second Item

> ceva aici idk

![pinguin](https://cdn.pixabay.com/photo/2013/07/13/11/43/tux-158547_960_720.png)

**ceva scris aici habar n-am**

`;

marked.setOptions({
  breaks: true,
});

function App() {
  const [editorValue, setEditorValue] = useState(placeholder);
  const editorChangedHandler = (event) => {
    setEditorValue(event.target.value);
    updateMarkedState();
  };
  const updateMarkedState = () => {
    return {
      __html: marked(editorValue),
    };
  };
  return (
    <div className={classes.App}>
      <h1>Markdown Previewer</h1>

      <div className={classes.Text}>
        <Editor
          editorValue={editorValue}
          editorChangedHandler={editorChangedHandler}
        />
        <Previewer marked={updateMarkedState()} />
      </div>
      <small>by stefan =]</small>
    </div>
  );
}

export default App;
