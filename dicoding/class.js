// cara 1
// function 

function Mail() {
    this.from = 'pengirim@dicoding.com';
    this.contact=[];
    this.sendMessage = function (msg, to,from){
        console.log('you send: ',msg,' to ',to, 'from', from);
        this.contact.push(to); // menyimpan kontak baru 
    };
    
}

const mail1 = new Mail ();
mail1.sendMessage('hallo','penerima@dicoding.com','aku@gmail.com');

// cara 2
// class

class Mail3 {
    from = 'pengirim@dicoding.com';
     contact=[];
        sendMessage = function (msg, to, from){
        console.log('you send: ',msg,' to ',to, 'from', from);
        this.contact.push(to);
    };

    
}

const mail4 = new Mail3 ();
mail4.sendMessage('hallo','penerima@dicoding.com','dia@gmail.com');


// pada dasarnya sifat variabel di JS adalah public
// bagaimana untuk mengubah variabel/ properti tersebut menjadi private

// cara 1 menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement function)


// var contact=[];
// fucction Mail () {    
//         this.from = 'pengirim@dicoding.com';
//         var contact = [];
//         sendMessage = function (msg, to) {
//             console.log('you send :', msg, ' to', to, 'from', this.from);
//             contact.push(to);        
//         };
// };


// cara 2 cara ini dapat digunakan pada penulisan kelas menggunakan statement 'function' dan class

// _contact=[];

// // contoh
// class Mail {
//     from ='pengirim@dicoding.com';
//     _contact=[];
//     sendMessage = function (msg,to) {
//         console.log('you send: ',msg,' to',to, ' from',this.from);
//         this._contact.push(to);
//        // console.log(this._contact);
        
//     }
// }

/** 
cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 
  **/
//#contacts= [];
// contoh
class Mail {
    from = 'pengirim@dicoding.com';
    #contacts =[];
    sendMessage =function (msg,to) {
        console.log('you send: ',msg, ' to ',to,' from ',this.from);
        this.#contacts.push(to);        
    };
};
const mail = new Mail();
//mail.sendMessage('halo','dia');
console.log(mail.#contact);


//class method
//static method (tidak harus di inisialisasi terlebih dahulu)

class Mail{
    static isValidPhone(phone) {
      return typeof phone === 'number';
    }
  }
  console.log(Mail.isValidPhone(0890000000));

  // constructor ( method yang bisa dijalankan berbarengan dengan inisialisasi object / method yang pertama kali dijalan kan)
// cara 1
class Mail1{
    constructor(author) {
      this.from = 'pengirim@dicoding.com';
      
      console.log('is instantiated', author);
    };
  }
   
  // cara 2
  function Mail2(author) {
      this.from = author;
    
    console.log('is instantiated', author);
  }

const mail1= new Mail1 ("Dadan");
 Mail2 ("Dadan");


 // 4 pilar OOP

// 1. Encapsulasi (kondisi dimana attributr atau method didalam class dibungkus dan bersifat private => object lain tidak bisa mengakses / mengubah nilai dari property secara langsung )
//2. abstraksi
/*Abstraksi dapat dikatakan merupakan penerapan alami dari enkapsulasi. Abstraksi berarti sebuah objek hanya menunjukkan operasinya secara high-level. Misalnya kita cukup tahu bagaimana bagaimana pesan dikirim atau diterima, namun kita tidak perlu tahu seperti apa proses enkripsi dan deskripsi isi pesan, atau bagaimana sebuah daftar  contact dapat bertambah. */
//3. inheritance 
/*Beberapa objek bisa memiliki beberapa karakteristik atau perilaku yang sama, tetapi mereka bukanlah objek yang sama. Di sinilah inheritance atau pewarisan berperan. SMS dan jenis pesan lainnya memiliki karakteristik umum yang dimiliki juga oleh jenis pesan lainnya, seperti memiliki konten pesan, alamat/nomor pengirim, alamat/nomor penerima, dsb. Maka dari itu Email sebagai objek turunan (subclass) mewarisi semua sifat dan perilaku dari objek induknya (superclass) Mail. Begitu juga dengan objek Whatsapp juga mewarisi sifat dan perilaku yang sama, namun whatsapp bisa membuat grup, mengirim broadcast message sedangkan Email tidak (*misalkan). */
// contoh encapsulasi 

class Mail{
    _contacts =[];
    constructor(author){
        this.from =author;
    }
    sendMessage = function (msg,to) {
        console.log('You Send: ',msg,' to ',to,' from ',this.from);
        this._contacts.push(to);
                
    };
    showAllContact(){
        return this._contacts;
    }
}



const mail = new Mail ("dicoding");
mail.sendMessage('Halo','dia');
console.log(mail.showAllContact());

// contoh inheritance
// cara 1: menggunakan keyword `extends` jika menggunakan statement `class`
// class ChildClassName extends ParentClassName{}
 
 
// cara 2: menggunakan `prototype` jika menggunakan statement `function` / `class`
// ChildClassName.prototype = new ParentClassName()

class Whatsapp extends Mail {
    username ='dicoding';
    isBussinessAccount=true;

    myProfile =function () {
        return `my name ${this.username}, is ${this.isBussinessAccount? 'Business':'Personal'}`;
    }
}
const wa1= new Whatsapp(08955522222);
console.log(wa1.myProfile());
wa1.sendMessage('halo',0890000000);

//4. polymorphism
/* Polymorphism dalam bahasa Yunani berarti “banyak bentuk.” Sederhananya objek dapat memiliki bentuk atau implementasi yang berbeda-beda pada satu metode yang sama. Semua jenis Mail dapat mengirim pesan, namun whatsapp, email, sms tentunya memiliki cara yang berbeda dalam mengirim pesan, misalkan: whatsapp dapat mengirim pesan suara sedangkan yang lainnya tidak, email dapat menyaring konten spam saat mengirim pesan sedangkan yang lain tidak. Perbedaan bentuk atau cara mengirim pesan tersebut merupakan contoh dari polymorphism.*/

// Overriding Method 
/* Overriding adalah teknik untuk kita melakukan perombakan (baik total ataupun tidak) pada sebuah method ataupun constructor yang dimiliki oleh parent class sehingga dapat disesuaikan dengan behavior di child class.*/
/* cara overrriding method / properti
dengan syntax super(),
super(property) / super.method
*/