'use strict';

/**
 * View for component Home 
 * @param posts
 * @returns html view for home page
 */

class View {
    constructor(){           
    }   

    appendPosts(posts){        
        let view =  /*html*/`
            <section class="section">
                <h1> Home </h1>
                <ul>
                    ${ posts.map(post => 
                        /*html*/`<li><a href="#/p/${post.id}">${post.name}</a></li>`
                        ).join('\n ')
                    }
                </ul>
            </section>`
    return view;        
    }
}

export default View;