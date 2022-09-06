import { UserDto } from './user.dto';
import { User } from './user.model';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(user: UserDto): Promise<User>;
}
