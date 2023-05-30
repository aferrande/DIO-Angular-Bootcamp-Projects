import { Component, Injectable, OnInit } from '@angular/core';
import quizquestions from '../../../assets/data/quiz-questions.json';

type questionsType = {
  id: number;
  question: string;
  options: { id: number; option: string; alias: string }[];
};

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
@Injectable()
export class QuizComponent implements OnInit {
  title: string = 'vAloquiz';
  questionsArray: questionsType[] = [];
  displayQuestion: string = '';
  answer: string[] = [];
  answerSelected: string = '';
  questionIndex: number = 0;
  questionMaxIndex: number = 0;
  finished: boolean = false;
  constructor() {}

  ngOnInit(): void {
    // this.teste = {
    //   id: quizquestions.questions[this.questionIndex].id,
    //   question: quizquestions.questions[this.questionIndex].question,
    //   options: quizquestions.questions[this.questionIndex].options,
    // };

    if (quizquestions) {
      this.finished = false;
      this.title = quizquestions.title;
      this.questionsArray = quizquestions.questions;
      console.log(this.questionsArray[this.questionIndex].options);
      this.displayQuestion = this.questionsArray[this.questionIndex].question;
      this.questionMaxIndex = this.questionsArray.length;
    }
  }

  questionSelected(value: string) {
    this.answer.push(value);
    this.nextQuestion();
  }

  async nextQuestion() {
    this.questionIndex += 1;

    if (this.questionMaxIndex > this.questionIndex) {
      this.displayQuestion = this.questionsArray[this.questionIndex].question;
    } else {
      this.finished = true;
      this.answerSelected =
        quizquestions.results[
          (await this.finalResult(
            this.answer
          )) as keyof typeof quizquestions.results
        ];
    }
    // console.log(this.finished);
  }

  async finalResult(answer: string[]) {
    let soma1 = 0,
      soma2: number = 0;

    answer.map((val): void => {
      if (val === 'A') {
        soma1++;
      } else if (val === 'B') {
        soma2++;
      }
    });
    let result = soma1 > soma2 ? 'A' : 'B';
    return result;
  }
}

/*  async finalResult(answer: string[]) {
    console.log(answer);
    let soma1 = 0;
    let soma2 = 0;
    let result = answer.reduce((acc, val): any => {
      if (val === 'A') {
        soma1++;
      } else if (val === 'B') {
        soma2++;
      }
      return soma1 > soma2 ? 'A' : 'B';
    }, answer[0]);
    return result;
  } */
