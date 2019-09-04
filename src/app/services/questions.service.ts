import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Questions } from "../interfaces/questions/questions.interface";
import { Question } from "../interfaces/questions/question.interface";
import { htmlSpecialChars } from "../helpers/parseSpecialChars";
import { Answer } from "./../interfaces/answers/answer.interface";

@Injectable({
  providedIn: "root"
})
export class QuestionsService {
  questions: Question[] = [];
  answers: Answer[] = [];

  constructor(private http: HttpClient) {}

  getQuestions(): Promise<Question[]> {
    return new Promise((resolve, reject) => {
      this.http
        .get<Questions>(
          "https://opentdb.com/api.php?amount=15&difficulty=hard&type=boolean"
        )
        .subscribe(resp => {
          this.questions = resp.results;
          this.questions.forEach(function(value, index, array) {
            array[index].question = htmlSpecialChars(value.question);
          });
          resolve(this.questions);
        });
    });
  }

  setAnswers(answers: string[]) {
    this.answers = [];
    answers.forEach((value, index) => {
      this.answers.push({
        question: this.questions[index].question,
        isAnswerCorrect:
          value === this.questions[index].correct_answer ? true : false
      });
    });
  }

  getQuizResult() {
    return this.answers;
  }
}
