import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mlmb';
  public isMenuCollapsed = true;
  faGithub = faGithub;
  basketball = faBasketballBall;

  public aboutpage = "";
  public predictpage=""
}