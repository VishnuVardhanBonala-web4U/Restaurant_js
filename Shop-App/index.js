let items = [

    {
        image: "cake1.jpg",
        name: "cool cake",
        price: "$10",
        category: "cakes"
    },
    {
        image: "cake2.jpg",
        name: "chocolate cake",
        price: "$20",
        category: "cakes"
    }
    , {
        image: "drink1.jpg",
        name: "Power Drink",
        price: "$5",
        category: "drinks"
    },
    {
        image: "drink2.jpg",
        name: "Nature Drink",
        price: "$15",
        category: "drinks"
    }, {
        image: "drink3.jpg",
        name: "Health Drink",
        price: "$25",
        category: "drinks"
    }, {
        image: "cupcake1.jpg",
        name: "Mini CupCake",
        price: "$5",
        category: "cup cakes"
    }, {
        image: "cupcake2.jpg",
        name: "kaju CupCake",
        price: "$7",
        category: "cup cakes"
    },
    {
        image: "cupcake3.jpg",
        name: "party CupCake",
        price: "$30",
        category: "cup cakes"
    },

]

function loading()
{
    setTimeout( () =>
    {
        load = document.querySelector( ".loading" )
        load.style.display = "none"
        loadItems( items )

    }
        , 1 )
}

let output = document.querySelector( ".items" );
function loadItems( filteredItem = items )
{
    let itemresult = ""


    filteredItem.length > 0 ? filteredItem.map( item =>
    {
        itemresult += `<div class="item">
    <img src="./images/${ item.image }" alt="cake Item">
    <div class="item-info">
        <h6>${ item.name }</h6>

        <p>${ item.price }</p>
    </div>
    <div class="buy-item" onclick="TotalValue()"><button>Buy</button></div>

</div>`
        output.innerHTML = itemresult;



    }

    ) : output.innerHTML = `<h2 class="no-item-output">NO items Are Availabe Now !`
}


function filterItem()
{
    let inputItem = document.querySelector( "#filterItem" );
    let filteredItem = items.filter( item => item.name.trim().toLowerCase().indexOf( inputItem.value.trim().toLowerCase() ) !== -1 )
    loadItems( filteredItem )

}

function filterByCategory( filtervalue )
{
    if ( filtervalue !== "ALL" )
    {

        let filteredItem = items.filter( item => item.category.indexOf( filtervalue ) !== -1 )
        loadItems( filteredItem )
    }

    else if ( filtervalue === "ALL" )
    {
        loadItems( items )

    }

}

let TotalValue = () =>
{

    let totalValue = document.querySelector( ".total-value" )

    let AllSum = items.reduce( ( prevValue, selectPrice ) =>
    {
        let selectedButton = items.price
        selectPrice = items[selectedButton]
        splittedValue = selectPrice.price.split( "$" )[1];
        FinalValue = parseInt( splittedValue )

        return prevValue + FinalValue
    }, 0 )
    totalValue.innerHTML = "    $" + AllSum
}

function selectButton()
{

    selectedPrice = document.querySelector( ".total-value" )

}