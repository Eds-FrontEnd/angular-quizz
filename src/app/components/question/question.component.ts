import quizz from '../../../assets/data/quizz_questions.json';
import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-question',
    standalone: true,
    templateUrl: './question.component.html',
    styleUrl: './question.component.scss',
    imports: [ButtonComponent, CommonModule]
})
export class QuestionComponent implements OnInit{

  @Input()
  question:string="";

  title:string = ""
  questions:any
  questionSelected:any

  answers:string[] = []
  answerSelected:string=""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  count:number = 0

  finished:boolean = false

  constructor(){}

  ngOnInit(): void {

    if(quizz){
      this.finished = false
      this.title = quizz.title

      this.questions = quizz.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length

    }
  }

  playerChoose(value:string){
    this.answers.push(value)
    this.nextStep()
  }

async nextStep(){
    this.questionIndex++

    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]
    } else {
      const finalAnswer:string = await this.checkResult(this.answers)
      this.finished = true
      this.answerSelected = quizz.results[finalAnswer as keyof typeof quizz.results]
    }
  }

  async checkResult(anwsers:string[]){
    const result = anwsers.reduce((previous, current, index, arr)=>{

      if(
        arr.filter(item => item === previous).length >
        arr.filter(item => item === current).length
      ){

        return previous
      } else {
        return current
      }
    });

    this.answers.forEach((total)=>{
      let giff = document.querySelector(".giff");
      if(total === 'A'){
        this.count++;
      }
    });

    return result

  }

  reStart(){
    location.reload();
  }
}

