import { GithubRepoBrowserPage } from './app.po';

describe('github-repo-browser App', () => {
  let page: GithubRepoBrowserPage;

  beforeEach(() => {
    page = new GithubRepoBrowserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
