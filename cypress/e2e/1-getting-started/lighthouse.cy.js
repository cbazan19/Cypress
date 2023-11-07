it("Precondición: LogIn", () => 
{

    cy.LoginAbbaco("cy_smoke@mercapsoftware.com","testing1")

})

it("Lighthouse Home", () => 
{

    cy.lighthouse(
    {
        performance: 55,
        accessibility: 88,
        "best-practices": 92,
        seo: 91,

    },
    {
        formFactor: "desktop",
            screenEmulation: {
                mobile: false,
                disable: false,
                width: Cypress.config("viewportWidth"),
                height: Cypress.config("viewportHeight"),
                deviceScaleRatio: 1,
            },    
            throttling: {
                rttMs: 40,
                throughputKbps: 11024,
                cpuSlowdownMultiplier: 0,
                requestLatencyMs: 0,
                downloadThroughputKbps: 0,
                uploadThroughputKbps: 0,
              },      

    },            
    )

    
})

it("Ingreso a Analizar AL30", () => 
{
    cy.get('.card-body').should('exist').and('be.visible')
    cy.get('input[class="input-sm border-0 p-0 shadow-none form-control"]').should('exist').and('be.visible').click().type('AL30')
    cy.get('div[class="w-100 top-100 start-0 border-0 p-0  list-group dropdown-menu show"]').should('exist').and('be.visible').eq(0).click()
    cy.contains('Analizar').click({force: true})
    cy.get('ul[class="mb-3 nav nav-underline').should('exist').and('be.visible').and('contain.text', 'General').and('contain.text', 'Condiciones de Emisión').and('contain.text', 'Análisis de Sensibilidad').and('contain.text', 'TIR Históricas').and('contain.text', 'Paridades Históricas').and('contain.text', 'Simular Inversión')
    cy.get('.card-body').should('exist').and('be.visible').and('contain.text', 'TIR').and('contain.text', 'TIR').and('contain.text', 'M. Duration').and('contain.text', 'Última Cotización').and('contain.text', 'Paridad').and('contain.text', 'Cotizaciones Históricas Clean').and('contain.text', 'Métricas secundarias').and('contain.text', 'Cashflow')

})

it("Lighthouse Analizar", () => 
{

    cy.lighthouse(
    {
        performance: 55,
        accessibility: 86,
        "best-practices": 92,
        seo: 91,

    },
    {
        formFactor: "desktop",
            screenEmulation: {
                mobile: false,
                disable: false,
                width: Cypress.config("viewportWidth"),
                height: Cypress.config("viewportHeight"),
                deviceScaleRatio: 1,
            },    
            throttling: {
                rttMs: 40,
                throughputKbps: 11024,
                cpuSlowdownMultiplier: 0,
                requestLatencyMs: 0,
                downloadThroughputKbps: 0,
                uploadThroughputKbps: 0,
              },      

    },            
    )

    
})

it('Mi Portafolio', () => 
{

// Ingresa al menú MI PORTAFOLIO

    cy.contains('MI PORTAFOLIO').should('exist').and('be.visible').click()
    cy.get('.table-responsive').should('exist').and('be.visible').and('contain.text', 'Bono').and('contain.text', 'Nombre').and('contain.text', 'Moneda').and('contain.text', 'Nominales').and('contain.text', 'Precio').and('contain.text', 'Valorizado')

})

it("Lighthouse Mi Portafolio", () => 
{

    cy.lighthouse(
    {
        performance: 55,
        accessibility: 86,
        "best-practices": 92,
        seo: 91,

    },
    {
        formFactor: "desktop",
            screenEmulation: {
                mobile: false,
                disable: false,
                width: Cypress.config("viewportWidth"),
                height: Cypress.config("viewportHeight"),
                deviceScaleRatio: 1,
            },    
            throttling: {
                rttMs: 40,
                throughputKbps: 11024,
                cpuSlowdownMultiplier: 0,
                requestLatencyMs: 0,
                downloadThroughputKbps: 0,
                uploadThroughputKbps: 0,
              },      

    },            
    )

    
})

it('Curvas', () => 
{

// Ingresa a una curva en específico

    cy.contains('CURVAS').should('exist').and('be.visible').click()
    cy.contains('Argentina - ONs - USD - Ley Argentina').should('exist').and('be.visible').click({force: true})

})

it("Lighthouse Curvas", () => 
{

    cy.lighthouse(
    {
        performance: 55,
        accessibility: 88,
        "best-practices": 92,
        seo: 91,

    },
    {
        formFactor: "desktop",
            screenEmulation: {
                mobile: false,
                disable: false,
                width: Cypress.config("viewportWidth"),
                height: Cypress.config("viewportHeight"),
                deviceScaleRatio: 1,
            },    
            throttling: {
                rttMs: 40,
                throughputKbps: 11024,
                cpuSlowdownMultiplier: 0,
                requestLatencyMs: 0,
                downloadThroughputKbps: 0,
                uploadThroughputKbps: 0,
              },      

    },            
    )

    
})

it('Comparar', () => 
{

// Ingresa al menú Comparar

    cy.contains('COMPARAR').should('exist').and('be.visible').click()

})    

it("Lighthouse Comparar", () => 
{

    cy.lighthouse(
    {
        performance: 55,
        accessibility: 88,
        "best-practices": 92,
        seo: 91,

    },
    {
        formFactor: "desktop",
            screenEmulation: {
                mobile: false,
                disable: false,
                width: Cypress.config("viewportWidth"),
                height: Cypress.config("viewportHeight"),
                deviceScaleRatio: 1,
            },    
            throttling: {
                rttMs: 40,
                throughputKbps: 11024,
                cpuSlowdownMultiplier: 0,
                requestLatencyMs: 0,
                downloadThroughputKbps: 0,
                uploadThroughputKbps: 0,
              },      

    },            
    )

    
})


