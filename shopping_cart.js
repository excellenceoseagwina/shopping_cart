/*Declaring Store*/
let quantityofGoods = 1000;
let insuranceFee = 20;
let Isinsured = false;
let ageofBuyer = 18;
let shippingFee = 3;
let priceOfaGood = 55;
let order = confirm("Order?");
let review = order
  ? prompt("What Goods do you wanna buy")
  : alert("Closing........");
let Arrayofgoods = [
  {
    good_1: "Vegetable",
    good_2: "Television",
    good_3: "Rice",
    good_4: "Egg",
    good_5: "Ceramic Plates",
    good_6: "Glass Cups",
  },
  {
    weight_of_good_1_per_quantity: 5,
    weight_of_good_2_per_quantity: 25,
    weight_of_good_3_per_quantity: 50,
    weight_of_good_4_per_quantity: 1,
    weight_of_good_5_per_quantity: 3,
    weight_of_good_6_per_quantity: 2,
  },
];

let Isfragile = false;
let Isperishable = false;

if (
  (order === true && review === Arrayofgoods[0].good_1) ||
  review === Arrayofgoods[0].good_2 ||
  review === Arrayofgoods[0].good_3 ||
  review === Arrayofgoods[0].good_4 ||
  review === Arrayofgoods[0].good_5 ||
  (review === Arrayofgoods[0].good_6 && Isinsured !== true)
) {
  let review_2 = prompt("How many Quantity:", Number());
  if (review_2 > quantityofGoods) {
    invalid_qua = alert("We don't have that much quantity");
  } else if (review_2 <= quantityofGoods) {
    let age = prompt("Age of buyer: ");
    if (age >= ageofBuyer) {
      let total_price = review_2 * priceOfaGood;
      let total_price_review = confirm(
        `Total price based on quantity of goods is $${total_price}`
      );

      /*Vegetable*/
      if (
        review === Arrayofgoods[0].good_1 &&
        Isinsured !== true &&
        Isperishable !== true
      ) {
        let weight_good_1 =
          Arrayofgoods[1].weight_of_good_1_per_quantity * review_2;
        let weight_good_1_review = confirm(
          `Weight of ${review_2} goods is ${weight_good_1}kg`
        );
        if (weight_good_1_review === true) {
          let shippingFee_good_1 = weight_good_1 * 3;
          let shippingFee_good_1_review = confirm(
            `Shipping fee is $${shippingFee_good_1}`
          );
          if (shippingFee_good_1_review === true) {
            let overall_cost_goods_1 =
              shippingFee_good_1 + weight_good_1 + total_price + insuranceFee;

            /*Since it is a perishable good, 2% will be deducted from the overall price*/

            let overall_cost_goods_1_perish = overall_cost_goods_1 - 100 / 2;
            let overall_cost_goods_1_review = confirm(
              `Since ${Arrayofgoods[0].good_1} is a perishable good, we deducted 2% from your inital total amount which is $${overall_cost_goods_1}. New Ammount is ${overall_cost_goods_1_perish}.`
            );
            alert(
              `Review: A Buyer ${age} year old, bought ${review_2} of ${review}. The total cost is $${overall_cost_goods_1_perish}`
            );
          }
        }
      }

      /*Televison*/
      if (review === Arrayofgoods[0].good_2 && Isfragile === false) {
        let weight_good_2 =
          Arrayofgoods[1].weight_of_good_2_per_quantity * review_2;
        let weight_good_2_review = confirm(
          `Weight of ${review_2} goods is ${weight_good_2}kg`
        );
        if (weight_good_2_review === true) {
          let shippingFee_good_2 = weight_good_2 * 3;
          let shippingFee_good_2_review = confirm(
            `Shipping fee is $${shippingFee_good_2}`
          );

          if (shippingFee_good_2_review === true) {
            let overall_cost_goods_2 =
              shippingFee_good_2 + weight_good_2 + total_price + insuranceFee;

            /*Since it is a fragile good, 1% will be deducted from the overall price*/

            let overall_cost_goods_2_perish = overall_cost_goods_2 - 100 / 1;
            let overall_cost_goods_2_review = confirm(
              `Since ${Arrayofgoods[0].good_2} is a perishable good, we deducted 2% from your inital total amount which is $${overall_cost_goods_2}. New Ammount is ${overall_cost_goods_2_perish}.`
            );
            alert(
              `Review: A Buyer ${age} year old, bought ${review_2} of ${review}. The total cost is $${overall_cost_goods_2_perish}`
            );
            alert(`Delivering in progress.........`);
            alert(`Done`);
          }
        }
      }

      /*Rice*/
      if (review === Arrayofgoods[0].good_3) {
        let weight_good_3 =
          Arrayofgoods[1].weight_of_good_3_per_quantity * review_2;
        let weight_good_3_review = confirm(
          `Weight of ${review_2} goods is ${weight_good_3}kg`
        );
        if (weight_good_3_review === true) {
          let shippingFee_good_3 = weight_good_3 * 3;
          let shippingFee_good_3_review = confirm(
            `Shipping fee is $${shippingFee_good_3}`
          );

          if (shippingFee_good_3_review === true) {
            let overall_cost_goods_3 =
              shippingFee_good_3 + weight_good_3 + total_price + insuranceFee;

            /*Since it is not a fragile good, nothing will be deducted from the overall price*/

            let overall_cost_goods_3_review = confirm(
              `Since ${Arrayofgoods[0].good_3} is not perishable good nor a fragile good, we deducted nothing from your total amount which is $${overall_cost_goods_3}`
            );
            alert(
              `Review: A Buyer ${age} year old, bought ${review_2} of ${review}. The total cost is $${overall_cost_goods_3}`
            );
            alert(`Delivering in progress.........`);
            alert(`Done`);
          }
        }
      }

      /*Eggs*/
      if (review === Arrayofgoods[0].good_4) {
        let weight_good_4 =
          Arrayofgoods[1].weight_of_good_4_per_quantity * review_2;
        let weight_good_4_review = confirm(
          `Weight of ${review_2} goods is ${weight_good_4}kg`
        );

        if (weight_good_4_review === true) {
          let shippingFee_good_4 = weight_good_4 * 3;
          let shippingFee_good_4_review = confirm(
            `Shipping fee is $${shippingFee_good_4}`
          );

          if (shippingFee_good_4_review === true) {
            let overall_cost_goods_4 =
              shippingFee_good_4 + weight_good_4 + total_price + insuranceFee;

            /*Since it is a fragile good, 1% will be deducted from the overall price*/

            let overall_cost_goods_4_perish = overall_cost_goods_4 - 100 / 1;
            let overall_cost_goods_4_review = confirm(
              `Since ${Arrayofgoods[0].good_4} is a fragile good, we deducted 2% from your inital total amount which is $${overall_cost_goods_4}. New Ammount is ${overall_cost_goods_4_perish}.`
            );
            alert(
              `Review: A Buyer ${age} year old, bought ${review_2} of ${review}. The total cost is $${overall_cost_goods_4_perish}`
            );
            alert(`Delivering in progress.........`);
            alert(`Done`);
          }
        }
      }

      /*Creamic Plates*/
      if (review === Arrayofgoods[0].good_5) {
        let weight_good_5 =
          Arrayofgoods[1].weight_of_good_5_per_quantity * review_2;
        let weight_good_5_review = confirm(
          `Weight of ${review_2} goods is ${weight_good_5}kg`
        );
        if (weight_good_5_review === true) {
          let shippingFee_good_5 = weight_good_5 * 3;
          let shippingFee_good_5_review = confirm(
            `Shipping fee is $${shippingFee_good_5}`
          );

          if (shippingFee_good_5_review === true) {
            let overall_cost_goods_5 =
              shippingFee_good_5 + weight_good_5 + total_price + insuranceFee;

            /*Since it is a fragile good, 1% will be deducted from the overall price*/

            let overall_cost_goods_5_perish = overall_cost_goods_5 - 100 / 1;
            let overall_cost_goods_5_review = confirm(
              `Since ${Arrayofgoods[0].good_5} is a fragile good, we deducted 2% from your inital total amount which is $${overall_cost_goods_5}. New Ammount is ${overall_cost_goods_5_perish}.`
            );
            alert(
              `Review: A Buyer ${age} year old, bought ${review_2} of ${review}. The total cost is $${overall_cost_goods_5_perish}`
            );
            alert(`Delivering in progress.........`);
            alert(`Done`);
          }
        }
      }

      /* Glass Cups*/
      if (review === Arrayofgoods[0].good_6) {
        let weight_good_6 =
          Arrayofgoods[1].weight_of_good_6_per_quantity * review_2;
        let weight_good_6_review = confirm(
          `Weight of ${review_2} goods is ${weight_good_6}kg`
        );
        if (weight_good_6_review === true) {
          let shippingFee_good_6 = weight_good_6 * 3;
          let shippingFee_good_6_review = confirm(
            `Shipping fee is $${shippingFee_good_6}`
          );

          if (shippingFee_good_6_review === true) {
            let overall_cost_goods_6 =
              shippingFee_good_6 + weight_good_6 + total_price + insuranceFee;

            /*Since it is a fragile good, 1% will be deducted from the overall price*/

            let overall_cost_goods_6_perish = overall_cost_goods_6 - 100 / 1;
            let overall_cost_goods_6_review = confirm(
              `Since ${Arrayofgoods[0].good_6} is a fragile, we deducted 2% from your inital total amount which is $${overall_cost_goods_6}. New Ammount is ${overall_cost_goods_6_perish}.`
            );
            alert(
              `Review: A Buyer ${age} year old, bought ${review_2} of ${review}. The total cost is $${overall_cost_goods_6_perish}`
            );
            alert(`Delivering in progress.........`);
            alert(`Done`);
          }
        }
      }
    } else if (age <= ageofBuyer) alert("You Are Underage!!!!!!!!");
  }
} else if (
  review !== Arrayofgoods[0].good_1 ||
  review === Arrayofgoods[0].good_2 ||
  review === Arrayofgoods[0].good_3 ||
  review === Arrayofgoods[0].good_4 ||
  review === Arrayofgoods[0].good_5 ||
  review === Arrayofgoods[0].good_6
) {
  alert("We don't have such item");
}
