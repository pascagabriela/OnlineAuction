import {Component} from "react";
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from './AppNavbar';
import {Link, withRouter} from 'react-router-dom';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/products')
            .then(response => response.json())
            .then(data => this.setState({products: data}));
    }


    async remove(id) {
        await fetch(`/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updateProducts = [...this.state.products].filter(i => i.id !== id);
            this.setState({products: updateProducts});
        });
    }

    render() {
        const {products, isLoading} = this.state;
        if (isLoading) {
            return <p>Loading...</p>
        }
        const productList = products.map(product => {
            return <tr key={product.id}>
                <td style={{whiteSpace: 'nowrap'}}>{product.name}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/products/" + product.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(product.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/products/new">Add Product</Button>
                    </div>
                    <h3>Products</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="80%">Name</th>
                            <th width="20%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {productList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );

    }

}

export default ProductList;