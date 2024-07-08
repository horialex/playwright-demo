import "reflect-metadata";
import { singleton } from "tsyringe";
import { Board } from "../models/Board";
import { SessionKeys } from "../tools/constants/SessionKeys";
import { SessionUtils } from "../tools/utils/SessionUtils";
import { AbstractBoardDao } from "./AbstractBoardDao";

export class BoardDao implements AbstractBoardDao {

    saveBoard(board: Board): void {
        SessionUtils.saveOnSessionList(SessionKeys.BOARDS, board);
    }

    getBoardByName(value: string): any {
        return this.getAllBoards().find((item) => item.name === value) || null;
    }

    getAllBoards(): Board[] {
        return SessionUtils.getFromSession(SessionKeys.BOARDS);
    }
};