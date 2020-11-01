var btn = document.getElementById('cta');
var btn2 = document.getElementById('cta2');

    //botão clique aqui - faz a animação

    btn.onclick = function() {
        var morphing = anime({
            targets: '.polymorph',
            points: [
                {value: '215,110 0, 110 0,0 47.7, 0 67, 76'},
                {value: '215,110 0, 110 0,0 0, 0 67, 76'}
            ],
            easing: 'easeOutQuad',
            duration: 1200,
            loop: false
        });

        anime({
            targets: '#blip',
            opacity: 1,
            duration: 1500,
            translateY: 150
        })

        //botão voltar - desfaz a animação acima
        
        var promise = morphing.finished.then(( ) => {

            btn2.onclick = function() {
            var morphing = anime({
                targets: '.polymorph',
                points: [
                    {value: '215,110 0, 110 0,0 47.7, 0 67, 76'},
                    {value: '215,110 0,110 0,0 47.7,0 215,0'}
                ],
                easing: 'easeOutQuad',
                duration: 1200,
                loop: false
            });

            anime({
                targets: '#blip',
                opacity: 0,
                duration: 500,
                translateY: -800
            })

        };
    })
}