import { Component, OnInit } from "@angular/core";
import { HighscoresService } from "src/app/services/highscores.service";
import { Score } from "src/app/interfaces/scores/score.interface";

@Component({
  selector: "app-highscores",
  templateUrl: "./highscores.page.html",
  styleUrls: ["./highscores.page.scss"]
})
export class HighscoresPage implements OnInit {
  highscores: Score[] = [];

  constructor(private highscoresService: HighscoresService) {}

  ngOnInit() {
    this.highscoresService.getHighScores().then(res => {
      this.highscores = res
        .slice(0, 10)
        .sort((a, b) => (a.score > b.score ? 1 : -1));
    });
  }
}
