'use strict'

function DomElement(selector, height, width, background, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = background;
  this.fontSize = fontSize;
}

DomElement.prototype.newElement = function() {
  let newElem;
  if (this.selector[0] === '.') {
    newElem = document.createElement('div');
    newElem.className = this.selector.slice(1); 
  }
  if (this.selector[0] === '#') {
    newElem = document.createElement('p');
    newElem.id = this.selector.slice(1);
  }
  newElem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
  newElem.textContent = this.selector;
  return newElem; 
};

let test = new DomElement('.test', '50vh', '50%', '#A52A2A', '40px');

document.body.appendChild(test.newElement());