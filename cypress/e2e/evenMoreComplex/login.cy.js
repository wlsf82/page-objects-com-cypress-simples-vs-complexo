import Login from '../../page-objects/evenMoreComplex/Login'
import Inventory from '../../page-objects/evenMoreComplex/Inventory'

const loginPage = new Login()
const inventoryPage = new Inventory()

describe('Login', () => {
  it('logs in successfully', () => {
    loginPage.visit()

    loginPage.fillFormAndSubmit()

    inventoryPage.productsTitle().should('be.visible')
  })
})
