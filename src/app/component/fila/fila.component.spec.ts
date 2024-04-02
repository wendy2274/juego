import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaComponent } from './fila.component';

describe('FilaComponent', () => {
  let component: FilaComponent;
  let fixture: ComponentFixture<FilaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilaComponent]
    });
    fixture = TestBed.createComponent(FilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
