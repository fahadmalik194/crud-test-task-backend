import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.model';
import { UserModule } from './user/user.module';
import { BioDataModule } from './bio-data/bio-data.module';
import { BioData } from './bio-data/bio-data.model';
import { DomicileModule } from './domicile/domicile.module';
import { Domicile } from './domicile/domicile.model';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'my-crud-database.ci0i0ni0l88l.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'my_crud_db',
      models: [User, BioData, Domicile],
      autoLoadModels: true,
      retryAttempts: 10,
    }),
    UserModule,
    BioDataModule,
    DomicileModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
