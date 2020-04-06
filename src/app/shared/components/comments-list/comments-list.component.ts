import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  @Input() viewComments;

  startPage: number = 0;
  paginationLimit: number = 3;

  comments = [
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80',
      firstName: 'Эл',
      surname: 'Урбик',
      time: 1573746483,
      text: 'В течение двадцатого века было предложено множество «теорий всего», но ни одна из них не смогла пройти экспериментальную проверку'
    },
    {
      image: 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80',
      firstName: 'Дмитрий',
      surname: 'Третьяков',
      time: 1573746483,
      text: 'Основная проблема построения научной «теории всего» состоит в том, что квантовая механика и общая теория относительности (ОТО) имеют разные области применения'
    },
    // {
    //   image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80',
    //   firstName: 'Марат',
    //   surname: 'Герасимов',
    //   time: 1573746483,
    //   text: 'Теория струн сочетает в себе идеи квантовой механики и теории относительности, поэтому на её основе, возможно, будет построена будущая теория квантовой гравитации',
    //   replied: true,
    //   repliedName: 'Дмитрий'
    // },
    {
      image: 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80',
      firstName: 'Дмитрий',
      surname: 'Третьяков',
      time: 1573746483,
      text: 'Основная проблема построения научной «теории всего» состоит в том, что квантовая механика и общая теория относительности (ОТО) имеют разные области применения'
    },
    {
      image: 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80',
      firstName: 'Дмитрий',
      surname: 'Третьяков',
      time: 1573746483,
      text: 'Основная проблема построения научной «теории всего» состоит в том, что квантовая механика и общая теория относительности (ОТО) имеют разные области применения'
    },
    {
      image: 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80',
      firstName: 'Дмитрий',
      surname: 'Третьяков',
      time: 1573746483,
      text: 'Основная проблема построения научной «теории всего» состоит в том, что квантовая механика и общая теория относительности (ОТО) имеют разные области применения'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  addComment(text) {
    this.comments.push({
      image: 'https://memepedia.ru/wp-content/uploads/2018/06/unnamed-768x768.jpg',
      firstName: 'Далг',
      surname: 'Валакс',
      time: 1573746483,
      text: text
    });
  }

  showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 3;
  }

  showLessItems() {
    this.paginationLimit = Number(this.paginationLimit) - 3;
  }

}
