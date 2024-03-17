'use strict';

const id = document.querySelector('#id'),
  psword = document.querySelector('#psword'),
  loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };
}

//Domㅡ-->문서 객체 모델: 인터페이스, 자바스크립트가 HTML에 존재하는 데이터를 가져와 제어할 수 있다!!
