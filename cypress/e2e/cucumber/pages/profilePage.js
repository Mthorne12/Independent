class profilePage{
    logoutButton(){
        return cy.contains('[href="/user/logout"]', 'Logout');
    };
};
const profile = new profilePage();
export default profile;