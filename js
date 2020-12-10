var bieres= {
{Degre:"5.2%", Nom:"Jupiler", Prix:"1"},
{Degre:"5.2%", Nom:"Maes", Prix:"1"},
{Degre:"5.2%", Nom:"Jupiler", Prix:"1"},
{Degre:"5.2%", Nom:"Stella artois", Prix:"1"},
{Degre:"8%", Nom:"Kasteel red", Prix:"2"},
{Degre:"9%", Nom:"Chimay", Prix:"2.5"}
};

var commandes={};
function ajouterBoisson(){
    var ref = commandes;
    if (ref in commandes) {
        commandes[ref]++;
    }
    else {
        commandes[ref] = 1;
    }
    afficherAchats();
}

function afficherCatalogue() {
    var ligne;
    var index = indexCatalogue();
    for (var i of index) {
        ligne = '<tr>';
        ligne += '<td class=aut>' + bieres[i].Degré + '</td>';
        ligne += '<td class=tit>' + bieres[i].Nom + '</td>';
        ligne += '<td class=prx>' + biere[i].Prix.toFixed(2) + '</td>';
        var button = "<input type='button' value='ajt name='" + i + "' onclick="ajouterBoisson;">;
        ligne += '<td class="">' + button + '</td>'
        ligne += '</tr>';
        addElem('tableCatalogue', ligne);
    }
}

function afficherAchats() {
    setElem("tableAchats", '');
    var ligne;
    for (var a in commandes) {
        ligne = '<tr>';
        ligne += '<td class=ref>' + a + '</td>';
        ligne += '<td class=tit>' + bieres[a].titre + '</td>';
        ligne += '<td class=nbre>' + commandes[a] + '</td>';
        ligne += '</tr>';
        addElem('tableAchats', ligne);
    }
    totalAchats();
}
function totalAchats(){
    let total = 0;
    for (var in commandes){
        total+= commandes[a]* bieres[a].Prix;
    }
    setElem('tot', total.toFixed(2));
}

