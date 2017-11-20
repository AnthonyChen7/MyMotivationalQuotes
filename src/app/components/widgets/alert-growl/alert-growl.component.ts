import { Component, OnInit } from '@angular/core';
import { Alert, AlertType } from '../../models/alert';
import { AlertService } from '../../services/alert.service';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'alert-growl',
  templateUrl: './alert-growl.component.html',
  styleUrls: ['./alert-growl.component.css']
})
export class AlertGrowlComponent implements OnInit {
  
  alerts : Alert[] = [];
  messages : Message[] = [];
  
  constructor(private alertService : AlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe(
      (alert: Alert) => {
        if(alert){
          this.alerts.push(alert);
          window.setTimeout(() => {
            this.removeAlert(alert);
            this.createMessages();
          },7000);
          this.createMessages();
        }
      }
    );
  }

  removeAlert(alert : Alert){
    this.alerts = this.alerts.filter(element => element !== alert);
  }

  getSeverity(alertType: AlertType) {
    switch (alertType) {
        case AlertType.Success:
            return 'success';
        case AlertType.Error:
            return 'error';
        case AlertType.Info:
            return 'info';
        case AlertType.Warning:
        default:
            return 'warn';
    }
  }

  createMessages(){
    this.messages = this.alerts.map((element) => {
      return {severity:this.getSeverity(element.type), summary:element.message};
    });
  }

  
}
