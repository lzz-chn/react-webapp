const config={
    serverRoot : 'http://localhost:8081' ,
    serverApi: 'http://localhost:8081/api',
    setWeb : (title,keywords,description)=>{
            document.title = title;
            document.getElementById('keywords').setAttribute('content' , keywords);
            document.getElementById('description').setAttribute('content' , description);
    }                              
}

export default config;