it('Arbitraje', () => 
{

// Ingresa al menú Arbitraje y añade dos especies para arbitrar

    cy.contains('ARBITRAJE').should('exist').and('be.visible').click()
    cy.get('#first-security > .d-flex > .input-sm').should('exist').and('be.visible').click({force: true}).type('GD30')
    cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]').should('exist').and('be.visible').eq(2).click({force: true})
    cy.get('#second-security > .d-flex > .input-sm').should('exist').and('be.visible').click({force: true}).type('AL30')
    cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]').should('exist').and('be.visible').eq(2).click({force: true})
    cy.contains('Arbitrar').should('exist').and('be.visible').click({force: true})
    cy.get('.card-body').should('exist').and('be.visible')
    cy.get('.highcharts-menu-wrapper').should('exist').and('be.visible')
      
})    

it("Lighthouse Arbitraje", () => 
{

    cy.lighthouse(
    {
        performance: 55,
        accessibility: 86,
        "best-practices": 92,
        seo: 91,

    },
    {
        formFactor: "desktop",
            screenEmulation: {
                mobile: false,
                disable: false,
                width: Cypress.config("viewportWidth"),
                height: Cypress.config("viewportHeight"),
                deviceScaleRatio: 1,
            },    
            throttling: {
                rttMs: 40,
                throughputKbps: 11024,
                cpuSlowdownMultiplier: 0,
                requestLatencyMs: 0,
                downloadThroughputKbps: 0,
                uploadThroughputKbps: 0,
              },      

    },            
    )

    
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
    
})    

it("Lighthouse Sensibilidad", () => 
{

    cy.lighthouse(
    {
        performance: 55,
        accessibility: 88,
        "best-practices": 92,
        seo: 91,

    },
    {
        formFactor: "desktop",
            screenEmulation: {
                mobile: false,
                disable: false,
                width: Cypress.config("viewportWidth"),
                height: Cypress.config("viewportHeight"),
                deviceScaleRatio: 1,
            },    
            throttling: {
                rttMs: 40,
                throughputKbps: 11024,
                cpuSlowdownMultiplier: 0,
                requestLatencyMs: 0,
                downloadThroughputKbps: 0,
                uploadThroughputKbps: 0,
              },      

    },            
    )

    
})


it('Screener', () => 
{

// Ingresa al menú Screener y realiza filtros pero sin búsqueda
    
    cy.contains('SCREENER').should('exist').and('be.visible').click()
    cy.get('[for="Obligación Negociable"]').should('exist').and('be.visible').click()
    cy.contains('Seleccionar Moneda de Emisión').should('exist').and('be.visible').click({force: true})
    cy.contains('USD').should('exist').and('be.visible').click({force: true})
    cy.contains('Seleccionar Ley').should('exist').and('be.visible').click({force: true})
    cy.contains('Ley Argentina').should('exist').and('be.visible').click({force: true})
    cy.contains('Seleccionar Emisor').should('exist').and('be.visible').click({force: true})
    cy.get('#form-control-Emisor').should('exist').and('be.visible').click({force: true}).type('YPF S.A.')
    cy.contains('YPF S.A.').should('exist').and('be.visible').click({force: true})

})

it("Lighthouse Screener", () => 
{

    cy.lighthouse(
    {
        performance: 55,
        accessibility: 74,
        "best-practices": 92,
        seo: 91,

    },
    {
        formFactor: "desktop",
            screenEmulation: {
                mobile: false,
                disable: false,
                width: Cypress.config("viewportWidth"),
                height: Cypress.config("viewportHeight"),
                deviceScaleRatio: 1,
            },    
            throttling: {
                rttMs: 40,
                throughputKbps: 11024,
                cpuSlowdownMultiplier: 0,
                requestLatencyMs: 0,
                downloadThroughputKbps: 0,
                uploadThroughputKbps: 0,
              },      

    },            
    )

    
})     


it('Graficador', () => 
{

// Ingresa al menú graficador y selecciona todas las curvas curvas
    
    cy.contains('GRAFICADOR').should('exist').and('be.visible').click()
    cy.contains('Seleccionar Curvas').should('exist').and('be.visible').click({force: true})
    cy.get(':nth-child(1) > .text-wrap > span').should('exist').and('be.visible')
    cy.contains('Todos').should('exist').and('be.visible').click({force: true})
    cy.contains('Graficar').should('exist').and('be.visible').click({force: true})
    cy.get(':nth-child(20) > .highcharts-a11y-proxy-button').should('exist').and('be.visible')
})

it("Lighthouse Graficador", () => 
{

    cy.lighthouse(
    {
        performance: 55,
        accessibility: 88,
        "best-practices": 92,
        seo: 91,

    },
    {
        formFactor: "desktop",
            screenEmulation: {
                mobile: false,
                disable: false,
                width: Cypress.config("viewportWidth"),
                height: Cypress.config("viewportHeight"),
                deviceScaleRatio: 1,
            },    
            throttling: {
                rttMs: 40,
                throughputKbps: 11024,
                cpuSlowdownMultiplier: 0,
                requestLatencyMs: 0,
                downloadThroughputKbps: 0,
                uploadThroughputKbps: 0,
              },      

    },            
    )
 
})