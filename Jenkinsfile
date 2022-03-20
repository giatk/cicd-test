pipeline {
    agent any
    environment {
        NEW_VERSION = '1.3.0'
    }
    stages {
        stage('Stage 1') {
            steps {
                echo 'Hello World!'
                echo "building version ${NEW_VERSION}"
                sh "dir"
            }
        }
    }
}