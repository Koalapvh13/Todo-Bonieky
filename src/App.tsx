import {useState} from 'react';
import * as C from './App.styles';
import {Item} from './types/item';
import {ListItem} from './Components/ListItem';
import {AddArea} from './Components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar pão na padaria', done: false},
    {id: 2, name: 'Comprar um bolo na padaria', done: false},
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length+1,
      name: taskName,
      done: false
    });
    setList(newList);
  }
  const handleTaskStatus = (taskid: number) => {
    let newList = [...list];
    const listCrowd = newList.map((item) => {
      if(item.id === taskid){
        item.done = !item.done;
      }
      return item;
    });
    setList(listCrowd);
  }


  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        
        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index)=>(
          <ListItem key={index} item={item} onChangeStatus={handleTaskStatus}/>
        ))}

      </C.Area>
    </C.Container>
  )
} 

export default App;