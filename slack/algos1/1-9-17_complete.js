// 1/9/2017 INTRO && REVERSE STRING && REMOVE BLANKS
// Reverse String: Implement reverseString(str) that, given a string, returns that string with characters reversed. Given 'creature' return 'erutaerc'. Tempting as it seems, do not use the built in reverse().

console.log(reverseString("creature"));

function reverseString(str){
   var new_str = '';
   for(var i = str.length - 1; i >= 0; i--){
      new_str += str[i];
   }
   return new_str;
}

// Remove Blanks: Create a function that, given a string, returns all of that string's contents, but without the blanks. If given the string, " Pl ayThat fu nk ymus ic" return "PlayThatfunkyMusic".

// https://vimeo.com/198768506/8009787314

console.log(removeBlanks("  sdfsdf erwer sdfe"));

function removeBlanks(str){
   var new_str = '';
   for(var i = 0; i < str.length; i++){
      if(str[i] !== ' ' || str[i] !== '\t' || str[i] !== '\n'){
         new_str += str[i];
      }
   }
   return new_str;
}
