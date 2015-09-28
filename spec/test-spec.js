describe('suite', function () {
  it('spec 1', function (done) {
    // a test that doesn't call done() failing with timeout
  })
  it('spec 2', function (done) {
    // some async code that may eventually throw an exception crashes the suite
    setTimeout(function () {
      throw 'foo';
      done();
    });
  });
  it('spec 3', function () {
    // a test that won't be executed
    expect(true).toBeTruthy();
  });
});
