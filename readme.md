# 2o_Termo1

Descrição
--------

Repositório com os exercícios e desafios de Back-end em JavaScript (Node.js) usados nas aulas do Prof. Celso Ricardo Carvalho. Contém implementações simples para praticar entradas/saídas via terminal, laços, arrays, condicionais e pequenos desafios algorítmicos.

Tecnologias
-----------

- Node.js
- Biblioteca: `readline-sync` (listada em `package.json`)

Estrutura de pastas
-------------------

- `BACKEND/`
	- `Aula_1/` — exercícios introdutórios (variáveis, tipos, entrada, condição, operações)
	- `Aula_2/` — exercícios de aplicação (ex.: vendas, IMC)
	- `Lacos/` — exercícios que exploram laços e arrays
	- `Desafios/` — pequenos desafios propostos
- `BCD/`, `LIMA/`, `PROJETOS/` — pastas de apoio/backup (contêm `teste.txt`)

Resumo dos exercícios
---------------------

Aula 1 (`BACKEND/Aula_1`)
- `app1.js`: "Hello World" básico.
- `app2.js`: demonstração de variáveis e impressão.
- `app3.js`: tipos de dados e `typeof`.
- `app4.js`: sistema simples de venda (entrada de produto, preço e quantidade).
- `app5.js`: sistema de análise de crédito (idade, renda, imóvel).
- `app6.js`: cálculo de média e decisão de aprovação/recuperação.
- `multi.js`: demonstra operador `%` (resto da divisão).

Aula 2 (`BACKEND/Aula_2`)
- `produtos.js`: sistema de venda/recibo que calcula total (usa `readline-sync`).
- `imc.js`: arquivo inicial (exemplo mínimo de variável).

Lacos (`BACKEND/Lacos`)
- `ex1.js`: exemplo de laço `while` (contagem).
- `ex2.js`: tabuada com `for`.
- `ex3.js`: menu interativo (venda / horário / sair).
- `exs5.js`: esboço de soma de preços (possui erros sintáticos a corrigir).
- `aray.js` / `aray2.js`: exemplos com arrays e leitura de dados (alguns arquivos contêm pequenos erros de digitação a serem corrigidos).
- `teste.js`: laço de demonstração com contador.

Desafios (`BACKEND/Desafios`)
- `desafio1.js`: compara preços de álcool x gasolina usando a regra dos 70%.
- `desafio4.js`: classifica atletas por categoria de natação conforme idade.

Como executar os arquivos (Node.js)
---------------------------------

1. Instalar dependências (se ainda não instaladas):

```bash
npm install
```

2. Executar um arquivo com Node.js (exemplo):

```bash
node BACKEND/Aula_1/app4.js
```

Observações:
- Alguns arquivos usam `readline-sync` para entrada no terminal; certifique-se de instalar dependências com `npm install`.
- Alguns arquivos são esboços e contêm erros de digitação (`requiere`, `Media`, strings de template mal formadas). Antes de executar, você pode revisar os arquivos e corrigir erros de sintaxe.

Instruções de Git
-----------------

Comandos básicos para versionar este projeto:

```bash
git init                    # inicializa repositório (se necessário)
git add .                   # adiciona todos os arquivos
git commit -m "Initial"    # cria commit inicial
git remote add origin <url> # adicionar remoto (opcional)
git push -u origin main     # enviar para remoto (substitua branch conforme necessário)
```

Autor
-----

Prof. Celso Ricardo Carvalho

Notas finais
-----------

Se desejar, posso:
- Corrigir automaticamente pequenos erros de digitação/sintaxe nos arquivos encontrados.
- Criar um `README.md` com exemplos de execução para cada exercício individual.

