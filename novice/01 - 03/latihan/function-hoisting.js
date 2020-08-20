function exampleScope() {
    foo(); // => "selamat datang"
    
    function foo () {
        console.log('selamat datang')
    }
}