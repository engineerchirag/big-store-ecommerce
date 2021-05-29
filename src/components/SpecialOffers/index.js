import React, { useState } from 'react';

const Heading = () => {
  return (
    <div class="spec ">
      <h3>Special Offers</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>
  );
}

const ItemWidget = (props) => {
  const {
    title,
    image,
    mrp,
    discountedPrice,
    rating,
    quantity,
  } = props;
  return (
    <div class="col-md-3 pro-1">
        <div class="col-m">
          <a href="#" data-toggle="modal" data-target="#myModal18" class="offer-img">
            <img src={image} class="img-responsive" alt="" />
          </a>
          <div class="mid-1">
            <div class="women">
              <h6><a href="single.html"> {title}</a></h6>
            </div>
            <div class="mid-2">
              <p><label>{mrp}</label><em class="item_price">{discountedPrice}</em></p>
              <div class="block">
                <div class="starbox small ghosting"> </div>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="add">
              <button class={`btn my-cart-btn my-cart-b ${quantity === 0 ? 'disabled': ''}`} data-id="1" data-name="product 1"
                data-summary="summary 1" data-price="4.50" data-quantity="1"
                data-image="images/of17.png">{quantity === 0 ? 'Out of stock' : 'Add to Cart'}</button>
            </div>
          </div>
        </div>
      </div>
  )
}

const SpecialOffers = () => {
  const [widgets, setWidget] = useState({
    "results": [{
        "title": "Moisturiser",
        "mrp": "$7.00",
        "discounted_price": "$6.00",
        "image": "images/of16.png",
        "quantity": 0,
        "selectedQuantity": 0,
    }, {
        "title": "Lady Finger(250 g)",
        "mrp": "$8.00",
        "discounted_price": "$6.00",
        "image": "images/of17.png",
        "quantity": 2,
    }, {
        "title": "Ribbon(1 pc)",
        "mrp": "$10.00",
        "discounted_price": "$7.00",
        "image": "images/of18.png",
        "quantity": 2,
    }, {
        "title": "Grapes(500 g)",
        "mrp": "$11.00",
        "discounted_price": "$6.00",
        "image": "images/of19.png",
        "quantity": 2
    }, {
        "title": "Clips(1 pack)",
        "mrp": "$12.00",
        "discounted_price": "$6.00",
        "image": "images/of20.png",
        "quantity": 4
    }, {
        "title": "Conditioner(250 g)",
        "mrp": "$18.00",
        "discounted_price": "$16.00",
        "image": "images/of21.png",
        "quantity": 5
    }, {
        "title": "Cleaner(250 kg)",
        "mrp": "$17.00",
        "discounted_price": "$16.00",
        "image": "images/of22.png",
        "quantity": 6
    }, {
        "title": "Gel(150 g)",
        "mrp": "$14.00",
        "discounted_price": "$10.00",
        "image": "images/of22.png",
        "quantity": 0
    }],
    "moreAvailable": true,
    "demand": "High Demand",
});

const loadMore = () => {
  const newWidgets = {
      results: [{
        "title": "New Clips(1 pack)",
        "mrp": "$12.00",
        "discounted_price": "$6.00",
        "image": "images/of20.png",
        "quantity": 4
    }, {
        "title": "New Conditioner(250 g)",
        "mrp": "$18.00",
        "discounted_price": "$16.00",
        "image": "images/of21.png",
        "quantity": 5
    }, {
        "title": "New Cleaner(250 kg)",
        "mrp": "$17.00",
        "discounted_price": "$16.00",
        "image": "images/of22.png",
        "quantity": 6
    }, {
        "title": "New Gel(150 g)",
        "mrp": "$14.00",
        "discounted_price": "$10.00",
        "image": "images/of22.png",
        "quantity": 0
    }],
    "moreAvailable": false,
  };
  setWidget(oldState => {
    return {
      ...oldState,
      results: [...oldState.results, ...newWidgets.results],
      moreAvailable: newWidgets.moreAvailable,
    }
  });
}

  const renderItems = (items) => {
    return (
      <>
        <div className='text-center row p-4'>Demand: {widgets.demand}</div>
        {
          items.map((item) => {
            return (
              <ItemWidget
                image={item.image}
                mrp={item.mrp}
                discountedPrice={item.discounted_price}
                title={item.title}
                quantity={item.quantity}
              />
            )
          })
        }
        <div className='text-center'>
          {
            widgets.moreAvailable ? (
              <span onClick={loadMore}>Load more</span>
            ) : null
          }
        </div>
      </>
    )
  };


  return (
    <div>
      <div class="product">
        <div class="container">
          <Heading />
          <div class="con-w3l">
            {renderItems(widgets.results)}
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialOffers;