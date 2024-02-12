function user(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        get : function() {
            // return `${this._email.toUpperCase()}Hitesj`
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    })

}
const chai = new user("Aniket@gmail.com", "1233")
console.log(chai.email);



// function user(email, password) {
//     this._email = email;
//     this._password = password;
  
//     Object.defineProperty(this, "email", {
//       get: function() {
//         // return `${this._email.toUpperCase()}Hitesj`  // Remove this modification
//         return this._email.toUpperCase();
//       },
//       set: function(value) {
//         this._email = value;
//       }
//     })
//   }
  
//   const chai = new user("Aniket@gmail.com", "1233");
//   console.log(chai.email); // Access email property directly (as desired)
  