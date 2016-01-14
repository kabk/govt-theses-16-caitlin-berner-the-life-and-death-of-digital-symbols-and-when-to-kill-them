titles = {
    'icon1' : ["work/phone_old.jpg", "work/floppy.png","work/phone_new.jpg"],
    'icon2' : ["work/phone_old.jpg", "work/floppy.png","work/phone_new.jpg"],
}

$('img').on('click', function() {
    // wordt getriggerd wanneer we op een h1 klikken
    // met $(this) krijgen we het jQuery element
    // van waar op geklikt is
    // waar we vervolgens de jQuery methodes op
    // toe kunnen passen
    
    // met $(this).attr('id') vinden we het id
    // attribuut bv ‘dit-is-een-id’
    var id = $(this).attr('id');
    
    
    // vanuit het titles object zoeken we de array op
    // die hoort bij deze id
    var to_cycle = titles[id];

    // Dit is de tekst van de h1 zoals die nu is
    var currentImg = $(this).attr('src');
    // check waar 
    // hoe ver zijn we in de array
    var position = to_cycle.indexOf(currentImg);
    // als we bij het laatste element zijn
    if (position === to_cycle.length - 1) {
        // gaan we terug naar het begin
        position = 0;
    } else {
        // en anders gaan we eentje verder
        position += 1;
    }
    // zet de nieuwe tekst
    $(this).attr('src', to_cycle[position]);
});