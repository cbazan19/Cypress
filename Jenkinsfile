pipeline{
    agent any

    parameters{
        string(name:"SPEC", defaultValue: "cypress/e2e/1-getting-started/**", description: "Ejemplo: cypress/e2e/1-getting-started/abbaco_smoke_prod.cy.js")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Elegir browser para ejecutar el test")
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
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }

    }


}


