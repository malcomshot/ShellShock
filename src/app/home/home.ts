import { Component, inject} from '@angular/core';
import { Video } from '../../model/video';
import  homeVids from '../../assets/VideoLinks.json';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected sanitizer = inject(DomSanitizer);

  constructor() {}

  videos: any[] = homeVids as Video[];

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
