
import { useSQLiteContext } from "expo-sqlite";

export type ClienteDatabase = {
    nome: string 
    email: string 
    cep: string 
    endereco: string 
    numero: number
    telefone: string 
    senha: string
    complemento: string
    planoSaude: string
}

export function clienteDatabase(){

    const database = useSQLiteContext()

    async function listar( ) {
        try{
            const resultado = await database.getAllAsync<ClienteDatabase>("SELECT * FROM cliente;")
            return resultado
        }catch(error){
            throw error 
        }
    }

    async function cadastrar (data: ClienteDatabase) {
        try{
            console.log(data.complemento)
            await database.execAsync(`
                INSERT INTO cliente (nome, email,cep,endereco,numero, senha, telefone, complemento, planoSaude) 
                VALUES('${data.nome}','${data.email}', '${data.cep}' ,'${data.endereco}',${data.numero},'${data.senha}','${data.telefone}','${data.complemento}', '${data.planoSaude}')
                `)
            return true
        }catch(error){
            throw error 
        }
    }

async function autenticarUsuario(email: string, senha: string) {
    try {
      const resultado = await database.getAllAsync<ClienteDatabase>(
        "SELECT * FROM cliente WHERE email = ? AND senha = ?;",
        [email, senha]
      );
      return resultado.length > 0;
    } catch (error) {
      throw error;
    }
  }

  return { listar, cadastrar, autenticarUsuario };
}