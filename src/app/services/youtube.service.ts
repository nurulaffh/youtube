//youtube.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  getChannel(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor (private http:HttpClient) {}

  getChannels(channelName: string):Observable<any>{
    const API_KEY ="[API KET]=get it from youtube developer"
    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" +channelName+"&type=channel&key=" +API_KEY+ "&maxResults50"
    return this.http.get<any>(url)
  }
}
