package tests;

import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class SingTest {
    //input yours driver repository location in this variable
    String repository = "C:/Users/Diogo/drivers/chromedriver.exe" ;

    @Test
    public void testFazerCadastroAluno(){
        System.setProperty("webdriver.chrome.driver", repository);
        WebDriver navegador = new ChromeDriver();
        navegador.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);   //configure this timer in relation to your connection,
                                                                                // give the page enough time to load
        navegador.get("https://sistema-estagio.vercel.app");
        String botãoCadastrar = "/html/body/div/div/div/nav/div[2]/div[3]/a";
        navegador.findElement(By.xpath(botãoCadastrar)).click();
        String botãoEstagiario = "/html/body/div/div/div/div/div[3]/a/div";
        navegador.findElement(By.xpath(botãoEstagiario)).click();

        navegador.findElement(By.name("nome")).sendKeys("Testador");
        navegador.findElement(By.name("email")).sendKeys("Testador@me.com");
        navegador.findElement(By.name("cpf")).sendKeys("12345678910");
        navegador.findElement(By.name("endereco")).sendKeys("Testes do java");
        navegador.findElement(By.name("usuario")).sendKeys("Teste");
        navegador.findElement(By.name("senha")).sendKeys("Testador123");

        navegador.findElement(By.name("submit")).submit();

        boolean achou = navegador.findElement(By.id("exampleInputEmail1")).isDisplayed();
        Assert.assertEquals( true, achou); //if registration work the site will be redirect to login page

        navegador.close();
    }
    
}
