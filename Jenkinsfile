pipeline {
    agent any
    environment {
        CI = 'true'
        DOCKERHUB_CREDENTIALS_ID = 'dockerhub-credentials-id' // Use the ID you provided
        GITHUB_CREDENTIALS_ID = 'github-credentials-id' // GitHub credentials ID
    }
    stages {
        stage('checkout') {
            steps {
                script {
                    git url: 'https://github.com/joe2sure/portfolio.git', credentialsId: "${env.GITHUB_CREDENTIALS_ID}"
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${env.DOCKERHUB_CREDENTIALS_ID}") {
                        def customImage = docker.build("my-frontend-image:${env.BUILD_ID}", './port')
                    }
                }
            }
        }
        stage('Unit Tests') {
            steps {
                script {
                    dockerCompose.up '--build test'
                }
            }
            post {
                always {
                    script {
                        dockerCompose.down()
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'docker stack deploy -c stack.yml frontend-stack'
                }
            }
        }
        stage('E2E Tests') {
            steps {
                script {
                    // Wait for the service to be up and running
                    sleep 10
                    sh 'npx cypress run'
                }
            }
        }
    }
    post {
        always {
            script {
                dockerCompose.down()
            }
        }
    }
}
