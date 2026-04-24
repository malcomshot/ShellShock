import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-container',
  imports: [],
  templateUrl: './video-container.html',
  styleUrl: './video-container.scss',
})
export class VideoContainer {

  @Input() 
  videoUrl: string = '';
  @Input()
  title: string = '';
  @Input()
  subtitle: string = '';
}
