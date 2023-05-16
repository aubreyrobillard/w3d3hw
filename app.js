// jQuery Magic
// Intro
// You are now a wizard and you will no longer hard code html during your time at Hogwarts (or the duration of this assignment)
// You will make things appear and disappear (and more) with the magic of jQuery!
// This homework is recommended to be done with a Harry Potter theme. But if you are unfamiliar with Harry Potter, that's cool, you can make up all your wizard details.


$(() => {
	$("body").append($('<div>').attr('id', 'container'))
    
    let $container = $("#container")
    
    $container.append($('<h1>').text("Hogwarts"))
    // console.log($container)
    console.log(document)

    const $img = "https://i.pinimg.com/originals/41/8f/9f/418f9ffb3c71bea43dab323e3306adc4.jpg"

    $container.append($('<h2>').text("Aubrey A Robillard"))
    $container.append($('<h3>').text("Slytherin"))
    $container.append($('<h4>').attr('class', 'dog').text("Koa Boa"))
    $container.append($('<h4>').text("Holly Wand with Unicorn Hair Core")).append($("<img>").attr('src', $img))
    $container.append($('<h5>').text("Your wand is made from rarely used Holly wood, with a core of Unicorn Hair. This type of wand bonds deeply with its first owner, sacrificing some power for reliability and consistency. This probably means that you're a very dependable person. Users are rarely seen to defect to the dark side, which has led to some witches and wizards thinking of Unicorn Hair wands as a symbol of the light."))

    const $ul = $('<ul>')
    
    $container.append(($ul).attr('storage', 'trunk'))

        $ul.append($('<li>').text("Butter Beer"))
        $ul.append($('<li>').addClass("secret").text("Invisibility Cloak"))
        $ul.append($('<li>').addClass("secret").text("Magic Map"))
        $ul.append($('<li>').addClass("secret").text("Time Turner"))
        $ul.append($('<li>').addClass("dog").text("Leash"))
        $ul.append($('<li>').text("Bertie Bott's Every Flavor Jelly Beans"))
});