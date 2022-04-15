pipeline {
    agent any
    tools { nodejs 'node-16.14.2' }
    environment {
        NEW_VERSION = '1.3.0'
    }
    stages {
        stage('Build') {
            steps {
                // echo "building version ${NEW_VERSION}"
                // bat "yarn" // Install npm package
                // bat "yarn build" // Publish app
                // bat "ren dist cicd_app_v3.0.${BUILD_NUMBER}"
                // archiveArtifacts artifacts: "cicd_app_v3.0.${BUILD_NUMBER}/**", followSymlinks: false
                currentBuild.result = 'ABORTED'
                error('Stopping early…')
            }
        }
        // stage('Deploy') {
        //     steps {
        //         bat "%windir%\\system32\\inetsrv\\appcmd stop apppool /apppool.name:cicd"
        //         bat "xcopy .\\dist C:\\appiis\\cicd /E /Y"
        //         bat "%windir%\\system32\\inetsrv\\appcmd start apppool /apppool.name:cicd"
        //     }
        // }
    }
}