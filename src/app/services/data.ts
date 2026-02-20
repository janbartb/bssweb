import { Injectable } from '@angular/core';
import { WedRegels, Wedstrijd } from '../models/wedstrijd';
import { Page } from '../models/page';

@Injectable({
    providedIn: 'root',
})
export class Data {
    private wedstrijd: Wedstrijd = new Wedstrijd();
    private page: Page = new Page('Start');

    getWedstrijd(): Wedstrijd {
        return this.wedstrijd;
    }

    getInitialPage(): Page {
        this.initializePage();
        return this.page;
    }

    private initializePage() {
        this.page = new Page('Start');
        // algemeen
        let page = this.page.addSubPage('Algemeen', 'algemeen');
        const pageRequired = page.addSubPage('Wat heb je nodig', 'sys-required');
        pageRequired.addSubPage('NodeJS', 'nodejs');
        pageRequired.addSubPage('Extra apparaten', 'req-extra-app');
        page.addSubPage('Copyright', 'copyright');
        // scorebord
        page = this.page.addSubPage('Scorebord');
        page.addSubPage('Driebanden');
        page.addSubPage('Pentathlon');
        page.addSubPage('Annonceren');
        page.addSubPage('Vijfde is 3band');
        // gegevens
        page = this.page.addSubPage('Gegevens');
        // biljartpoint
        page = this.page.addSubPage('Biljartpoint');
    }

}
