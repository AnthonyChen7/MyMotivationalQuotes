import { Component, OnInit } from '@angular/core';
import { Alert, AlertType } from '../../models/alert';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'alert-growl',
  templateUrl: './alert-growl.component.html',
  styleUrls: ['./alert-growl.component.css']
})
export class AlertGrowlComponent implements OnInit {
  alerts : Alert[] = [];
  
  constructor(private alertService : AlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe(
      (alert: Alert) => {
        if(alert){
          this.alerts.push(alert);
        }
      }
    );
  }

  removeAlert(alert : Alert){
    this.alerts = this.alerts.filter(element => element !== alert);
  }

  cssClass(alert: Alert) {
    if (!alert) {
        return;
    }

    // return css class based on alert type
    switch (alert.type) {
        case AlertType.Success:
            return 'alert alert-success';
        case AlertType.Error:
            return 'alert alert-danger';
        case AlertType.Info:
            return 'alert alert-info';
        case AlertType.Warning:
            return 'alert alert-warning';
    }
}

}
