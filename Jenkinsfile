pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        stage('Publish Coverage') {
            when{
                branch 'master'
            }

            steps {
                publishHTML target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'cover',
                    reportFiles: 'excoveralls.html',
                    reportName: 'Coverage Report'
                ]
            }
        }
    }
}
