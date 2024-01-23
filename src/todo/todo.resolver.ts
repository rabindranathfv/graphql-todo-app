import { Resolver, Query, Float, Int, Args } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}
  @Query(() => [Todo], { name: 'getAllTodo' })
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Query(() => Todo, { name: 'getTodoById' })
  findOne(@Args('id', { type: () => Int }) id: number): Todo {
    console.log(
      '🚀 ~ file: todo.resolver.ts:15 ~ TodoResolver ~ findOne ~ id:',
      id,
      typeof id,
    );
    return this.todoService.findOne(id);
  }

  // create() {}

  // updateOne() {}

  // deleteOne() {}
}
