import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  //public tagList: string[] = [];

  constructor(private gifsService: GifsService) {
    /* this.tagList = this.gifsService.tagsHistory; */
  }

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  public searchTag(tag: string):void {
    this.gifsService.searchTag(tag);
  }
}
