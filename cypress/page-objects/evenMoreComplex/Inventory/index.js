import { productsTitleSelector } from './selectors'

export default class Inventory {
  productsTitle() {
    return cy.contains(productsTitleSelector, 'Products')
  }
}
