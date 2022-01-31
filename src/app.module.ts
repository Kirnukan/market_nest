import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getOrmConfig } from './config/typeorm';
import { AttachmentModule } from './modules/attachment/attachment.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { BrandModule } from './modules/brand/brand.module';
import { CartModule } from './modules/cart/cart.module';
import { CategoryModule } from './modules/category/category.module';
import { CurrencyModule } from './modules/currency/currency.module';
import { CustomerModule } from './modules/customer/customer.module';
import { OrderModule } from './modules/order/order.module';
import { PaymentModule } from './modules/payment/payment.module';
import { ProductModule } from './modules/product/product.module';
import { ProductImagesModule } from './modules/product-images/productImages.module';
import { ProductPropertiesModule } from './modules/product-properties/productProperties.module';
import { PropertyModule } from './modules/property/property.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(getOrmConfig()),
    AttachmentModule,
    AuthenticationModule,
    BrandModule,
    CartModule,
    CategoryModule,
    CurrencyModule,
    CustomerModule,
    OrderModule,
    PaymentModule,
    ProductModule,
    ProductImagesModule,
    ProductPropertiesModule,
    PropertyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
