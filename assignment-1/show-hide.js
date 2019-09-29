class ShowHide extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
            <button>Show</button>
            <p><slot>Some Default</slot></p>
        `
        this.isHidden = true;
        this.button = this.shadowRoot.querySelector('button');
        this.paragraph = this.shadowRoot.querySelector('p');
    }

    connectedCallback(){
        this.button.addEventListener('click', this.showHide.bind(this))
    }

    showHide(){
        this.isHidden = !this.isHidden;
        console.log(`currently: ${this.isHidden}`)
        if(this.isHidden){
            this.paragraph.style.display = 'none';
            this.button.textContent = 'Show';
        }else{
            this.paragraph.style.display = 'block';
            this.button.textContent = 'Hide';
        }
    }

}

customElements.define('show-hide', ShowHide)