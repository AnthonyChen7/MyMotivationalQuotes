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

  messages : Message[] = [];
  
  constructor(private alertService : AlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe(
      (alert: Alert) => {
        if(alert){
          this.addGrowlMessage(this.getSeverity(alert.type),alert.message,"");
        }
      }
    );
  }

  addGrowlMessage(severity, summary, detail) {
    let message = { severity : severity, summary : summary, detail : detail };
    this.messages.push(message);
    //remove growl after a delay if not manually closed
    setTimeout(() => {
      this.messages.splice(this.messages.indexOf(message), 1);
    }, 5000)
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
}
