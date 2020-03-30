import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, AfterViewInit {
  @ViewChild(NgScrollbar, {static: false}) scrollbarRef: NgScrollbar;

  scrollPosition: number = 0;
  showLeftControl: boolean = false;
  screen: string;
  entryDateValue: Date = new Date();

  tags = ['Апартаменты', 'Инвестиции', 'Ипотека', 'Законодательство', 'Частныйсектор'];

  cards = {
    resolutions: {
      desktop: [
        {
          type: 'front-article',
          articlePublishedAt: 1584608518,
          markerName: '💥 Свежее',
          title: 'Долги под апартами',
          previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
          view: 'full',
          articleViewsCount: 12453,
          directorySlug: 'commerce',
          directoryName: 'Коммерческая недвижимость',
          articleId: 123,
          articleSlug: 'article-slug',
          imageXl: 'https://picsum.photos/616/304',
          imageLg: 'https://picsum.photos/616/304',
          imageMd: 'https://picsum.photos/616/304',
          imageSm: 'https://picsum.photos/616/616',
          smallImageSm: null,
        },
        {
          type: 'article',
          size: 'small',
          view: 'half'
        },
        {
          type: 'article-list',
          size: 'small',
          position: {
            x: 4,
            y: 1
          }
        },
        {
          type: 'latest-news',
          articles: [
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483,
              directorySlug: '',
              title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 5),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 15),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 35),
              directorySlug: '',
              highlight: true,
              title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 55),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 125),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483,
              directorySlug: '',
              title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 5),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 15),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 35),
              directorySlug: '',
              title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 55),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 125),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483,
              directorySlug: '',
              title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 5),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 15),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 35),
              directorySlug: '',
              title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 55),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 125),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            }
          ],
          position: {
            x: 1,
            y: 2
          }
        },
        {
          type: 'article',
          size: 'small',
          view: 'half'
        },
        {
          type: 'article',
          size: 'small',
          view: 'half'
        },
        {
          type: 'advertising',
          size: 'small'
        },
        {
          type: 'video',
          size: 'medium-horizontal',
          videoPublishedAt: 1584608518,
          markerName: '💥 Свежее',
          title: 'Долги под апартами',
          videoViewsCount: 12453,
          imageXl: 'https://picsum.photos/616/304',
          imageLg: 'https://picsum.photos/616/304',
          imageMd: 'https://picsum.photos/616/304',
          imageSm: 'https://picsum.photos/616/304',
          smallImageXl: null,
          smallImageLg: null,
          smallImageMd: null,
          smallImageSm: null,
          videoUrl: 'https://www.youtube.com/watch?v=s8z28NJTexE'
        },
        {
          type: 'article-list',
          size: 'medium-vertical',
          highlight: true,
          position: {
            x: 4,
            y: 3
          }
        },
        {
          type: 'article',
          size: 'small',
          view: 'half'
        },
        {
          type: 'article',
          size: 'small',
          view: 'full'
        },
      ],
      smallDesktop: [
        {
          type: 'front-article',
          articlePublishedAt: 1584608518,
          markerName: '💥 Свежее',
          title: 'Долги под апартами',
          previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
          view: 'full',
          articleViewsCount: 12453,
          directorySlug: 'commerce',
          directoryName: 'Коммерческая недвижимость',
          articleId: 123,
          articleSlug: 'article-slug',
          imageXl: 'https://picsum.photos/616/304',
          imageLg: 'https://picsum.photos/616/304',
          imageMd: 'https://picsum.photos/616/304',
          imageSm: 'https://picsum.photos/616/616',
          smallImageSm: null,
        },
        {
          type: 'article',
          size: 'small',
          view: 'half'
        },
        {
          type: 'article-list',
          size: 'small',
          position: {
            x: 3,
            y: 1
          }
        },
        {
          type: 'latest-news',
          articles: [
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483,
              directorySlug: '',
              title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 5),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 15),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 35),
              directorySlug: '',
              highlight: true,
              title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 55),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 125),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483,
              directorySlug: '',
              title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 5),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 15),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 35),
              directorySlug: '',
              title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 55),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 125),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483,
              directorySlug: '',
              title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 5),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 15),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 35),
              directorySlug: '',
              title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 55),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 125),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            }
          ],
          position: {
            x: 1,
            y: 2
          }
        },
        {
          type: 'article',
          size: 'small',
          view: 'half'
        },
        {
          type: 'article',
          size: 'small',
          view: 'half'
        },
        {
          type: 'advertising',
          size: 'small'
        },
        {
          type: 'video',
          size: 'medium-horizontal',
          videoPublishedAt: 1584608518,
          markerName: '💥 Свежее',
          title: 'Долги под апартами',
          videoViewsCount: 12453,
          imageXl: 'https://picsum.photos/616/304',
          imageLg: 'https://picsum.photos/616/304',
          imageMd: 'https://picsum.photos/616/304',
          imageSm: 'https://picsum.photos/616/304',
          smallImageXl: null,
          smallImageLg: null,
          smallImageMd: null,
          smallImageSm: null,
          videoUrl: 'https://www.youtube.com/watch?v=s8z28NJTexE'
        },
        {
          type: 'article-list',
          size: 'medium-vertical',
          highlight: true,
          position: {
            x: 3,
            y: 2
          }
        },
        {
          type: 'article',
          size: 'small',
          view: 'half'
        },
        {
          type: 'article',
          size: 'small',
          view: 'full'
        },
      ],
      tablet: [
        {
          type: 'front-article',
          articlePublishedAt: 1584608518,
          markerName: '💥 Свежее',
          title: 'Долги под апартами',
          previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
          view: 'full',
          articleViewsCount: 12453,
          directorySlug: 'commerce',
          directoryName: 'Коммерческая недвижимость',
          articleId: 123,
          articleSlug: 'article-slug',
          imageXl: 'https://picsum.photos/616/304',
          imageLg: 'https://picsum.photos/616/304',
          imageMd: 'https://picsum.photos/616/304',
          imageSm: 'https://picsum.photos/616/616',
          smallImageSm: null,
        },
        {
          type: 'article',
          size: 'small',
          view: 'half'
        },
        {
          type: 'article-list',
          size: 'small',
          position: {
            x: 1,
            y: 2
          }
        },
        {
          type: 'latest-news',
          articles: [
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483,
              directorySlug: '',
              title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 5),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 15),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 35),
              directorySlug: '',
              highlight: true,
              title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 55),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 125),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483,
              directorySlug: '',
              title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 5),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 15),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 35),
              directorySlug: '',
              title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 55),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 125),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483,
              directorySlug: '',
              title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 5),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 15),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 35),
              directorySlug: '',
              title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 55),
              directorySlug: '',
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 125),
              directorySlug: '',
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
            }
          ],
          position: {
            x: 2,
            y: 3
          }
        },
        {
          type: 'article',
          size: 'small',
          view: 'half'
        },
        {
          type: 'article',
          size: 'small',
          view: 'half'
        },
        {
          type: 'advertising',
          size: 'small'
        },
        {
          type: 'video',
          size: 'medium-horizontal',
          videoPublishedAt: 1584608518,
          markerName: '💥 Свежее',
          title: 'Долги под апартами',
          videoViewsCount: 12453,
          imageXl: 'https://picsum.photos/616/304',
          imageLg: 'https://picsum.photos/616/304',
          imageMd: 'https://picsum.photos/616/304',
          imageSm: 'https://picsum.photos/616/304',
          smallImageXl: null,
          smallImageLg: null,
          smallImageMd: null,
          smallImageSm: null,
          videoUrl: 'https://www.youtube.com/watch?v=s8z28NJTexE'
        },
        {
          type: 'article-list',
          size: 'medium-vertical',
          highlight: true,
          position: {
            x: 1,
            y: 4
          }
        },
        {
          type: 'article',
          size: 'small',
          view: 'half'
        },
        {
          type: 'article',
          size: 'small',
          view: 'full'
        },
      ],
      mobile: [
        {
          type: 'article',
          size: 'small',
          view: 'half'
        },
        {
          type: 'article',
          size: 'small',
          view: 'half'
        },
        {
          type: 'article',
          size: 'small',
          view: 'half'
        },
      ],
    }
  };

  constructor(public responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  entryDate(event: MatDatepickerInputEvent<Date>) {
    this.entryDateValue = event.value;
  }

  ngAfterViewInit() {

    if (this.screen === 'sm') {
      this.scrollbarRef.scrolled.subscribe(e => {
        this.scrollPosition = e.target.scrollLeft;

        if (this.scrollPosition > 0) {
          this.showLeftControl = true;
        } else {
          this.showLeftControl = false;
        }
      });
    }

  }
}
