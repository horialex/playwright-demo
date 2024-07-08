import { test } from '@playwright/test';

export class SessionUtils {
  static sessionObject: Map<string, any> = new Map();

  static buildObjectType(objectType: string): string {
    return objectType + test.info().testId;
  }

  static putOnSession(objectType: string, object: any) {
    this.sessionObject.set(this.buildObjectType(objectType), object);
  }

  static getFromSession(objectType: string): any {
    return this.sessionObject.get(this.buildObjectType(objectType));
  }

  static saveOnSessionList(objectType: string, object: unknown) {
    const key = this.buildObjectType(objectType);
    if (!this.sessionObject.has(key)) {
      this.sessionObject.set(key, []);
    }
    const sessionList = this.sessionObject.get(key);
    sessionList.push(object);
    this.sessionObject.set(key, sessionList);
  }
}

let sessionInstance: SessionUtils | undefined = undefined;

export default sessionInstance;
