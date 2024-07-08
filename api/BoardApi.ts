import { GeneralApi } from "./GeneralApi";
import { expect } from "@playwright/test";
import { Board } from "../models/Board";
import { BoardFactory } from "../factories/BoardFactory";
import { AbstractBoardDao } from "../dao/AbstractBoardDao";
import { BoardDao } from "dao/BoardDao";
import { ApiUrlConstants } from "tools/constants/ApiUrlConstants";
import { SessionUtils } from "tools/utils/SessionUtils";

export class BoardApi extends GeneralApi {
    boardFactory: BoardFactory;
    boardDao: AbstractBoardDao;
    constructor(boardFactory: BoardFactory, boardDao: BoardDao) {
        super();
        this.boardFactory = boardFactory;
        this.boardDao = boardDao;
    }

    async createBoard(name: string) {
        const board = this.boardFactory.getBoardInstance(name);
        const response = await this.post(ApiUrlConstants.BOARD_CREATE, board);
        expect(response.ok).toBeTruthy();
        const responseBody = await response.json();
        const mergedBoard: Board = {
            ...board,
            ...responseBody,
        };
        this.boardDao.saveBoard(mergedBoard);
    }

    async deleteBoard(name: string) {
        const boardToDelete = await this.boardDao.getBoardByName(name);
        const path = ApiUrlConstants.BOARD_DELETE.replace('{id}', boardToDelete.id);
        await this.delete(path);
    }

    async getAllBoards() {
        const response = await this.get(ApiUrlConstants.BOARDS_GET_ALL);
        expect(response.ok).toBeTruthy();
        return await response.json();
    }

    async deleteAllBoards() {
        const boards = await this.getAllBoards();
        for (const board of boards) {
            await this.delete(ApiUrlConstants.BOARD_DELETE.replace('{id}', board.id));
        }
    }
}