let loop = 0
const log = console.log
function main(){
    const array = []
    //Create Array
    for(let i = 0;i<1000000;i+=6){
        array.push(i)
    }
    //Test Binary Search
    for(let i = 0;i<1000;i++){
        binarySearch(array,i)
    }
}

function binarySearch(array,target){
    let min = 0
    let mid = Math.round(array[array.length - 1] / 2)
    let max = Math.round(array[array.length - 1])
    while(true){
        loop +=1
        if(target > array[array.length - 1] ||mid < 0){
            log("Aradığınız Değer Bulunamadı")
            break
        }
        
        if(mid > target){
            max = parseInt(mid)
            mid = parseInt(mid  - (mid / 2))
        }
        else if(mid < target){
            min = parseInt(mid)
            mid = parseInt(mid + ((max - mid) / 2))
        }
        else {
            log("Aranan Değer:"+target +"\nBulunan Değer:"+mid+"\nDöngü Tekrarı:"+loop+"\n")
            loop = 0
            break
        }
    }
    
}
main() 

