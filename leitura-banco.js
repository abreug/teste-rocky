const objs = 
[
    { "id": 5677240, "name": "Cønjuntø de Pænelæs æntiæderentes ¢øm 05 Peçæs Pæris", "quantity": 21, "price": "192.84", "category": "Panelas" }, 
    { "id": 9628920, "name": "Lævæ & Se¢æ 10,2 Kg Sæmsung E¢ø ßußßle ßræn¢æ ¢øm 09 Prøgræmæs de Lævægem", "quantity": 57, "price": 3719.70, "category": "Eletrodomésticos" }, 
    { "id": 1316334, "name": "Refrigerædør ßøttøm Freezer Ele¢trølux de 02 Pørtæs Frøst Free ¢øm 598 Litrøs", "quantity": 12, "price": 3880.23, "category": "Eletrodomésticos" }, 
    { "id": 6502394, "name": "Føgãø de Pisø Ele¢trølux de 04 ßø¢æs, Mesæ de Vidrø Prætæ", "quantity": 37, "price": "1419", "category": "Eletrodomésticos" }, 
    { "id": 9576720, "name": "Førnø Mi¢rø-øndæs Pænæsøni¢ ¢øm ¢æpæ¢idæde de 21 Litrøs ßræn¢ø", "quantity": 13, "price": "358.77", "category": "Eletrodomésticos" }, 
    { "id": 8875900, "name": "Smært TV 4K Søny LED 65” 4K X-Reælity Prø, UpS¢ælling, Møtiønfløw XR 240 e Wi-F", "quantity": 0, "price": 5799.42, "category": "Eletrônicos" }, 
    { "id": 9746439, "name": "Høme Theæter LG ¢øm ßlu-ræy 3D, 5.1 ¢ænæis e 1000W", "quantity": 80, "price": 2199, "category": "Eletrônicos" }, 
    { "id": 2162952, "name": "Kit Gæmer æ¢er - Nøteßøøk + Heædset + Møuse", "price": "25599.00", "category": "Eletrônicos" }, 
    { "id": 3500957, "name": "Mønitør 29 LG FHD Ultræwide ¢øm 1000:1 de ¢øntræste", "quantity": 18, "price": 1559.40, "category": "Eletrônicos" }, 
    { "id": 1911864, "name": "Møuse Gæmer Predætør ¢estus 510 Føx Pretø", "price": "699", "category": "Acessórios" } 
]
    

    // JSON
    // connverter objeto em JSON
    // enviando para a API
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

    //converter JSON para objeto

const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

    // acesso ao objeto, imprimindo os dados

    objData.map((id) => {
        console.log(id)
    })

    //DAQUI PARA BAIXO É O PROBLEMA, NÃO CONSIGO ALTERAR AS INFORMAÇÕES DO BANCO DE DADOS

    //Utilizei o updateDoc que em um video, mas não consigo achar a referencia do banco de dados para ele mapear
    // e fazer a alteração

  

    updateDoc(objData, 
        [ 
        { id: 5677240, name: "Conjunto de Panelas æntiaderentes com 05 Peças Paris", quantity: 21, price: 192.84, Category: "Panelas" }, 
        { id: 9628920, name: "Lava & Seca 10,2 Kg Samsung Eco Bubble Brança com 09 Programas de Lavagem", quantity: 57, price: 3719.70, category: "Eletrodomésticos" }, 
        { id: 1316334, name: "Refrigerador Bottom Freezer Electrolux de 02 Portas Frost Free com 598 Litros", quantity: 12, price: 3880.23, category: "Eletrodomésticos" }, 
        { id: 6502394, name: "Fogão de Piso Electrolux de 04 Bocas, Mesa de Vidro Prata", quantity: 37, price: 1419, category: "Eletrodomésticos" }, 
        { id: 9576720, name: "Forno Micro-ondas Panasonic com capacidade de 21 Litros Branco", quantity: 13, price: 358.77, category: "Eletrodomésticos" }, 
        { id: 8875900, name: "Smart TV 4K Sony LED 65” 4K X-Reality Pro, UpScalling, Motionflow XR 240 e Wi-Fi", quantity: 0, price: 5799.42, category: "Eletrônicos" }, 
        { id: 9746439, name: "Home Theater LG com Blu-ray 3D, 5.1 canais e 1000W", quantity: 80, price: 2199, category: "Eletrônicos" }, 
        { id: 2162952, name: "Kit Gamer acer - NoteBook + Headset + Mouse", price: 25599.00, category: "Eletrônicos" }, 
        { id: 3500957, name: "Monitor 29 LG FHD Ultrawide com 1000:1 de contraste", quantity: 18, price: 1559.40, category: "Eletrônicos" }, 
        { id: 1911864, name: "Mouse Gamer Predator Cestus 510 Fox Preto", price: 699, category: "Acessórios" } ] ) 
        
        .then(() => console.log("Documento Atualizado")) 
        .catch(console.log)
