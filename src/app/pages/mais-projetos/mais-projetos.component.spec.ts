import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisProjetosComponent } from './mais-projetos.component';

describe('MaisProjetosComponent', () => {
  let component: MaisProjetosComponent;
  let fixture: ComponentFixture<MaisProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaisProjetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaisProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
