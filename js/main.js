/*
    JavaScript made for Classwork only.
    Author: Avijit Roy
    Version: 1.0.2
    Twiter: @avijitroykabyo

*/
var curimage = 0;
var frequency = 3000;

function showNext() //Function 1
    { 
        curimage++;
        if (curimage > 10)
        {
            curimage--;
            alert('This is last picture in the catalog. Click Previous');
        }
        document.images.slide.src = "images/a" + curimage + ".jpg"; showSlideNum();
    }

function showSlideNum() //Function 2
    {
        document.getElementById('counter').value = curimage;
    }

function showPrev() //Function 3
    { 
        curimage--;
        if (curimage < 1)
        {
            curimage++;
            alert("This is First picture in the catalog, Click Next!");
        }
        document.images.slide.src = "images/a" + curimage + ".jpg"; showSlideNum()
    }

function clearImage() //Function 4
    { 
        curimage = 0;
        showSlideNum();
    }

function setFrequency(newFrequency) //Function 5
    { 
        frequency = newFrequency;
       // alert(frequency);
    }

function showAuto() //Function 6
    { 
        curimage++;
        if (curimage > 10)
        {
            curimage = 0;
        }
        document.images.slide.src = 'images/a' + curimage + '.jpg';
        showSlideNum();
        setTimeout('showAuto()', frequency);
    }

function showStop()
    {
        document.location = document.location; //Function 7
    }