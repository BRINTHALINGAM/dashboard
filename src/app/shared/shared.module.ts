import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedRoutingModule } from "./shared-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { AngularSvgIconModule } from "angular-svg-icon";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";
import { ContentComponent } from "./component/layout/content/content.component";
import { HeaderComponent } from "./component/header/header.component";
import { FeathericonComponent } from "./component/feathericon/feathericon.component";
import { FooterComponent } from "./component/footer/footer.component";
import { ThemeComponent } from "./component/header/theme/theme.component";
import { ProfileComponent } from "./component/header/profile/profile.component";
import { SvgIconComponent } from "./component/svg-icon/svg-icon.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TapToTopComponent } from "./component/tap-to-top/tap-to-top.component";
import { LoaderComponent } from "./component/loader/loader.component";
import { DashmenuComponent } from "./component/header/dashmenu/dashmenu.component";
import { DateComponent } from "./component/header/date/date.component";
import { NgxDaterangepickerBootstrapModule, NgxDaterangepickerLocaleService } from "ngx-daterangepicker-bootstrap";
import { ConsumptionComponent } from "../component/pages/dashboard/consumption/consumption.component";
import { PagesModule } from "../component/pages/pages.module";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [ContentComponent, HeaderComponent, FeathericonComponent, FooterComponent, ThemeComponent, ProfileComponent, SvgIconComponent, TapToTopComponent, LoaderComponent, DashmenuComponent, DateComponent],
  imports: [NgxDaterangepickerBootstrapModule.forRoot(), CommonModule, SharedRoutingModule, NgbModule, ReactiveFormsModule, FormsModule, AngularSvgIconModule.forRoot(), TranslateModule.forRoot(),PagesModule],
  exports: [ContentComponent, FeathericonComponent, LoaderComponent, SvgIconComponent, TapToTopComponent, TranslateModule, NgbModule],
  providers: [NgxDaterangepickerLocaleService],
})
export class SharedModule {}
