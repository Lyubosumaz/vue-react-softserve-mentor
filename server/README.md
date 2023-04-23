# node

## Project setup create db container
```
docker run --name postgresVue -p 5532:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -e POSTGRES_DB=vue_database -d postgres:latest 
```
