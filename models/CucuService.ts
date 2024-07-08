import 'reflect-metadata';
import { injectable, container } from 'tsyringe';
import { CucuDAO } from './CucuDAO';


export @injectable() class CucuService {

  private cucuDAO: CucuDAO;

  constructor() {
    this.cucuDAO = container.resolve(CucuDAO);
  }

  async printCucu() {

    this.cucuDAO.printCucu();
    console.log("Cucuuuuuu din Service");
  }
}