import { Component, ElementRef, HostListener, Renderer2, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxColorsModule } from 'ngx-colors';
import { SwiperModule, } from 'swiper/angular';
import { NgbOffcanvas,NgbAccordionModule,NgbTooltipModule    } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Mousewheel,
  Keyboard,
  EffectCube,
  EffectFade,
  EffectFlip,
  EffectCoverflow,
  SwiperOptions,

  
 
} from 'swiper';
import { ColorPickerModule } from 'ngx-color-picker';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Mousewheel,
  Zoom,
  Autoplay,
  Thumbs,
  Keyboard,
  EffectCube,
  EffectFade,
  EffectFlip,
  EffectCoverflow,
]);
@Component({
  selector: 'app-jobslanding',
  standalone: true,
  imports: [CommonModule,SwiperModule,NgxColorsModule,RouterModule,NgbAccordionModule,MatIconModule,FormsModule,NgbTooltipModule ,ColorPickerModule],
  templateUrl: './jobslanding.component.html',
  styleUrl: './jobslanding.component.scss'
})
export class JobslandingComponent {
  thumbsSwiper: any;
  
  public swiperConfig:any = {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints:{
      200:{
           slidesPerView: 1, 
          },
          770:{
            slidesPerView: 2, 
          }
   }
  } 
  toggleSidebar() {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const currentToggleValue = htmlElement.getAttribute('data-toggled');

    if (currentToggleValue !== 'open') {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'open');
    } else {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
    }
  }
  constructor(
    public renderer: Renderer2,
    private el: ElementRef,
    private elementRef: ElementRef
  ){
    document.body.classList.add('landing-body');
    document.body.classList.add('jobs-landing');

    {    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const bodyElement = document.body;
    this.renderer.setAttribute(htmlElement, 'data-nav-style', 'menu-click');
    this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
    this.renderer.removeClass(bodyElement, 'sidebar-mini');
    this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'horizontal');
    this.renderer.removeAttribute(htmlElement, 'data-header-styles');
    this.renderer.removeAttribute(htmlElement, 'data-menu-styles');
    this.renderer.removeAttribute(htmlElement, 'dir');
    this.renderer.removeAttribute(htmlElement, 'loader');
    this.renderer.setAttribute(htmlElement, 'data-theme-mode', 'light');
    htmlElement.removeAttribute('style');
}
  }
  
  ngOnDestroy(): void {
    document.body.classList.remove('landing-body'); 
    document.body.classList.remove('jobs-landing');    
   
    const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'vertical');
  } 
  private offcanvasService = inject(NgbOffcanvas);
  openSwitcher(content:any) {
		this.offcanvasService.open(content, { position: 'end' });
	}
  ngOnInit(): void {
 
    this.localStorageBackUp();
  }
  input1: string = "#00897B";
