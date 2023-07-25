import MDEditor from '@uiw/react-md-editor';

export default function Editor({ tempNoteText, setTempNoteText}) {
    return (
        <section className="pane editor">
          <MDEditor
            value={tempNoteText}
            onChange={setTempNoteText}
            style={{height: "100%"}}
           />
        </section>
    )
}
