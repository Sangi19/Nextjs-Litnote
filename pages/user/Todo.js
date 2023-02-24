import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Todo() {
  
  const router = useRouter();
  const data = router.query;

  const [todoList, setTodoList] = useState([])

  async function todosListFn() {
    const fetchtodosData= await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${data.id}`) 
    const todosData= await fetchtodosData.json()
    setTodoList(todosData)
  }

  useEffect(() => {
  todosListFn();

  });

  return (
    <div>
        <h4>User Todo</h4>
        <h2>
          <ul>
              {todoList?( todoList.map((item)=>
              <li>* {item.title}</li>
                )):'no todo found'}
          </ul>
            <Button>               
              <Link href="/">Back to the todosList</Link>
            </Button>
        </h2>
    </div>
  )
}
