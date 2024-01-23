import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      description: 't1',
      done: false,
    },
    {
      id: 2,
      description: 't2',
      done: false,
    },
    {
      id: 3,
      description: 't3',
      done: false,
    },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((t) => t.id === id);

    if (!todo) {
      throw new NotFoundException(`the todo ${id} not found`);
    }

    return todo;
  }

  create() {}

  update() {}

  delete() {}
}
