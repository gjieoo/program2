function calculate_median(arr) {

    var evenPositionArray=buildEvenPositionArray(arr);
    var median=buildMedian(evenPositionArray);

    return median;
}

function buildEvenPositionArray(arr){

    var evenPositionArray=[];

    for(var i=0;i<arr.length;i++)
    {
        if((i+1)%2 === 0)
        {
            evenPositionArray.push(arr[i]);
        }
    }

    return evenPositionArray;
}

function buildMedian(evenPositionArray) {

    var median;
    var sequence=evenPositionArray.sort(sortNumber);
    var len=sequence.length;

    if((len%2)===0) {
        median=(sequence[len/2]+sequence[len/2-1])/2;

    }
    else{

        median=sequence[parseInt(len/2)];
    }

    return median;
}

function sortNumber(a,b){

    return a-b;
}
module.exports = calculate_median;
