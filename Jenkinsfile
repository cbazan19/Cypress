pipeline{
    agent any

    triggers {
        //cron('0 1 * * *') // Ejecutar todos los días a la 1:00 AM (puedes ajustar el horario)
        //cron('0 10 * * 1-5') // Ejecutar de lunes a viernes a las 10:00 AM  
        cron('35 16 * * 1-5') // Ejecutar de lunes a viernes a las 16:35
    }

    parameters{
        string(name:"SPEC", defaultValue: "cypress/e2e/1-getting-started/abbaco_smoke_prod.cy.js", description: "Ejemplo: cypress/e2e/1-getting-started/abbaco_smoke_prod.cy.js")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Elegir browser para ejecutar el test")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Build'){
            steps{
                echo "Building application"
            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }

        }
        stage('Deploy'){
            steps{
                echo "Deploying the application"
            }      
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }

    }


}


