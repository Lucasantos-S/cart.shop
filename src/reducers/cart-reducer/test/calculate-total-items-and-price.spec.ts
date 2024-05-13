import { calculateTotalItemsAndPrice } from '..'

describe('calculateTotalItemsAndPrice function', () => {
  it('should calculate the total quantity and price of items in the cart', () => {
    const mockCart = {
      id: '',
      totalItems: 3,
      totalPrice: 34.97,
      cartItems: [
        {
          observation: '',
          id: 'efe40828-d46e-407e-a420-92cc7ae6eb8e',
          quantity: 1,
          total: 12.99,
          product: {
            id: '58d6048f-53b9-4cf1-94ca-ff1e5a2e1697',
            name: 'Big Mac',
            price: 12.99,
            description:
              'Dois hambúrgueres, alface, queijo, molho especial, cebola e picles em um pão com gergelim.',
            img: 'https://i.postimg.cc/ydF6fYZM/5882482de81acb96424ffaac.png',
          },
        },
        {
          observation: '',
          id: '9a38a272-52e9-4ee5-af1b-88ae243a0e99',
          quantity: 1,
          total: 21.98,
          product: {
            id: '06af7399-5cc1-45b2-895a-1fd08555d1c3',
            name: 'McFish',
            price: 10.99,
            description:
              'Filete de peixe empanado, queijo e molho tártaro em um pão de hambúrguer com gergelim.',
            img: 'https://i.postimg.cc/c411mW4z/58824b29e81acb96424ffab8.png',
          },
        },
      ],
    }

    const expectedTotalItems = mockCart.cartItems.reduce(
      (total, item) => total + item.quantity,
      0,
    )
    const expectedTotalPrice = mockCart.cartItems.reduce(
      (total, item) => total + item.total,
      0,
    )

    const { totalItems } = calculateTotalItemsAndPrice(mockCart.cartItems)

    expect(totalItems).toEqual(expectedTotalItems)
    expect(expectedTotalPrice).toEqual(expectedTotalPrice)
  })
})
