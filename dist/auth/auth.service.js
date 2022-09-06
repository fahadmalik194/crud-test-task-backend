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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("../user/user.model");
const argon = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(config, userModel, jwt) {
        this.config = config;
        this.userModel = userModel;
        this.jwt = jwt;
    }
    async signIn(dto) {
        const user = await this.userModel.findOne({
            where: {
                username: dto.username,
            },
        });
        if (!user)
            throw new common_1.ForbiddenException('Credentials Incorrect');
        const pwMatches = await argon.verify(user.password, dto.password);
        if (!pwMatches)
            throw new common_1.ForbiddenException('Credentials Incorrect');
        user['password'] = null;
        return this.signToken(user);
    }
    async signToken(user) {
        const payload = {
            sub: user.id,
            username: user.username,
        };
        const secret = this.config.get('JWT_SECRET');
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '15m',
            secret: secret,
        });
        return {
            access_token: token,
            user_detail: user,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [config_1.ConfigService, Object, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map