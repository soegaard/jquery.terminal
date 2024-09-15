import type { JQueryTerminal } from 'jquery.terminal';

function scroll() {
  const { length } = this.get_output().split('\n');
  const rows = this.rows();
  if (rows >= length) {
    this.removeClass('shake');
    this.addClass('shake');
    this.stopTime('shake');
    this.oneTime(200, 'shake', () => {
      this.removeClass('shake');
    });
  }
}

export function initTerminal() {
  const $ = globalThis.$;
  const $term = $('.term');
  $term.empty();

  const scroll_event: JQueryTerminal.MouseWheelCallback = (...args) => {
    return scroll.apply(term, args);
  };

  const term = $term.terminal({}, {
    mousewheel: scroll_event,
    touchscroll: scroll_event
  });

  return $term;
};

export function destroyTerminal() {
  const $ = globalThis.$;
  const $term = $('.term');
  $term.terminal().destroy();
}
