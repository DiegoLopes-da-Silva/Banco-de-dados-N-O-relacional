/*
1)
db.createUser({ 
	user: "cidadao",
	pwd: "1234",
	roles: [ { role: "read",
	db: "Detran" } ]
})

2)
db.createUser({ 
	user: "Agente",
	pwd: "abc123",
	roles: [ { role: "readWrite",
	db: "Detran" } ]
})

3)
db.createUser({ 
	user: "AdminGoverno",
	pwd: "admin321",
	roles: [ { role: "userAdmin",
	db: "Detran" } ]
})

4)
db.getUsers()
db.getUser("Agente")

5)
db.changeUserPassword("cidadao", "novaSenha456")

6)
db.createRole({
role: "visualizadorProdutos",
privileges: [
{
resource: { db: "PetShop", collection: "produtos" },
actions: [ "find" ]
}
],
roles: []
})

7)
db.createUser({
	user: "balconista",
	pwd: "bal123",
	roles: [ { role: "read",
	db: "PetShop" } ]
})

db.updateUser("balconista", {
pwd: "bal123",
roles: [ { role: "visualizadorProdutos", db: "PetShop" } ]
})

8)
db.grantPrivilegesToRole("visualizadorProdutos", [
{ resource: { db: "PetShop", collection: "produtos"
}, actions: [ "count" ] } ]) <- count da erro no mongo por algum motivo, então usei find

9)
db.revokeRolesFromUser("balconista", [ { role:
"visualizadorProdutos", db: "PetShop" } ])
db.dropRole("visualizadorProdutos")

10)
db.createUser({ 
	user: "rootUser",
	pwd: "super123",
	roles: [ { role: "root",
	db: "PetShop" } ]
}) */