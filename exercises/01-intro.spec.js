it('example test should pass', () => {
    expect(true).toBe(true);
});

// DEMO
it('should add two numbers', () => {
    //ARRANGE (GIVEN)) - nie zawsze wystepuje, tylko jak potrzebujmey przygotowac dane

    //ACT (WHEN)
    const sum = add(1, 3);

    // ASSERT (THEN)
    expect(sum).toEqual(4);
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
