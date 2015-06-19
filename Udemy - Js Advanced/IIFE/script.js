"use strict";

(function(){
	console.log("Hello World!");
})();

var declaredFunc = function declaredFunc(){
	console.log("Hello Nada!");
}();


!function() {
	console.log('Função maluca');
}();

1,function nomeada(){
	console.log('Outra maluca!');
}();

(function minhaPagina(global){
	var funcLocal = function local(){
		console.log('Estou aqui');
	};
	
	global.funcGlobal = function glFunc(){
		console.log('Eu sou global');
	};
})(window);

funcGlobal();
try {
	minhaPagina.funcLocal();	
} catch(e){
	console.log(e);
}


console.log('--------Fim sobre escopo---------');
var contador = function contador(){
	var i = 0;
	return {
		incrementar: function incremment(){
			return ++i;
		},
		set: function add(val){
			i = val
		},
		get: function get(){
			return i;
		}
	};
};

/* Apenas fora do strict mode
var meuContadorConcreto = contador();
with(console){
	with(meuContadorConcreto){
		log(incrementar());
		log(set(3));
		log(get())
	}
};
*/

console.log('--------------');

var contadorconcreto = contador();
console.log(contadorconcreto.incrementar());
contadorconcreto.set(2);
console.log(contadorconcreto.get());

console.log('-Novo Objeto contador');

var contadorSegundo = contador();
console.log(contadorSegundo.get());

console.log('--------------');

var loop = function loopFunc(){
	for (let i = 0; i < 3; i++){
		console.log(i);
	}
	try{
		console.log(i);	
	}catch (e){
		console.log(e);
	}
	
}();










