pipeline {
    agent any
    tools { nodejs 'node-16.14.2' }
    environment {
        NEW_VERSION = '1.3.0'
    }
    stages {
        stage('Build') {
            steps {
                echo "building version ${NEW_VERSION}"
                bat "yarn"
                bat "yarn build"
            }
        }
        stage('Deploy') {
            steps {
                bat "%windir%\\system32\\inetsrv\\appcmd stop apppool /apppool.name:cicd"
                bat "dir"
                bat "%windir%\\system32\\inetsrv\\appcmd start apppool /apppool.name:cicd"
            }
        }
    }
}