console.log('a');

console.log('b');


async function getData()
{
    const promise=new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('c');
            
            })
        }, 3000)
        let result = await promise;
        
        console.log(result);
        

}

async function getData1(){
const promise1=new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('d');
        
    }, 0)
})
let result = await promise1;
        console.log(result);
        console.log('e');
} 
   
 getData()
 getData1()
    

    

