const BinarySearch=(a,t)=>{
    let left=0;
    let right=a.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(t===a[mid]){
            return mid;
        }
        else if(t<a[mid]){
            right=mid-1;
        }
        else{
            left=mid+1;
        }
    }
}

const arr=[3,5,44,55]
const target=5;
console.log(BinarySearch(arr,target));