# gallery-website
A full stack project used to create, like, collect and edit albums.

## Table of Contents
- Background
- Prerequisites
- Operating Environment
- Installation
- Usage
- FAQ
- Related Efforts
- Maintainers
- Contact Info
- Acknowledgement

## Background
This project is my first full stack project, in an attempt to get access to some student community in which I believe I will be able to enhance myself. After finnishing this project, I did enlarged my technology stack and had a more comprehensive understanding of HTTP protocol, database and JavaScript.  
**Warning**: This project only serve as an experimental project to elucidate how recent websites work. It is **not safe** to pass any sensitive material with it.

## Prerequisites
This project involves techniques including but not limited:
- HTTP Protocal
- Egg.js Framework
- Vue.js Framework (including: Vue, Vuex, Vue-router, Vue-CLI)
- Nginx
- Forward and backward proxy
- JavaScript
- MySQL and database related language
- Shell
I strongly suggest you at least have a basic understanding on these techniques above.  
Before you begin, ensure you have met the following requirements:
- You have a server machine or have access to ECS(Elastic Compute Service).
- You have installed Vue.js on client/server machine, egg.js, MySQL and Nginx on server machine.

## Operating Environment
It's only an example.
Server: CentOS provided by Aliyun ECS
Client: macOS Mojave

## Installation
The project is splited into three parts: back-end files, front-end files and data in the databases.

### Start with Front-end files
Due to the dearth of max uploading files, I only kept the files in '/src/'. To reuse them, you shall put them into a vue project accordingly and build them. You can also refer to official website to get help. See [Vue-CLI official page](https://cli.vuejs.org/zh/guide/prototyping.html). Afterwards, you shall put the outcomes in the dir where Nginx can correctly trace them as is descripted in the conf file.

### Finish Back-end Part
To begin with, configuring Nginx well helps you deploy static resources of the website. See related configuration file:(/nginx.conf). You shall use backward proxy.
You shall refer to the [Egg.js official page](https://eggjs.org/zh-cn/intro/quickstart.html) to start your part. Key codes have given in the dir (../back-end/app/).

## Usage
This project builds a website of albums, or collections of photos. You can sign up, log in, check other's collections, like a collection, create one, change one, or simply delete it. (However these are quite simple and may still have bugs.)

## FAQ
1. How can I tell when to use front-end proxy or back-end proxy?  
  If the website is running in your computer (both front-end and back-end), use forward proxy. Remove all the comments in [vue.config.js](/front-end/vue.config.js). If the website is running in your remote server, use backward proxy. Delete [vue.config.js](/front-end/vue.config.js), change every api interface and replacing all 'localhost' to server's ip address. See [here](https://www.jianshu.com/p/8fa2acd103ea) to get more information.
  
 ## Related Efforts
 * This [article](https://blog.csdn.net/zt15732625878/article/details/78941268)  explains more about proxy problem.
 * You may also refer this [article](https://blog.csdn.net/zt15732625878/article/details/78941268) to tackle with csrf problem of Egg.js.
 
 ## Maintainers
 @devaust
 
 ## Contact Info
 Feel free to contact me via reohargen@foxmail.com
 
 ## Acknowledgement
 Thanks for JMT's patience, care and support, without whom this project could not be finished.  
 Also I want to thanks for those who helped, Ding, Xu, Dong, saving a great deal of time for me.
