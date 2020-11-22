describe('calculate discount', () => {
    // TODO: Stwórz implementację funkcji discount(totalPrice) korzystając z podejścia TDD
    // Funkcja ta przyjmuje sumę cen produktów, a zwraca liczbę będącą wartością zniżki zależną (procentowo) od sumy.
    // Założenia funkcji:
    // WAŻNE: staraj się nie czytać kolejnych punktów przed zrobieniem


    // 1. Jeśli suma wynosi 0 - brak zniżki
    it('discount is 0 when sum is 0', () => {
        const discountResult = discount(0);

        expect(discountResult).toEqual(0);
    });


    // 2. Jeśli suma wynosi 49 - brak zniżki (TAKI TEST NIE JEST POTRZEBNY ;) )

    it('discount is 0 when sum is 49', () => {
        const discountResult = discount(49);

        expect(discountResult).toEqual(0);
    });


    // 3. Jeśli suma znajduje się w przedziale pomiędzy 50, a 99 - znikżka wynosi 5% tej sumy

    it('discount is 5 % of sum when sum is 50 - 99', () => {
        const discountResult = discount(50);

        expect(discountResult).toEqual(2.5);
    });

    // 4. Jeśli suma znajduje się w przedziale pomiędzy 100, a 149 - znikżka wynosi 10% tej sumy

    it('discount is 10 % of sum when sum is 100 - 149', () => {
        const discountResult = discount(100);

        expect(discountResult).toEqual(10);
    });

    // 5. Jeśli suma jest większa bądź równa 150 - znikżka wynosi 15% tej sumy

    it('discount is 15 % of sum when sum is 150 or bigger', () => {
        const discountResult = discount(150);

        expect(discountResult).toEqual(22.5);
    });

    // 6. Zniżka nigdy nie może być większa niż 30

    it('discount is never bigger than 30 % of sum', () => {
        const discountResult = discount(201);

        expect(discountResult).toEqual(30);
    });
});

function discount(totalPrice) {
    if( totalPrice >= 150) {
        return Math.min(0.15 * totalPrice, 30);
    }
    if( totalPrice >= 100) {
        return 0.1 * totalPrice;
    }
    if( totalPrice >= 50) {
        return 0.05 * totalPrice;
    }
    return 0;
};




