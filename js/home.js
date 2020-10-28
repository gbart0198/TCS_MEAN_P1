function imgHover(language) {
    const pyString = "Python is the first language I learned. I have 3 years experience in python development. " + 
        "I taught myself python the summer before my " +
        "sophomore year because I wanted to become a software developer rather than a financial analyst.";
    const javaString = "Java is the language I have formal education in. I learned it at college my sophomore year " +
        "and now have 2 years experience in java development. I also received formal training during my TCS ILP.";
    
    const cppString = "C++ is my current focus language along with Rust. I know enough C++ to do most algorithms, " +
        "although in an inefficient manner for most. I want to learn more C++ libraries and data structures so that I " +
        "can use it professionally.";

    switch (language) {
        case('py'): {
            document.getElementById("imgHover").innerHTML = pyString;
            break;
        }
        case('cpp'): {
            document.getElementById("imgHover").innerHTML = cppString;
            break;
        }
        case('java'): {
            document.getElementById("imgHover").innerHTML = javaString;
            break;
        }
    }
}

function imgLeave() {
    document.getElementById("imgHover").innerHTML = "";
}