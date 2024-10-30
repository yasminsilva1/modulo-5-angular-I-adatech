import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  textColor = 'black';
  grade = 6;

  coolText = true;

  changeGradeColor(): void {
    this.textColor = this.grade >= 7 ? 'blue' : 'red';
  }

  isCoolText(): boolean {
    return true;
  }
}
