import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

title = 'My blog';
  posts = [
    {
      title : 'Mon premier post',
      content: 'Je suis un étudiant en troisième année LFIM en ISIMS. ',
      loveIts: '0',
      created_at: new Date()
    },
    {
      title : 'Mon deuxième post',
      content :  'Je suis un étudiant en troisième année LFIM en ISIMS. ' ,
      loveIts :   '0' ,
      created_at: new Date()

    },
    {
      title : 'Encore un post',
      content : 'Je suis une personne innovante et je souhaite maitriser ANGULAR.JS.' ,
      loveIts :  '0',
      created_at: new Date()
    }
  ];

}
