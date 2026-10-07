const genPwd = (length = 20) =>{
    
    const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let pwd='';
    for(let i=0; i<length; i++){
        const index = Math.floor((Math.random()*alphabet.length))
        pwd+=alphabet[index]
    }
return pwd;
};


module.exports=genPwd;


