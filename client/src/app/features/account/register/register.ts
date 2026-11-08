import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../../core/services/account';
import { Router } from '@angular/router';
import { MatCard } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatAnchor } from '@angular/material/button';
import { SnackbarService } from '../../../core/services/snackbar-service';
import { JsonPipe } from '@angular/common';
import { TextInput } from '../../../shared/components/text-input/text-input';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, MatCard, MatFormField, MatLabel, MatInput, MatAnchor, JsonPipe, MatError, TextInput],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private fb = inject(FormBuilder);
  private accountService = inject(AccountService);
  private router = inject(Router);
  private snack = inject(SnackbarService);
  validationErrors: string[] = [];

  registerForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required]],
  });

  onSubmit() {
    this.validationErrors = [];

    console.log('Form value:', this.registerForm.value);
    console.log('Form valid:', this.registerForm.valid);

    this.accountService.register(this.registerForm.value).subscribe({
      next: () => {
        this.snack.success('Registration successful - you can now login');
        this.router.navigateByUrl('/account/login');
      },
      error: (error) => {
        console.log('Status:', error.status);
        console.log('Response:', error.error);

        const errors = error.error?.errors;

        if (errors && typeof errors === 'object') {
          this.validationErrors = Object.values(errors as Record<string, string[]>).flat();
        } else {
          this.validationErrors = [error.error?.title || 'An unexpected error occurred'];
        }
      },
    });
  }
}
