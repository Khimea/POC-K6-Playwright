export class Homepage {
    constructor(page) {
      this.page = page
      this.nameField = page.locator('#nava')
  
    }
  
    async goto() {
      await this.page.goto('https://www.demoblaze.com')
    }
  
  
    async getVerificationMessage() {
      let name = await this.nameField.textContent()
      
      return this.nameField.textContent()
    }
  }