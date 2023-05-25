import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockData } from '../../data/mockData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input()
  imageBanner: string = '';
  @Input()
  contentTitle: string = '';
  @Input()
  contentText: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = mockData.filter((post) => post.id == id)[0];

    // if(!result) {
    this.imageBanner = result.image;
    this.contentTitle = result.title;
    this.contentText = result.text;
    // }
  }
}
