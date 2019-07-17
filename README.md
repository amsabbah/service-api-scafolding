# Service API Scafolding

## folder structure

- app
    - controllers: hold on all service controllers (controller is a delegator to a service class that hold our logic)
    - interfaces: hold on any interface that we use to define the types
    - lib: hold on any third party lib
    - models: hold on all our DB models
    - routes: hold on the service routes
    - services: hold on the main classes that hold our logic
- bootstrab: files for init the application
- config: application congiguration (app, database, queues, ... etc)
- database
    - migrations: hold on all database migration files
    - seeds: hold on seeds files
- dist: all build files
- tests: all tests files