scrolled: boolean = false;
  SwitcherService: any;
  isDataToggled = false;
  expande = false;
  expande1 = false;
  expande2 = false;

  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
  toggleExpand(): void {
    this.expande = !this.expande;
    if (localStorage.getItem('data-menu-styles') == 'light') {
      document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
    } else if (localStorage.getItem('data-menu-styles') == 'light') {
      document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
    }
  }
  body!: HTMLBodyElement | null;

  color1 = '#845adf';
  public dynamicLightPrimary(data: any): void {
    this.color1 = data.color;
  
    const dynamicPrimaryLight = document.querySelectorAll(
      'button.pcr-button'
    );
  
    this.dynamicLightPrimaryColor(dynamicPrimaryLight, this.color1);
  
    localStorage.setItem('udon-primary-mode', this.hexToRgba(this.color1) || '');
    localStorage.setItem('udonlight-mode', 'true');
    this.body?.classList.remove('transparent-mode');
  
    // Adding
    this.body?.classList.add('light-mode');
  
    // Removing
    this.body?.classList.remove('dark');
    this.body?.classList.remove('bg-img1');
  
  }
  handleThemeUpdate(cssVars: any) {
    const root: any = document.querySelector(':root');
    const keys = Object.keys(cssVars);
  
    keys.forEach((key) => {
      root.style.setProperty(key, cssVars[key]);
    });
  }
  // to check the value is hexa or not
   isValidHex = (hexValue: any) =>
    /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);
  
   getChunksFromString = (st: any, chunkSize: any) =>
    st.match(new RegExp(`.{${chunkSize}}`, 'g'));
  // convert hex value to 256
   convertHexUnitTo256 = (hexStr: any) =>
    parseInt(hexStr.repeat(2 / hexStr.length), 16);
  hexToRgba(hexValue: any) {
    if (!this.isValidHex(hexValue)) {
      return null;
    }
    const chunkSize = Math.floor((hexValue.length - 1) / 3);
    const hexArr = this.getChunksFromString(hexValue.slice(1), chunkSize);
    const [r, g, b, a] = hexArr.map(this.convertHexUnitTo256);
    return `${r}, ${g} ,${b}`;
  }
  //primary theme color
 dynamicLightPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName1 = `--primary-rgb`;

    this.handleThemeUpdate({
      [cssPropName1]: this.hexToRgba(color),
    });
  });
}
localStorageBackUp() {
  let html = document.querySelector('html');
 
  

  if (localStorage.getItem('dir') == 'rtl') {
    html?.setAttribute("dir", 'rtl');
  }
  if (localStorage.getItem('udondarktheme')) {
    const type: any = localStorage.getItem('udondarktheme');
    html?.setAttribute('data-theme-mode', type);
   
  }
  if (localStorage.getItem("udon-primary-mode")) { 
    const type: any = localStorage.getItem("udon-primary-mode");
    html?.style.setProperty('--primary-rgb', type);
  }
}
  bodyclick() {
    this.expande1 = false;
    this.expande2 = false;
    this.expande = false;
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
    const sections = this.el.nativeElement.querySelectorAll('.side-menu__item');
    const scrollPos =
      window.scrollY ||
      this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop ||
      document.body.scrollTop;
    sections.forEach((el: any, i: string | number) => {
      const currLink = sections[i];
      const val: any = currLink.getAttribute('value');
      const refElement: any = this.el.nativeElement.querySelector('#' + val);
  
      if (refElement !== null) {
        const scrollTopMinus = scrollPos + 203;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          const activeNav =
            this.el.nativeElement.querySelector('.nav-scroll.active');
          if (activeNav) {
            this.renderer.removeClass(activeNav, 'active');
          }
          this.renderer.addClass(currLink, 'active');
        } else {
          this.renderer.removeClass(currLink, 'active');
        }
      }
    });
  }
scroll(el: HTMLElement) {
  el.scrollIntoView({ behavior: 'smooth' });
}
themeChange(type: string, type1: string) {
  const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  this.renderer.setAttribute(htmlElement, 'data-header-styles', type1);
  localStorage.setItem('udonHeader', type1);
  this.renderer.setAttribute(htmlElement, 'data-menu-styles', type1);
  localStorage.setItem('udonMenu', type1);
  this.renderer.setAttribute(htmlElement, 'data-theme-mode', type1);
  localStorage.setItem('udondarktheme', type1);
  if(type1=='light'){
    const lightclickchecked = document.getElementById(
      'switcher-light-theme'
    ) as HTMLInputElement;
    if (lightclickchecked) {
      lightclickchecked.checked = true;
    }
  }
  else{
    const darkclickchecked = document.getElementById(
      'switcher-dark-theme'
    ) as HTMLInputElement;
    if (darkclickchecked) {
      darkclickchecked.checked = true;
    }
  }
}

//  Directions
DirectionsChange(type: string) {
  const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  this.renderer.setAttribute(htmlElement, 'dir', type);
  localStorage.setItem('dir', type);
}

//Theme Primary
primary(type: string) {
  this.elementRef.nativeElement.ownerDocument.documentElement?.style.setProperty(
    '--primary-rgb',
    type
  );
  localStorage.setItem('udon-primary-mode', type);
  localStorage.removeItem('udonlight-primary-color');
}
localdata =localStorage;

//reset switcher

reset() {
  localStorage.clear();
  const html: any =
  this.elementRef.nativeElement.ownerDocument.documentElement;
const body: any = document.querySelector('body');
html.style = '';
html.setAttribute('dir', 'ltr');
html.setAttribute('data-header-styles', 'light');
html.setAttribute('data-nav-layout', 'horizontal');
html.setAttribute('data-menu-position', 'fixed');
html.setAttribute('data-theme-mode', 'light');
html.removeAttribute('data-menu-styles');

  const lightclickchecked = document.getElementById(
    'switcher-light-theme'
  ) as HTMLInputElement;
  if (lightclickchecked) {
    lightclickchecked.checked = true;
  }
  const ltrclickchecked = document.getElementById(
    'switcher-ltr'
  ) as HTMLInputElement;
  if (ltrclickchecked) {
    ltrclickchecked.checked = true;
  }
}

}
