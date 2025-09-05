// Create a lead

import {test, expect} from '@playwright/test'
import { execPath } from 'process'

test('create a lead', async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill("Demosalesmanager")
    await page.locator('[type=password]').fill("crmsfa")
    await page.locator('.decorativeSubmit').click()

    await page.locator('text="CRM/SFA"').click()
    await page.waitForTimeout(4000)
    await page.locator('text="Leads"').click()
    await page.locator('//a[text()="Create Lead"]').click()
    await page.locator('#createLeadForm_companyName').fill("CompanyTest")
    const cName = await page.locator('#createLeadForm_companyName').inputValue()
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Sample")
    const fName= await page.locator('#createLeadForm_firstName').inputValue()
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("Test")
    const lName= await page.locator('#createLeadForm_lastName').inputValue()
    await page.locator('#createLeadForm_personalTitle').fill("Dear")
    await page.locator('[name="generalProfTitle"]').fill("Mrs")
    await page.locator('#createLeadForm_annualRevenue').fill("20000")
    await page.locator('[name="departmentName"]').fill("Testing")
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("9023415678")
    await page.locator('.smallSubmit').click()
    await page.waitForTimeout(4000)
    const companyName=await page.locator('#viewLead_companyName_sp').innerText()
    const firstName=await page.locator('#viewLead_firstName_sp').innerText()
    const lastName=await page.locator('#viewLead_lastName_sp').innerText()
    const compStatus=await page.locator('#viewLead_statusId_sp').innerText()
    // to verify the data
    await expect(companyName).toContain(cName)
    await expect(firstName).toBe(fName)
    await expect(lastName).toBe(lName)
    await expect(compStatus).toBe("Assigned")
    console.log("Page title is " + await page.title())
})

