import { Component, EventEmitter, Input, input, output, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Output() drawerToggle = new EventEmitter<void>();

  emitDrawerToggle() {
    console.log('Emitting drawer toggle event');
    this.drawerToggle.emit();
  }
}
