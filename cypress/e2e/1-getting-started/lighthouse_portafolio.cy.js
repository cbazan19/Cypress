it("Precondición: LogIn", () => 
{

    cy.LoginAbbaco("cy_smoke@mercapsoftware.com","testing1")

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