function getNotes() {
    return fetch(`http://localhost:5500/notes`)
        .then((resp) => resp.json())
        .then((data) => {
            return data;
        })
        .catch(e => {
            throw new Error(e)
        })
}

async function showNotes() {
    const {notes} = await getNotes();
    document.getElementById('amount-notes').innerText = notes.length;

    notes.map(note => renderNote(note))
}

function renderNote(note){
    const table = document.getElementById('table-notes');
    const trNote = document.createElement('tr');

    let id = document.createElement('td');
    let title = document.createElement('td');
    let text = document.createElement('td');
    let contButton = document.createElement('td')
    let button = document.createElement('button')

    id.innerHTML = note.id;
    title.innerHTML = note.title;
    text.innerHTML = note.text;
    button.innerText = 'See more'

    trNote.appendChild(id)
    trNote.appendChild(title)
    trNote.appendChild(text)
    contButton.appendChild(button)
    trNote.appendChild(contButton)

    table.appendChild(trNote);
}

await showNotes();