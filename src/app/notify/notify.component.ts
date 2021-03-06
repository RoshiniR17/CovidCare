import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss'],
})
export class NotifyComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}
  public docinfo={
    name: "Roa",
    email:"notifyme2rao@gmail.com"
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        docinfo: this.docinfo
      }
    });
    return await modal.present().then(_ => {
      // triggered when opening the modal
      console.log('Sending: ', this.docinfo);
    });
  }

}
