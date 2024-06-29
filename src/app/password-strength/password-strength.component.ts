import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password = new FormControl('');
  passwordStrength: string = '';
  passwordEmpty: boolean = true;
  passwordShort: boolean = true;

  constructor() {
    this.password.valueChanges.subscribe((value) => {
      const passwordValue = value ?? '';
      this.passwordEmpty = passwordValue === '';
      this.passwordShort = passwordValue.length < 8;
      this.passwordStrength = this.calculateStrength(passwordValue);
    });
  }

  calculateStrength(password: string): string {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /[0-9]/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);

    if (password.length < 8) {
      return '';
    }

    if (hasLetters && hasDigits && hasSymbols) {
      return 'strong';
    } else if (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    ) {
      return 'medium';
    } else {
      return 'easy';
    }
  }
}