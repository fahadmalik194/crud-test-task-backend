import { User } from '../user/user.model';
import { BioDataDto } from './bio-data.dto';
import { BioData } from './bio-data.model';
import { BioDataService } from './bio-data.service';
export declare class BioDataController {
    private bioDataService;
    constructor(bioDataService: BioDataService);
    create(bioData: BioDataDto): Promise<BioData>;
    get(param: any): Promise<BioData>;
    getAll(user: User): Promise<BioData[]>;
    update(param: any, updateObj: any): Promise<[affectedCount: number]>;
    delete(param: any): Promise<void>;
}
