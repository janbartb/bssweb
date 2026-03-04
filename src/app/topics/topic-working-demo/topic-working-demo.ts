import { Component, inject, OnInit } from '@angular/core';
import { Wedstrijd } from '../../models/wedstrijd';
import { Data } from '../../services/data';
import { Scorebord } from '../../shared/scorebord/scorebord';

@Component({
    selector: 'app-topic-working-demo',
    imports: [
        Scorebord
    ],
    templateUrl: './topic-working-demo.html',
    styleUrl: './topic-working-demo.css',
})
export class TopicWorkingDemo implements OnInit {
    dao = inject(Data);
    wedstrijd: Wedstrijd = new Wedstrijd();
    wedReady: boolean = false;

    ngOnInit(): void {
        this.wedstrijd = this.dao.getDemoWedstrijd();
        this.wedReady = true;
    }
}
