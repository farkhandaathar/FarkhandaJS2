// CHAPTER #21 to 25
// Question # 1
 var firstname = prompt("Enter your first name?");
var lastname = prompt("Enter your last  name?");
document.write("<br>" + firstname + " "+ lastname + " "+ "<br>"+ "Welcome to our site");


// Question # 2
 var phone = prompt("Enter your favourite phone model?");
document.write("<br>My Favourite phone is: "+ phone + "<br>"+ "Length of string: " + phone.length);


// Question # 3
var country = "Pakistan";
 var index = country.indexOf("n");
 document.write("<br> String: "+ country + "<br>"+ "Index of n is:" +index);


// Question #4
 var str = "Hello World";
 var index = str.lastIndexOf("l");
 document.write("<br>String: "+ str + "<br>"+ "Last Index of l is:" + index);


// Question #5
 var str = "Pakistani";
 var index = str.substring(3,4);
 document.write(" <br>String: "+ str + "<br>"+ "Character at index 3 is: "+index);


// Question #6
 var str1 = prompt("Enter your first name?");
 var str2 = prompt("Enter your last name?");
 var full = str1.concat(str2);
 document.write(full + "<br>" + "Welcome to this site.");


// Question #7
  var text = "Hyderabad"    ;
  var replace = text.replace("Hyder", "Islam") ;
   document.write("<br> City: "+text+"<br>"+"After Replacement: "+replace);

// Question #8
 var message = "Ali and Sami are best friends. They play cricket and football together."; 
 var replace = message.replace(/and/g, "&") ;
 document.write("<br> "+ replace);


// Question #9
var num = '472';
 document.write("Value: "+num+"<br>"+ "Type: string");
 var num1 = parseInt('472');
 document.write("<br>Value: "+num1 +"<br>"+ "Type: number");


// Question #10
 var text = prompt("Enter any name/thing?");
 var capital = text.toUpperCase();
 document.write("<br>User Input: "+text+"<br>Upper case: "+capital);


// Question #11
 var text = prompt("Enter any name/thing?");
 document.write("<br> " + text[0].toUpperCase() + text.slice(1));


// Question #12
 var num = 35.36;
 var strReplace = num.toString().replace(".", "");
 document.write("<br>Number: "+ num+ "<br>Result: "+ strReplace);

//Question # 13
var name = prompt("ENter a name");
for ( var i =0; i<= name.length; i++)
{
    if (name.charAt[i] == "@" || name.charAt[i]== "!" || name.charAt[i] == "." || name.charAt[i]== ",")
    {
        document.write("<br> Enter a valid username.");
        break;

    }
    else
    {
        document.write("<br> The username is : " + name);
        break;
    }
   
}



// Question #16
 var university = "U\nn\ni\nv\ne\nr\ns\ni\nt\ny\n o\nf\n K\na\nr\na\nc\nh\ni\n"; 
 var arr = university.split(" ")
 document.write( "<br> " + arr)


// Question #17
 var input = prompt("Enter something")
 var lastChar = input.slice(-1)
 document.write("<br> user input: "+input + "<br>Last  character of input: "+lastChar)


// Question #18
 function countOccurences(string, word) {
     return string.split(word).length - 1;
 }
 var text="the quick brown fox jumps over the lazy dog"; 
 var count=countOccurences(text,"the");
 document.write("text: "+text+"<br>There are "+count+" occurences of word the.")

// chp ( 26-30)
var num = prompt("Enter a positive number");
// num1 = Math.random(0, num);
document.write(" The number you enter is : " + num );
var round = Math.round(num);
document.write( "<br>Round off value is:" + round);
var floor = Math.floor(num);
document.write("<br>Floor value :" + floor);
var ceil = Math.ceil(num);
document.write("<br> Ceil Value: " +  ceil);

//Question # 2

