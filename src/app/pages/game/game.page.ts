import { Component, OnInit } from "@angular/core";
import { QuestionsService } from "./../../services/questions.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-game",
  templateUrl: "./game.page.html",
  styleUrls: ["./game.page.scss"]
})
export class GamePage implements OnInit {
  questions: any[] = [];
  answerQuestions: string[] = [];
  index = 0;
  timer: number;
  limitTime = 15;
  totalQuestions = 15;
  intervalId: any;
  constructor(
    private questionsService: QuestionsService,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    this.questionsService.getQuestions().then(res => {
      this.questions = [...res];
      this.timer = this.limitTime;
      this.countDown();
    });
  }

  submitQuiz() {
    this.questionsService.setAnswers(this.answerQuestions);
    this.navCtrl.navigateRoot("/results");
  }

  setAnswer(answer: string) {
    clearInterval(this.intervalId);
    this.answerQuestions.push(answer);
    if (this.isGameFinished()) this.submitQuiz();
    this.index = this.index + 1;
    this.countDown();
  }

  isGameFinished(): boolean {
    return this.index + 1 === this.totalQuestions ? true : false;
  }

  countDown() {
    this.timer = this.limitTime;
    this.intervalId = setInterval(() => {
      if (this.timer === 0) {
        clearInterval(this.intervalId);
        this.index = this.index + 1;
        this.answerQuestions.push("False");
        if (this.isGameFinished()) this.submitQuiz();
        else this.countDown();
        return;
      }
      this.timer = this.timer - 1;
    }, 1000);
  }
}
