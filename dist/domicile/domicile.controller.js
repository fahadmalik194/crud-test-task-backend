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
exports.DomicileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const domicile_dto_1 = require("./domicile.dto");
const domicile_service_1 = require("./domicile.service");
let DomicileController = class DomicileController {
    constructor(domicileService) {
        this.domicileService = domicileService;
    }
    create(domicile) {
        return this.domicileService.create(domicile);
    }
    getAll() {
        return this.domicileService.getAllData();
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [domicile_dto_1.DomicileDto]),
    __metadata("design:returntype", Promise)
], DomicileController.prototype, "create", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('read/all/data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DomicileController.prototype, "getAll", null);
DomicileController = __decorate([
    (0, swagger_1.ApiTags)('domicile'),
    (0, common_1.Controller)('domicile'),
    __metadata("design:paramtypes", [domicile_service_1.DomicileService])
], DomicileController);
exports.DomicileController = DomicileController;
//# sourceMappingURL=domicile.controller.js.map