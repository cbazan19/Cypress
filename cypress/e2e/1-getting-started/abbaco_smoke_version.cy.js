/// <reference types="cypress" />



describe('Smoke Testing Abbaco Version', () => 
{
    it("Precondición: LogIn", () => 
    {

        cy.LoginAbbaco("cy_smoke@mercapsoftware.com","testing1")

    })


    it('Validación del home, armado escenarios en Análisis de Sensibilidad y uso de Simular Inversión', () => 
    {
    // Se realiza validaciones de carga de los elementos del home, luego ingresa el AL30 y hace click en Analizar, y en cada pestaña valida la carga de datos

        cy.get('.card-body').should('exist').and('be.visible')
        cy.get('input[class="input-sm border-0 p-0 shadow-none form-control"]').should('exist').and('be.visible').click().type('AL30')
        cy.get('div[class="w-100 top-100 start-0 border-0 p-0  list-group dropdown-menu show"]').should('exist').and('be.visible').eq(0).click()
        cy.contains('Analizar').click({force: true})
        cy.get('ul[class="mb-3 nav nav-underline').should('exist').and('be.visible').and('contain.text', 'General').and('contain.text', 'Condiciones de Emisión').and('contain.text', 'Análisis de Sensibilidad').and('contain.text', 'TIR Históricas').and('contain.text', 'Paridades Históricas').and('contain.text', 'Simular Inversión')
        cy.get('.card-body').should('exist').and('be.visible').and('contain.text', 'TIR').and('contain.text', 'TIR').and('contain.text', 'M. Duration').and('contain.text', 'Última Cotización').and('contain.text', 'Paridad').and('contain.text', 'Cotizaciones Históricas Clean').and('contain.text', 'Métricas secundarias').and('contain.text', 'Cashflow')
        cy.contains('Condiciones de Emisión').click({force: true})
        cy.get('.card-body').should('exist').and('be.visible').and('contain.text', 'Información básica').and('contain.text', 'Pagos').and('contain.text', 'Cupones')
        cy.contains('Análisis de Sensibilidad').click({force: true})
        cy.get('div[class="d-flex align-items-center col-xxl-9 col-sm-12"]').should('exist').and('be.visible')
        cy.get('#numberOfScenarios').should('exist').and('be.visible').click().type('4')
        cy.get('#spreadVariation').should('exist').and('be.visible').click().type('4')
        cy.get('.col-xxl-1 > .mb-3').should('exist').and('be.visible').and('have.text', 'Calcular').click()
        cy.get('.col-xxl-5').should('exist').and('be.visible')
        cy.get('.mb-3.col-xxl-7').should('exist').and('be.visible')
        cy.contains('TIR Históricas').click({force: true})
        cy.get('rect[class="highcharts-background"]').should('exist').and('be.visible')
        cy.contains('Paridades Históricas').click({force: true})
        cy.get('rect[class="highcharts-background"]').should('exist').and('be.visible')
        cy.contains('Simular Inversión').click({force: true})
        cy.get('div[class="gy-4 row"]').should('exist').and('be.visible')
        cy.get('button[class="float-end btn btn-primary"]').eq(0).should('exist').and('be.visible').and('have.text', 'Simular')
        cy.get('#investmentAmount').should('exist').and('be.visible').click({force: true}).type('100000')
        cy.get('#value').should('exist').and('be.visible').click({force: true}).clear().type('5000')
        cy.get(':nth-child(5) > #exchangeRate').should('exist').and('be.visible').click({force: true}).type('2000')
        cy.get('button[class="float-end btn btn-primary"]').eq(0).should('exist').and('be.visible').and('have.text', 'Simular').click({force: true})
        cy.get('.col-xl-4 > .card > .card-body > .table-responsive > .my-3 > tbody > :nth-child(1) > :nth-child(1) > .small').should('exist').and('be.visible')
        cy.get('.col-xl-4').should('exist').and('be.visible')
        cy.get('.col-xl-5').should('exist').and('be.visible')

    })

    
    it('Mi Portafolio', () => 
    {

    // Verifica especie en el portfolio, recorre las pestañas y en cada una valida la carga de datos

        cy.contains('MI PORTAFOLIO').should('exist').and('be.visible').click()
        cy.get('.table-responsive').should('exist').and('be.visible').and('contain.text', 'Bono').and('contain.text', 'Nombre').and('contain.text', 'Moneda').and('contain.text', 'Nominales').and('contain.text', 'Precio').and('contain.text', 'Valorizado')

    // Agregar especie    

        cy.get('#bond').should('exist').and('be.visible').click({force: true}).type('AL30')
        cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]').should('exist').and('be.visible').click({force: true})
        cy.get('#nominals').should('exist').and('be.visible').click({force: true}).type('10000')
        cy.contains('Agregar').should('exist').and('be.visible').click({force: true})

    // Fin agregar especie, reocrre pestañas y valida carga    

        cy.get('button[class="p-0 btn btn-link"]').should('exist').and('be.visible').click({force: true})
        cy.get('li[class="d-flex justify-content-between align-items-start border-0 border-bottom list-group-item"]').should('exist').and('be.visible')
        cy.get('.mb-3 > .card > .card-body').should('exist').and('be.visible')
        cy.get('.col-lg-6 > .card > .card-body').should('exist').and('be.visible')
        cy.contains('Proyección').should('exist').and('be.visible').click({force: true})
        cy.get('tbody > :nth-child(3) > :nth-child(1) > div').should('exist').and('be.visible')
        cy.get('.card-body').should('exist').and('be.visible')
        cy.contains('Agenda de Cortes').should('exist').and('be.visible').click({force: true})
        cy.get('span[class="float-end badge rounded-pill bg-primary"]').should('exist').and('be.visible')
        cy.get('.card-body').should('exist').and('be.visible')
        
    // Eliminar la Posición creada previamente  

        cy.contains('Posición').should('exist').and('be.visible').click({force: true})
        cy.get('button[class="badge px-1 py-1 btn btn-danger"]').should('exist').and('be.visible').click({force: true})
        cy.get('td[class="text-center"]').should('exist').and('be.visible').and('have.text', 'Añada especies utilizando el formulario de arriba para comenzar')
   
    })    


    it('Curvas', () => 
    {

    // Hace click en un tipo de curva, recorre sus pestañas y espera que se muestre la información (se saca validación que se pueda ir a Analizar desde la curva seleccionada)

        cy.contains('CURVAS').should('exist').and('be.visible').click()
        cy.contains('Argentina - ONs - USD - Ley Argentina').should('exist').and('be.visible').click({force: true})
        cy.get('rect[class="highcharts-background"]').should('exist').and('be.visible')
        cy.get('g[class="highcharts-legend-item highcharts-scatter-series highcharts-color-4 highcharts-series-14"]').should('exist').and('be.visible')
        cy.get('button[class="p-0 btn btn-link"]').eq(18).scrollIntoView().should('exist').and('be.visible').click({force: true})
        cy.get('li[class="d-flex justify-content-between align-items-start border-0 border-bottom list-group-item"]').should('exist').and('be.visible')
        cy.contains('Análisis online').should('exist').and('be.visible').click({force: true})
        cy.get('button[class="p-0 btn btn-link"]').eq(39).scrollIntoView().should('exist').and('be.visible').click({force: true})
        cy.get('li[class="d-flex justify-content-between align-items-start border-0 border-bottom list-group-item"]').should('exist').and('be.visible')
        cy.contains('Bonos fuera de la curva').should('exist').and('be.visible').click({force: true})
        cy.contains('RAC4O').should('exist').and('be.visible').click({force: true})
        cy.get('li[class="d-flex justify-content-between align-items-start border-0 border-bottom list-group-item"]').should('exist').and('be.visible')
 
    })
    
  
    it('Comparar', () => 
    {

    // Agregar especie y nominales y luego verifica su carga (se comenta la parte que haciendo click en las especies te lleve a su análisis)
    
        cy.contains('COMPARAR').should('exist').and('be.visible').click()
        cy.get('#search').should('exist').and('be.visible').click({force: true}).type('AL30')
        cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]').should('exist').and('be.visible').eq(0).click({force: true})
        cy.contains('Añadir').should('exist').and('be.visible').click({force: true})
        cy.get('.table-responsive').should('exist').and('be.visible')
        /*cy.get('a[href="/bond-analysis/AL30"]').should('exist').and('be.visible').click({force: true})
        cy.get('ul[class="mb-3 nav nav-underline').should('exist').and('be.visible').and('contain.text', 'General').and('contain.text', 'Condiciones de Emisión').and('contain.text', 'Análisis de Sensibilidad').and('contain.text', 'TIR Históricas').and('contain.text', 'Paridades Históricas').and('contain.text', 'Simular Inversión')
        cy.get('.card-body').should('exist').and('be.visible').and('contain.text', 'TIR').and('contain.text', 'TIR').and('contain.text', 'M. Duration').and('contain.text', 'Última Cotización').and('contain.text', 'Paridad').and('contain.text', 'Cotizaciones Históricas Clean').and('contain.text', 'Métricas secundarias').and('contain.text', 'Cashflow')
        cy.contains('COMPARAR').should('exist').and('be.visible').click()*/
        cy.get('button[class="p-0 btn btn-link"]').should('exist').and('be.visible').click()
        cy.get('.list-group > :nth-child(1) > a').should('exist').and('be.visible')/*.click({force: true})
        cy.get('ul[class="mb-3 nav nav-underline').should('exist').and('be.visible').and('contain.text', 'General').and('contain.text', 'Condiciones de Emisión').and('contain.text', 'Análisis de Sensibilidad').and('contain.text', 'TIR Históricas').and('contain.text', 'Paridades Históricas').and('contain.text', 'Simular Inversión')
        cy.get('.card-body').should('exist').and('be.visible').and('contain.text', 'TIR').and('contain.text', 'TIR').and('contain.text', 'M. Duration').and('contain.text', 'Última Cotización').and('contain.text', 'Paridad').and('contain.text', 'Cotizaciones Históricas Clean').and('contain.text', 'Métricas secundarias').and('contain.text', 'Cashflow')
        cy.contains('COMPARAR').should('exist').and('be.visible').click()*/
        cy.contains('Condiciones de Emisión').should('exist').and('be.visible').click({force: true})
        cy.get('.table-responsive').should('exist').and('be.visible')
        cy.get('button[class="p-0 btn btn-link"]').eq(1).should('exist').and('be.visible').click()
        cy.get('.list-group > :nth-child(1) > a').should('exist').and('be.visible')
        cy.contains('TIR Históricas').should('exist').and('be.visible').click({force: true})
        cy.get('rect[class="highcharts-background').should('exist').and('be.visible')
        cy.contains('Paridades Históricas').should('exist').and('be.visible').click({force: true})
        cy.get('rect[class="highcharts-background').should('exist').and('be.visible')
            
    // Ir a la pestaña Análisis y borrar la comparativa

        cy.contains('Análisis').should('exist').and('be.visible').click({force: true})  
        cy.get('button[class="badge px-1 py-1 btn btn-danger"]').eq(0).should('exist').and('be.visible').click({force: true})
        cy.get('td[class="text-center"]').should('exist').and('be.visible').and('have.text', 'Agregue especies utilizando el formulario para comenzar')
        

    })    


    it('Arbitraje', () => 
    {

    // Añade dos especies para arbitrar, luego recorre las pestañas y verifica que se carguen los datos de cada una
    
        cy.contains('ARBITRAJE').should('exist').and('be.visible').click()
        cy.get('#first-security > .d-flex > .input-sm').should('exist').and('be.visible').click({force: true}).type('GD30')
        cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]').should('exist').and('be.visible').eq(2).click({force: true})
        cy.get('#second-security > .d-flex > .input-sm').should('exist').and('be.visible').click({force: true}).type('AL30')
        cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]').should('exist').and('be.visible').eq(2).click({force: true})
        cy.contains('Arbitrar').should('exist').and('be.visible').click({force: true})
        cy.get('.card-body').should('exist').and('be.visible')
        cy.get('.highcharts-menu-wrapper').should('exist').and('be.visible')
        cy.contains('Paridad').should('exist').and('be.visible').click({force: true})
        cy.get('.card-body').should('exist').and('be.visible')
        cy.get('.highcharts-menu-wrapper').should('exist').and('be.visible')
        cy.contains('Inversión').should('exist').and('be.visible').click({force: true})
        cy.get('.table-responsive').should('exist').and('be.visible')
        cy.contains('Scatter').should('exist').and('be.visible').click({force: true})
        cy.get('.card-body').should('exist').and('be.visible')
        cy.get('rect[class="highcharts-background"]').should('exist').and('be.visible')
        
        
    })       


    it('Sensibilidad', () => 
    {

    // Agregar especie y escenario
        
        cy.contains('SENSIBILIDAD').should('exist').and('be.visible').click()
        cy.get('#search-security-for-sensitivity').should('exist').and('be.visible').click({force: true}).type('AL30')
        cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]').should('exist').and('be.visible').eq(2).click({force: true})
        cy.contains('Agregar Escenario').should('exist').and('be.visible').click({force: true})
        cy.get('#scenario-first').should('exist').and('be.visible').click({force: true}).type('5')
        cy.contains('Aceptar').should('exist').and('be.visible').click({force: true})
        cy.get('.m-2').should('exist').and('be.visible')
        cy.get('button[class="float-end float-lg-start btn btn-primary"]').should('exist').and('be.visible').click({force: true})
        cy.get('.text-success').should('exist').and('be.visible') 
    
    // Eliminar Escenario

        cy.get(':nth-child(2) > .badge').should('exist').and('be.visible').click({force: true})
        cy.get('.m-2').should('not.exist')
        
    // Eliminar Especie

        cy.get(':nth-child(1) > .badge').should('exist').and('be.visible').click({force: true})    
        cy.get('td[class="text-center"]').should('exist').and('be.visible').and('have.text', 'Agregue una especie para comenzar')  
        

    })       
    

    it('Screener', () => 
    {

    // Realiza filtro, busqueda y espera que aparezca el resultado
        
        cy.contains('SCREENER').should('exist').and('be.visible').click()
        cy.get('[for="Obligación Negociable"]').should('exist').and('be.visible').click()
        cy.contains('Seleccionar Moneda de Emisión').should('exist').and('be.visible').click({force: true})
        cy.contains('USD').should('exist').and('be.visible').click({force: true})
        cy.contains('Seleccionar Ley').should('exist').and('be.visible').click({force: true})
        cy.contains('Ley Argentina').should('exist').and('be.visible').click({force: true})
        cy.contains('Seleccionar Emisor').should('exist').and('be.visible').click({force: true})
        cy.get('#form-control-Emisor').should('exist').and('be.visible').click({force: true}).type('YPF S.A.')
        cy.contains('YPF S.A.').should('exist').and('be.visible').click({force: true})
        cy.contains('Buscar').should('exist').and('be.visible').click({force: true})
        cy.get('.card-body').should('exist').and('be.visible')
        cy.contains('YMC1O').should('exist').and('be.visible')
        

    })     


    it('Graficador', () => 
    {

    // Selecciona todas las curvas, las grafica y espera que se muestren
        
        cy.contains('GRAFICADOR').should('exist').and('be.visible').click()
        cy.contains('Seleccionar Curvas').should('exist').and('be.visible').click({force: true})
        cy.get(':nth-child(1) > .text-wrap > span').should('exist').and('be.visible')
        cy.contains('Todos').should('exist').and('be.visible').click({force: true})
        cy.contains('Graficar').should('exist').and('be.visible').click({force: true})
        cy.get(':nth-child(20) > .highcharts-a11y-proxy-button').should('exist').and('be.visible')
        cy.get('g[class="highcharts-legend highcharts-no-tooltip"]').should('exist').and('be.visible')
        

    // Va a la pestaña Especies ingresa, selecciona, la grafica y espera que se muestre 

        cy.contains('Especies').should('exist').and('be.visible').click({force: true})
        cy.get('#security-ticker').should('exist').and('be.visible').type('AL30')
        cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]').should('exist').and('be.visible').eq(1).click({force: true})
        cy.get('.mb-3 > .float-end').should('exist').and('be.visible').click({force: true})
        cy.get('.highcharts-menu-wrapper').should('exist').and('be.visible')

    
    })         

  
    
})
  
  