// DOPIERO GDY JEDEN TEST NAM PRZEJDZIE POWINNIŚMY PISAĆ KOLEJNY

describe('fizz buzz', () => {
    // DEMO
    it('if n = 1 return 1', () => {
        const result = fizzBuzz(1);

        expect(result).toEqual('1');
    });

    it('if n = 2 return 2', () => {
        const result = fizzBuzz(2);

        expect(result).toEqual('2');
    });

    it('if n = 3 return Fizz', () => {
        const result = fizzBuzz(3);

        expect(result).toEqual('Fizz');
    });

    it('if n = 5 return Buzz', () => {
        const result = fizzBuzz(5);

        expect(result).toEqual('Buzz');
    });

    it('if n = 6 return Fizz', () => {
        const result = fizzBuzz(6);

        expect(result).toEqual('Fizz');
    });

    it('if n = 10 return Buzz', () => {
        const result = fizzBuzz(10);

        expect(result).toEqual('Buzz');
    });

    it('if n = 15 return FizzBuzz', () => {
        const result = fizzBuzz(15);

        expect(result).toEqual('FizzBuzz');
    });

});

function fizzBuzz(n) {
    const dividedBy3 = n % 3 === 0;
    const dividedBy5 = n % 5 === 0;

    if(dividedBy3 && dividedBy5) {
        return 'FizzBuzz';
    }
    if(dividedBy3) {
        return 'Fizz';
    }
    if(dividedBy5) {
        return 'Buzz';
    }

    return n.toString();
}

// jesli 1 -> 1
// jesli 2 -> 2
// jeśli 3 -> Fizz
// jeśli 5 -> Buzz
// jeśli 15 ->  FizzBuzz