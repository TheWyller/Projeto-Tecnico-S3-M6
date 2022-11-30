# Projeto-Tecnico-S3-M6

## Etapas em desenvolvimento
  ### Front-end
    - Criar botão de editar contato
    - Poder adicionar mais de um email e telefone
    - Realizar Testes
  ### Back-end
    - Poder adicionar mais de um email e telefone
    - Aumentar cobertura de Testes
  ### Ambos
    - Adicionar em um conteiner(Docker)


## Como Rodar a Aplicação

**Vale pontuar que o NODE deve estar instalado na máquina**

*O gerenciador de arquivos usado foi o yarn mais pode ser usado o npm*

### Início  
  Realizar o clone do repositório. Na pasta raiz executar os seguintes comandos:
  
  Para inicializar o Backend:
  ```shell
    cd Backend
  ```
  ```shell
    yarn
  ```
  criar um arquivo .env com os paramêtros de banco de dados e de usuário do postgres.
  ```shell
    POSTGRES_USER=
    POSTGRES_PASSWORD=
    POSTGRES_DB=
    JWT_SECRET=
    ADM_PASSWORD=
  ```
  Rodar as migrations do TypeORM
  ```shell
    yarn typeorm migration:run -d src/data-source.ts
  ```
  Abrir o servidor
  ```shell
    yarn dev
  ```
  Caso deseje testar apenas o backend com requisições diretas, o usuário ADM padrão é:
  ```shell
    email = root@root.com
    senha = ADM_PASSWORD ou 123456 quando não aplicado no arquivo .env
  ```
  
  Com o servidor do backend funcionado, deve-se abrir um novo terminal na raiz do projeto e executar os seguintes comandos, para inicializar o frontend:
  ```shell
    cd Frontend
  ```
  ```shell
    yarn
  ```
  Para inicializar o Frontend:
  ```shell
    yarn start
  ```

## TESTES
  ### Testes Backend
  
  Para todar os testes deve-se estar na raiz do projeto e aplicar os seguintes comandos:
  
  ```shell
    cd Backend
  ```
  ```shell
    yarn test
  ```
  
  ### Testes Frontend
  
  **EM DESENVOLVIMENTO**
