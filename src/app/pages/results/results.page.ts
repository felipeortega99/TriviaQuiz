import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Answer } from "./../../interfaces/answers/answer.interface";
import { QuestionsService } from "./../../services/questions.service";
import { HighscoresService } from "src/app/services/highscores.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.page.html",
  styleUrls: ["./results.page.scss"]
})
export class ResultsPage implements OnInit {
  points: number = 0;
  numberOfCorrectAnswers: number = 0;
  answers: Answer[] = [];
  username: string = "";
  constructor(
    private questionsService: QuestionsService,
    public navCtrl: NavController,
    private highscoresService: HighscoresService
  ) {}

  ngOnInit() {
    this.answers = [...this.questionsService.getQuizResult()];
    this.answers.forEach(value => {
      if (value.isAnswerCorrect) {
        this.points++;
        this.numberOfCorrectAnswers++;
      }
    });
  }

  handleBackToHome() {
    this.submitScore();
    this.navCtrl.navigateRoot("/home");
  }

  handlePlayAgain() {
    this.submitScore();
    this.navCtrl.navigateRoot("/game");
  }

  submitScore() {
    this.highscoresService.addScore({
      username: this.username,
      score: this.points
    });
  }
}
