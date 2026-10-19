// UN DÍA, UNA FRASE — widget para Scriptable en iPhone.
// Pega todo este código en un script de Scriptable y guárdalo como "Una frase".
const quotes = [
"No necesitas tener ganas. Necesitas empezar.",
"Tu futuro se construye con lo que haces hoy, no con lo que planeas mañana.",
"Hazlo por la persona en la que te quieres convertir.",
"Un día malo no borra el progreso que llevas.",
"La disciplina es elegir lo que quieres más que lo que quieres ahora.",
"No hace falta hacerlo perfecto. Hace falta hacerlo.",
"Compite contigo: intenta ser un poco mejor que ayer.",
"Las pequeñas decisiones también cambian tu vida.",
"Si importa de verdad, hazle un hueco en tu día.",
"No confundas ir despacio con no avanzar.",
"La confianza se gana cumpliendo lo que te prometes.",
"Empieza antes de sentirte preparado.",
"Tu atención es tu recurso más valioso. Protégela.",
"Haz hoy algo que tu yo de mañana agradezca.",
"No necesitas demostrarlo. Necesitas trabajarlo.",
"El esfuerzo que nadie ve también cuenta.",
"Deja de esperar el momento perfecto. Usa el que tienes.",
"No todo depende de ti, pero tu siguiente paso sí.",
"Los resultados llegan después de repetir lo correcto.",
"Cada vez que cumples contigo, te respetas un poco más.",
"El móvil puede esperar. Tus objetivos no se construyen solos.",
"Haz menos promesas y cumple más pequeñas cosas.",
"La incomodidad de empezar dura menos que el arrepentimiento de no hacerlo.",
"No estás aquí para tener un día perfecto, sino para aprovecharlo.",
"Descansar también forma parte de avanzar.",
"No compares tu capítulo uno con el capítulo veinte de otra persona.",
"Lo que repites acaba formando parte de ti.",
"Un paso real vale más que diez planes perfectos.",
"No controles todo. Controla tu actitud y tu esfuerzo.",
"Termina el día orgulloso de haberlo intentado en serio.",
"No tienes que resolver tu vida hoy. Solo dar el siguiente paso.",
"Haz que tus hábitos hablen más alto que tus intenciones.",
"La motivación empieza el camino; la constancia te lleva lejos.",
"Puedes empezar de nuevo sin volver a empezar desde cero.",
"El tiempo va a pasar igualmente. Decide en qué quieres invertirlo.",
"No te castigues por fallar; aprende y vuelve al trabajo.",
"Una hora enfocada vale más que un día distraído.",
"Tu ritmo no tiene que parecerse al de nadie más.",
"Sé constante incluso cuando el progreso todavía no se nota.",
"Haz primero lo importante, no solo lo que resulta fácil."
];
// Mismo cálculo de fecha que la app: la frase coincide en el widget y en la web.
const now = new Date();
const day = new Date(now.getFullYear(),now.getMonth(),now.getDate());
const start = new Date(2026,0,1);
const index = ((Math.floor((day-start)/86400000)%quotes.length)+quotes.length)%quotes.length;
const w = new ListWidget();
w.backgroundColor = new Color("#f5f3ef");
w.setPadding(15,15,13,15);
const label = w.addText("TU RECORDATORIO DIARIO");
label.font = Font.boldSystemFont(8); label.textColor = new Color("#77736e"); label.letterSpacing = 1.1;
w.addSpacer(8);
const mark = w.addText("“"); mark.font = Font.systemFont(35); mark.textColor = new Color("#b7afa3"); mark.lineLimit = 1;
w.addSpacer(0);
const text = w.addText(quotes[index]);
text.font = Font.boldSystemFont(17); text.textColor = new Color("#191919"); text.minimumScaleFactor = 0.7; text.lineLimit = 6;
w.addSpacer(7);
const footer = w.addText(new Intl.DateTimeFormat("es-ES",{day:"numeric",month:"short"}).format(now).toUpperCase());
footer.font = Font.boldSystemFont(8); footer.textColor = new Color("#77736e"); footer.letterSpacing = 1;
// Al tocar el widget puedes abrir la web cuando hayas publicado la app y pongas tu URL aquí.
w.url = "https://www.scriptable.app/";
Script.setWidget(w);
Script.complete();
