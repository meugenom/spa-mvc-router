'use strict';
import Model from './model.js';
import View from './view.js';

/**
 * controller BottomBar
 * @param model
 * @param view
 * 
 * @return html to view bottombar
 */


class Bottombar {
    constructor(){
        this.model = new Model();
        this.view = new View(); 
        this.bottombar = '';
    }

    async render(){                
        this.bottombar =  await this.view.appendBar();
        return this.bottombar;                        
    }

    after_render(){ }

}

export default Bottombar;