import { Component, inject} from '@angular/core';
import { Video } from '../../model/video';
import  homeVids from '../../assets/VideoLinks.json';
import { CommonModule } from '@angular/common';
import { VideoContainer } from '../video-container/video-container';

@Component({
  selector: 'app-home',
  imports: [CommonModule, VideoContainer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  screenHeight: number = 0;
  screenWidth: number = 0;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
    }
  }

  videos: any[] = homeVids as Video[];
}
