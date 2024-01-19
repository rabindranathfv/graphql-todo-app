import { Resolver, Query, Float, Int, Args } from '@nestjs/graphql';
import { HelloWorldService } from './hello-world.service';

@Resolver()
export class HelloWorldResolver {
  constructor(private readonly helloWorldService: HelloWorldService) {}

  @Query(() => String, { description: 'start with graphQL', name: 'hello' })
  helloWorld(): string {
    return 'hola mundo v2';
  }

  @Query(() => Float, {
    description: 'generate random number',
    name: 'randomNumber',
  })
  getGenerateRandomNumber() {
    return Math.random() * 100;
  }

  @Query(() => Int, { description: 'generate random number to Default(6)' })
  getGenerateRandomFromZeroTo(
    @Args('to', { type: () => Int, nullable: true }) to = 6,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
