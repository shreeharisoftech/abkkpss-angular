import { KTDom, KTMenu, KTToggle } from "../../core";

export class KTLayout {
  private static sidebarEl: HTMLElement | null;
  private static sidebarToggleEl: HTMLElement | null;
  private static sidebarWrapperEl: HTMLElement | null;
  private static headerEl: HTMLElement | null;

  static _isSidebarCollapse(): boolean {
    return document.body.classList.contains('sidebar-collapse');
  }

  static _handleMegaMenu(): void {
    const megamenuEl = document.querySelector('#megamenu') as HTMLElement | null;
    if (!megamenuEl) return;

    const menu = KTMenu.getInstance(megamenuEl) as { disable: () => void; enable: () => void };
    menu.disable();

    setTimeout(() => {
      menu.enable();
    }, 500);
  }

  static _handleSidebar(): void {
    if (!this.sidebarToggleEl) return;
    const sidebarToggle = KTToggle.getInstance(this.sidebarToggleEl) as { on: (event: string, callback: () => void) => void };
    sidebarToggle?.on('toggle', () => {
      if (!this.sidebarEl) return;
      this.sidebarEl.classList.add('animating');

      this._handleMegaMenu();

      KTDom.transitionEnd(this.sidebarEl, () => {
        this.sidebarEl?.classList.remove('animating');
      });
    });
  }

  static _handleSidebarMenu(): void {
    const menuEl = document.querySelector('#sidebar_menu') as HTMLElement | null;
    const scrollableEl = document.querySelector('#sidebar_scrollable') as HTMLElement | null;
    const menuActiveItemEl = menuEl?.querySelector(".menu-item.active") as HTMLElement | null;

    if (!menuEl || !scrollableEl || !menuActiveItemEl || KTDom.isVisibleInParent(menuActiveItemEl, scrollableEl)) {
      return;
    }

    scrollableEl.scroll({
      top: KTDom.getRelativeTopPosition(menuActiveItemEl, scrollableEl) - 100,
      behavior: 'instant'
    });
  }

  static init(): void {
    this.sidebarEl = document.querySelector('#sidebar') as HTMLElement | null;
    this.sidebarWrapperEl = document.querySelector('#sidebar_wrapper') as HTMLElement | null;
    this.headerEl = document.querySelector('#header') as HTMLElement | null;
    this.sidebarToggleEl = document.querySelector('#sidebar_toggle') as HTMLElement | null;

    if (this.sidebarEl && this.sidebarToggleEl) {
      this._handleSidebar();
      this._handleSidebarMenu();
    }
  }

  static isSidebarCollapse(): boolean {
    return this._isSidebarCollapse();
  }
}

// Run KTLayout init when DOM is ready
KTDom.ready(() => {
  // KTLayout.init();
});
