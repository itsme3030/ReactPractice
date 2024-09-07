
function renderElementInContainer(Element, container) {
    const new_element = document.createElement(Element.type);
    new_element.innerHTML = Element.Children;

    for(const prop in Element.props) {
        new_element.setAttribute(prop, Element[prop]);
    }

    container.appendChild(new_element);
};

const Element = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank'
    },
    Children : 'click this' 
};

const container = document.querySelector('#root');

renderElementInContainer(Element, container);