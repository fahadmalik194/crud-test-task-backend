import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as AWS from 'aws-sdk';

@Injectable()
export class UtilsService {
  constructor(private config: ConfigService) {}
  private S3 = new AWS.S3({
    accessKeyId: 'AKIATOHGRGFMA3BNVDUW',
    secretAccessKey: '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',
  });
  async uploadImageOnS3(fileObj) {
    if (!fileObj) throw new ForbiddenException('File is not attached');

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
    } catch (e) {
      console.log('Error', e);
      throw new ForbiddenException(e.message);
    }
  }
}
