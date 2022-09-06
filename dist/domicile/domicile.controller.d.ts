import { DomicileDto } from './domicile.dto';
import { Domicile } from './domicile.model';
import { DomicileService } from './domicile.service';
export declare class DomicileController {
    private domicileService;
    constructor(domicileService: DomicileService);
    create(domicile: DomicileDto): Promise<Domicile>;
    getAll(): Promise<Domicile[]>;
}
