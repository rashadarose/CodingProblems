//Find All Duplicates in An Array
//given an Array on int
//find all elements that appeer twice in the array
//do it in O(n) time
//Example [4,3,2,7,8,2,3,1]
//output => [2,3]

//note kinda confusing

//the idea is the index of any number is the numer or (value) -1
//ex [4,3,2,7,8,2,3,1] picking 4. 4 - 1 = 3
// so we use index 3... which is 7
// so now we make this value negative
// if we enconter the number 4 again we check the reference 
//if it is already negative we know we seen that number already

//hint in the instruction of the problem we are given (1 <= a[i] <= n (n = size of array))
//this hint mean that no numbers will be negative (1 <= a[i]) "every number will begreater than or equal to 1"
// so we can use negative values to solve the problem

function findDuplicates(nums){
	output_arr = new Array();
	for(let i = 0; i<nums.length; i++){
		let index = Math.abs(nums[i]) - 1
		if(nums[index] < 0 ){
			output_arr.push(index + 1);
			
		}
		nums[index] = -nums[index];
	}
	return output_arr;
}
