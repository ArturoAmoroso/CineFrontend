import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/models/Actor';

@Component({
  selector: 'app-actors-item',
  templateUrl: './actors-item.component.html',
  styleUrls: ['./actors-item.component.css']
})
export class ActorsItemComponent implements OnInit {
  @Input() actor: Actor;


  constructor() { }

  ngOnInit() {
  }

}
