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
exports.BioDataService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const bio_data_model_1 = require("./bio-data.model");
let BioDataService = class BioDataService {
    constructor(sequelize, bioDataModel) {
        this.sequelize = sequelize;
        this.bioDataModel = bioDataModel;
    }
    async create(bioData) {
        try {
            return await this.bioDataModel.create(bioData);
        }
        catch (err) {
            throw new common_1.ForbiddenException(err.message);
        }
    }
    async get(id) {
        try {
            return await this.bioDataModel.findOne({
                where: {
                    id,
                },
            });
        }
        catch (err) {
            throw new common_1.ForbiddenException(err.message);
        }
    }
    async getAllData() {
        try {
            return await this.bioDataModel.findAll();
        }
        catch (err) {
            throw new common_1.ForbiddenException(err.message);
        }
    }
    async update(id, updateObj) {
        try {
            return await this.bioDataModel.update(updateObj, { where: { id } });
        }
        catch (err) {
            throw new common_1.ForbiddenException(err.message);
        }
    }
    async delete(id) {
        try {
            const bioData = await this.bioDataModel.findOne(id);
            return await bioData.destroy();
        }
        catch (err) {
            throw new common_1.ForbiddenException(err.message);
        }
    }
};
BioDataService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, sequelize_1.InjectModel)(bio_data_model_1.BioData)),
    __metadata("design:paramtypes", [sequelize_typescript_1.Sequelize, Object])
], BioDataService);
exports.BioDataService = BioDataService;
//# sourceMappingURL=bio-data.service.js.map