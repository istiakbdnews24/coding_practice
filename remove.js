var removeDuplicates = function (nums) {

  for (let i = nums.length-1; i>=0; i--) {


        if(nums[i] === nums[i-1]) {
        nums.splice(i, 1);

        console.log(nums);

   
      }
  }

};

removeDuplicates([1,1,2,2, 4, 5, 6]);


// var removeDuplicates = function(nums) {
//   for (var i = nums.length-1; i >= 0; i--) {       
//       if(nums[i] === nums[i-1]) {
//           nums.splice(i, 1);
//       }
//   }
// };
