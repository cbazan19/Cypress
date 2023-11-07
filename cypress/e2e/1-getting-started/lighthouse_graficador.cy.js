it("Precondición: LogIn", () => 
{

    cy.LoginAbbaco("cy_smoke@mercapsoftware.com","testing1")

})

it('Graficador', () => 
{

// Ingresa al menú graficador y selecciona todas las curvas curvas
    
    cy.contains('GRAFICADOR').should('exist').and('be.visible').click()
    cy.contains('Seleccionar Curvas').should('exist').and('be.visible').click({force: true})
    cy.get(':nth-child(1) > .text-wrap > span').should('exist').and('be.visible')
    cy.contains('Todos').should('exist').and('be.visible').click({force: true})
    cy.contains('Graficar').should('exist').and('be.visible').click({force: true})
    cy.get('g[class="highcharts-legend highcharts-no-tooltip"]').should('exist').and('be.visible')
})

it("Lighthouse Graficador", () => 
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