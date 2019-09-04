import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighscoresPage } from './highscores.page';

describe('HighscoresPage', () => {
  let component: HighscoresPage;
  let fixture: ComponentFixture<HighscoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighscoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighscoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
