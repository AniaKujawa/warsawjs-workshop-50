const { pricesCalculator } = require('../src/price-calculator');

//DESCRIBE POZWALA GRUPOWAC TESTY
//SKIP POZWALA ZIGNOROWAC TEST, MOZE BYC NA POZIOMIE DESCRIBE LUB SAMEGO TESTU

describe.skip('totalPriceForProducts', () => {
    it('should return 0 when no products', () => {
        // DEMO
        // GIVEN
        const products = [];

        // WHEN
        let totalPriceForProducts = pricesCalculator().totalPriceForProducts(products);

        // THEN
        expect(totalPriceForProducts).toEqual(0);
    });

    it('should return sum for all products when single count of each', () => {
        // DEMO
        const products = [{ price: 10, count: 1}, { price: 30, count: 1 }];

        const totalPrice = pricesCalculator().totalPriceForProducts(products);

        expect(totalPrice).toEqual(40);
        });

    it('should return sum for all products when more then single count', () => {
        // DEMO
    });
});


describe('delivery cost', () => {
    // Napisz testy funkcji o sygnaturze: calculator.deliveryCost(productsPrice)
    // Funkcja ta zwraca koszt przesyłki, w zależności od sumy ceny produktów:
    // Jeśli cena produktów < 50, koszty przesyłki wynoszą 20
    // Jeśli cena produktów < 100, koszty przesyłki wynoszą 10
    // Jeśli cena produktów >= 100, koszty przesyłki wynoszą 0

    // TODO: Napisz przynajmniej 3 testy wryfikujące opisane działanie funkcji
    // HINT: Testy powinny być napisane z zachowaniem struktury Arrange-Act-Assert

    it('delivery cost is 20 when total price is less than 50', () => {
        const productsPrice = 40;

        const deliveryCost = pricesCalculator().deliveryCost(productsPrice);

        expect(deliveryCost).toEqual(20);
    });

    it('should return delivery cost 10 if price of products is < 100', () => {
        const productsPrice = 50;

        const deliveryCost = pricesCalculator().deliveryCost(productsPrice);

        expect(deliveryCost).toEqual(10);
    });

    it('should return delivery cost 0 if price of products is = 100', () => {
        const productsPrice = 100;

        const deliveryCost = pricesCalculator().deliveryCost(productsPrice);

        expect(deliveryCost).toEqual(0);
    });

    it('should return delivery cost 0 if price of products is > 100', () => {
        const productsPrice = 110;

        const deliveryCost = pricesCalculator().deliveryCost(productsPrice);

        expect(deliveryCost).toEqual(0);
    });
});
