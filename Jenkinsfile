pipeline {
    agent any
    environment {
        NEW_VERSION = '1.3.0'
    }
    stages {
        stage('Prepare') {
            steps {
                sh "npm install -g yarn"
                sh "yarn install"
            }
        }
        stage('Stage 1') {
            steps {
                echo 'Hello World!'
                echo "building version ${NEW_VERSION}"
                sh "yarn"
            }
        }
    }
}