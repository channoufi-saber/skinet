import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatBadge, MatIcon, MatButton],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
