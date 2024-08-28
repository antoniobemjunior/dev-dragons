import { Personagem } from "./personagem.js"

export class Mago extends Personagem {
    elementoMago
    levelMagico
    inteligencia
    static descricao = 'O mago é implacável!'
    static tipo = 'Mago'

    constructor(nome, elementoMago, levelMagico, inteligencia){
        super(nome)
        this.elementoMago = elementoMago
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }

    obterInsignia() {
        if(this.levelMagico >= 5 && this.inteligencia >= 5) {
            return `Mestro do ${this.elementoMago}`
        } 
        return super.obterInsignia()
    }

}