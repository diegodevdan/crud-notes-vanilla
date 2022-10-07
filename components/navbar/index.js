

class Navbar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.connectedCallback();
    }

    render() {
        this.shadow.innerHTML = `
        <nav class="navbar">
            <div>
                <a href="/home">Home</a>
                <a href="/notes-crud/notes-crud/notes">Notes</a>
                <a href="/user">Users</a>
            </div>  
                <a href="/">Logout</a>
        </nav>
        `
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define('custom-navbar', Navbar);