export default class Inventory {
  constructor() {
    this.productsTitleSelector = '.title'
  }
  productsTitle() {
    return cy.contains(this.productsTitleSelector, 'Products')
  }
}
