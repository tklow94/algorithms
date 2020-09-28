//return reversed string
// if string.length <= 1, return string
// recursion slice at first

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) +str[0];
}


reverse('rovert')// trevor