var num = prompt("Enter a negative floating point  number");
// num1 = Math.random(0, num);
document.write(" <br><br>The number you enter is : " + num );
var round = Math.round(num);
document.write( "<br>Round off value is:" + round);
var floor = Math.floor(num);
document.write("<br>Floor value :" + floor);
var ceil = Math.ceil(num);
document.write("<br> Ceil Value: " +  ceil);

//Question # 3

var num1 = prompt("Enter a positive or negative number");
var num2 = Math.abs(num1);
document.write(" <br><br>The absolute value of number is " +  num1 + " is " + num2);


// Question # 4


var num3 = Math.floor(Math.random() * 6) + 1 
document.write("<br><br> Random dice value is " + num3)



//Question 5 
var num4 = Math.floor(Math.random() * 2) + 1 
document.write("<br><br>  " + num4);
if( num4 == 2)
{

    document.write("<br> Random coin values is : Head" );
}
if(num4 == 1 )
{

    document.write("<br> Random coin values is : Tail" );
}


//Question # 6
var num3 = Math.floor(Math.random() * 100) + 1 
document.write("<br><br> Random dice value between 1 and 100 is " + num3)

//Question # 7

var weight = prompt("Enter your weight ");
document.write("The weight of user is: " + weight);


//Question # 8
var num3 = Math.floor(Math.random() * 10) + 1 
document.write("<br><br>The random number is : " + num3);
var num4 = prompt("Enter a value from range 1 to 10");
document.write("<br> The user input number is : " + num4 );
if(num3 == num4 )
{
    alert("Congratulation! You guess the secret number");
}else
{
    alert("Try again");
}



// CHAPTER #30 to 34
// Question # 1
 var a = new Date()
 document.write(a)


// Question #2
 var m_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
               'August', 'September', 'October', 'November', 'December'];
 d = new Date();
 var n = m_names[d.getMonth()]; 
 document.write(n)


// Question #3
 var today = new Date();
   var day = today.getDay();
 var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  document.write("Today is : " + dayNames[day] + ".");


// Question #4
 var today = new Date();
 var day = today.getDate();
 var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
 daylist =0;
 if(daylist == daylist[0] || daylist[6]){
     document.write("Its Funday.")
 }



// Question  #6
 var a = new Date()
 document.write(a)
 var b = a.getTime()
 document.write("<br>Elapsed milliseconds since January 1, 1970: " +b)

 var date = new Date( "Jan 1, 1970")
 var datemili = date.getTime()

 var today = new Date()
 var todaymili =today.getTime()


 var diff = (todaymili - datemili);
 var accuage = Math.floor(diff/(1000*60))

 document.write("<br>Elapsed minutes since January 1, 1970:"+accuage)


// Question #7
 var dt = new Date();
    var h =  dt.getHours(), m = dt.getMinutes();
    var _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
    console.log(_time)



// Question #14
 var name = prompt("Enter your name?")
 var today = new Date();
   var day = today.getDay();
 var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   document.write("<b>K-Electric Bill</b>"+"<br>Customer Name: "+name+"<br>Today is : " + dayNames[day] + ".");
 var UnitNo = +prompt("Enter number of units:")
 var ChargePerUnit = +prompt("Enter charges per unit:")
 document.write("<br>number of units: "+UnitNo+"<br>charges per unit:"+ChargePerUnit)
 surCharge = 350;
 var NetAmountPayable = UnitNo*ChargePerUnit;
 GrossamountPayable = NetAmountPayable + surCharge;
 document.write("<br>Net Amount Payable(within due date): "+ NetAmountPayable+"<br>Late payment surcharge: "+surCharge+"<br>Gross Amount Payable(after due date): "+GrossamountPayable)


// Question #13
 var dob = new Date(prompt("Enter your DOB", "Aug 31, 1999"))
 var dobmili = dob.getTime()
 var today = new Date()
 var todaymili =today.getTime()
 var diff = (todaymili - dobmili);
 var accuage = Math.floor(diff/(1000*60*60*24*30*12))
 document.write("your age is: "+accuage)








// Chapter 35-38
//uestion # 1 
var date = new Date();
document.write("<br><br>" + date);

