import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foto',
  imports: [],
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.css'
})
export class FotoComponent {
  @Input() miFoto: any;
  url: string = 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/15665/production/_107435678_perro1.jpg.webp';
  title: string = 'Mi perrito pug';

  ngOnInit() {
    this.url = this.miFoto.url
    this.title = this.miFoto.title
  }



}
