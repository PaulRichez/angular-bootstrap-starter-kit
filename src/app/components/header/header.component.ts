import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
  }
  public switchTheme(): void {
    if (this.theme.current === 'light') {
      this.theme.current = 'united';
    } else {
      this.theme.current = 'light';
    }
  }
}
