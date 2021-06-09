import React from "react";
//import { Button, Icon, Label } from "semantic-ui-react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid, GridColumn } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <Route exact path="/" component={ProductList}/>
            <Route exact path="/products" component={ProductList}/>
            {/* <Route path="/products/1" component={ProductDetail}/> */}
            <Route exact path="/products/:name" component={ProductDetail}/>
            <Route exact path="/cart" component={CartDetail}/>
          </GridColumn>
        </Grid.Row>
      </Grid>

      
      {/* <Button as="div" labelPosition="right">
        <Button color="red">
          <Icon name="heart" />
          Like
        </Button>
        <Label as="a" basic color="red" pointing="left">
          2,048
        </Label>
      </Button>
      <Button as="div" labelPosition="right">
        <Button basic color="blue">
          <Icon name="fork" />
          Fork
        </Button>
        <Label as="a" basic color="blue" pointing="left">
          2,048
        </Label>
      </Button> */}
    </div>
  );
}
