import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function myNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/recipes">Recipes</Nav.Link>
                        <Nav.Link href="/ingredient">Ingredients</Nav.Link>
                        <Nav.Link href="/ingredientCategories">Ingredient Categories</Nav.Link>
                        <Nav.Link href="/recipeCategories">Recipe Categories</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default myNav;
