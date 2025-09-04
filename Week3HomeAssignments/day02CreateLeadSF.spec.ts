import {test, expect} from '@playwright/test'

test("create a lead", async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("ravindran.ramdas@testleaf.com")
    await page.locator('[name=pw]').fill("RaviTestleaf#1432")
    await page.locator('#Login').click()

    await page.locator('.slds-icon-waffle').click()
    await page.locator('text="View All"').click()
    await page.waitForTimeout(4000)
    await page.locator('//p[text()="Sales"]').click()
    await page.locator('a[title="Leads"]').click()
    await page.locator('a[title="New"]').click()
    await page.locator('[name="salutation"]').click()
    await page.locator('//span[text()="Mrs."]').click()
    const sal = await page.locator('(//span[@part="input-button-value"])[2]').innerText()
     const  salVal=sal.trim()
    await page.click('//span[@class="slds-truncate"][text()="Mrs."]')
    await page.getByPlaceholder('Last Name').fill("Testing123")
    const lastName=await page.getByPlaceholder('Last Name').inputValue()
    const lastNameVal=lastName.trim()
    await page.locator('[name="Company"]').fill("Testleaf123")
    await page.locator('[name="SaveEdit"]').click()
    
    // to verify toast message
    const toastMsg1 = page.locator('//div[@class="slds-hyphenate"]')
    await expect(toastMsg1).toBeVisible()
    await expect(toastMsg1).toHaveText(`Lead "${salVal} ${lastNameVal}" was created.`)
        
}
)


