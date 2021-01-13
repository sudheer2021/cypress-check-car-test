class Homepage
{
    getRegistrationNumber()
    {
        return cy.get('input[id=vrm-input]')
    }

    getFreeCarCheckButton()
    {
        return cy.get('button').contains('Free Car Check')
    }

}

export default Homepage;