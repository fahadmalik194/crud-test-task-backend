import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
export declare class UtilsService {
    private config;
    constructor(config: ConfigService);
    private S3;
    uploadImageOnS3(fileObj: any): Promise<{
        status: boolean;
        message: string;
        data: AWS.S3.ManagedUpload.SendData;
    }>;
}
