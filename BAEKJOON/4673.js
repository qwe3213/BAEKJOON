function selfNumber(){

    let dn=0;
    let arr=[];

    for(let n=0; n<10000; n++){
        if(0<n && n<10){
         dn=2*n;
        }else if(10<=n && n<100){
            dn=n+(n%10)+(Math.floor(n/10));
        }else if(100<=n && n<1000){
            dn=n+(Math.floor(n/100))+(Math.floor((n%100)/10))+(n%10);
        }else if(1000<=n && n<10000){
            dn=n+(Math.floor(n/1000))+(Math.floor((n%1000)/100))+(Math.floor((n%100)/10))+(n%10)
        }else{
            dn=10001;
        }
        arr.push(dn);
    }
    for(let i=1; i<10000; i++){
        if(!arr.includes(i)){
            console.log(i);
        }
    }      
}

selfNumber()