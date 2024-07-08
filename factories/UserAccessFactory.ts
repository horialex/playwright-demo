import { UserAccess } from '../models/UserAccess';

export  class UserAccessFactory {
    getUserAccess(key: string, token: string): UserAccess {
        return new UserAccess(key, token);
    }
}
