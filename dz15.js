


    $('#butk').click(function () {
        f1('камень')
    })
    $('#butn').click(function () {
        f1('ножницы')
    })
    $('#butb').click(function () {
        f1('бумага')
    })

    let comp = ''
    let hun = ''
    const turn = ['камень', 'ножницы', 'бумага']
    const win = ['каменьножницы', 'ножницыбумага', 'бумагакамень']
    const loose = ['каменьбумага', 'нажницыкамень', 'бумаганожницы']
    const draw = ['каменькамень', 'ножницыножницы', 'бумагабумага']
    let scoreh = 0
    let scorec = 0

    function f1(x) {
    console.log(x)
         hun = x
        let r = Math.floor(Math.random() * 3)
        comp = turn[r]
          console.log(hun,comp)
       $('#out').text(' У Малфоя '+ comp)
        proverka()
    }

    function proverka() {

        let result = hun + comp
        if (win.includes(result)) {
             console.log('pobeda')
            scoreh += 1
            $('#out').append(' Гарри победил ' + scoreh + ' : ' + scorec)

        } else if (loose.includes(result)) {
             console.log('ne povezlo')
            scorec += 1
            $('#out').append(' Малфой победил ' + scoreh + ' : ' + scorec)
        } else {
             console.log('nighya')
            $('#out').append(' ничья ' + scoreh + ' : ' + scorec)
        }

    }
