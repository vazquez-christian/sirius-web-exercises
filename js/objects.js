(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName: "Christian",
        lastName: "Vazquez",
        sayHello: function () {
            return "Hello from " + this.firstName + " " + this.lastName + "!"
        }
    }
    console.log(person.firstName);
    console.log(person.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    console.log(person.sayHello())
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    //collection              //individual element
    shoppers.forEach(function (shopper, index) {
        console.log(shopper)

        let discount = shopper.amount * 0.12
        let discountedTotal = shopper.amount - discount;

        if (shopper.amount > 200) {
            // `${sfdsdf}  dskfslkdflksd %{klfskfs}`
            console.log(`${shopper.name} gets a discount. The original price was ${shopper.amount.toFixed(2)}, The discount is $${discount} the total is $${discountedTotal.toFixed(2)}`)
        } else {
            console.log(`${shopper.name} does not get a discount. The total is due is $${shopper.amount.toFixed(2)}`)
        }
    })

    // shoppers.forEach(function (shoppers) {
    //     if (shoppers.amount >= 200) {
    //         return shoppers.amount - (shoppers.amount * .12)
    //     } else {
    //         console.log("You did not spend enough to receive a discount.")
    //     }
    // })

    //let discountAmount = .12;

    // if (amountSpent >= 200) {
    //     let discountedTotal = discount * amountSpent
    //     return amountSpent - discountedTotal
    // } else {
    //     console.log("You did not spend enought to recieve a discount.")
    // }
    // shoppers.forEach(function () {
    //     if (shopper.amount >= 200) {
    //         let discountedTotal = discountAmount * shopper.amount
    //         return shopper.amount - discountedTotal
    //     } else {
    //         console.log("You did not spend enought to recieve a discount.")
    //     }
    // })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
        {
            title: "Walkaway",
            author: {
                firstName: "Cory",
                lastName: "Doctorow"
            }
        },
        {
            title: "A Brief History in Time",
            author: {
                firstName: "Stephen",
                lastName: "Hawking"
            }
        }
    ]


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(book,index) {
        console.log(`Book # ${index + 1}\n${book.title}\n${book.author.firstName} ${book.author.lastName}`)
    })
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(bookTitle, authFirstName, authLastName) {
        return {
            title: bookTitle,
            author: {
                firstName: authFirstName,
                lastName: authLastName
            },
            showBookInfo: function(){
                console.log("Title: " + this.title)
                console.log("Author: " + this.author.firstName + " " + this.author.lastName)
                console.log("---")
            }
        }
    }

    console.log(createBook("The Bible", "Paul", "The Bible Guy").showBookInfo());

})();