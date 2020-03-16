import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() {
    alertify.defaults.theme.ok = 'btn btn-primary';
    alertify.defaults.theme.cancel = 'btn btn-warning';
    // alertify.defaults.theme.input = 'form-control';
  }


  confirm(headerMsg: string, message: string, okMsg: string, cancelMsg: string,
          okCallback: () => any) {
    alertify.confirm('<h5 style="color: red;">' + message + '</h5>', (e: any) => {
      if (e) {
        okCallback();
      } else {}
    })
      .set('labels', {ok: okMsg, cancel: cancelMsg})
      .set('defaultFocusOff', true)
      .setHeader('<h4>' + headerMsg + '</h4>');
  }


  success(message: string) {
    alertify.success(message);
  }

    error(message: string) {
    alertify.error(message);
  }

    warning(message: string) {
    alertify.warning(message);
  }

    message(message: string) {
    alertify.message(message);
  }

}
