@Library('shared') _

pipeline{
    agent {label 'devsecops-agent'}
    stages{
        stage('Clone code from Github'){
            steps{
                echo "Cloning code from github"
                git url: 'https://github.com/Aman-Vishwakarma1/wanderlust-devsecops.git', branch:'main'
            }
        }
        stage('SonarQube code quality analysis'){
            steps{
                echo "Initializing SonarQube Code Quality Analysis........."
                sonarqubeCheck("wanderlust-sonarqube","wanderlustProj","wanderljustProj")
            }
        }
        stage("OWASP Dependency Check"){
            steps{
                echo "Installing Dependency"
                sh "npm run install-frontend && npm run install-backend"

                script {
                    runDependencyCheck(
                        additionalArguments: '--scan ./',
                        odcInstallation: 'wanderlust-owasp-dependency-check'
                    )
                }
            }
        }
        stage('trivy security check'){
            steps{
                runtrivy()

            }
        }
        stage('Build'){
            steps{
                echo "Building......"
                sh "docker compose down"
                sh 'docker compose up -d'
                sh 'docker compose ps'   
                sh 'sleep 10'   
            }
        }
        stage('Test'){
            steps{
                echo "Running Test Cases......"
                dir('backend') {
                sh 'npm install'
                sh 'npm test'
        }

            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying code"
            }
        }
    }
}