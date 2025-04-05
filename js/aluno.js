"use strict";
var escola;
(function (escola_1) {
    class Aluno extends escola_1.Pessoa {
        constructor(matricula, curso, escola, nota1, nota2, nota3, nota4) {
            super();
            this._matricula = matricula;
            this._curso = curso;
            this._escola = escola;
            this._nota1 = nota1;
            this._nota2 = nota2;
            this._nota3 = nota3;
            this._nota4 = nota4;
        }
        get matricula() {
            return this._matricula;
        }
        set matricula(matricula) {
            this._matricula = matricula;
        }
        get curso() {
            return this._curso;
        }
        set curso(curso) {
            this._curso = curso;
        }
        get escola() {
            return this._escola;
        }
        set escola(escola) {
            this._escola = escola;
        }
        get nota1() {
            return this._nota1;
        }
        set nota1(nota1) {
            this._nota1 = nota1;
        }
        get nota2() {
            return this._nota2;
        }
        set nota2(nota2) {
            this._nota2 = nota2;
        }
        get nota3() {
            return this._nota3;
        }
        set nota3(nota3) {
            this._nota3 = nota3;
        }
        get nota4() {
            return this._nota4;
        }
        set nota4(nota4) {
            this._nota4 = nota4;
        }
    }
    escola_1.Aluno = Aluno;
})(escola || (escola = {}));
