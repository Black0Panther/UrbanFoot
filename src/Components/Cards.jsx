import Card from "./Card"


const Cards=({shoeData})=>{
    return <>
        <h1 className="Cards_heading">Top Sneakers</h1>   
    <div className="cards_container">
      {
        shoeData.map(shoe=>{
            return(
            <Card
             key={shoe.id}
             img={shoe.img}
             name={shoe.name}
             content={shoe.content}
            shoeData={shoe}
            />
            );
        })
      }
    </div>
    </>
}
export default Cards


{/* <Card></Card>
<Card></Card>
<Card></Card>
<Card></Card>
<Card></Card>
<Card></Card>
<Card></Card>
<Card></Card> */}