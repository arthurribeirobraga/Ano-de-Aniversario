var birthYear = 2006;
var curretYear = 2022;

while (birthYear <= curretYear){
    document.write("Os anos depois do ano do meu nascimento:" + birthYear + "<br>" );
    birthYear++;
}

do {
    document.write("Os anos depois do ano do meu nascimento:" + birthYear + "<br>" );
    birthYear++;
} while (birthYear <= curretYear);
