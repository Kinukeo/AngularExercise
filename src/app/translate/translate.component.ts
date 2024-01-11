import { Component } from '@angular/core';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { JapaneseWord } from '../japaneseWord';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [CdkDrag, CdkDropList],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css',
})
export class TranslateComponent {
  japaneseWords: JapaneseWord[] = [
    {
      id: 1,
      word: 'わたしの',
      englishWord: 'watashi no',
    },
    { id: 2, word: 'コート', englishWord: 'kooto' },
    { id: 3, word: 'は', englishWord: 'wa' },
    { id: 4, word: 'あかい', englishWord: 'akai' },
    { id: 5, word: 'です', englishWord: 'desu' },
  ];
}
