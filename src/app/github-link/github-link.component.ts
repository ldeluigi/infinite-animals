import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-link',
  templateUrl: './github-link.component.html',
  styleUrls: ['./github-link.component.css']
})
export class GithubLinkComponent implements OnInit {

  @Input() repo: String;
  link: String = "";

  constructor() { }

  ngOnInit(): void {
    this.link = "https://github.com/" + this.repo;
  }

}
