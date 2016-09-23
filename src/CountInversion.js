
var countInversion = function(data){
  return bubbleSort(data);
}

function bubbleSort(array)
{
    var count = 0 ;
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < array.length-1; i++) {
            if (array[i] > array[i+1]) {
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
                count ++;
            }
        }
    } while (swapped);
    return count;
}

module.exports = countInversion;
