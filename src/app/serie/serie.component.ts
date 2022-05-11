import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent implements OnInit {
  series: Array<Serie> = [];
  constructor(private serieService: SerieService) {}

  public average: number = 0;

  getSeries() : void{
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.getAverage();
    });
  }

  getAverage() {
    for (let i of this.series) {
      this.average += i.seasons;
    }
    this.average = this.average / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
  }
}
