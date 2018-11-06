var urutan = [ "Bulat","Cacah","Prima","Negatif",
                "Nol","Asli","Ganjil","Genap","Prima","Komposit"]

var hasil = []
function bilangan(x){
    if(x>=0){
    hasil.push(urutan[1])
    }
    else if(x>1 || x/1==x || x/2!=0){
    hasil.push(urutan[2])
    }
    else if(x%2==0){
    hasil.push(urutan[7])
    }
    else if(x%2!=0){
    hasil.push(urutan[6])
    }
    else if(x<0){
    hasil.push(urutan[3])
    }
    else if(x=0){
    hasil.push(urutan[4])
    }
    else if(x>1 || x/1!=x || x/2==0){
    }
    else{
    hasil.push(urutan[0])
    }
}

console.log(bilangan(1))