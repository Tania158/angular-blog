describe('Test API GET', () => {
    it('GET-Test', () => {
        cy.request('GET', 'http://localhost:62480/').then((responce) => {
            expect(responce).to.have.property('status', 200);
            expect(responce.body).to.not.be.null;
        })
    })
})

describe('Login page', () =>  {

    it('Should login', () => {
      cy.fixture('user.json')
        .then((user) => {
          cy.login(user.email, user.password)
          cy.wait('@login')
            .should(({ request, response }) => {
              expect(response.statusCode).to.eq(200);
            //   expect(response.headers).to.include.key('AIzaSyBGTuz-Pnd-Do-dRCx9mFFPHTDU31z8UVs')
            //   expect(response.body).to.include.key('email', 'password');
           })
      });
    })
  
    // it('Should redirect to home page', () => {
    //   cy.fixture('user.json')
    //     .then((user) => {
    //       cy.login(user.email, user.password)
    //       cy.url().should('include', 'home')
    //     })
    // })
  
    // it('should logout and redirect to login',() => {
    //   cy.fixture('user.json')
    //     .then((user) => cy.login(user.email, user.password))
    //     .then(() => {
    //       cy.get('a#logout').click();
    //       cy.url().should('include', 'login');
    //     })
    // });
})

context('The Home Page', () => {
    before(() => {
        cy.fixture('user.json')
          .then((user) => cy.login(user.email, user.password));
        cy.wait('@login').then(() => cy.saveLocalStorage());
    });
    
    beforeEach(() => {
        cy.restoreLocalStorage();
        cy.visit('/admin/dashboard');
    });

    it("Creating a post", () => {
        cy.contains("Создать").should('be.visible').click();
        cy.get('input[formControlName="title"]').type('Test');
        cy.get('quill-editor').find('[contenteditable]').eq(0).type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
        cy.get('input[formControlName="author"]').type('Test');
        cy.get('button[type="submit"]', { timeout: 10000 }).should('be.visible').and('contain', 'Создать пост').click();
        cy.contains("Главная").should('be.visible').click();
    })

    // it("Search and delete post", () => {
    //     cy.get('input[type="Text"]').type('test', { timeout: 10000 });
    //     cy.contains("Удалить", { timeout: 10000 }).should('be.visible').click();
    // })
})
  

// describe('The Home Page', () => {
//     it('successfully loads', () => {
//       cy.visit('/')
//     })
//     it('has an h1 on the page', () =>{
//         cy.get('h1').should('exist');
//     })
//     it('renders the correct h1 text', () =>{
//         cy.get('h1').should('contain.text', 'Healthy Food');
//     })
//     it('renders a line under the h1', () =>{
//         cy.get('.main__title').eq(0).find('h2').should('exist');
//     })
//    
    
// })




// describe("Counter main", () => {
//     
    
    

//         cy.request('POST', '/test/seed/post', {
//             title: 'First Post',
//             authorId: 1,
//             body: '...',
//         })


//         cy.request('POST', '/test/seed/user', { name: 'Jane' })
//         .its('body')
//         .as('currentUser')

//     })

//   });

