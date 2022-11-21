//     Преобразовать строку в массив слов. Напишите функцию stringToArray(str), которая преобразует строку в массив слов.
function stringToArray(str){
	return str.split(" ");
}
//     Напишите функцию deleteCharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
function deleteCharacters(str, length){
	return str.slice(0, length);
}
//     Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.
function insertDash(str) {
	return str.trim().toUpperCase().split(" ").join("-");
}
//     Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.
function func1(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
//     Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
function capitalize(str) {
	return str.replace(/(^|\s)\S/g, a => {return a.toUpperCase()});
}
//     Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
function changeRegister(str) {
	let newString = "";
	for(let i = 0; i < str.length; i++){
		if (str[i] === str[i].toUpperCase()) {
			newString += str[i].toLowerCase();
			} else {
			newString += str[i].toUpperCase();
		}
	}
		return newString;
}
//     Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
function removeChar(str) {
	return str.replace(/[^А-Яа-яA-Za-z0-9]/g, "");
}
//    Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение.
function zeros(num, len) {
	let countZero = len - (num + '').length;
		for (numZero = ''; countZero > 0; countZero--) {
			numZero += 0;
		}
		return `${numZero}` + `${num}`;
}
//     Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
function comparison(str1, str2) {
	let result = str1.toLowerCase() === str2.toLowerCase();
	return result;
}
//     Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.
function insensitiveSearch(str1, str2) {
	let result = str1.indexOf(`${str2}`);
	return (result => 0) ? true : false;  
}
//     Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.
function initCap(str) {
return str.toLowerCase().replace(/(^|\s)\w/g, a => {return a.toUpperCase()}).split(" ").join('');
}
//     Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.
function initSnake(str) {
	return str.replace(/([A-Z])/g, ' $1').toLowerCase().trim().split(" ").join("_");
}
//     Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.
function repeatStr(str, n) {
	let newString = "";
	for(let i = 0; i < n; i++){
			newString += str;
		}
		return newString;
}
//     Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.
function endsWith(str, str1){
	return str.endsWith(`${str1}`);
}
//     Напишите функцию insert(str, substr, pos = 'before'), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.
function insert(str, substr, pos){
	let array = str.split('');
	array.splice(pos, 0, substr);
	return array.join('');
}
//     Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb."
function limitStr(str, n, symb = "..."){
	let newString = "";
	if(str.length > n) {
		for(let i = 0; i < n; i++) {
		newString += str[i]; }
	} else {
		newString = str;
	}
	return `${newString}` + `${symb}`;
}
//     Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.
function count(str, stringsearch){
	return str.split(`${stringsearch}`).length - 1;
}
//     Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
function strip(str){
	return str.trim().replace(/\s+/g,' ');
}
//     Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.
function cutString(str, n){
	return str.split(" ").splice(0, n).join(" ");
}
//     Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.
function findWord(word, str){
	return RegExp('\\b'+ word +'\\b').test(str);
}

module.exports = {
        stringToArray,
        deleteCharacters,
        insertDash,
        func1,
        capitalize,
        changeRegister,
        removeChar,
        zeros,
        comparison,
        insensitiveSearch,
        initCap,
        initSnake,
        repeatStr,
        endsWith,
        insert,
        limitStr,
        count,
        strip,
        cutString,
        findWord,
};
