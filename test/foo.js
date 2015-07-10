describe('foo', function() {
  it('should foo', function() {
    expect('foo').to.equal('foo')
  });
});

describe('html', function() {
  it('read', function() {
    expect(window.__html__['html/hi.html']).to.equal('<h1>hi</h1>')
  })
})

describe('fixtures', function() {
  it('read', function() {
    expect(window.__html__['test/fixtures/foo.json']).to.equal('{"foo":"json"}')
  })
})