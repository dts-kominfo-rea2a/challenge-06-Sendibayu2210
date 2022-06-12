// TODO: import module bila dibutuhkan di sini
// Include fs module
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = () => { 

    let fileSatu = fs.readFile(file1, 'utf-8',(err,data)=>{
      if(err){
        console.log(err);
      }else{
        let a = JSON.parse(data);
        let b = a.message.split(" ");
        let c = b[1].toString();        
        console.log(c)        
      }      
    }) 

    let fileDua =  fs.readFile(file2, 'utf-8',(err,data)=>{
      if(err){
        console.log(err);
      }else{
        let a = JSON.parse(data);        
        let b = a.map(function(item) {
          let c =  item['message'].split(" ");
          let d = c[1].toString();        
          console.log(d)        
        });                               
      }
    }) 

    let fileTiga =  fs.readFile(file3, 'utf-8',(err,data)=>{
      if(err){
        console.log(err);
      }else{
        let  a = JSON.parse(data);                
        let b = a.map(function(item) {
          let c =  item['data'];   
          let d = Object.values(c);            
          return d;          
        });
        let f = b.toString().split(" ");                             
        console.log(f[1]);
      }      
    })           
}


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
