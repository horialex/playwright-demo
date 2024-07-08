import { Board } from "../models/Board";
export interface AbstractBoardDao {

    saveBoard(board: Board): void;

    getBoardByName(value: string): Board | any;

    getAllBoards(): Board[];
}