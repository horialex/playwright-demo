import { List } from "models/List";
import { UserAccessFactory } from "./UserAccessFactory";
import { BoardDao } from "dao/BoardDao";
export class ListFactory {

    getListInstance(name: string, boardName: string): List {
        const boardDao = new BoardDao();
        const userAccessFactory = new UserAccessFactory();
        const userAccess = userAccessFactory.getUserAccess(process.env.API_KEY as string, process.env.API_TOKEN as string);
        const board = boardDao.getBoardByName(boardName);
        const list = new List();
        list.name = name;
        list.idBoard = board.id;
        list.userAccess = userAccess;
        return list;
    }
}