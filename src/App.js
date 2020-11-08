import React, {useState} from 'react';
import ToDoListItem from './ToDoListItem';
import './App.css';

const App = props => {
  const [state, setState] = useState(props)
  const { todoList } = state

  const handleAdd = e => {
    e.preventDefault();
    const elmTitle = e.target.elements['title']
    const elmDisc = e.target.elements['description']

    // setState({...state, todoList: [...todoList, {title: elmTitle.value, description: elmDisc.value}]})
    setState({...state.todoList, todoList: [{title: elmTitle.value, description: elmDisc.value}]})

    elmTitle.value = ""
    elmDisc.value = ""
  }

  const handleRemove = i => {
    setState({todoList: todoList.filter((value, index) => index !== i)})
  }


  return (
    <div className="App">
      <form className="App-form" onSubmit={handleAdd}>
        <div>
          <input id="title" placeholder="title"/>
          <textarea id="description" placeholder="description"></textarea>
        </div>
        <div>
          <button type="submit">登録</button>
        </div>
      </form>
      <div>
        {state.todoList.map((todo, index) => (
          <ToDoListItem
            key={todo.title}
            title={todo.title}
            description={todo.description}
            index={index}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  )

}

App.defaultProps = {
  todoList: []
}

export default App;