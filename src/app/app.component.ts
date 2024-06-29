import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { RequirementsComponent } from './requirements/requirements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PasswordStrengthComponent, RequirementsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}