( function () {
    var c = 0;
    var m = Math.floor( 10000 * Math.random() );
    for ( var a=0; a<m; a++)
        for ( var b=a; b<10000; b++ )
            c = a * b - a + b;
        
    console.log('Fine esecuzione script esterno #1 - m: ' + m);
}
)();