# MoradaAPI
 Morada Imoveis API Test

# Intruções
 1.Using Docker and Prisma, you can run the application with the following commands:
    1.1. `yarn` or `npm install` to install dependencies;
    1.1. `docker compose up -d` to initiate docker compose;
    1.1. `yarn prisma migrate dev` to initiate prisma migration;
    1.4. `docker logs morada_api -f` to check the api logs.

 2. ENDPOINTS EXAMPLES:
    
    Find Imovel By Conclusion Date:
    `GET *_.baseURL*/imoveis/search?name=residencial%20bella%20vista&datefim=true`

    Find Imovel By City:
    `GET *_.baseURL*/imoveis/search?city=contagem`


    Import Excel Imoveis:
    `POST *_.baseURL*/import` 
        with the Req being:
        
        ```
        Multipart-Form:
        imoveis  -  File

        ```



    
