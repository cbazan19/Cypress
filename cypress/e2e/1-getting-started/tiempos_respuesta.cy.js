let startTimeLogIn;
let startTimeHome;


describe('Medir tiempos de respuesta', () => {

  it('Precondición: Log In', () => {
    
    cy.LoginAbbaco("cy_smoke@mercapsoftware.com","testing1")
    startTimeLogIn = new Date().getTime();

  })

  it('Tiempo de demora en ver la información del home y de analizar una especie', () => {

    // Empieza medición de tiempo
    
    startTimeHome = new Date().getTime();

    // Ejecuta las acciones y/o espera que se muestre la información que se quiere medir

    cy.get('.card-body').should('exist').and('be.visible')
    cy.get('input[class="input-sm border-0 p-0 shadow-none form-control"]').should('exist').and('be.visible').click().type('AL30')
    cy.get('div[class="w-100 top-100 start-0 border-0 p-0  list-group dropdown-menu show"]').should('exist').and('be.visible').eq(0).click()
    cy.contains('Analizar').click({force: true})
    cy.get('ul[class="mb-3 nav nav-underline').should('exist').and('be.visible').and('contain.text', 'General').and('contain.text', 'Condiciones de Emisión').and('contain.text', 'Análisis de Sensibilidad').and('contain.text', 'TIR Históricas').and('contain.text', 'Paridades Históricas').and('contain.text', 'Simular Inversión')
    cy.get('.card-body').should('exist').and('be.visible').and('contain.text', 'TIR').and('contain.text', 'TIR').and('contain.text', 'M. Duration').and('contain.text', 'Última Cotización').and('contain.text', 'Paridad').and('contain.text', 'Cotizaciones Históricas Clean').and('contain.text', 'Métricas secundarias').and('contain.text', 'Cashflow')
    

  })

  after(() => {

    // Calcula el tiempo al final de la prueba cada vez que termina un caso de prueba

    const endTime = new Date().getTime();
    const durationInSecondsLogIn = (endTime - startTimeLogIn) / 10000;
    const durationInSecondsHome = (endTime - startTimeHome) / 1000;

    // Muestra el tiempo en la consola de Cypress

    cy.log(`El tiempo de respuesta fue de ${durationInSecondsLogIn} segundos en el LogIn`);
    cy.log(`El tiempo de respuesta fue de ${durationInSecondsHome} segundos en el Home`);

    // Guarda el tiempo obtenido en un archivo CSV

    Cypress.Promise.resolve(cy.writeFile('cypress/results/tiempos_de_respuesta.csv', `\nTiempo de respuesta del LogIn: ${durationInSecondsLogIn} segundos.\nTiempo de respuesta en Home: ${durationInSecondsHome} segundos`, { flag: 'a+' }))
    .then(() => {
      // La operación de escritura ha sido completada
    })
    .catch(error => {
      // Manejar cualquier error durante la escritura
      console.error('Error al escribir en el archivo:', error);
    });
  });

  })