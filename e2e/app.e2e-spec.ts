import { HFAchallengePage } from './app.po';

describe('hfachallenge App', function() {
  let page: HFAchallengePage;

  beforeEach(() => {
    page = new HFAchallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
