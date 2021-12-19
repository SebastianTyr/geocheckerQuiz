import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IQuestionData } from '../backend/interfaces/questionData';
import QuestionData from '../backend/data/questions.json';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  quizData: IQuestionData[] = QuestionData;

}
