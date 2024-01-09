import { Component } from '@angular/core';
import { JapaneseWord } from '../japaneseWord';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css',
})
export class TranslateComponent {
  japaneseWords: JapaneseWord[] = [
    {
      id: 1,
      word: 'わたしの',
    },
    { id: 2, word: 'コート' },
    { id: 3, word: 'は' },
    { id: 4, word: 'あかい' },
    { id: 5, word: 'です' },
  ];
}
