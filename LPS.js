//Longest Palindromic Substring
//given a string 
//find a substring that is the longest Palindrome
// Example "babad" => "bab" or "aba"

//Use expand from center algorithm

//Note you can generate all substing of a sting in O(n^2) Time (two for loops)



function LPS(s){
	if(s == null || s.length < 1) return "";

	let start = 0;
	let end = 0;

	 for(let i=0; i < s.length; i++){

	 	let len1 = expandFromCenter(s, i, i);
	 	let len2 = expandFromCenter(s, i, i+1);
	 	let len = Math.max(len, len2);
	 	if(len > end - start){
	 		start = i - ((len -1) / 2);
	 		end = i + (len / 2);
	 	}
	 }

	 return s.substring(start, end + 1);



}

function expandFromCenter(str, left, right){
	if(s == null || left > right)return 0 

		while(left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)){
			left--;
			right++;
		}
		return right - left - 1;
	}
