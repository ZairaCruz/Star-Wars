import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPersonagensComponent } from './detalhes-personagens.component';

describe('DetalhesPersonagensComponent', () => {
  let component: DetalhesPersonagensComponent;
  let fixture: ComponentFixture<DetalhesPersonagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesPersonagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
