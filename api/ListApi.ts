import { GeneralApi } from "./GeneralApi";
import { ListFactory } from "factories/ListFactory";
import { ApiUrlConstants } from "tools/constants/ApiUrlConstants";
import { expect } from "@playwright/test";
export class ListApi extends GeneralApi {
    listFactory: ListFactory;

    constructor(listFactory: ListFactory) {
        super();
        this.listFactory = listFactory;
    }
    async createList(name: string, boardName: string) {
        const list = this.listFactory.getListInstance(name, boardName);
        const response = await this.post(ApiUrlConstants.LIST_CREATE, list);
        expect(response.ok).toBeTruthy();
    }
}