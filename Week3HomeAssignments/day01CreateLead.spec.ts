// Create a lead

import test from '@playwright/test'

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
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Sample")
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("Test")
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
       
    if (companyName.includes("CompanyTest") && firstName.trim() === 'Sample' && lastName.trim()==='Test' && compStatus.trim()=='Assigned')
    {
        console.log("Company details verification success")
     }
    else
        throw new Error ("Company details verification failed")
                    //OR
        //console.log("Company details verification failed")

    console.log("Page title is " + await page.title())
})

