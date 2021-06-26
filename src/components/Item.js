  import {Card , Button} from 'react-bootstrap'
  export default function Items(props){
    let productObj=props.productObj;
    console.log("product obj is : " , productObj)
    return(
           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={productObj.profileImage} className = "w-100 h-25" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className = "text-dark">
                    <h5>Name : {productObj.producname}</h5>
                    <h5>Price : {productObj.productprice}</h5>
                    <h5>Brand :{productObj.productId}</h5>
                 </Card.Text>
    <Button variant="primary">Buy</Button>
  </Card.Body>
   </Card>

    )
}