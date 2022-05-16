
function SetProductCost(id,cost){
    document.getElementById(id).innerText=cost;
    main();
}

function addPromo(){
    
    const promCountText=document.getElementById('total');
    const convertProm=parseInt(promCountText.innerText);
    const promoCount=convertProm*0.2;
    const res=parseInt(convertProm-promoCount);
    console.log(res);
    promCountText.innerText=res;
    const delete_btn=document.getElementById('btn-active');
    delete_btn.setAttribute('disabled',true);

    document.getElementById('delete-confirm').value='';


  
}

function main(){
    
    const MemoryStoragePrice=parseInt(document.getElementById('extra_memory_price').innerText);
    const  extraStoragePrice=parseInt(document.getElementById('extra_storage').innerText);
    const deliveryPrice=parseInt(document.getElementById('delivery').innerText);
    const PreviousPrice=document.getElementById('total-amount');

    const TotalCost=MemoryStoragePrice+extraStoragePrice+deliveryPrice+1299;
    PreviousPrice.innerText=TotalCost;
    const TotalPrice=document.getElementById('total');
    TotalPrice.innerText=TotalCost;
   

}

 

document.getElementById('delete-confirm').addEventListener('keyup',function(event){
        const delete_btn=document.getElementById('btn-active');
        if(event.target.value=='stevejobs'){
            delete_btn.removeAttribute('disabled');
        }else{
            delete_btn.setAttribute('disabled',true);

        }
})

document.getElementById('btn-active').addEventListener('click', function(){
        addPromo();
})

document.getElementById('memory-small').addEventListener('click', function(){
    SetProductCost('extra_memory_price',0);
})


document.getElementById('memory-large').addEventListener('click', function(){
    SetProductCost('extra_memory_price',180);
})

 
document.getElementById('ssd_small').addEventListener('click', function(){
    SetProductCost('extra_storage',0);
})

document.getElementById('ssd_mid').addEventListener('click', function(){
    SetProductCost('extra_storage',100);
})

document.getElementById('ssd_large').addEventListener('click', function(){
    SetProductCost('extra_storage',180);
})

document.getElementById('low').addEventListener('click', function(){
    SetProductCost('delivery',0);
})

document.getElementById('high').addEventListener('click', function(){
    SetProductCost('delivery',20);
})






