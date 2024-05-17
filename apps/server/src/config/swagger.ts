import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export const setUpSwagger = (app: INestApplication<any>) => {
	const config = new DocumentBuilder()
		.setTitle('TradingProbe')
		.setDescription('The TradingProbe API')
		.setVersion('1.0')
		.addTag('cats')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)
}
