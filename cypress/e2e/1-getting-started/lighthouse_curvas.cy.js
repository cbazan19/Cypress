it("Precondición: LogIn", () => 
{

    cy.LoginAbbaco("cy_smoke@mercapsoftware.com","testing1")

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