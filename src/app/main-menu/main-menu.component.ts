import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
 

  ngOnInit(){
    /* Created by Tivotal */

let btn: HTMLElement | null = document.querySelector(".fa-bars");
let sidebar: HTMLElement | null = document.querySelector(".sidebar");

if (btn && sidebar) {
  btn.addEventListener("click", () => {
    if (sidebar) {
      sidebar.classList.toggle("close");
    }
  });
}

let arrows: NodeListOf<Element> = document.querySelectorAll(".arrow");
for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", (e: Event) => {
    let target = e.target as HTMLElement;
    let arrowParent = target.parentElement?.parentElement;

    if (arrowParent) {
      arrowParent.classList.toggle("show");
    }
  });
}

  }

   
  


}
