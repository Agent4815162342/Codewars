function alphanumeric(str){
  return (str.search(/[\W\_]/i) == -1 && str.length > 0 ) ? true : false 
}