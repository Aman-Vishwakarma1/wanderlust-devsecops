pipeline{
    agent {label 'devsecops-agent'}
    stages{
        stage('cloning code from Github'){
            steps{
                echo "cloning code from github"
                git url: 'https://github.com/Aman-Vishwakarma1/wanderlust-devsecops.git', branch:'main'
            }
        }
        stage('SonarQube code quality analysis'){
            steps{
                echo "Sonarqube"
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