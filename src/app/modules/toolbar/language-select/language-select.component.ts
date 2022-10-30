import {Component, OnInit} from '@angular/core';
import {ILanguage, LanguageType} from "../../../models/language.model";

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent implements OnInit {
  selectedLanguage: ILanguage = {value: LanguageType.En, name: 'en'};
  languages: ILanguage[] = [
    {value: LanguageType.En, name: 'en'},
    {value: LanguageType.Kz, name: 'kz'},
    {value: LanguageType.Ru, name: 'ru'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSelectLang(lang: ILanguage) {
    this.selectedLanguage = lang;
  }

  openLangMenu(block: HTMLElement) {
    block.style.display = 'block';
  }

  closeLangMenu(block: HTMLElement) {
    block.style.display = 'none';
  }

}
