describe('A basic test', () => {
  it('should do some math', () => {
    expect(2 + 3).toBe(5);
  });

  it('should fail', () => {
    expect(Math.sqrt(5)).not.toBe(2);
  });
});
