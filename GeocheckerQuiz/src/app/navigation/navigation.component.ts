import { Component, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {

  @Input()
  isDarkMode = false;

  @Output()
  readonly darkSwitch = new EventEmitter<boolean>();

  text1=''

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public router: Router) {}

  hasRoute(route: string){
    return this.router.url.includes('quiz')
  }

  onDarkSwitched({ checked }: MatSlideToggleChange) {
    this.darkSwitch.emit(checked);
  }
}
