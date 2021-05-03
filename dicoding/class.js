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