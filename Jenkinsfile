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
        stage('trivy security check'){
            steps{
                echo "trivy security check"
            }
        }
        stage('Build'){
            steps{
                echo "Building......"
                sh "docker compose up"
            }
        }
        stage('Test'){
            steps{
                echo "Running Test Cases......"
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying code"
            }
        }
    }
}