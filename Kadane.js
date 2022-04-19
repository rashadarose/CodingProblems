//kadane's algorithm

//Max Contigous Sum (substring)

//notes
//with alot of logical clever solutions
//solutions that are o(n) and better than o(n^2) or (nested for loops)
//usually you need at most 3 varibales most times 2
//in the function you set one variable to the past value of the other variable
//or vice versa... so old value are constatly over written by new value with in the same variables
// or varibales added to them self and saved again or + 1 etc
//have like a current and last or something like that


//

function maxContigousSum(arr){

	let max_sum = arr[0];
	let current_sum = max_sum;

	for(let i=1; i<arr.length; i++){
		current_sum = Math.max(arr[i] + current_sum, arr[i]);
		max_sum = Math.max(current_sum, max_sum)
	}
	return max_sum

}  