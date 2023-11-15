it("Precondición: LogIn", () => 
{

    cy.LoginAbbaco("cy_smoke@mercapsoftware.com","testing1")

})

it('Curvas', () => 
{

// Ingresa a una curva en específico y espera que cargue su info

    cy.contains('CURVAS').should('exist').and('be.visible').click()
    cy.contains('Argentina - ONs - USD - Ley Argentina').should('exist').and('be.visible').click({force: true})
    cy.get('rect[class="highcharts-background"]').should('exist').and('be.visible')
    cy.get('g[class="highcharts-legend-item highcharts-scatter-series highcharts-color-4 highcharts-series-14"]').should('exist').and('be.visible')
    cy.get('button[class="p-0 btn btn-link"]').eq(18).scrollIntoView().should('exist').and('be.visible').click({force: true})
    cy.get('li[class="d-flex justify-content-between align-items-start border-0 border-bottom list-group-item"]').should('exist').and('be.visible')

})

it("Lighthouse Curvas", () => 
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