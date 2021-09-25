import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private isDarkMode = false;

  private currentTheme = 'light-mode';

  constructor(@Inject(DOCUMENT) private document: Document,private renderer: Renderer2) {}

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('activeItem') || 'light-mode';
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
  }

  switchMode(isDarkMode: boolean) {
    this.currentTheme = isDarkMode ? 'dark-mode' : 'light-mode';
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
    localStorage.setItem('activeItem', this.currentTheme);
  }
}