
import {Logger, ValidationPipe} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { env } from 'process';
import {logger} from "nx/src/utils/logger";
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: env.NODE_ENV === 'development' ? ['error', 'warn', 'log', 'verbose'] : ['error', 'warn', 'debug']
  });


  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      whitelist: true,
      transform: true,
    }),
  );
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  /**
   * Open API configurations
   * */
  const config = new DocumentBuilder()
    .setTitle('ProFuelTrace Application')
    .setDescription('A ProDecipher innovation')
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('User')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = env.PORT || 8980;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap().catch((e)=>{
  logger.error(`API failed to start : ${JSON.stringify(e)}`)
});
