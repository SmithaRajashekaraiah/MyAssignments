import {test, expect} from '@playwright/test'

test("create an Individuals", async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("ravindran.ramdas@testleaf.com")
    await page.locator('[name=pw]').fill("RaviTestleaf#1432")
    await page.locator('#Login').click()
    await page.waitForTimeout(4000)
    await page.locator('.slds-icon-waffle').click()
    await page.waitForTimeout(4000)
    await page.locator('text="View All"').click()
    await page.locator('//p[text()="Individuals"]').click()
    await page.locator('[class="slds-context-bar__label-action slds-p-left_none slds-p-right_x-small"]').click()
    await page.locator('//span[text()="New Individual"]').click()
    await page.locator('(//div[@class="uiPopupTrigger"])[1]').click()
    await page.locator('//a[text()="Ms."]').click()
    await page.getByPlaceholder('Last Name').fill('Leaf1')
    const lastName = await page.getByPlaceholder('Last Name').inputValue()
    await page.locator('[title="Save"]').click()
    
    // to verify toast message
    const toastMsg= page.locator('//span[@class="toastMessage slds-text-heading--small forceActionsText"]')
    await expect(toastMsg).toBeVisible()
    await expect(toastMsg).toHaveText(`Individual "${lastName}" was created.`)

})