// Login class

class SauceDemoLogin{
    // Elements locators
    username_Field = '//*[@id="user-name"]' ;
    Password_Field = '//*[@id="password"]'; 
    Login_button = '//*[@id="login-button"]';
    ErrorMessage = '//*[@id="login_button_container"]/div/form/div[3]'; 
    ErrorMessage1 = '//*[@id="login_button_container"]/div/form/div[3]/h3';
    Sort_button = '.product_sort_container';
    LogOut_button = '//*[@id="logout_sidebar_link"]';
    LogOut_menu = '//*[@id="react-burger-menu-btn"]';
    AddSLBackpackToCart = '#add-to-cart-sauce-labs-backpack';
    Product_SLBackpack = '//*[@id="inventory_container"]/div/div[1]/div[2]';
    AddSLBoltTshirtToCart = '#add-to-cart-sauce-labs-bolt-t-shirt';
    Product_SLBoltTshirt = '//*[@id="inventory_container"]/div/div[3]/div[2]';
    Product_RedTshirt = '//*[@id="inventory_container"]/div/div[6]/div[2]';
    AddRedTshirtToCart = '//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]';
    Product_SLBikeLight = '//*[@id="inventory_container"]/div/div[2]/div[2]';
    AddSLBikeLightToCart = '//*[@id="add-to-cart-sauce-labs-bike-light"]';
    Product_SLOnesieFull = ':nth-child(5) > .inventory_item_description';
    AddSLOnesieToCart = '//*[@id="add-to-cart-sauce-labs-onesie"]';
    Product_SLFleecejacket = '//*[@id="inventory_container"]/div/div[4]/div[2]';
    AddSLFleecejackettoCart_button = '//*[@id="add-to-cart-sauce-labs-fleece-jacket"]';
    Remove_BackpackFromCart_button = '//*[@id="remove-sauce-labs-backpack"]';
    Remove_SLBoltTshirtFromCart_button = '//*[@id="remove-sauce-labs-bolt-t-shirt"]';
    Remove_RedTshirtFromCart_button = '//*[@id="remove-test.allthethings()-t-shirt-(red)"]';
    Remove_SLBikeLightFromCart_button = '//*[@id="remove-sauce-labs-bike-light"]';
    Remove_SLOnesieFromCart_button = '//*[@id="remove-sauce-labs-onesie"]';
    Remove_SLFleecejacketFromCart_button = '//*[@id="remove-sauce-labs-fleece-jacket"]';
    Cart_button = '//*[@id="shopping_cart_container"]/a';
    
    
    
    
    
    
    
    
    
    
    Enter_Username (Username) {
        cy.xpath(this.username_Field).type(Username)
    }
    
    Enter_Password (Password) {
        cy.xpath(this.Password_Field).type(Password)
    }
    
    ClickLogin_button (){
        cy.xpath(this.Login_button)
        .should('be.enabled')
        .and('be.visible')
        .click()
    }
    
    DisplayErrorMessage (){
       return cy.xpath(this.ErrorMessage)
    }
    
    SortItems_NameZtoA () {
    
        cy.get(this.Sort_button).select('Name (Z to A)')
        cy.wait(2000)
    }
    
    SortItems_PriceHtoL() {
    
        cy.get(this.Sort_button).select('Price (high to low)')
        cy.wait(2000)
    }
    
    SortItems_NameAtoZ() {
    
        cy.get(this.Sort_button).select('Name (A to Z)')
        cy.wait(2000)
    }
    
    SortItems_PriceLtoH() {
    
        cy.get(this.Sort_button).select('Price (low to high)')
        cy.wait(2000)
    }
    
    SortItems_all() {
    
        cy.get(this.Sort_button).select('Name (Z to A)')
       // cy.wait(2000)
        cy.get(this.Sort_button).select('Price (low to high)')
       // cy.wait(4000)
        cy.get(this.Sort_button).select('Name (A to Z)')
        cy.wait(3000)
        cy.get(this.Sort_button).select('Price (high to low)')
    }
    
    
    LogOut (){
        cy.xpath(this.LogOut_menu).click()
        cy.xpath(this.LogOut_button).click()
        cy.get('.login_logo').should('contain', 'Swag Labs')
    }
    
    Add_ItemToCart(){
        cy.get(this.AddSLBackpackToCart).click()
        cy.get(this.AddSLBoltTshirtToCart).click()
    }
    
    Items_RedTshirt (){
        return cy.xpath(this.Product_RedTshirt)
    }
    
    Items_SLOnesieFull(){
        return cy.get(this.Product_SLOnesieFull)
    }
    
    Items_SLBikeLight(){
        return cy.xpath(this.Product_SLBikeLight)
    }
    
    Item_SLFleeceJacket(){
        return cy.xpath(this.Product_SLFleecejacket)
    }
    
    Item_SLBoltTshirt(){
        return cy.xpath(this.Product_SLBoltTshirt)
    }
    
    Item_SLBackpack(){
        return cy.xpath(this.Product_SLBackpack)
    }
    
    Add_SLBackpack (){
        return cy.get(this.AddSLBackpackToCart)
    }
    
    Add_SLBoltTshirt () {
        return cy.get(this.AddSLBoltTshirtToCart)
    }
    
    Add_FleeceTshirt (){
        return cy.xpath(this.AddSLFleecejackettoCart_button)
    }
    
    Add_SLBikeLight(){
        return cy.xpath(this.AddSLBikeLightToCart)
    }
    
    Add_SLOnesie (){
        return cy.xpath(this.AddSLOnesieToCart)
    }
    
    Add_RedTshirt (){
        return cy.xpath(this.AddRedTshirtToCart)
    }
    
    RemoveRedTshirt (){
        return cy.xpath(this.Remove_RedTshirtFromCart_button)
    }
    
    RemoveBackPack (){
        return cy.xpath(this.Remove_BackpackFromCart_button)
    }
    
    RemoveSLOnesie (){
        return cy.xpath(this.Remove_SLOnesieFromCart_button)
    }
    
    RemoveSLBikeLight (){
        return cy.xpath(this.Remove_SLBikeLightFromCart_button)
    }
    
    RemoveSlBoltTshirt (){
        return cy.xpath(this.Remove_SLBoltTshirtFromCart_button)
    }
    
    RemoveSLFleeceJacket (){
        return cy.xpath(this.Remove_SLFleecejacketFromCart_button)
    }
    
    Cart(){
        return cy.xpath(this.Cart_button)
    }
    
    
    }
    
    export default SauceDemoLogin;