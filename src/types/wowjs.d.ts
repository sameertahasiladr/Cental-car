declare module 'wowjs' {
  interface WOWOptions {
    boxClass?: string;
    animateClass?: string;
    offset?: number;
    mobile?: boolean;
    live?: boolean;
    callback?: (box: Element) => void;
    scrollContainer?: string | null;
  }

  class WOW {
    constructor(options?: WOWOptions);
    init(): void;
  }

  export = WOW;
}