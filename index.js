
/*
const http=require("http");

const app = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('hello world manjuesaivarshini gjmm family man gopi:\n');
}) 
app.listen(3000,"127.0.0.1");
console.log('node server running on port 3000')
*/



//--------------------------------------
/*filesystem read file*/


/*
const fs=require('fs');
fs.readFile("./data.txt",(err,data)=>{
if(err){
    console.log(err);
    return err;
}
console.log("data",data.toString())
});
*/


//---readdir----------------------------------
/*
const fs=require('fs');
fs.readdir("./datum",(err,data)=>{
if(err){
    console.log(err);
    return err;
}
data.forEach((fil)=>{  
    console.log(fil);
    fs.readFile(`./datum/${fil}`,"utf8",(err,dat)=>  //can use utf8 instead of .toString()
    {
    if(err){
        console.log(err);
        return err;
    }
    console.log("data",dat)

})})
});
*/

//write file-------------------------------------------------------------------------------

const fs=require('fs');
let family="varshini saami"
fs.writeFile('./datum/data.txt',family,(err,daa)=>{
if(err){
    return err
}
let added=fs.readFileSync("./datum/data.txt","utf8");
console.log(added)
})

