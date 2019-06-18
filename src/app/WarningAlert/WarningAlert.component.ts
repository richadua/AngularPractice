import { Component } from '@angular/core'
import { templateJitUrl } from '@angular/compiler';

@Component({
    selector: 'warning-alert',
    templateUrl: './WarningAlert.component.html',
    styles: [
        `p {
            color: red;
        }`
    ]
})

export class WarningAlert{}
