if (true) {
  console.log("jalankan code");
}

if (false) {
  console.log("code tidak dijalankan");
}

var mood = "happy";
if (mood == "happy") {
  console.log("hari ini aku bahagia!");
}


var minimarketStatus = "open"
var telur = "soldout"
var buah = "soldout"
if ( minimarketStatus == "open ) {
    console.log("saya akan membeli telur dan buah")

    if(telur == "soldout" || buah == "soldout" ) {
        console.log("belanjaan saya tidak lengkap")
    } else if( telur == "soldout") {
        console.log(telur habis")
    } else if ( buah == "soldout" ) {
        console.log("buah habis")
    }
    } else {
        console,log("minimarket tutup, saya pulang lagi")
    }


var buttonPushed = 1;
switch(buttonPushed) {
    case 1: { console.log('matikan TV!'); break; }
    case 2:     { console.log('turunkan volume TV!'); break; }
    case 3:     { console.log('tinggikan volume TV!'); break; }
    case 4:     { console.log('matikan sura TV!'); break; }
    default:    { console.log('tidak terjadi apa apa'); }
}


// tanpa ternary operator
var age = 20
var bisaVote = ""
if (age > 20){
    bisaVote = "bisa vote"
}else{
    bisaVote = "belum bisa bote"
}
console.log(bisaVote)

// dengan ternary Operator
var age= 20
var bisaVote= age > 20 ? "bisa vote" : "belum bisa vote" // hasilnya belum bisa vote
console.log(bisaVote)