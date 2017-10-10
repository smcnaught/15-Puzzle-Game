$(document).ready(function () {
    var rand = '';
    var holdRandNumbArr = [];
    var htmlNumbersStart = '<div class="numbBox num';
    var htmlNumbersEnd = '</div>';
    var htmlEndPlusBreak = '</div><br>';
    var totalHtml = htmlNumbersStart + rand + htmlNumbersEnd;
    var totalHtmlPlusBreak = htmlNumbersStart + rand + htmlEndPlusBreak;

    function generateRandom() {
        for (var i = 1; i < 1500; i++) {
            rand = Math.floor(Math.random() * 15) + 1;
            // if random number isn't already in array then push
            holdRandNumbArr.indexOf(rand) === -1 ? holdRandNumbArr.push(rand) : stop;
        }
    }

    function writeNumbers() {
        for (var i = 0; i <= 15; i++) {
            var count = i + 1;
            if (i !== 4 || i !== 8 || i !== 12 || i !== 15) {
                $('.box').append(htmlNumbersStart + count + '">' + holdRandNumbArr[i] + htmlNumbersEnd);
            } else if (i == 15){
                $('.box').append('<div class="num16">hello</div>');
            }
            else {
                $('.box').append(htmlNumbersStart + holdRandNumbArr[i] + htmlEndPlusBreak);
            }
        }
    }  
    
    generateRandom();
    writeNumbers();
    
    // generate an onclick function for each of the numbers. If clicked they should move.
    $(".num1").click(function () {
        alert("The number was clicked.");
    });


});