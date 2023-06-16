let loop = 0
const log = console.log
function main(){
    const array = []
    //Create Array
    for(let i = 0;i<1000000;i+=5){
        array.push(i)
    }
    //Test Binary Search
     for(let i = 0;i<1000;i++){
        binarySearch(array,i)
    } 
}

function binarySearch(array,target){
    let min = 0
    let mid = parseInt((array.length - 1) / 2)
    let max = parseInt((array.length - 1))
    while(min <= max){
        loop +=1
        mid = parseInt((min + max) / 2)
        let midNumber = array[mid]
        
        if(midNumber == target){
            log("Target Value:"+target +"\nValue Found:"+midNumber+"\nLoop Repeat:"+loop+"\n")
            loop = 0
            break
        }
        if(midNumber > target){
            max = parseInt(mid - 1)
        }
        else{
            min = parseInt(mid + 1)
            
        }
    }
    
}
main() 

