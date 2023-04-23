


    $('#butk').click(function () {
        f1('палочка')
    })
    $('#butn').click(function () {
        f1('камень')
    })
    $('#butb').click(function () {
        f1('мантия')
    })

    let comp = ''
    let hun = ''
    const turn = ['палочка', 'камень', 'мантия']
    const win = ['палочкакамень', 'каменьмантия', 'мантияпалочка']
    const loose = ['палочкамантия', 'каменьпалочка', 'мантиякамень']
    const draw = ['палочкапалочка', 'каменькамень', 'мантиямантия']
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
