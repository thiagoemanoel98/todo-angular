import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { RouterOutlet } from '@angular/router';

// RouterOutlet local onde vai substituir as paginas na navegacao

@Component({
  selector: 'app-page',
  imports: [Menu, RouterOutlet],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class Page {}
