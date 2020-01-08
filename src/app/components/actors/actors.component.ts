import { Component, OnInit } from '@angular/core';
import { Actor } from '../../models/Actor';
import { ApiService } from '../../services/api.service'


@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  actors: Actor[];

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.actors = this.apiService.getActors();
    // this.apiService.getActors().subscribe(actors => this.actors = actors);
  }

}

