import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  games: any = [];
  constructor(private gameService:GamesService) { }

  ngOnInit() {
    this.gamesList();
  }

  gamesList(){
    this.gameService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err)
    )
  }

  deleteGame(id:string){
    this.gameService.deleteGame(id).subscribe(res =>{
      console.log(res)
      this.gamesList();
    },err => {
      console.log(err)
    })
  }

  editGame(id: string){
    console.log(id);
  }

}
