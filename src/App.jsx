import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { notesCollection } from "./firebase"
import { addDoc, onSnapshot } from "firebase/firestore"

export default function App() {
  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) || [])


  const [currentNoteId, setCurrentNoteId] = React.useState(notes[0]?.id || "" )

  const currentNote = notes.find(note => note.id === currentNoteId) || notes[0]

	React.useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function(snapshot) {
      // Sync up our local notes array with the snapshot data
      const notesArray = snapshot.docs.map(doc => ({...doc.data(), id: doc.id }))
      setNotes(notesArray)
    })
    return unsubscribe
  }, [])

  async function createNewNote() {
    const newNote = { body: "# Type your markdown note's title here" }
    const newNoteRef = await addDoc(notesCollection, newNote)
    setCurrentNoteId(newNoteRef.id)
  }

  function updateNote(text) {
      setNotes(oldNotes => {
        const newNotes = []
        oldNotes.forEach(note => {
          if (note.id === currentNoteId) {
            note.body = text
            newNotes.unshift(note)
          } else {
            newNotes.push(note)
          }
        })
        return newNotes
      })
  }

  function deleteNote(event, noteId) {
    event.stopPropagation()
    setNotes(oldNotes =>
      oldNotes.filter(note => note.id !== noteId)
    )
  }

  return (
      <main>
      {
          notes.length > 0
          ?
          <Split
              sizes={[30, 70]}
              direction="horizontal"
              className="split"
          >
              <Sidebar
                  notes={notes}
                  currentNote={currentNote}
                  setCurrentNoteId={setCurrentNoteId}
                  newNote={createNewNote}
                  deleteNote={deleteNote}
              />
              {
                  currentNoteId &&
                  notes.length > 0 &&
                  <Editor
                      currentNote={currentNote}
                      updateNote={updateNote}
                  />
              }
          </Split>
          :
          <div className="no-notes">
              <h1>You have no notes</h1>
              <button
                  className="first-note"
                  onClick={createNewNote}
              >
                  Create one now
              </button>
          </div>

      }
      </main>
  )
}
