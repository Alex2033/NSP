import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location-block',
  templateUrl: './location-block.component.html',
  styleUrls: ['./location-block.component.scss']
})
export class LocationBlockComponent implements OnInit {

  @Input() source;

  public placemarkProperties = {
    iconCaption: 'Апарт-комплекс Valo'
  }

  constructor() { }

  ngOnInit() {
  }

}
