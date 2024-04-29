export default function decorate(block) {
    const [antonioWrapper] = block.children;
    const divElem = document.createElement('div');
    const h1Elem = document.createElement('h1');
    h1Elem.textContent = antonioWrapper.textContent.trim();
    const pElem = document.createElement('p');
    pElem.textContent = "Dodano u bloku!";
    divElem.appendChild(h1Elem);
    divElem.appendChild(pElem);
    antonioWrapper.replaceChildren(divElem);
}