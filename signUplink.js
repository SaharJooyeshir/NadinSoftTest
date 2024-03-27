const {Builder,By}=require("selenium-webdriver");
let driver=new Builder().forBrowser("firefox").build();

async function signUpLink()
{
    await driver.get("file:///D:/Learn/Nadin/login/login.html");
    await driver.findElement(By.xpath("//a")).click();


}
    signUpLink();