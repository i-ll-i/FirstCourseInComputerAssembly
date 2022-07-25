let _days = 18 ;
let _hours = 0 ;
let _minutes = 0 ;
let _seconds = 0 ;

let _arrDays = ['День','Дня','Дней'];
let _arrHours = ['Час','Часа','Часов'];
let _arrMinutes = ['Минута','Минуты','Минут'];
let _arrSeconds = ['Секунда','Секунды','Секунд'];

let _deviceMenu = document.querySelector('.device-menu__list-link');
let _promptWindow = document.querySelector('.pop-up__notification');

function decreaseInTime() {
    
    let $date = new Date();

    let $hours = $date.getHours();
    let $minutes = $date.getMinutes();
    let $seconds = $date.getSeconds();
    
    if ( $hours == 0 && $minutes == 0 && $seconds == 0 || _days == 18 ) {

        _days-- ;

    }

    _hours = 23 - $hours ;
    _minutes = 59 - $minutes ;
    _seconds = 59 - $seconds ;

}

function timeOutput() {

    console.log(`${_days}:${_hours}:${_minutes}:${_seconds}`) ;

    if ( _days < 10 ) {

        document.getElementById('counter__number-first').innerHTML = '0' + String(_days) ;

    } else {

        document.getElementById('counter__number-first').innerHTML = _days ;

    }

    if ( _hours < 10 ) {

        document.getElementById('counter__number-second').innerHTML = '0' + String(_hours) ;

    } else {

        document.getElementById('counter__number-second').innerHTML = _hours ;

    }

    if ( _minutes < 10 ) {

        document.getElementById('counter__number-three').innerHTML = '0' + String(_minutes) ;

    } else {

        document.getElementById('counter__number-three').innerHTML = _minutes ;

    }

    if ( _seconds < 10 ) {

        document.getElementById('counter__number-four').innerHTML = '0' + String(_seconds) ;

    } else {

        document.getElementById('counter__number-four').innerHTML = _seconds ;

    }

    switch ( _days ) {

        case '1':
            document.getElementById('counter__text-first').innerHTML = _arrDays[0] ;
            break

        case '2':
        case '3':
        case '4':
            document.getElementById('counter__text-first').innerHTML = _arrDays[1] ;
            break
        
        default:
            document.getElementById('counter__text-first').innerHTML = _arrDays[2] ;
            break
    }

    switch ( _days ) {

        case '1':
            document.getElementById('counter__text-first').innerHTML = _arrDays[0] ;
            break

        case '2':
        case '3':
        case '4':
            document.getElementById('counter__text-first').innerHTML = _arrDays[1] ;
            break
        
        default:
            document.getElementById('counter__text-first').innerHTML = _arrDays[2] ;
            break
    }

    switch ( _hours ) {

        case '1':
            document.getElementById('counter__text-second').innerHTML = _arrHours[0] ;
            break

        case '2':
        case '3':
        case '4':
            document.getElementById('counter__text-second').innerHTML = _arrHours[1] ;
            break
        
        default:
            document.getElementById('counter__text-second').innerHTML = _arrHours[2] ;
            break
    }

    switch ( _minutes ) {

        case '1':
            document.getElementById('counter__text-three').innerHTML = _arrMinutes[0] ;
            break

        case '2':
        case '3':
        case '4':
            document.getElementById('counter__text-three').innerHTML = _arrMinutes[1] ;
            break
        
        default:
            document.getElementById('counter__text-three').innerHTML = _arrMinutes[2] ;
            break
    }

    switch ( _seconds ) {

        case '1':
            document.getElementById('counter__text-four').innerHTML = _arrSeconds[0] ;
            break

        case '2':
        case '3':
        case '4':
            document.getElementById('counter__text-four').innerHTML = _arrSeconds[1] ;
            break
        
        default:
            document.getElementById('counter__text-four').innerHTML = _arrSeconds[2] ;
            break
    }

}

setInterval(() => {

    decreaseInTime();
    timeOutput();

}, 1000);

function deviceMenuOpening() {
    
    _deviceMenu.style.display = 'block';

}

function deviceMenuClosure() {
    
    _deviceMenu.style.display = 'none';

}

function openingHint() {

    _promptWindow.style.display = 'block'
    _promptWindow.style.top = window.pageYOffset + 'px'

}

function closureHint() {

    _promptWindow.style.display = 'none'

}