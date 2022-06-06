package tests;

import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class testCoordenador {
    //input yours driver repository location in this variable
    String repository = "C:/Users/Diogo/drivers/chromedriver.exe" ;

    @Test
    public void testFazerCadastroCoordenador(){
        System.setProperty("webdriver.chrome.driver", repository);
        WebDriver navegador = new ChromeDriver();
        navegador.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);   //configure this timer in relation to your connection,
        // give the page enough time to load
        navegador.get("https://sistema-estagio.vercel.app");
        String botaoCadastrar = "/html/body/div/div/div/nav/div[2]/div[3]/a";
        navegador.findElement(By.xpath(botaoCadastrar)).click();
        String botaoCoordenador = "/html/body/div/div/div/div/div[1]/a/div";
        navegador.findElement(By.xpath(botaoCoordenador)).click();

        navegador.findElement(By.name("nome")).sendKeys("Testador");
        navegador.findElement(By.name("email")).sendKeys("Testador@me.com");
        navegador.findElement(By.name("cpf")).sendKeys("12345678910");
        navegador.findElement(By.name("token")).sendKeys("11");
        navegador.findElement(By.name("usuario")).sendKeys("TesteCoordenador");
        navegador.findElement(By.name("senha")).sendKeys("TesteCoo123");

        navegador.findElement(By.name("submit")).submit();

        boolean achou = navegador.findElement(By.id("exampleInputEmail1")).isDisplayed();
        Assert.assertEquals( true, achou); //if registration work the site will be redirect to login page
        navegador.close();
    }

    @Test
    public void testFazerLoginCoordenador() {
        System.setProperty("webdriver.chrome.driver", repository);
        WebDriver navegador = new ChromeDriver();
        navegador.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);   //configure this timer in relation to your connection,
        // give the page enough time to load
        navegador.get("https://sistema-estagio.vercel.app/login");
        //navegador.get("http://localhost:3000/login");

        navegador.findElement(By.id("exampleInputEmail1")).sendKeys("TesteCoordenador");
        navegador.findElement(By.id("exampleInputPassword1")).sendKeys("TesteCoo123");
        WebElement selectElement = navegador.findElement(By.id("tipo"));
        Select selectObject = new Select(selectElement);
        selectObject.selectByValue("coordenador");
        navegador.findElement(By.id("botao")).click();
        try {
            Thread.sleep(20*1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        navegador.findElement(By.id("botao")).click();
        navegador.findElement(By.id("logar")).click();

        boolean achou = navegador.findElement(By.className("alunos-coordenador")).isDisplayed();
        boolean achou2 = navegador.findElement(By.className("empresas-coordenador")).isDisplayed();
        Assert.assertEquals(true, achou); //if login work the site will be redirect to user coordenador page and we will see the 'Mural de aluno e empresas' div
        Assert.assertEquals(true, achou2);
        navegador.close();
    }
}
