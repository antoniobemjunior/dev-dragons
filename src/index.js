import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoAntonio = new Mago('Antonio', 4, 'Fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'Gelo', 7, 10)
const arqueiroBruno = new Arqueiro('Bruno', 7, 10)
const arqueiroMagoJose = new ArqueiroMago('Jose', 7, 10, 'ar', 4, 8)
const guerreiroAdao = new Guerreiro('Adao', 8)

const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoJose, guerreiroAdao]

new PersonagemView(personagens).render()