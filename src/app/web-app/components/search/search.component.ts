import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @ViewChild('movie') movie!: ElementRef;
  debouncer: Subject<string> = new Subject();
  @Output() sendMovie: EventEmitter<string> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((result) => {
      let textCap!: any;
      result = result.trimStart().trimEnd();
      if (result) {
        textCap = result.split(' ');
        textCap = textCap.map(
          (texto: string) => texto[0].toUpperCase() + texto.slice(1)
        );
        this.sendMovie.emit(textCap);
      }
      this.sendMovie.emit(result);
    });
  }

  obtenerMovie(event: any) {
    this.debouncer.next(event.target.value);
  }
}
