function launchBrowser(browserName)
{
    if (browserName)
        console.log(browserName + " browser")
    else
        console.log(browserName + " browser")
}

function runTests(testType)
{
    switch(testType){
        case "sanity":
            console.log("Test type is sanity")
                break;
        case "regression":
            console.log("Test type is regression")
            break;
        default:
            console.log("Test type is smoke")
       }
}

launchBrowser("chrome")
runTests("sanity")
runTests()
