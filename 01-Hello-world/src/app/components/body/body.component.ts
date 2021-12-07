import { AUTO_STYLE } from '@angular/animations'
import { Component } from '@angular/core'

@Component({

    selector:'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent
{
    show = true;

    quotes: any = 
    {
        message: 'Motivation is important to achieve your goal.',
        author: 'Anonimo'
    };

    figures: string[] = ['Spiderman', 'Venon', 'Dr. Octopus'];
}