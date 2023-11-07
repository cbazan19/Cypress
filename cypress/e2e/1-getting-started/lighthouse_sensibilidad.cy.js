it("Precondición: LogIn", () => 
{

    cy.LoginAbbaco("cy_smoke@mercapsoftware.com","testing1")

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
        "best-practices": 75,
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