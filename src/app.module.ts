import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TodosController } from './todos/todos.controller';
import { TodoService } from './todos/todos.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, TodosController],
  providers: [AppService, UserService, TodoService],
})
export class AppModule {}
