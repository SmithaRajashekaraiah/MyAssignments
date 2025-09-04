// edit a lead

import test from '@playwright/test'

test('Edit a lead', async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill("Demosalesmanager")
    await page.locator('[type=password]').fill("crmsfa")
    await page.locator('.decorativeSubmit').click()

    await page.locator('text="CRM/SFA"').click()
    await page.waitForTimeout(4000)
    await page.locator('text="Leads"').click()
    await page.locator('//a[text()="Find Leads"]').click()
    await page.locator('(//input[@name="firstName"])[3]').fill("Sample")
    await page.locator('//button[text()="Find Leads"]').click()
    await page.locator('(//div[@class="x-grid3-cell-inner x-grid3-col-firstName"]/a)[1]').click()
    await page.waitForTimeout(5000)
    await page.locator('//a[text()="Edit"]').click()
    await page.waitForTimeout(4000)

    await page.locator('#updateLeadForm_companyName').fill("TestLeaf")
    await page.locator('#updateLeadForm_annualRevenue').fill("21000")
    await page.locator('#updateLeadForm_departmentName').fill("TestingForm")
    await page.locator('#updateLeadForm_description').fill("Description for edit lead")
    await page.locator('//input[@value="Update"]').click()
    await page.waitForTimeout(4000)
    const companyName=await page.locator('#viewLead_companyName_sp').innerText()
    const annualRev=await page.locator('#viewLead_annualRevenue_sp').innerText()
    const department=await page.locator('#viewLead_departmentName_sp').innerText()
    const description=await page.locator('#viewLead_description_sp').innerText()

    if(companyName.includes('TestLeaf') && annualRev.trim()==='$21,000.00' && department.trim()==='TestingForm' && description!=null)
     {
         console.log('Company details edited successfully')
     }else
         console.log('Company edited failed')
})