import { Board } from '../models/Board';
import { UserAccessFactory } from './UserAccessFactory';
export class BoardFactory {

    getBoardInstance(name: string): Board {
        const userAccessFactory = new UserAccessFactory();
        const userAccess = userAccessFactory.getUserAccess(process.env.API_KEY as string, process.env.API_TOKEN as string);
        const board = new Board();
        board.name = name;
        board.userAccess = userAccess;
        return board;
    }
}