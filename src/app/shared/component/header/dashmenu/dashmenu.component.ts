import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-dashmenu",
  templateUrl: "./dashmenu.component.html",
  styleUrl: "./dashmenu.component.scss",
})
export class DashmenuComponent implements OnInit {



  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToRoute(routePath: string): void {
    const currentRoute = this.router.url;
    if (currentRoute === routePath) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false; // This forces the route to reload
      this.router.navigate([routePath], { relativeTo: this.route });
    } else {
      this.router.navigate([routePath]);
    }

  }


}
