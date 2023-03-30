import Login from '../../page-objects/complex/Login'
import Inventory from '../../page-objects/complex/Inventory'

const loginPage = new Login()
const inventoryPage = new Inventory()

describe('Login', () => {
  it('logs in successfully', () => {
    loginPage.visit()

    loginPage.fillFormAndSubmit()

    inventoryPage.productsTitle().should('be.visible')
  })
})
