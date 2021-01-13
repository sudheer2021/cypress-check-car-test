class FreeCarCheckPage
{
    getCarDetails(vehicalIdentity)
    {
        return cy.get('dt').contains(vehicalIdentity).next()
    }

}

export default FreeCarCheckPage;