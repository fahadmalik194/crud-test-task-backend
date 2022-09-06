/// <reference types="multer" />
import { UtilsService } from './utils.service';
export declare class UtilsController {
    private utilService;
    constructor(utilService: UtilsService);
    uploadFile(fileObj: Express.Multer.File): Promise<{
        status: boolean;
        message: string;
        data: import("aws-sdk/clients/s3").ManagedUpload.SendData;
    }>;
}
