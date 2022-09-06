"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomicileService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const domicile_model_1 = require("./domicile.model");
let DomicileService = class DomicileService {
    constructor(sequelize, domicileModel) {
        this.sequelize = sequelize;
        this.domicileModel = domicileModel;
    }
    async create(domicile) {
        try {
            return await this.domicileModel.create(domicile);
        }
        catch (err) {
            throw new common_1.ForbiddenException(err.message);
        }
    }
    async getAllData() {
        try {
            return await this.domicileModel.findAll();
        }
        catch (err) {
            throw new common_1.ForbiddenException(err.message);
        }
    }
};
DomicileService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, sequelize_1.InjectModel)(domicile_model_1.Domicile)),
    __metadata("design:paramtypes", [sequelize_typescript_1.Sequelize, Object])
], DomicileService);
exports.DomicileService = DomicileService;
//# sourceMappingURL=domicile.service.js.map