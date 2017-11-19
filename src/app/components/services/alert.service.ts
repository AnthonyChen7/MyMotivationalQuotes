import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject } from "rxjs";
import { Alert } from "../models/alert";

@Injectable()
export class AlertService {
  private subject = new BehaviorSubject<Alert>(undefined);

  alert(alert : Alert) {
    this.subject.next(alert);
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }
}