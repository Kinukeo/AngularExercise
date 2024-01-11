import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
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
  shuffle = (array: JapaneseWord[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  shuffledWords = this.shuffle([...this.japaneseWords]);
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.shuffledWords,
      event.previousIndex,
      event.currentIndex
    );
  }
  isCorrectAnswer() {
    for (let index = 0; index < this.japaneseWords.length; index++) {
      const japaneseWord = this.japaneseWords[index];
      if (japaneseWord.id !== this.shuffledWords[index].id) return false;
    }
    return true;
  }
}
