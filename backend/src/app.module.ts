import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { User } from './entities/user.entity';
import { Log } from './entities/log.entity'
import { LogController } from './controllers/log.controller';
import { LogService } from './services/log.service';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1', // url for testing: http://localhost:3000/
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'mentalligator',
      entities: [User, Log],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Log]),
    AuthModule,
  ],
  controllers: [AppController, UserController, LogController],
  providers: [AppService, UserService, LogService],
})
export class AppModule {}
