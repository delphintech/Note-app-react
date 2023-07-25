import React from "react"
import MDEditor from '@uiw/react-md-editor';

export default function Editor({ currentNote, updateNote }) {
    const [selectedTab, setSelectedTab] = React.useState("write")


    return (
        <section className="pane editor">
          <MDEditor
            value={currentNote.body}
            onChange={updateNote}
            style={{height: "100%"}}
           />
          {/* <MDEditor.Markdown source={currentNote.body} style={{ whiteSpace: 'pre-wrap' }} /> */}
        </section>
    )
}
