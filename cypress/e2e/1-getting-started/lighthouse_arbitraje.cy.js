it("Precondición: LogIn", () => 
{

    cy.LoginAbbaco("cy_smoke@mercapsoftware.com","testing1")

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