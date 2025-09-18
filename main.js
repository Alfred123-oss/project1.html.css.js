function updatePrice(pricedisplayID,selectedsize) {
    var sizedropdown = document.getElementById(pricedisplayID);
    // var pricedisplay = document.getElementById("pricedisplay");
    // var selectedsize = sizedropdown.value;
    var price;
  
    switch (selectedsize) {
      case "Small":
        price = "250";
        break;
      case "Medium":
        price = "350";
        break;
      case "Large":
        price = "450";
        break;
      default:
        price = "0";
    }
  
    sizedropdown.innerHTML = "Ksh " + price;
  }
  