const {Builder,By,Key}=require("selenium-webdriver");
let driver=new Builder().forBrowser("firefox").build();

async function signupPage()
{
    
  await driver.get("file:///D:/Learn/Nadin/signUp/signup.html");
  await driver.findElement(By.id("email")).sendKeys("arameshsahar@yahoo.com"); 
  await driver.findElement(By.id("firstname")).sendKeys("Sahar"); 
  await driver.findElement(By.id("lastname")).sendKeys("Jooyeshir"); 
  await driver.actions().sendKeys(Key.chord(Key.TAB,"08")).perform();
  await driver.actions().sendKeys("28").perform();
  await driver.actions().sendKeys("2000").perform();
  await driver.findElement(By.id("phone")).sendKeys("09361364649"); 
  await driver.findElement(By.id("password")).sendKeys("Ss123456"); 
  await driver.findElement(By.id("password-confirm")).sendKeys("Ss123456"); 
  await driver.findElement(By.xpath("//button[@type='submit']")).click();
}
signupPage();


  