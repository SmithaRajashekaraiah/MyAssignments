// to interact with the web elements present inside iframes

import test, { expect } from '@playwright/test'

test("frames handling",async({page})=>{

await page.goto('https://leafground.com/frame.xhtml')
// To interact with Click Me button inside frame

await page.frameLocator('(//iframe)[1]').locator("#Click").click()
const getText = await page.frameLocator('(//iframe)[1]').locator("#Click").innerText()
await expect(getText).toBe('Hurray! You Clicked Me.')//using assertion to validate the text changed after clicking the button

//Interact with the Click Me button present inside the nested frames
// Method 1

 const totalFrames =  page.frames() // gives the total frames present in a page in the array format
 const nestedFrame=totalFrames[4]
 await nestedFrame.locator("#Click").click() // clicking  Click Me button inside the nested frame
 const successText=await nestedFrame.locator("#Click").innerText()
 await expect(successText).toBe("Hurray! You Clicked Me.") // using assertion validate the text changed after clicking the button

//Method 2 using frame locator

const totalFrames1 = page.frames()
await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()
const successText1 = await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").innerText()
await expect(successText1).toBe("Hurray! You Clicked Me.")

})