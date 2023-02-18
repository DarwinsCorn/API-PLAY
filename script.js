const mainHead = document.querySelector("#mainHead");
const image = document.querySelector("#image");
const input = document.querySelector("#input");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const ability = document.querySelector("#ability");

input.defaultValue = 1;
pokemon(1);
const spanHeight = createEle("span",``, height);
const spanWeight = createEle("span",``, weight);
const spanAbility = createEle("span",``, ability);

async function pokemon(num) {
    const pokeRaw = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`);
    const poke = await pokeRaw.json();
    mainHead.textContent = poke.name.toUpperCase();
    image.src = poke.sprites.other.dream_world.front_default;
    image.alt = poke.name;
    spanHeight.textContent = ` ${poke.height} dm`;
    spanWeight.textContent = ` ${poke.weight} hg`;
    // spanAbility.textContent = ` ${poke.abilities[0].ability.name}`;
    poke.abilities.forEach(abil=>spanAbility.textContent += ` ${abil.ability.name}, `);
    spanHeight.style = "color: gray";
    spanWeight.style = "color: gray";
    spanAbility.style = "color: gray";
}

function createEle(element,content,parent) {
    const ele = document.createElement(`${element}`);
    ele.textContent = content;
    parent.appendChild(ele);
    return ele;
}

input.addEventListener('change',()=>pokemon(input.valueAsNumber))


