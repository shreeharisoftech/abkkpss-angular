import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string = "";
  @Output() onClose = new EventEmitter<void>();
  isOpen: boolean = false;
  toggle(){
    this.isOpen = !this.isOpen;
    if(!this.isOpen){
      this.onClose.emit();
    }
  }
}
