import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header with brand identity  -->
    <header>
        <i class="fa-solid fa-cubes"></i> <span>OpenStore</span>
    </header>
    
    <router-outlet></router-outlet>
  `,
  styles: [`
    header{
      background-image: linear-gradient(to right, #0085d4 , #55C3E4);
      color: white;
      font-size: 2rem;
      padding: .3rem 1.5rem ;
    }
    i{
        margin: 0 .3rem;
        font-size: 1.5rem;
    }
    *{
      transition : all 1s ; 
    }
  `]
})
export class AppComponent {
  title = 'openStore';
}
