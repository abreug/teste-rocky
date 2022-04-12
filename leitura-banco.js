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

    //converter JSON para objeto

const objData = JSON.parse(jsonData)

    // acesso ao objeto, imprimindo os dados

    objData.map((id) => {
        console.log(id)
    })

    //alterando os dados do banco de dados

    console.log(objData[2].id);
    objData[2].name = 'Refrigerador Bottom Freezer Electrolux de 02 Portas Frost Free com 598 Litros';
    console.log(objData[2].name);
    console.log(objData[2].quantity);
    console.log(objData[2].price);
    console.log(typeof objData[2].price);
    console.log(objData[2].category);
    console.log(objData[2]);

    console.log(objData[9].id);
    objData[9].name = 'Mouse Gamer Predator Cestus 510 Fox Preto';
    console.log(objData[9].name);
    console.log(objData[9].quantity);
    objData[9].quantity = 0;
    console.log(objData[9].price);
    objData[9].price = parseFloat(objData[9].price);
    console.log(typeof objData[9].price);
    console.log(objData[9].category);
    console.log(objData[9]);

    console.log(objData[7].id);
    objData[7].name = 'Kit Gamer acer - NoteBook + Headset + Mouse';
    console.log(objData[7].name);
    console.log(objData[7].quantity);
    objData[7].quantity = 0;
    console.log(objData[7].price);
    objData[7].price = parseFloat(objData[7].price);
    console.log(typeof objData[7].price);
    console.log(objData[7].category);
    console.log(objData[7]);

    console.log(objData[8].id);
    objData[8].name = 'Monitor 29 LG FHD Ultrawide com 1000:1 de contraste';
    console.log(objData[8].name);
    console.log(objData[8].quantity);
    console.log(objData[8].price);
    console.log(typeof objData[8].price);
    console.log(objData[8].category);
    console.log(objData[8]);

    console.log(objData[0].id);
    objData[0].name = 'Conjunto de Panelas antiaderentes com 05 Peças Paris';
    console.log(objData[0].name);
    console.log(objData[0].price);
    console.log(objData[0].quantity);
    objData[0].price = parseFloat(objData[0].price);
    console.log(typeof objData[0].price);
    console.log(objData[0].category);
    console.log(objData[0]);

    console.log(objData[3].id);
    objData[3].name = 'Fogão de Piso Electrolux de 04 Bocas, Mesa de Vidro Prata';
    console.log(objData[3].name);
    console.log(objData[3].quantity);
    console.log(objData[3].price);
    objData[3].price = parseFloat(objData[3].price);
    console.log(typeof objData[3].price);
    console.log(objData[3].category);
    console.log(objData[3]);

    console.log(objData[5].id);
    objData[5].name = 'Smart TV 4K Sony LED 65” 4K X-Reality Pro, UpScalling, Motionflow XR 240 e Wi-Fi';
    console.log(objData[5].name);
    console.log(objData[5].quantity);
    objData[5].quantity = 0;
    console.log(objData[5].price);
    console.log(typeof objData[5].price);
    console.log(objData[5].category);
    console.log(objData[5]);

    console.log(objData[4].id);
    objData[4].name = 'Forno Micro-ondas Panasonic com capacidade de 21 Litros Branco';
    console.log(objData[4].name);
    console.log(objData[4].quantity);
    console.log(objData[4].price);
    objData[4].price = parseFloat(objData[4].price);
    console.log(typeof objData[4].price);
    console.log(objData[4].category);
    console.log(objData[4]);

    console.log(objData[1].id);
    objData[1].name = 'Lava & Seca 10,2 Kg Samsung Eco Bubble Branca com 09 Programas de Lavagem';
    console.log(objData[1].name);
    console.log(objData[1].quantity);
    console.log(objData[1].price);
    console.log(typeof objData[1].price);
    console.log(objData[1].category);
    console.log(objData[1]);

    console.log(objData[6].id);
    objData[6].name = 'Home Theater LG com Blu-ray 3D, 5.1 canais e 1000W';
    console.log(objData[6].name);
    console.log(objData[6].quantity);
    console.log(objData[6].price);
    console.log(typeof objData[6].price);
    console.log(objData[6].category);
    console.log(objData[6]);

    let JsonArray = JSON.stringify(objData);
    console.log(JsonArray);
    
