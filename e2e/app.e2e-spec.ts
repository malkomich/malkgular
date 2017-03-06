import { MalkgularPage } from './app.po';

describe('malkgular App', () => {
  let page: MalkgularPage;

  beforeEach(() => {
    page = new MalkgularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
