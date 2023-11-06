it("Precondición: LogIn", () => 
{

    cy.LoginAbbaco("cy_smoke@mercapsoftware.com","testing1")

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