import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddForm: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
    this.subject.next(this.showAddForm);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
