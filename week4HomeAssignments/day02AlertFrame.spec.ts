// Automate interactions with frames, trigger alerts, and verify the displayed text based on actions 
// using Playwright on the given application.

import test, { expect } from '@playwright/test'

test("frame alert", async({page})=>{

    page.on('dialog',frameAlert=>{
        console.log(frameAlert.type()) // displays the type of an alert
        console.log(frameAlert.message()) // displays the message on the alert
        frameAlert.accept() // clicks on ok button in the alert box
    })

    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    await page.frameLocator("(//iframe)[2]").locator("text=Try it").click()
    const successMsg = await page.frameLocator("(//iframe)[2]").locator("#demo").innerText()
    await expect(successMsg).toBe("You pressed OK!") // validate the mesage after clicking ok button
    console.log("Message verification success")

})