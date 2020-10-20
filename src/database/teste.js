const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')
Database.then(async (db) => {
    // inserir dados na tabela 
     /*await saveOrphanage(db, {
        lat: "-20.1988734",
        lng: "-40.2604405",
        name: "Lar de amor",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "27998217807",
        images: [
            "https://images.unsplash.com/photo-1601564267677-a36d03ec2be5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1581701391032-33cb5e7b44fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amor para dar.",
        opening_hours: "Horário de visita | 08h ~ 18h",
        open_on_weekends: "1"
    }) */


    // consultar todos os dados da tabela
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    //console.log(selectedOrphanages)

    // consultar pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    //console.log(orphanage)

    //deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id='2'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id='3'"))
})