import { TelegramPage } from './app.po';

describe('telegram App', () => {
  let page: TelegramPage;

  beforeEach(() => {
    page = new TelegramPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
