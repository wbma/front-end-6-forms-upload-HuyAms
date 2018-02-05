import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {
  file: File;
  @ViewChild('title') title: ElementRef;
  @ViewChild('description') description: ElementRef;

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }

  setFile(evt: any) {
    this.file = evt.target.files[0];
    console.log(evt);
  }

  startUpload() {
    const title = this.title.nativeElement.value;
    const description = this.description.nativeElement.value;
    this.mediaService.uploadFile(this.file, title, description);
    console.log(this.title.nativeElement.value);
    console.log(this.description.nativeElement.value);
  }

}
