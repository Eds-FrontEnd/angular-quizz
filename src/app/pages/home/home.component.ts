import { MainbarComponent } from './../../components/mainbar/mainbar.component';
import { Component } from '@angular/core';
import { TopbarComponent } from "../../components/topbar/topbar.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { ButtonComponent } from '../../components/button/button.component';
import { QuestionComponent } from '../../components/question/question.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [TopbarComponent, MainbarComponent, FooterComponent, ButtonComponent, QuestionComponent]
})
export class HomeComponent {

}
