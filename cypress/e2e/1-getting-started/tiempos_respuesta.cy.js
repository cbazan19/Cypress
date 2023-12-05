let startTime;

describe('Medir tiempos de respuesta', () => {

    beforeEach(() => {
      // Registra el tiempo al inicio de la prueba
      startTime = new Date().getTime();

    });


    it('Tiempo de demora en ver la información del home y de analizar una especie', () => {

      // Medir el tiempo de respuesta al inicio de la prueba
      cy.LoginAbbaco("cy_smoke@mercapsoftware.com","testing1")
  
      // Realizar alguna acción que pueda afectar el tiempo de respuesta
      cy.get('input[class="input-sm border-0 p-0 shadow-none form-control"]').should('exist').and('be.visible').click().type('AL30')
      cy.get('div[class="w-100 top-100 start-0 border-0 p-0  list-group dropdown-menu show"]').should('exist').and('be.visible').eq(0).click()
      cy.contains('Analizar').click({force: true})
  
      // Realizar la acción que quieres medir
      cy.get('ul[class="mb-3 nav nav-underline').should('exist').and('be.visible').and('contain.text', 'General').and('contain.text', 'Condiciones de Emisión').and('contain.text', 'Análisis de Sensibilidad').and('contain.text', 'TIR Históricas').and('contain.text', 'Paridades Históricas').and('contain.text', 'Simular Inversión')
      cy.get('.card-body').should('exist').and('be.visible').and('contain.text', 'TIR').and('contain.text', 'TIR').and('contain.text', 'M. Duration').and('contain.text', 'Última Cotización').and('contain.text', 'Paridad').and('contain.text', 'Cotizaciones Históricas Clean').and('contain.text', 'Métricas secundarias').and('contain.text', 'Cashflow')

    })


    afterEach(() => {
      // Calcula el tiempo al final de la prueba
      const endTime = new Date().getTime();
      const durationInMillis = endTime - startTime;
      const durationInSeconds = durationInMillis / 1000;

    
      // Registra el tiempo en la consola de Cypress
      cy.log(`La prueba tomó ${durationInSeconds} segundos`);
      // Guarda el tiempo en un archivo CSV
      Cypress.Promise.resolve(cy.writeFile('cypress/results/tiempos_de_respuesta.csv', `${durationInSeconds}\n`, { flag: 'a+' }))
      .then(() => {
        // La operación de escritura ha sido completada
      })
      .catch(error => {
        // Manejar cualquier error durante la escritura
        console.error('Error al escribir en el archivo:', error);
      });
    });

  })