function add(numbers) {
    if(numbers == ""){
        return 0;
    }
    else if(numbers.includes("-")){
        var list_of_numbers = numbers.split("\n").join(",").split(",");
        //console.log(list_of_numbers);
        var negative_numbers = [];
        list_of_numbers.forEach(number => {
            if(number.includes("-")){
                negative_numbers.push(number);
            }
        });
        //console.log(negative_numbers);
        var negative_numbers_str = negative_numbers.join();
        //console.log(negative_numbers_str);
        throw new Error("Negatives not allowed: " + negative_numbers_str);
    }
    else if(numbers.includes(",") || numbers.includes("\n")){
        var list_of_numbers = numbers.split("\n").join(",").split(",");
        //console.log(list_of_numbers);
        var sum = 0;
        //console.log("START");
        list_of_numbers.forEach(number_str => {
            var number_int = parseInt(number_str);
            if(number_int < 1000){
                //console.log(number_int);
                sum += number_int;
            }
        });
        //console.log("sum: " + sum);
        return sum;
    }
    else{
        return parseInt(numbers);
    }
};

module.exports = add;