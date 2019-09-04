import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Score } from "../interfaces/scores/score.interface";

@Injectable({
  providedIn: "root"
})
export class HighscoresService {
  constructor(private afDb: AngularFireDatabase) {}

  getHighScores(): Promise<Score[]> {
    return new Promise(resolve => {
      this.afDb
        .list<Score>(`/highscores`)
        .valueChanges()
        .subscribe(scores => {
          resolve(scores);
        });
    });
  }

  addScore(score: Score): Promise<any> {
    return new Promise(resolve => {
      this.afDb.database
        .ref("highscores")
        .push(score)
        .then(() => resolve());
    });
  }
}
