class Header {
  selectors = {
    root: '[data-js-header]',
    overlay: '[data-js-header-overlay]',
    burgerButton: '[data-js-header-burger-button]',
  };
  stateClasses = {
    isAvtive: 'is-active',
    isLock: 'is-lock',
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = document.querySelector(this.selectors.overlay);
    this.burgerButtonElement = document.querySelector(this.selectors.burgerButton);
    this.bindEvents();
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isAvtive);
    this.overlayElement.classList.toggle(this.stateClasses.isAvtive);
    document.body.classList.toggle(this.stateClasses.isLock);
  };

  bindEvents() {
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick);
  }
}

export default Header;