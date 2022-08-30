import { Status } from "../enums/status.enum";

export interface project {
    name: string;
    url: string;
    status: Status;
    endTime?: any;
    img?:string;
  }