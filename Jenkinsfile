pipeline{
    agent any
    
    parameters {
        string(name: 'SPEC', description: 'Especificar el archivo de prueba', defaultValue: 'cypress\e2e\1-getting-started\**')
        choice(name: 'BROWSER', description: 'Selecciona un navegador', choices: ['chrome', 'firefox', 'edge'], defaultValue: 'chrome')
    }

    stages {
        stage('Building') {
            steps {
                // Agrega aquí los pasos de construcción de tu proyecto
                // Por ejemplo:
                echo "Building application"
            }
        }

        stage('Testing') {
            steps {
                script {
                    def cypressCommand = "npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC}"
                    // Ejecuta el comando de Cypress con las variables BROWSER y SPEC
                    sh cypressCommand
                }
            }
        }

        stage('Deploy') {
            steps {
                // Agrega aquí los pasos de implementación/deploy
                // Por ejemplo:
                echo "Deploying the application"
            }
        }
    }
}