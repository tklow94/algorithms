//Java is case sensitive

//public is an access modifier, which tells us what kind of scope access we have. public gives full access.

//class defines a class, followed by the declared class name and the class body {}.

//to define a class, you need an access modifier like public that comes before it.

    //CARD: make a flashcard that makes you type the components that make up a class declaration, and explain what each one does.






//method is a collection of statements that perform an operation. A special method, the main method is needed in all java code. It is what Java looks for when running a program and is the entry point for code.
    //public is the same here, static we need, void tells us the method will not return anything. () are required, and can include one or more parameters.
    //We added a statement to our method body, it needs a ; at the end, and the statement is a command to be executed.


//Data Types in Java: int, 
    //primitive data types are the most basic; int, boolean, byte, char, short, long, float, double
        //  int myMinIntValue = Integer.MIN_VALUE;
	    //  int myMaxIntValue = Integer.MAX_VALUE;
        //  tells built in methods to tell us the max and min of any data type

        // Java will still try to fit a number that doesn't belong by underflowing from max to min or overflow from min to maxlike a circle. If min is 0 and max is 10, then 0-1 will print 10.

        //byte is much smaller than int 127 => -128
            //why use smaller data type? To save memory and/or speed if you don't have a lot of different variables.

        //short is larger than byte but smaller than integer 30,000 or so

        //Byte occupies 8 bits, byte,short,integer,long are 8,16,32,64 bytes respectively.

        //when assigning long expressions, in the value, put a capital L at the end of the number like so long myLongValue = 100L. Java will consider all numbers integers without the L value. This is more applicable when you go above the allowed width of the integer. For values smaller, Java will automatically convert to L. Best to just put L always if L.

        //casting is when we need to convert a number from one type to another, usually when doing mathematical operations. Java auto assumes Int, so for things like dividing byte, short, etc. by 2, we need to put (byte)(myMinByteValue/2).

        //Floats and double occupies different precisions 32 and 64 bits respectively.
            //double is the autofill like integer is to short and long and byte. Floats are not typically used anymore, but if you need to with f at the end for float instead of (float) casting.

            //Computers have evovled to process double values faster.

            //Float and double should not be used for currency calculations.

            //Char and boolean are the last two primitive types, boolean give T/F and Char is put in single quotes, it can only store a single character and is not a string, it is a charcter literal. Useful for storing the last keypress or something like in a game.



//variables defined as the data type, name, and an expression to initialze the variable with a value
    // int myFirstNumber = 5;
    //initialization is optional (=5)

//Java operators perform some sort of operation, common ones are mathematical ones + - * /


//Java Package: Organizes Java projects, like folders. com.company com folder => company folder
