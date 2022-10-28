import { getLocaleDateFormat } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import {YoutubeService} from './services/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  channel: any;
  channelsName: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  //@ViewChild('ChannelName')
  //channelName!: ElementRef;

  constructor(private youtube:YoutubeService){}

  ngOnInit(){
    this.youtube.getChannels("").subscribe((data: { items: any; }) =>{
    console.log(data)
    this.channel = data.items
  })

  }

  getData(){
    console.log (this.channelsName);
    this.youtube.getChannels(this.channelsName).subscribe((data: { items: any; }) =>{
      console.log(data)
      this.channel = data.items
    })
  }
}
