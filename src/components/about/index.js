'use strict'

/**
 * Controller for component About
 * @returns html to view page About
 */

class About {
  async render () {
    const view = /* html */`
            <section class="section">
                <h1> About </h1>
                <div class="bd-example">
                    <address>
                        <strong>Me, Inc.</strong><br>
                            63263 Marktplatz St, <br>
                            Frankfurt am Main, <br>
                            <abbr title="Phone">P:</abbr> (123) 456-7890
                    </address>
                    <address>
                        <strong>Full Name</strong><br>
                        <a href="mailto:first.last@example.com">first.last@example.com</a>
                    </address>
                </div>
                <a href="#/" class="btn btn-link">Back to Home</a>
            </section>
        `
    return view
  }

  afterRender () {
  }
}

export default About
