import { SkillSpinnerComponent } from './../components/skill-spinner/skill-spinner.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioCardComponent } from '../components/portfolio-card/portfolio-card.component';
import { MatCardModule } from '@angular/material/card';
import { SkillsPipe } from '../pipes/skills.pipe';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SkillBarComponent } from '../components/skill-/skill-bar.component';

@NgModule({
  declarations: [
    SkillsComponent,
    PortfolioComponent,
    MainComponent,
    InfoComponent,
    ExperienceComponent,
    ContactComponent,
    PortfolioCardComponent,
    SkillBarComponent,
    SkillSpinnerComponent,
    SkillsPipe,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ]
})
export class PagesModule { }
