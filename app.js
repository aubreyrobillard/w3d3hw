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

    ////// Year 2 My info ///////
    const $img = ($('<img>'))
    const $imgSource = "https://i.pinimg.com/originals/41/8f/9f/418f9ffb3c71bea43dab323e3306adc4.jpg"
    

    $container.append($('<h2>').text("Aubrey A Robillard"))
    
    $container.append($('<h3>').text("Slytherin"))
    
    $container.append($('<h4>').attr('class', 'dog').text("Koa Boa"))
    
    let $wand = ($('<h4>').attr('class', 'wand').text("Holly Wand with Unicorn Hair Core")).append($img.attr('src', $imgSource))
    let $wand2 = ($('<h4>').attr('class', 'wand2').text("Elder Wand"))
    
    
    $container.append($wand)
    $container.append($wand2)

    let $wandDescrip = ($('<h5>').text("Your wand is made from rarely used Holly wood, with a core of Unicorn Hair. This type of wand bonds   deeply with its first owner, sacrificing some power for reliability and consistency. This probably means that you're a very dependable person. Users are rarely seen to defect to the dark side, which has led to some witches and wizards thinking of Unicorn Hair wands as a symbol of the light."))    
    
    let $wandDescrip2 = ($('<h5>').text("There are gaps, of course, and long ones, where it vanishes from view, temporarily lost or hidden; but it always resurfaces. It has certain identifying characteristics that those who are learned in wandlore recognise... Whether it needs to pass by murder, I do not know. Its history is bloody, but that may be simply due to the fact that it is such a desirable object, and arouses such passions in wizards. Immensely powerful, dangerous in the wrong hands, and an object of incredible fascination to all of us who study the power of wands. — Garrick Ollivander discussing the Elder Wand."))
    
    $container.append($wandDescrip)
    $container.append($wandDescrip2)

    ///// Year 3 adding UL ///////
        const $ul = $('<ul>')
    
    $container.append(($ul).attr('storage', 'trunk'))

        $ul.append($('<li>').attr('id', 'beer').text("Butter Beer"))
        $ul.append($('<li>').addClass("secret").text("Invisibility Cloak"))
        $ul.append($('<li>').addClass("secret").text("Magic Map"))
        $ul.append($('<li>').addClass("secret").text("Time Turner"))
        $ul.append($('<li>').addClass("dog").text("Leash"))
        $ul.append($('<li>').text("Bertie Bott's Every Flavor Jelly Beans"))


   {
     $container.append($("<h5>").addClass("title").text("Spring 2017"))
    
    //// Year 4 Add a table //////
    
    let $table = ($('<table>'))
    let $thead = ($('<thead>'))
    let $tbody = ($('<tbody>'))
    
    $container.append($table)
        $table.append($($thead).append($("<th>").text("Day")).append($("<th>").text("Classes")))
        
        $table.append($tbody).append($('<tr>').append($('<td>').text("Monday")).append($('<td>').text("Herbology, Tranfiguration, Potions")))
        
        $table.append($tbody).append($('<tr>').append($('<td>').text("Tuesday")).append($('<td>').text("Charms, Histroy of Magic, Quidditch Practice")))
        
        $table.append($tbody).append($('<tr>').append($('<td>').text("Wednesday")).append($('<td>').text("Herbology, Deffense Aginast the Dark Arts, Quidditch Practice")))
        
        $table.append($tbody).append($('<tr>').append($('<td>').text("Thursday")).append($('<td>').text("Charms, Tranfiguration, Quidditch Practice")))
        
        $table.append($tbody).append($('<tr>').append($('<td>').text("Friday")).append($('<td>').text("Potions, History of Magic, Defense Against the Dark Arts")))

   }

    $img.remove()
    $wand.remove()
    $wandDescrip.remove()
    $('#beer').remove()    

    $wand2.css("color", "olive")

   


});



