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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("./user.model");
const argon = require("argon2");
let UserService = class UserService {
    constructor(sequelize, userModel) {
        this.sequelize = sequelize;
        this.userModel = userModel;
    }
    async create(user) {
        try {
            const hash = await argon.hash(user.password);
            console.log('Hash', hash);
            const saveUser = await this.userModel.create({
                username: user.username,
                password: hash,
                isAdmin: user.isAdmin,
            });
            delete saveUser.password;
            return saveUser;
        }
        catch (err) {
            throw new common_1.ForbiddenException(err.message);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [sequelize_typescript_1.Sequelize, Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map