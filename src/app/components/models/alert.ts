import { CustomAction } from "../../states/custom-action";

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}

export class Alert {
  type: AlertType;
  message: string;
  action: string;

  constructor(message? : string, type? : AlertType, action? : string) {
    this.message = message;
    this.type = type;
    this.action = action;
  }
}