function check_negative(list) {
    var negative_numbers = [];
    list.forEach(number => {
        if(number.includes("-")){
            negative_numbers.push(number);
        }
    });
    var negative_numbers_str = negative_numbers.join();
    if(negative_numbers.length > 0){
        throw new Error("Negatives not allowed: " + negative_numbers_str);
    }
};

function sum(list) {
    var sum = 0;
    list.forEach(number_str => {
        var number_int = parseInt(number_str);
        if(number_int < 1000){
            sum += number_int;
        }
    });
    return sum;
}

function add(numbers) {
    if(numbers == ""){
        return 0;
    }
    else if(numbers.substring(0, 2) == "//"){
        var list_of_numbers = numbers.split("\n").join(",").split(",");
        var delim = list_of_numbers[0];
        delim = delim.substring(2,delim.length);
        //console.log(list_of_numbers + "+,+" + delim);
        list_of_numbers = list_of_numbers.splice(1,list_of_numbers.length);
        list_of_numbers = list_of_numbers.join(",").split(delim).join(",").split(",");
        //console.log(list_of_numbers);
        check_negative(list_of_numbers);
        return sum(list_of_numbers);
    }
    else if(numbers.includes(",") || numbers.includes("\n")){
        var list_of_numbers = numbers.split("\n").join(",").split(",");
        check_negative(list_of_numbers);
        return sum(list_of_numbers);
    }
    else{
        return parseInt(numbers);
    }
};

module.exports = add;