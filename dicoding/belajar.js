// cara 1
// function 

function Mail() {
    this.from = 'pengirim@dicoding.com';
    this.sendMessage = function (msg, to){
        console.log('you send: ',msg,' to ',to, 'from', this.from);
    };
    
}

const mail1 = new Mail ();
mail1.sendMessage('hallo','penerima@dicoding.com');

// cara 2
// class

class Mail3 {
    from = 'pengirim@dicoding.com';
    sendMessage = function (msg, to){
        console.log('you send: ',msg,' to ',to, 'from', this.from);
    };
    
}

const mail4 = new Mail3 ();
mail4.sendMessage('hallo','penerima@dicoding.com');