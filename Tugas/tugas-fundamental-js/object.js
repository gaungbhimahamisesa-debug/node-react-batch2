/**
 * (Membuat Array of Object) anda diberikan data-data buah 
 */

var buah = [
    {
        nama: "Nanas", warna: "Kuning" , "ada bijinya": "tidak", harga: 9000
    },
    {
        nama: "Jeruk", warna: "Oranye" , "ada bijinya": "ada", harga: 8000
    },
    {
        nama: "Semangka", warna: "Hijau & Merah" , "ada bijinya": "ada", harga: 10000
    },
    {
        nama: "Pisang", warna: "Kuning" , "ada bijinya": "tidak", harga: 5000
    }
]

/**
 * uraikan data tersebut menjadi array of object dan munculkan data yang tidak memiliki biji
 */

var arrayBuahFilter = buah.filter(function (item) {
    return item["ada bijinya"] == "ada"
})

console.log(arrayBuahFilter)

console.log('-----------------------------------')

/**
 * 2. (Membuat Penambahan Data object ke array melalui function)
buatlah function tambahDataFilm yang menambahkan object ke array
 */

function tambahDataFilm(name, duration, gen, year) {
    var dataFilm = []
    let data = {
        nama: name,
        durasi: duration,
        genre: gen,
        tahun: year
    }

    dataFilm.push(data)
    console.log(dataFilm)
}

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")

console.log('-----------------------------------')

/**
 * Variable soal no 3-5
 */

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

/**
 * 3. kelompokkan data laki-laki yang umurnya diatas 29 (munculkan seluruh datanya)
 */

var maleOver30 = people.filter(function (p) {
    return p.gender == "male" && p.age > 29
})

console.log(maleOver30)

console.log('-----------------------------------')

/**
 * 4. (Rata-rata Usia) dapatkan rata-rata usia dari data dibawah ini
 */

function averageAge() {
    var age = people.map(function (p) {
        return p.age
    })

    var total = age.reduce((sum,num) => sum + num, 0)
    var average = total / age.length
    var average = parseInt(average)

    console.log(`Rata-rata usia adalah ${average} tahun`)

}

averageAge()

console.log('-----------------------------------')

/**
 * 5. urutkan data diatas berdasarkan umur lalu munculkan hanya nama saja beserta nomor urut 
 */

var filterByAge = people.sort((a, b) => a.age - b.age)

filterByAge.forEach((fa, index) => {
    console.log(`${index + 1}. ${fa.name}`)
})

console.log('-----------------------------------')

/**
 * 6. buatlah function addColors yang menambahkan data colors baru ke property colors dari object phone
 */
var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020
};

function addColors(color) {
  phone.colors.push(color);
}

addColors("Gold");
addColors("Silver");
addColors("Brown");

console.log(phone);
