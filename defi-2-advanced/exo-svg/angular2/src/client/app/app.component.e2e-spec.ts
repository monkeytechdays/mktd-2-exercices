describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Monkey Quizz');
  });

  it('should have navigation', () => {
    expect(element(by.css('a[routerlink]')).isPresent()).toEqual(true);
  });

});
