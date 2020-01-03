podTemplate(name: 'devops',label: 'devops', containers: [
  containerTemplate(name: 'nodejs', image: 'node:alpine', ttyEnabled: true, command: 'cat')
],
volumes: [
  hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock')],
 {
 node ('devops') {
   environment {
   
   DOCKER_IMAGE_NAME = "burk1212/k8s-http-mean"
   }
   
    stage('checkout and Installing docker') {
	 git 'https://github.com/link78/angular-httpClient.git'
      container('nodejs') {
	       sh 'node --version'
         sh 'apk update && apk add docker'
         sh 'docker --version'
        
      }
    }
    stage ('Build App') {
      container('nodejs') {
      sh 'npm install'
     
      }
    }
	 
	 
	 
    stage('Build and Pushing Image to docker Hub') {
      container('nodejs') {
      sh 'docker --version'
      sh 'docker build -t $DOCKER_HUB_USR/k8s-http-mean .'
      sh 'docker login -u $DOCKER_HUB_USR -p $DOCKER_HUB_PASSWD'
     	sh 'docker push $DOCKER_HUB_USR/k8s-http-mean' 
      
        
      }
    }
 
	 
 }

})
