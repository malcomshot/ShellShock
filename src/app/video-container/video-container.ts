import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-container',
  imports: [CommonModule],
  templateUrl: './video-container.html',
  styleUrl: './video-container.scss',
})
export class VideoContainer {
  
  protected sanitizer = inject(DomSanitizer);

  @Input() 
  url: string = '';
  @Input()
  title: string = '';
  @Input()
  subtitle: string = '';
  @Input()
  buttonDestination: any;
  @Input()
  width: any;
  @Input()
  height: any;

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
