const {Builder,By}=require("selenium-webdriver");
let driver=new Builder().forBrowser("firefox").build();
async function loginPage()
{
    
  await driver.get("file:///D:/Learn/Nadin/login/login.html");
  await driver.findElement(By.id("login-email")).sendKeys("arameshsahar@yahoo.com"); 
  await driver.findElement(By.id("login-password")).sendKeys("arameshsahar@yahoo.com"); 
  await driver.findElement(By.xpath("//button[@type='submit']")).click();
}
    loginPage();


  