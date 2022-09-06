"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomicileModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const domicile_controller_1 = require("./domicile.controller");
const domicile_model_1 = require("./domicile.model");
const domicile_service_1 = require("./domicile.service");
let DomicileModule = class DomicileModule {
};
DomicileModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([domicile_model_1.Domicile])],
        controllers: [domicile_controller_1.DomicileController],
        providers: [domicile_service_1.DomicileService],
    })
], DomicileModule);
exports.DomicileModule = DomicileModule;
//# sourceMappingURL=domicile.module.js.map