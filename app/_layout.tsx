import { SQLiteProvider } from "expo-sqlite";
import { Slot } from "expo-router";


export default function Layout() {
    const inicializeDatabase = async (database) => {
        await database.execAsync(
            `
            DROP TABLE cliente;
            CREATE TABLE IF NOT EXISTS cliente (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                email TEXT UNIQUE, 
                cep TEXT,
                endereco TEXT,
                numero INTEGER,
                telefone TEXT,
                senha TEXT,
                complemento TEXT,
                planoSaude TEXT
            );`
        );
    };

    return (
        <SQLiteProvider databaseName="agendamentoDatabase.db" onInit={inicializeDatabase}>
            <Slot/>

        </SQLiteProvider>
    )
}