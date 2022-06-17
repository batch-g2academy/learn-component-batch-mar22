function App() {
    const [ todos, setTodos ] = React.useState([{ id: 1, title: 'Learn HTML', status: 'complete'}, { id: 2, title: 'Learn CSS', status: 'complete'}, { id: 3, title: 'Learn ReactJS', status: 'incomplete'}])
    
    const [ newTodo, setNewTodo ] = React.useState(''); // [ state, function untuk mengubah value dari variabel state ]
    const [ status, setStatus ] = React.useState('');

    function handleChangeInput(event) {
        setNewTodo(event.target.value);
    }

    function save(event) {
        event.preventDefault(); // supaya web browser tidak ke-refresh
        console.log("MAU DI SAVE: ");
        console.log(newTodo);
        // todos.push(newTodo); // TIDAK BISA KARENA IMMUTABLE!! HARUS LEWAT SETTER-NYA
        let todo = { id: todos.length + 1, title: newTodo, status:  status};

        setTodos((currentState) => {
            return [ ...currentState, todo ];
        })

        setNewTodo('');
    }
    
    return(
        <div>
            <form>
                <input id="input-todo" value= { newTodo } placeholder="Input your todo" onChange={ handleChangeInput }/>
                <input value={status} placeholder="Input status" onChange={(event) => setStatus(event.target.value)} />
                <button onClick={ save }>Save</button>
                <h1>Title: { newTodo }</h1>
            </form>

            <div>
                { todos.map((todo) => (
                    <h2 key={todo.id}> {todo.id}. {todo.title} </h2>
                )) }
            </div>

        </div>
    )
}



ReactDOM.render( <App />, document.getElementById('app'));

// state movies
// [ { id: number, title: string, year: string, desc: string }]
// Input untuk:
// - title
// - year
// - desc