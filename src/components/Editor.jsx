import MDEditor from '@uiw/react-md-editor';

export default function Editor({ currentNote, updateNote }) {
    return (
        <section className="pane editor">
          <MDEditor
            value={currentNote?.body}
            onChange={updateNote}
            style={{height: "100%"}}
           />
        </section>
    )
}
