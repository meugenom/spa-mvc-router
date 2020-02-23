'use strict'

/**
 * Controller for component Register
 * @returns html to view register form
 */

class Register {
  render () {
    return /* html */ `
            <section class="section">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input  type="email" class="form-control" 
                            id="email_input" aria-describedby="emailHelp"
                            placeholder = " enter email adress please">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input  type="password" 
                            class="form-control" 
                            id="pass_input"
                            placeholder ="enter password please"
                    >
                </div>                
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            </section>
        `
  }

  afterRender () {
  }
}

export default Register
