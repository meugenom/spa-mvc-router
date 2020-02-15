'use strict';

/**
 * View for component Navbar
 * @returns html to view navbar block
 */

class View {
    constructor(){           
    }   

    appendBar(){        
        let view =  /*html*/`
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <a class="navbar-brand" href="#">SPA JS</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">
                        
                    </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#/">
                                Home 
                            <span class="sr-only">
                                (current)
                            </span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/error404">Error404</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/register">
                                <strong>Sign up</strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>            
        `
        return view
    }
}

export default View;