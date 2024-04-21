'use client';

import { Todo } from "@prisma/client"
import { TodosItem } from "..";
import * as todosApi from '../index'
import { useRouter } from "next/navigation";
import { toggleTodo } from "../actions/todo-actions";

interface Props{
    todos?: Todo[] 
}

export const TodosGrid = ({ todos = [] }: Props) => {

  // const router = useRouter()

  // const toggleTodo = async (id: string, complete: boolean) => {
  //   const updatedTodo = await todosApi.updateTodo(id, complete)
  //   router.refresh()
  //   return updatedTodo
  // }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
        {
          todos.map(todo => (
            <TodosItem key={ todo.id } todo={ todo } toggleTodo={ toggleTodo }/>
          ))
        }
    </div>
  )
}