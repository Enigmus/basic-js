const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
  getLength() {    
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || position <  1 || position > this.getLength()   || !Number.isInteger(position)){      
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }else{
    this.chain.splice(position-1,1);
    return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let out = ''; 
    for(let i = 0; i < this.getLength(); i++){
      out += `( ${this.chain[i]} )~~`
    }
    out = out.substring(0,out.length - 2)
    this.chain = [];
    return out
  }
};

console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()); 
//'( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )';

console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain())
//, '( 3rd )~~( function () { } )


module.exports = {
  chainMaker
};
