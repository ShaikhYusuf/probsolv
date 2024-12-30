import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule, MatListModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  quizzes: any[] = [];
  selectedAnswers: { [key: number]: number } = {};
  submitted = false;
  lessonId!: number;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.lessonId = +params['lessonId'];
      this.loadQuizzes(this.lessonId);
    });
  }

  loadQuizzes(lessonId: number): void {
    const url = `./lesson${lessonId}.json`;
    this.http.get<any[]>(url).subscribe(
      data => {
        this.quizzes = data;
      },
      error => {
        console.error('Error loading quiz data:', error);
      }
    );
  }

  selectOption(quizId: number, optionIndex: number): void {
    if (!this.submitted) {
      this.selectedAnswers[quizId] = optionIndex;
    }
  }

  submitAnswers(): void {
    this.submitted = true;
  }

  getClass(quizId: number, optionIndex: number): string {
    if (!this.submitted) {
      return this.selectedAnswers[quizId] === optionIndex ? 'highlight' : '';
    }

    const isCorrect = this.quizzes.find(quiz => quiz.id === quizId)?.answer === optionIndex;
    const isSelected = this.selectedAnswers[quizId] === optionIndex;

    if (isCorrect) {
      return 'correct';
    } else if (isSelected) {
      return 'incorrect';
    } else if (optionIndex === this.quizzes.find(quiz => quiz.id === quizId)?.answer) {
      return 'correct-answer';
    }

    return '';
  }
}
