import { MyMotivationalQuotesPage } from './app.po';

describe('my-motivational-quotes App', () => {
  let page: MyMotivationalQuotesPage;

  beforeEach(() => {
    page = new MyMotivationalQuotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
