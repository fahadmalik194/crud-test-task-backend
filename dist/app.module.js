"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_model_1 = require("./user/user.model");
const user_module_1 = require("./user/user.module");
const bio_data_module_1 = require("./bio-data/bio-data.module");
const bio_data_model_1 = require("./bio-data/bio-data.model");
const domicile_module_1 = require("./domicile/domicile.module");
const domicile_model_1 = require("./domicile/domicile.model");
const auth_module_1 = require("./auth/auth.module");
const utils_module_1 = require("./utils/utils.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: 'my-crud-database.ci0i0ni0l88l.us-east-1.rds.amazonaws.com',
                port: 3306,
                username: 'root',
                password: 'password',
                database: 'my_crud_db',
                models: [user_model_1.User, bio_data_model_1.BioData, domicile_model_1.Domicile],
                autoLoadModels: true,
                retryAttempts: 10,
            }),
            user_module_1.UserModule,
            bio_data_module_1.BioDataModule,
            domicile_module_1.DomicileModule,
            auth_module_1.AuthModule,
            utils_module_1.UtilsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map