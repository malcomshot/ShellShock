import { Component, signal, ViewChild } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Menu } from "./menu/menu";
import {MatSidenavModule, MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, Header, Footer, Menu, MatSidenavModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Shell-shock-ui');

  @ViewChild('sidenav') sidenav!: MatSidenavModule;
  opened: any;

  toggleNavMenu() {
    console.log('Toggling sidenav');
    this.opened = !this.opened;
  }
}
