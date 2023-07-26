function fact(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    return num * fact(num - 1);
  }
  console.log('ans', fact(10)); 
  let gv = 'prisha';
  function f1() {
    let lv = 'faldu';
    console.log('Global: ', gv);
    console.log('Local: ', lv);
  }
  function f2() { 
    f1();
  }
  f2();