# Projeto Loteca
Este é um projeto de simulador de loteria, onde o usuário digita seis números e realiza um sorteio de outros seis números, 
e no final é verificado quantos números ele acertou.

## Tecnologias utilizadas
- **HTML**: Estrutura do site.
- **_CSS_**: Estilização do site.
- **_JS_**: Funções do site.
- **~~BootStrap~~**: Não foi utilizado.

### Melhorias possíveis
1. [X] Subir para o GitHubPages
2. [ ] Alterar os Alerts
3. [ ] Utilizar o BootStrap
3. [ ] Deixar responsivo

### Disponibilizados em
[GitHubPage](https://isamatosmorais.github.io/loteca_simulator_ia/)

### Prints da tela

 | ID | Primeira tela | Segunda tela |
 |----|---------------|------------------|
 | 1 | Loteca Limpa | Loteca Preenchida |
 | 2 | ![Tela loteca não preenchida](https://user-images.githubusercontent.com/100212386/161782008-7df52211-ecfe-4c76-9b43-ba47bf5ba5d5.png) | ![image](https://user-images.githubusercontent.com/100212386/161782231-5931e0f8-db96-4155-b1f8-cd90d7d12d1e.png) | 
 
#### Função principal
```
function sorteio(){
    var cont = 0
    numSort = []
    while(cont < 6){
        let num = Math.random() * 60
        num = Math.ceil(num)

        if(!numSort.includes(num)){
            numSort[cont] = num
            console.log(numSort)
            cont++
        }
    }
```

#### Comando git
Para iniciar o projeto

```
git init
```
