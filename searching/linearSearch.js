const LinearSearch=(a,t)=>{
    for(let i=0;i<a.length;i++){
        if(t==a[i]){
            return i;
        }
    }
    return -1;
}

const arr=[3,44,5,55]
const target=12;
console.log(LinearSearch(arr,target));