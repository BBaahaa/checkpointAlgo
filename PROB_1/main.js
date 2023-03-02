/*algorithm
1- Initialize a variable 'sum' to store the sum of distinct elements and set it to 0.
2- Loop through each element in the first set and second set:
	a/ first element: if 'set1[i]' not include in 'set2' add it to 'sum'
	b/ second element: if 'set2[i]' not include in 'set1' add it to 'sum'
3- return 'sum'
*/

function dist(set1,set2){
    let sum = 0;
    for(i=0;i<set1.length;i++){
        if(!set2.includes(set1[i])){
            sum += set1[i]
        }
    }
    for(i=0;i<set2.length;i++){
        if(!set1.includes(set2[i])){
            sum += set2[i]
        }
    }
    return sum
}

//Set 1 : [3, 1, 7, 9]
//Set 2: [2, 4, 1, 9, 3]
console.log(dist([3, 1, 7, 9],[2, 4, 1, 9, 3])); // output: 13