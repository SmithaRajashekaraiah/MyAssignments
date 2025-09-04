import test from '@playwright/test'

test("Edit a lead", async({page})=>{
    // login and create a lead
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill("Demosalesmanager")
    await page.locator('[type=password]').fill("crmsfa")
    await page.locator('.decorativeSubmit').click()

    await page.locator('text="CRM/SFA"').click()
    await page.waitForTimeout(4000)
    await page.locator('text="Leads"').click()
    await page.locator('//a[text()="Create Lead"]').click()
    await page.locator('#createLeadForm_companyName').fill("CompanyTest")
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Sample123")
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("Test123")
    await page.locator('.smallSubmit').click()
    // Edit a lead
    await page.locator('//a[text()="Edit"]').click()
    await page.locator('[id="updateLeadForm_companyName"]').fill("TestLeaf12")
    await page.locator('[value="Update"]').click()
})