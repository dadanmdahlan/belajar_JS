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