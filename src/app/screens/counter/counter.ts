import { Component, signal } from '@angular/core';
import { Title } from '../../components/shared/title/title';

@Component({
  selector: 'app-counter',
  imports: [Title],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  // signal: forma de gerenciar estado reativo, estados locais
  count = signal(0);

  increment() {
    this.count.update((n) => n + 1);
  }

  decrement() {
    this.count.update((n) => n - 1);
  }

  reset() {
    this.count.set(0);
  }
}
