import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoButtonStyle } from '../../model/video';

@Component({
  selector: 'app-video-container',
  imports: [CommonModule],
  templateUrl: './video-container.html',
  styleUrl: './video-container.scss',
})
export class VideoContainer {

  startTime: number = 0;

  ngOnInit(){
    this.startTime = Date.now()
  }

  timer() {console.log( (Date.now() - this.startTime)/1000 )}

  loadTiming(){
    console.log("gay")
    if( (Date.now() - this.startTime)/1000 > 4 ) 
    { return 'none' }
    else { return ''}
  }
  
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
  style: VideoButtonStyle = VideoButtonStyle.Icon;
  @Input()
  width: any;
  @Input()
  height: any;

  iconStyle = VideoButtonStyle.Icon
  textStyle = VideoButtonStyle.Text

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
