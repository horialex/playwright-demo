import 'reflect-metadata';
import { singleton } from "tsyringe";

export @singleton() class CucuDAO {
    async printCucu() {
        console.log("Cucuuuuuu din DAO")
    }
}
