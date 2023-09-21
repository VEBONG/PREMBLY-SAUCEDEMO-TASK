/// <reference types = "cypress" />

//import { data } from "cypress/types/jquery";
import SauceDemoLogin from "../..SaucePageElements.js";

describe('Sauce Page POM implementation', () => {

    beforeEach(() =>{
        cy.visit('https://www.saucedemo.com/'); 
    })

        // T.S 1: Landing Page Verification
    it.only('TC 0.1: Check if home page has been visited', () => {
        cy.url()
        .should('eq', 'https://www.saucedemo.com/')
        .and('contain', 'saucedemo');
    })

    it('TC 0.2: Verify Page title', () =>{
        cy.title()
        .should('eq', 'Swag Labs')
    })

        //T.S 2: Testing Login Functionality
    it('TC 1.1: verify user cannot login with invalid username and password and appropriate error message is displayed', ()=> {
        cy.fixture('SaucePageInvalidTestData').then((ndata) =>{
            const newln = new SauceDemoLogin();
            newln.Enter_Username(ndata.Username_I)
            newln.Enter_Password(ndata.Password_I)
            newln.ClickLogin_button()
            //cy.wait(10000)
            newln.DisplayErrorMessage().should('contain', 'Epic sadface: Username and password do not match any user in this service')
            //cy.wait(10000)
        })
    
    })

    it('TC 1.2: Verify login to the site with valid credentials', ()=>{
        cy.fixture('SaucePageTestData').then((data) =>{
            const ln = new SauceDemoLogin();
            ln.Enter_Username(data.Username)
            ln.Enter_Password(data.Password)
            ln.ClickLogin_button()
            // Validate the Alert Upon successful login
            cy.on('window:alert', (alert_text) =>{
                expect(alert_text).to.contains('Change your password')
            })
        })
    })

    it('TC 1.3: Verify that user cannot login with valid username and invalid password and appropriate error message is displayed', ()=> {
        cy.fixture('SaucePageInvalidTestData').then((ndata) =>{
            const newln = new SauceDemoLogin();
            newln.Enter_Username(ndata.Username_V)
            newln.Enter_Password(ndata.Password_I)
            newln.ClickLogin_button()
            //cy.wait(10000)
            newln.DisplayErrorMessage().should('contain', 'Epic sadface: Username and password do not match any user in this service')
            //cy.wait(10000)
        })
    
    })

    it('TC 1.4: Verify user cannot login with invalid username and valid password and appropriate error message is displayed', ()=> {
        cy.fixture('SaucePageInvalidTestData').then((ndata) =>{
            const newln = new SauceDemoLogin();
            newln.Enter_Username(ndata.Username_I)
            newln.Enter_Password(ndata.Password_V)
            newln.ClickLogin_button()
            //cy.wait(10000)
            newln.DisplayErrorMessage().should('contain', 'Epic sadface: Username and password do not match any user in this service')
            //cy.wait(10000)
        })
    })

    it('TC 1.5: Verify user cannot login with empty username field and valid password and appropriate error message is displayed', ()=> {
        cy.fixture('SaucePageInvalidTestData').then((ndata) =>{
            const newln = new SauceDemoLogin();
           // newln.Enter_Username(ndata.Username_E)
            newln.Enter_Password(ndata.Password_V)
            newln.ClickLogin_button()
            //cy.wait(10000)
            newln.DisplayErrorMessage().should('contain', 'Epic sadface: Username is required')
            //cy.wait(10000)
        })
    })

    it('TC 1.6: Verify user cannot login with empty username field and invalid password and appropriate error message is displayed', ()=> {
        cy.fixture('SaucePageInvalidTestData').then((ndata) =>{
            const newln = new SauceDemoLogin();
          //  newln.Enter_Username(ndata.Username_E)
            newln.Enter_Password(ndata.Password_I)
            newln.ClickLogin_button()
            //cy.wait(10000)
            newln.DisplayErrorMessage().should('contain', 'Epic sadface: Username is required')
            //cy.wait(10000)
        })
    })

    it('TC 1.7: Verify user cannot login with valid username and empty password field and appropriate error message is displayed', ()=> {
        cy.fixture('SaucePageInvalidTestData').then((ndata) =>{
            const newln = new SauceDemoLogin();
            newln.Enter_Username(ndata.Username_V)
           // newln.Enter_Password(ndata.Password_E)
            newln.ClickLogin_button()
            //cy.wait(10000)
            newln.DisplayErrorMessage().should('contain', 'Epic sadface: Password is required')
            //cy.wait(10000)
        })
    })

    it('TC 1.8: Verify user cannot login with invalid username and empty password field and appropriate error message is displayed', ()=> {
        cy.fixture('SaucePageInvalidTestData').then((ndata) =>{
            const newln = new SauceDemoLogin();
            newln.Enter_Username(ndata.Username_I)
           // newln.Enter_Password(ndata.Password_E)
            newln.ClickLogin_button()
            //cy.wait(10000)
            newln.DisplayErrorMessage().should('contain', 'Epic sadface: Password is required')
            //cy.wait(10000)
        })
    })

    it('TC 1.9: Verify user cannot login with empty username and password field and appropriate error message is displayed', ()=> {
        cy.fixture('SaucePageInvalidTestData').then((ndata) =>{
            const newln = new SauceDemoLogin();
            //newln.Enter_Username(ndata.Username_E)
            //newln.Enter_Password(ndata.Password_E)
            newln.ClickLogin_button()
            //cy.wait(10000)
            newln.DisplayErrorMessage().should('contain', 'Epic sadface: Username is required')
            //cy.wait(10000)
        })
    })

    it('TC 1.10: Verify the login button is enabled and visible', ()=> {
        cy.fixture('SaucePageInvalidTestData').then((ndata) =>{
            const newln = new SauceDemoLogin();
            //newln.Enter_Username(ndata.Username_E)
            //newln.Enter_Password(ndata.Password_E)
            newln.ClickLogin_button()
            
            newln.DisplayErrorMessage().should('contain', 'Epic sadface: Username is required')
        })
    })

    it('TC 1.11: Verify user is taken to the transaction page on successful login', ()=>{
        cy.fixture('SaucePageTestData').then((data) =>{
            const ln = new SauceDemoLogin();
            ln.Enter_Username(data.Username)
            ln.Enter_Password(data.Password)
            ln.ClickLogin_button()
            // Validate the Alert Upon successful login
            cy.on('window:alert', (alert_text) =>{
                expect(alert_text).to.contains('Change your password')
            })
        })
        cy.title()
        .should('eq', 'Swag Labs')
        cy.get('#item_4_title_link > div')
        .should('include.text', 'Sauce Labs Backpack')
        .and('be.visible')
    })
        // T.S 3: Product/items page

        it('TC 2.1: Verify user can view items available on the site', ()=>{
            const ln = new SauceDemoLogin();
            cy.fixture('SaucePageTestData').then((data) =>{
                ln.Enter_Username(data.Username)
                ln.Enter_Password(data.Password)
                ln.ClickLogin_button()
                })
            cy.title()
            .should('eq', 'Swag Labs')
           // cy.get('#item_4_title_link > div') was call as a function in the line that follows
            ln.Item_SLBackpack()
            .should('include.text', 'Sauce Labs Backpack')
            .and('exist')
            .and('be.visible')
            .and('contain','$29.99')
            cy.xpath('//*[@id="item_4_img_link"]/img').should('exist')
            .and('be.visible')
            .and('not.contain.text')

            ln.Items_RedTshirt().should('be.visible')
            .and('contain', 'T-Shirt (Red)')
            .and('contain', '$15.99')
            cy.get('#item_3_img_link > .inventory_item_img').should('exist')
            .and('be.visible')
            .and('not.contain.text')

            ln.Items_SLOnesieFull().should('exist')
            .and('be.visible')
            .and('contain', 'Sauce Labs Onesie')
            .and('contain', '$7.99')
            cy.get('#item_2_img_link > .inventory_item_img').should('exist')
            .and('be.visible')
            .and('not.contain.text')

            ln.Item_SLBoltTshirt().should('exist')
            .and('be.visible')
            .and('contain', 'Sauce Labs Bolt T-Shirt')
            .and('contain', '$15.99')
            cy.get('#item_1_img_link > .inventory_item_img').should('exist')
            .and('be.visible')
            .and('not.contain.text')
            
            ln.Item_SLFleeceJacket().should('exist')
            .and('be.visible')
            .and('contain', 'Sauce Labs Fleece Jacket')
            .and('contain', '$49.99')
            cy.get('#item_5_img_link > .inventory_item_img').should('exist')
            .and('be.visible')
            .and('not.contain.text')
            
            ln.Items_SLBikeLight().should('exist')
            .and('be.visible')
            .and('contain', 'Sauce Labs Bike Light')
            .and('contain', '$9.99')
            cy.get('#item_0_img_link > .inventory_item_img').should('exist')
            .and('be.visible')
            .and('not.contain.text')
 
        })

        it('TC 2.2: Verify user can see prices on items', ()=>{
            const ln = new SauceDemoLogin();
            cy.fixture('SaucePageTestData').then((data) =>{
                ln.Enter_Username(data.Username)
                ln.Enter_Password(data.Password)
                ln.ClickLogin_button()
                })
            cy.title()
            .should('eq', 'Swag Labs')
           // cy.get('#item_4_title_link > div') was call as a function in the line that follows
            ln.Item_SLBackpack()
            .should('exist')
            .and('be.visible')
            .and('contain','$29.99')

            ln.Items_RedTshirt().should('be.visible')
            .and('exist')
            .and('contain', '$15.99')

            ln.Items_SLOnesieFull().should('exist')
            .and('be.visible')
            .and('contain', '$7.99')

            ln.Item_SLBoltTshirt().should('exist')
            .and('be.visible')
            .and('contain', '$15.99')
            
            ln.Item_SLFleeceJacket().should('exist')
            .and('be.visible')
            .and('contain', '$49.99')
            
            ln.Items_SLBikeLight().should('exist')
            .and('be.visible')
            .and('contain', '$9.99')
            
        })

    it('TC 2.3: Verify user can sort and view items by Name (A-Z)', ()=>{
        const sort = new SauceDemoLogin();
        cy.fixture('SaucePageTestData').then((sort_data) =>{
            sort.Enter_Username(sort_data.Username)
            sort.Enter_Password(sort_data.Password)
        })
        sort.ClickLogin_button()
        sort.SortItems_NameAtoZ()

    })

    it('TC 2.4: Verify user can sort and view items by Name (Z-A)', ()=>{
        const sort = new SauceDemoLogin();
        cy.fixture('SaucePageTestData').then((sort_data) =>{
            sort.Enter_Username(sort_data.Username)
            sort.Enter_Password(sort_data.Password)
        })
        sort.ClickLogin_button()
        sort.SortItems_NameZtoA()

    })

    it('TC 2.5: Verify user can sort and view items by Price (low to high)', ()=>{
        const sort = new SauceDemoLogin();
        cy.fixture('SaucePageTestData').then((sort_data) =>{
            sort.Enter_Username(sort_data.Username)
            sort.Enter_Password(sort_data.Password)
        })
        sort.ClickLogin_button()
        sort.SortItems_PriceLtoH()

    })

    it('TC 2.6: Verify user can sort and view items by Price (high to low)', ()=>{
        const sort = new SauceDemoLogin();
        cy.fixture('SaucePageTestData').then((sort_data) =>{
            sort.Enter_Username(sort_data.Username)
            sort.Enter_Password(sort_data.Password)
        })
        sort.ClickLogin_button()
        sort.SortItems_PriceHtoL()
    })

        // Verify that user can sort the items in the page
    it('TC 2.6.1: Verify that a user can sort all the items in the page at once', () =>{
        cy.fixture('SaucePageTestData').then((data) =>{
            const ln = new SauceDemoLogin();
            ln.Enter_Username(data.Username)
            ln.Enter_Password(data.Password)
            ln.ClickLogin_button()
            ln.SortItems_all()
            ln.LogOut()            
        })
    })

        // Verify that user can add an item to the cart

    it('TC 2.7: Verify user can add items to the cart while on item page', () =>{
        const ln = new SauceDemoLogin();
        cy.fixture('SaucePageTestData').then((data) =>{
            ln.Enter_Username(data.Username)
            ln.Enter_Password(data.Password)
            ln.ClickLogin_button()
           // ln.Add_ItemToCart()  //To add more than one item to the cart
            ln.Add_RedTshirt().click()
            ln.Add_FleeceTshirt().click()
            ln.Add_SLBackpack().click()
            ln.Add_SLBikeLight().click()
            ln.Add_SLOnesie().click()
            ln.Add_SLBoltTshirt().click()
                    // Click the cart button to assert
            cy.get('.shopping_cart_link').click()
            cy.get('.cart_list').should('contain', 'Sauce Labs Backpack')
            .and('contain', 'Remove')
            .and('not.contain', 'Add to cart')
            .and('be.visible')
            .and('contain','$29.99')

            cy.get('.cart_list').should('contain', 'Sauce Labs Bike Light')
            .and('be.visible')
            .and('contain', '$9.99')

            cy.get('.cart_list').should('contain', 'Sauce Labs Bolt T-Shirt')
            .and('be.visible')
            .and('contain', '$15.99')

            cy.get('.cart_list').should('contain', 'Sauce Labs Fleece Jacket')
            .and('be.visible')
            .and('contain', '$49.99')

            cy.get('.cart_list').should('contain', 'Sauce Labs Onesie')
            .and('be.visible')
            .and('contain', '$7.99')

            cy.get('.cart_list').should('contain', 'Test.allTheThings() T-Shirt (Red)')
            .and('contain', '$15.99')
            .and('not.contain', '$16.99')
            .and('be.visible')
          //  cy.xpath('//*[@id="shopping_cart_container"]/a/span').should('have.length','6')
           // cy.xpath('//*[@id="inventory_container"]/div').should('have.length', '6')
        
        })
    })

    it('TC 2.8: Verify user can remove items from the cart while on item page', ()=>{
        const RemItem = new SauceDemoLogin();
        cy.fixture('SaucePageTestData').then((rdata) =>{
        RemItem.Enter_Username(rdata.Username)
        RemItem.Enter_Password(rdata.Password)
        RemItem.ClickLogin_button()
        //To add items to the cart before removing them
        RemItem.Add_RedTshirt().click()
        RemItem.Add_FleeceTshirt().click()
        RemItem.Add_SLBackpack().click()
        RemItem.Add_SLBikeLight().click()
        RemItem.Add_SLOnesie().click()
        RemItem.Add_SLBoltTshirt().click()
                // Click the cart button to assert
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_list').should('contain', 'Sauce Labs Backpack')
        .and('contain', 'Remove')
        .and('not.contain', 'Add to cart')
        .and('be.visible')
        .and('contain','$29.99')

        cy.get('.cart_list').should('contain', 'Sauce Labs Bike Light')
        .and('be.visible')
        .and('contain', '$9.99')

        cy.get('.cart_list').should('contain', 'Sauce Labs Bolt T-Shirt')
        .and('be.visible')
        .and('contain', '$15.99')

        cy.get('.cart_list').should('contain', 'Sauce Labs Fleece Jacket')
        .and('be.visible')
        .and('contain', '$49.99')

        cy.get('.cart_list').should('contain', 'Sauce Labs Onesie')
        .and('be.visible')
        .and('contain', '$7.99')

        cy.get('.cart_list').should('contain', 'Test.allTheThings() T-Shirt (Red)')
        .and('contain', '$15.99')
        .and('not.contain', '$16.99')
        .and('be.visible')
            // Wait for 10 sec before removing the items from the cart
        cy.wait(2000)
        // REMOVE THE ITEMS FROM CART
        RemItem.RemoveRedTshirt().click()
        cy.get('.cart_list').should('not.contain', 'Test.allTheThings() T-Shirt (Red)')
       
        RemItem.RemoveSlBoltTshirt().click()
        cy.get('.cart_list').should('not.contain', 'Sauce Labs Bolt T-Shirt')
               
        cy.wait(1000)
        RemItem.RemoveSLBikeLight().click()
        cy.get('.cart_list').should('not.contain', 'Sauce Labs Bike Light')
        

        cy.wait(1000)
        RemItem.RemoveSLOnesie().click()
        cy.get('.cart_list').should('not.contain', 'Sauce Labs Onesie')
      
        cy.wait(1000)

        RemItem.RemoveSLFleeceJacket().click()
        cy.get('.cart_list').should('not.contain', 'Sauce Labs Fleece Jacket')
      

        RemItem.RemoveBackPack().click()
        cy.get('.cart_list').should('not.contain','Sauce Labs Backpack')
        
      


        })
    })

    it('TC 3.1 Verify cart button is enabled and clickable', ()=>{
        const RemItem = new SauceDemoLogin();
        cy.fixture('SaucePageTestData').then((rdata) =>{
        RemItem.Enter_Username(rdata.Username)
        RemItem.Enter_Password(rdata.Password)
        RemItem.ClickLogin_button()
        // click the cart button
        RemItem.Cart().click()  
        cy.xpath('//*[@id="header_container"]/div[2]/span').should('contain','Your Cart')
        .and ('be.visible')

        })
    })

    


})