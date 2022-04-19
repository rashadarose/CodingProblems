//First Non Repeating Character
// Given a String "a,a,a,b,c,c,c,c,d,e,e,f"
//Find the first non reapeting char
//in the example "a,a,a,b,c,c,c,c,d,e,e,f" it would be 'b'

//Other Constraints ...

//for the example we should use a hash map

//it will reuqire a hash map and 2 for loops
//the first for loop, loops thru the string and maps the count of each char to a key of the times 
//it shows up in a new hash map
// we now jknow how many times the least showed up base on our hash so we can use that value in the next for loop 
//the second for loop, loops thru the string array again and say if the char we are at is equal to the least value in this case '1'

//Time Complexity willbe O(n) I think Space Complexity is too

function fNRChar(s){
	const char_count = new Map() //creates has map

	for(let i = 0; i < s.length; i++){ //loops thru the string (s)
		let c = s.charAt(i) //get char
		if(char_count.has(c)){ //
			char_count.set(c, char_count.get(c) + 1)
		}else{
			char_count.set(c,1)
		}
	}

	for(let k = 0; k < s.length; k++){
		let c = s.charAt(k)
		if(char_count.get(c) == 1) return c
	}

} 
