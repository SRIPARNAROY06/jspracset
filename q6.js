function count(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  };
  
  console.log(count("Happy Holidays everyone"));
  