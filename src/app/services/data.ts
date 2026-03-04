import { Injectable } from '@angular/core';
import { WedSpeler, Wedstrijd, WedTeam } from '../models/wedstrijd';
import { Page } from '../models/page';

@Injectable({
    providedIn: 'root',
})
export class Data {
    private page: Page = new Page('Start');

    getWedstrijd(aantSpelers: number): Wedstrijd {
        return this.getInitialWedStrijd(aantSpelers);
    }

    getDemoWedstrijd(): Wedstrijd {
        let wed = this.getWedstrijd(2);
        wed.regels.idxOptie = 2;
        wed.regels.vastAantCar = 10;
        wed.regels.maxBeurten = 10;
        wed.telling.bovenMoyPunten = 1;
        wed.spelers[0].splTsCar = 10;
        wed.spelers[0].stand.aantBrt = 0;
        wed.spelers[1].splTsCar = 10;
        return wed;
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
        page = this.page.addSubPage('Scorebord', 'scorebord');
        page.addSubPage('Items op scorebord', 'bord-data');
        page.addSubPage('Werkend voorbeeld', 'werkend-voorbeeld');
        page.addSubPage('Andere spelvormen');
        // gegevens
        page = this.page.addSubPage('Gegevens');
        // biljartpoint
        page = this.page.addSubPage('Biljartpoint');
    }

    private getInitialWedStrijd(aantSpl: number): Wedstrijd {
        let wed = new Wedstrijd();
        wed.aantSpelers = aantSpl;
        wed.regels.knbbKlasse = 'B1';
        if (aantSpl == 5) {
            wed.teams.push(this.getTeam(1));
            wed.teams.push(this.getTeam(2));
        }
        else {
            wed.spelers.push(this.getSpeler(1));
            if (aantSpl > 1) {
                wed.spelers.push(this.getSpeler(2));
            }
            if (aantSpl > 2) {
                wed.spelers.push(this.getSpeler(3));
            }
            if (aantSpl > 3) {
                wed.spelers.push(this.getSpeler(4));
            }
        }
        return wed;
    }

    private getSpeler(idx: number): WedSpeler {
        let spl = new WedSpeler();
        if (idx == 1) {
            spl.splBordNaam = 'Piet';
            spl.splSpreekNaam = 'Piet';
            spl.metWit = true;
            spl.actief = true;
            spl.splTsMoy = .5;
            spl.splTsCar = 25;
            spl.stand.aantBrt = 1;
        } 
        else if (idx == 2) {
            spl.splBordNaam = 'Jan';
            spl.splSpreekNaam = 'Jan';
            spl.metWit = false;
            spl.splTsMoy = .6;
            spl.splTsCar = 30;
        } 
        else if (idx == 3) {
            spl.splBordNaam = 'Henk';
            spl.splSpreekNaam = 'Henk';
            spl.metWit = true;
            spl.splTsMoy = .7;
            spl.splTsCar = 35;
        } 
        else if (idx == 4) {
            spl.splBordNaam = 'Bart';
            spl.splSpreekNaam = 'Bart';
            spl.metWit = false;
            spl.splTsMoy = .8;
            spl.splTsCar = 40;
        } 
        return spl;
    }

    private getTeam(idx: number): WedTeam {
        let team = new WedTeam();
        if (idx == 1) {
            team.teamNaam = 'Team A';
            team.actief = true;
            team.metWit = true;
            team.spelers.push(this.getSpeler(1));
            team.spelers.push(this.getSpeler(3));
            team.teamTsMoy = .6;
            team.teamTsCar = 30;
            team.spelers[0].splTsCar = 13;
            team.spelers[1].splTsCar = 17;
            team.stand.aantBrt = 1;
        } 
        else if (idx == 2) {
            team.teamNaam = 'Team B';
            team.metWit = false;
            team.spelers.push(this.getSpeler(2));
            team.spelers.push(this.getSpeler(4));
            team.teamTsMoy = .7;
            team.teamTsCar = 35;
            team.spelers[0].splTsCar = 15;
            team.spelers[1].splTsCar = 20;
        } 
        return team;
    }

}
