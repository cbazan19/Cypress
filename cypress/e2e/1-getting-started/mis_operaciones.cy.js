/// <reference types="cypress" />



describe('Prueba del Menú Mis Operaciones con validación de sus funcionalidades básicas', () => {
    beforeEach(() => {
  
      cy.visit('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/trading')
  
    })
  
  
  
    it('Ingreso a Mis Operaciones', () => {
    
  
      cy.get('#username').type('f.balderian@mercapsoftware.com')
      cy.get('#password').type('Mercap2022')
      cy.contains('Continue').click({force: true})
      cy.wait(500)
      cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/trading', () => {
  

        // Validación de los distintos menús mostrados, desde Home hasta Ayuda

        cy.get('#sidenav-list > :nth-child(1)').should('contain.text','Home')
        cy.get('#sidenav-list > :nth-child(2)').should('contain.text','Mis operaciones')
        cy.get('#sidenav-list > :nth-child(3)').should('contain.text','Mi dinero')
        cy.get('#sidenav-list > :nth-child(4)').should('contain.text','Mis portfolios')
        cy.get('#sidenav-list > :nth-child(5)').should('contain.text','Resultado')
        cy.get('#sidenav-list > :nth-child(6)').should('contain.text','Agenda')
        cy.get('#sidenav-list > :nth-child(7)').should('contain.text','Comparativa')
        cy.get('#sidenav-list > :nth-child(8)').should('contain.text','Ayuda')

        // Ingreso al menú Mis Operaciones

        //cy.get('#sidenav-list > :nth-child(2)').click()
        
        // Validación del h3

        cy.get('.mr-auto > h3').should('have.text', 'Mis operaciones')

        // Validación de que existan los botones Movimientos de Títulos, Importar Operaciones y Registrar operación

        cy.url().should('eq','https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/trading')
        cy.location('protocol').should('contains','https')
        cy.get('.p-2 > .row').should('contain.text','Registrar operación').and('contain.text','Importar operaciones')//.and('contain.text','Movimientos de Títulos')

        // Validaciones de los filtros

        cy.get('.trades-filters-backdrop').should('exist')
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle').should('exist').and('be.visible').and('contain.text','Seleccionar moneda de pago')
        cy.get(':nth-child(5) > .dropdown > .dropdown-toggle').should('exist').and('be.visible').and('contain.text','Seleccionar tipo de operatoria')
        cy.get(':nth-child(6) > .dropdown > .dropdown-toggle').should('exist').and('be.visible').and('contain.text','Seleccionar tipo de instrumento')
        cy.get('form > :nth-child(1) > :nth-child(3)').should('exist').and('contain.text','Filtrar')

        // Validaciones del cuadro Operaciones

        cy.get('form > :nth-child(1) > :nth-child(3)').should('exist').and('contain.text','Filtrar')
        cy.get('.dt-buttons > .btn-group > .btn').should('exist')                                   
        cy.get('.buttons-excel').should('exist')
        cy.get('.buttons-copy').should('exist')
        cy.get('.buttons-print').should('exist')
        cy.get('[aria-label="Depositario: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Depositario')
        cy.get('[aria-label="Tipo de Operación: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Tipo de Operación')
        cy.get('[aria-label="Tipo de Activo: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Tipo de Activo')
        cy.get('[aria-label="Fecha Concertación: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Fecha Concertación')
        cy.get('.sorting_desc').should('exist').and('be.visible').and('contain.text','Fecha Liquidación')
        cy.get('[aria-label="Cantidad/Capital: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Cantidad/Capital')
        cy.get('[aria-label="Activo: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Activo')
        cy.get('[aria-label="Precio/TNA: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Precio/TNA')
        cy.get('[aria-label="Monto: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Monto')
        cy.get('[aria-label="Moneda: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Moneda')
        //cy.get('[aria-label="Identificador: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Identificador')

        // Agregar Depositario
        /*
        cy.wait(1000)
        cy.get('svg[class="svg-inline--fa fa-circle-plus fa-lg"]').click()
        cy.get('.modal-title').should('exist').and('be.visible').and('have.text','Agregar cuenta de depositario')
        cy.get('.modal-body').should('exist').and('be.visible').and('contain.text','Seleccionar depositario')
        cy.get('div[class="filter-option-inner-inner"]').eq(3).click()
        cy.get('.bs-searchbox > .form-control').type('Santander')
        cy.get('.text').click()
        cy.wait(1000)
        cy.get('button[class="btn btn-primary"]').click()
        cy.get('.alert').should('contain.text','×Cuenta de depositario: El nombre de referencia no puede ser vacio')
        cy.get('input[placeholder="Ingrese un nombre de referencia"]').click().type('Santander{enter}')
        cy.get('button[class="btn btn-primary"]').click()
        cy.get('div[class="d-flex depositary-user-tenant-filters"]').should('contain.text','Santander')
        */
        // Eliminar Depositario
        /*
        cy.get('svg[class="svg-inline--fa fa-circle-xmark"]').eq(2).click()
        cy.get('button[class="btn btn-primary"]').click()
        cy.get('div[class="d-flex depositary-user-tenant-filters"]').should('not.contain.text','Santander')
        */

        // Registrar Operacion de Bono

        cy.get('.nav > .btn').eq(2).click()
        cy.get('a[class="dropdown-item"]').eq(4).click()
        cy.get('.modal-title').eq(0).should('have.text', 'Operación de Bono')
        
        // Compra de Bonos plazo T+2 mercado ByMA especie AL30 PESOS 100.000 nominales precio 5.000 cada 100

        cy.get('input[name="117"]').eq(0).click({force: true})
        cy.get('div[class="filter-option-inner-inner"]').eq(3).click()
        cy.get('input[placeholder="Buscar... "]').eq(0).click().type('ICBC (CFI)')
        cy.get('.text').click() // cambiar este selector porque tiene id dinámico // cy.get('[data-layer="Content"]')
        cy.get('input[class="form-control text-right"]').eq(0).click().type('100000')
        cy.get('input[class="form-control text-right"]').eq(1).click().type('5000')
        cy.get('button[class="btn dropdown-toggle btn-light bs-placeholder"]').click()
        cy.wait(1000)
        cy.get('span[class="text"').eq(1).click() // cambiar este selector porque tiene id dinámico y si lo hago por texto va a depender lo que tenga cargado previamente
        cy.wait(1000)
        cy.get('input[class="form-control text-right"]').should('contain.value','100')
        cy.get('input[placeholder="Ingresar especie"]').click().type('AL30') 
        cy.wait(1500)
        cy.get('.typeahead > :nth-child(2) > .dropdown-item').click()
        cy.wait(1500)
        cy.get('.col-md-8').eq(10).should('contain.text','5.000.000,00').and('contain.text','ARS')
        cy.get('button[class="btn btn-primary"]').eq(0).click()

        // Asignación a Portfolio con Validación de Saldo Negativo

        cy.get('.modal-title').eq(1).should('have.text', 'Registro de operación')
        cy.get('.card-title').should('exist').and('be.visible').and('have.text', 'Agregar nueva asignación')
        cy.get('label[class="col-md-5 col-form-label text-right form-control-sm"]').should('contain.text','Nominales').and('contain.text','Asignados').and('contain.text','Sin asignar')  
        cy.get(':nth-child(3) > .dropdown > .btn').should('exist').and('be.visible').and('have.text', 'Seleccione portfolio a asignar ')
        cy.get('input[class="form-control text-right"]').eq(3).click().type('100000')
        cy.get(':nth-child(3) > .dropdown > .btn').click()
        cy.get('.text').eq(5).click() // cambiar este selector porque tiene id dinámico y si lo hago por texto va a depender lo que tenga cargado previamente
        cy.get('button[class="btn btn-primary"]').eq(1).click()
        cy.get('.card-title').should('exist').and('be.visible').and('have.text', 'Cartera CFI')
        cy.get('button[class="btn btn-primary"]').eq(1).click()
        /*cy.get('.alert').should('exist').and('be.visible').and('contain.text','Falló la ejecución')*/
        
        
        
        


        
        
        
        
        
        
        

        


        


        



        
       

  
        
      })
      
      
  
  
      
    
  
     
    })
  
  
  
  
  
  })
  
  