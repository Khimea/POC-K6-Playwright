

export class PageDemoblaze {
    constructor(page) {
        this.page = page
      }
    async navigate() {
        await this.page.goto("https://www.demoblaze.com")
    }
}
