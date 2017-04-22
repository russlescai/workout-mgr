import { WorkoutMgrPage } from './app.po';

describe('workout-mgr App', () => {
  let page: WorkoutMgrPage;

  beforeEach(() => {
    page = new WorkoutMgrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
