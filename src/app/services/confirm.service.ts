import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(private modalService: NgbModal) { }

  open(title: string, body: string): Promise<boolean> {
    const modalRef: NgbModalRef = this.modalService.open(ConfirmModalComponent, { centered: true });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.body = body;

    return modalRef.result.then((result) => {
      return Promise.resolve(result);
    }).catch(() => {
      return Promise.resolve(false);
    });
  }
}
