import { Component, inject, OnInit } from '@angular/core';
import { RadioButtons } from '../../models/user-interface';
import { Wedstrijd } from '../../models/wedstrijd';
import { Data } from '../../services/data';
import { RadioButtonComp } from "../../shared/radio-button-comp/radio-button-comp";
import { Scorebord } from '../../shared/scorebord/scorebord';

@Component({
    selector: 'app-topic-scorebord',
    imports: [
        RadioButtonComp,
        Scorebord
    ],
    templateUrl: './topic-scorebord.html',
    styleUrl: './topic-scorebord.css',
})
export class TopicScorebord implements OnInit {
    dao = inject(Data);
    choices: RadioButtons = new RadioButtons([]);
    wedstrijd: Wedstrijd = new Wedstrijd();

    choiceClicked(idx: number) {
        const aantSpl = idx + 1;
        this.wedstrijd = this.dao.getWedstrijd(aantSpl);
        console.log('choice : ' + aantSpl);
    }

    ngOnInit(): void {
        this.choices = new RadioButtons([
            '1 speler',
            '2 spelers',
            '3 spelers',
            '4 spelers',
            '2 x 2 spelers'
        ], 1);
        this.wedstrijd = this.dao.getWedstrijd(2);
    }
}
