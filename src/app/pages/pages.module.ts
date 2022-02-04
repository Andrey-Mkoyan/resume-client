import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';



@NgModule({
  declarations: [
    SkillsComponent,
    PortfolioComponent,
    MainComponent,
    InfoComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class PagesModule { }