class LivroDao {

    constructor(db) {
        this._db = db
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                `SELECT * FROM livros`,
                (err, resultados) => {
                   if (err) return reject('Não foi possível listar os livros')

                   resolve(resultados)
                })
        })
    }
}

module.exports = LivroDao