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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const AWS = require("aws-sdk");
let UtilsService = class UtilsService {
    constructor(config) {
        this.config = config;
        this.S3 = new AWS.S3({
            accessKeyId: 'AKIATOHGRGFMA3BNVDUW',
            secretAccessKey: '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',
        });
    }
    async uploadImageOnS3(fileObj) {
        if (!fileObj)
            throw new common_1.ForbiddenException('File is not attached');
        console.log('File Object', fileObj);
        const { originalname, buffer, mimetype } = fileObj;
        const params = {
            Bucket: 'akoma-test',
            Key: originalname,
            Body: buffer,
            ACL: 'public-read',
            ContentType: mimetype,
        };
        try {
            let s3Response = await this.S3.upload(params).promise();
            return {
                status: true,
                message: 'File Uploaded to S3',
                data: s3Response,
            };
        }
        catch (e) {
            console.log('Error', e);
            throw new common_1.ForbiddenException(e.message);
        }
    }
};
UtilsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UtilsService);
exports.UtilsService = UtilsService;
//# sourceMappingURL=utils.service.js.map