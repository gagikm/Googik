
var val = document.getElementById("search").value;


function showall(){
var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";


keyboardEvent[initMethod](
                   "keypress", // event type : keydown, keyup, keypress
                    true, // bubbles
                    true, // cancelable
                    window, // viewArg: should be window
                    false, // ctrlKeyArg
                    false, // altKeyArg
                    false, // shiftKeyArg
                    false, // metaKeyArg
                    39, // keyCodeArg : unsigned long the virtual key code, else 0
                    0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
);
    
//         document.getElementById("search").focus();
        document.getElementById("search").value = "|";
//        document.dispatchEvent(keyboardEvent);
//    if(window.length>500)
         document.getElementById("search").click();
             document.getElementById("search").focus();


}

// TODO: Customize accepted search values and sites to redirect to.

function f(id){
    var val = document.getElementById("search").value;
    switch(val.toLowerCase()) {
    case "linkedin":
    case "|linkedin":
            window.location.href = 'http://linkedin.com/in/gagikm';
            break;
    case "resume":  
    case "|resume":  
        document.getElementById("search").value = "Press Enter to Download Resume [ PDF ]";
        break;
    case "press enter to download resume [ pdf ]":
        window.location.href = 'https://www.dropbox.com/s/jdyfqbb2v1wgz2t/updatedResume.pdf?dl=0';
        break;
    case "facebook":
    case "|facebook":
        window.location.href = 'http://facebook.com/GagikMovsisyan';
        break;
    case "projects":
    case "|projects":
    case "github": 
    case "|github": 
        window.location.href = 'http://github.com/gagikm';
        break;
    case "twitter":
    case "|twitter":
        window.location.href = 'http://twitter.com/gagikm';
        break;
    case "birthday":
    case "|birthday":
        document.getElementsByTagName("body")[0].style = "background-image:url('img/birthday.png'); background-fit:contain";
        document.getElementById("search").value = "May 25";
        break;
    case "education": case "school": case "university": case "college": case "ucla":
    case "|education": case "|school": case "|university": case "|college": case "|ucla":
        document.getElementsByTagName("body")[0].style = "background-image:url('img/ucla.png'); background-size:100%";
        document.getElementById("search").value = "University of California, Los Angeles";
        break;
    case "university of california, los angeles":
        window.location.href = 'http://www.ucla.edu';
        break;
    case "clear":
    case "|clear":
    case "reset":
    case "|reset":
    case "clean":
    case "|clean":
            document.getElementsByTagName("body")[0].style ="" ;
            break;
    case "name": 
    case "|name": 
    case "full name": 
    case "|full name": 
    case "gagik who": case "gagik who?":
    case "|gagik who": case "|gagik who?":
            document.getElementById("search").value = "Gagik Movsisyan";
            break;
    case "email": case "send email": case "contact":
    case "|email": case "|send email": case "|contact":
            window.location.href = 'mailto:gagikm@ucla.edu';
            break;
    case "clappy bear": case "clappybear":
    case "|clappy bear": case "|clappybear":
            window.location.href = 'http://gagikm.github.io/clappybear';
            break;
    case "armateur": case "lahacks": case "leapmotion": case "leap motion":
    case "|armateur": case "|lahacks": case "|leapmotion": case "|leap motion":
            window.location.href = 'https://www.leapmotion.com/blog/la-hack-finalists-armateur-robotic-arm-leap-motion-bluetooth/';
            break;

    default:
        var val = document.getElementById("search").value;
        window.location.href ='https://www.google.com/?gws_rd=ssl#q='+'Gagik Movsisyan:  '+val;
            break;
            
} 

}

document.getElementById("gagiksearch").onclick = function() {
            val = document.getElementById("search").value;
            f(val);
};
function searchKeyPress(e)
    {
        val = document.getElementById("search").value;

        // look for window.event in case event isn't passed in
        if (typeof e == 'undefined' && window.event) { e = window.event; }
        if (e.keyCode == 13)
        {
            f("gagiksearch");
        }
    }
