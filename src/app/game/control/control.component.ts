import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  @Input() tries = 0;
  @Output() restart = new EventEmitter();

  reStartGame() {
    this.restart.emit();
  }
}
