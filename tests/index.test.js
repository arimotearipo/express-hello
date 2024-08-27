describe('Mock Test', () => {
  it('Should pass', async () => {
    const hello = "hello";
    const world = "world";
    const helloWorld = "helloworld"
    expect(hello + world).toBe(helloWorld);
  });
});