import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Top, TopButton, TopText, Bottom, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button } from './StyledComponents';
import FormatNumber from "../utils/FormatNumber";
import styled from "styled-components";

const Info = styled.div`
  flex: 3;
`;

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <WrapperCart>
            <TitleCart>MI CHANGUITO</TitleCart>
            <Top>
                <Link to='/'><TopButton>SEGUIR COMPRANDO</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.removeList} style={{color:"red"}}>ELIMINAR LOS PRODUCTOS</TopButton>
                    : <TopText>TU CARRITO ESTA VACIO</TopText>
                }
            </Top>
            <ContentCart>
            <Bottom>
                <Info>
                    {
                        test.cartList.length > 0 &&
                            test.cartList.map(item => 
                            <Product key={item.idItem}>
                            <ProductDetail>
                                <ImageCart src={item.imgItem} />
                                <Details>
                                <span>
                                    <b>Producto:</b> {item.nameItem}
                                </span>
                                <TopButton type="filled" onClick={() => test.deleteItem(item.idItem)} style={{color:"red"}}>ELIMINAR</TopButton>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <div>
                                <p>{item.qtyItem} Producto(s)</p>
                                <p>$ {item.costItem} cada uno</p>
                                </div>
                                <ProductPrice>$ {test.calcTotalPerItem(item.idItem)} </ProductPrice>
                            </PriceDetail>
                            </Product>
                            )

                    }
                </Info>
                {
                    test.cartList.length > 0 &&
                        <Summary>
                            <SummaryTitle>RESUMEN DEL PEDIDO</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice  style={{color:"white"}}><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText  style={{color:"red"}}>Impuestos</SummaryItemText>
                                <SummaryItemPrice  style={{color:"red"}}><FormatNumber number={test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText  style={{color:"green"}}>Descuentos</SummaryItemText>
                                <SummaryItemPrice  style={{color:"green"}}><FormatNumber number={-test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice  style={{color:"white"}}><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <Button>CHEQUEAR COMPRA</Button>
                        </Summary>
                }
            </Bottom>
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;