//Question # 2
var fname = prompt("Enter first name: ");
var lname = prompt("Enter last name");
function person(fname, lname) {
   return fname + lname;
}
document.write ("Welcome!    "  + person(fname, lname));

//Question # 3
var fnum = +prompt("Enter first number: ");
var snum = +prompt("Enter Second number");
function add(fnum, snum) {
   return fnum + snum
   
}
document.write ("The sum of two numbers is    "  + add(fnum, snum));


//Question # 4

var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter Second number");
var operator = prompt("Enter Operator");

function cal(num1, operator, num2 ) {
    if(operator=== '+')
    {
        return num1 + num2;
    }
    else if (operator === '-')
    {
        return num1 - num2;
    }
    else if (operator === '*')
    {
        return num1 * num2;
    }
    else if (operator === '/')
    {
        return num1 / num2;
    }
    else if (operator === '%')
    {
        return num1 % num2;
    }
    else
    {
        return "The opeartor is not valid";
    }
}
document.write("<br> The answer is : " + cal(num1, operator, num2));


//Question # 5
var number = +prompt("Enter a number for taking square");
function square(number) {
    return number * number;
  }
document.write("The square of number is : " + square(number));


//Question # 6
var n = +prompt("Enter a number for factorial");
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
document.write("The factorial of " + n + " is " + factorial(n));


//Question # 7

var num1 = + prompt("Enter first number");
var num2 = +prompt("Enter second number");
function display(num1, num2)
{
    for (var i =num1; i<=num2 ; i++)
    {
        document.write("<br> " + i);    
    }
}
display(num1, num2);

//Question # 8

var base = +prompt("Enter base value");
var perpendicular = +prompt("Enter perpendicular");
function hypo(base, perpendicular)
{
    function square1(base)
    {
        return base*base;
    }
    function square2(perpendicular)
    {
        return perpendicular * perpendicular;
    }
    document.write("<br> The square of base is: " + square1(base));
    document.write("<br> The square of perpendicular is : " + square2(perpendicular));
    var result =   square1(base) + square2(perpendicular);
    
    return result;

}
document.write (" <br> The hyposthesus value is "+ hypo(base, perpendicular));

//Question # 9
var width= prompt("Enter width");
var height = prompt("Enter Height");

function A (width, height)
{
    var result = width * height;
    return result;
}
document.write("<br> The area of triangle is : " + A(width, height));


//Question # 10
var str_entry = prompt("Enter string to check plindrome or not");
function check_Palindrome(str_entry){
    // Change the string into lower case and remove  all non-alphanumeric characters
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    // Check whether the string is empty or not
        if(cstr==="") {
            document.write("Nothing found!");
            return false;
        }
    // Check if the length of the string is even or odd 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    // If the length of the string is 1 then it becomes a palindrome
            if (cstr.length === 1) {
            document.write("Entry is a palindrome.");
                return true;
            } else {
    // If the length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
            }
        }
    // Loop through to check the first character to the last character and then move next
        for (var x = 0; x < ccount; x++) {
    // Compare characters and drop them if they do not match 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                document.write("Entry is not a palindrome.");
                return false;
            }
        }
        document.write("The entry is a palindrome.");
        return true;
    }
    check_Palindrome(str_entry);


//Question # 11
var str = prompt("Enter a string to capital first letter of each word");
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase(str));

//Question # 12
var str = prompt("Enter a string to find longest word from the string");
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(find_longest_word(str));


//Question# 13
var str = prompt("Enter the string");
var letter = prompt("Enter letter to find maximum occurance");
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count(str, letter));

//Question # 14
var radius = prompt("Enter the radius");
function calcCircumfrence(radius) {
    var y = (Math.PI * radius) * 2;
  document.write("<br>The circumfrence is " + y + ".");
  }
  function calcArea(radius) {
    var x = (Math.PI * radius) * radius;
  document.write("<br>The area is " + x + ".");
  }
  
  calcCircumfrence(radius);
  calcArea(radius);
  

