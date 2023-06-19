function transferMoney() {
    var fromAccount = document.getElementById("fromAccount").value;
    var toAccount = document.getElementById("toAccount").value;
    var amount = parseInt(document.getElementById("amount").value);
  
    var fromBalance = parseInt(document.querySelector("#accountTable tr:nth-child(" + (parseInt(fromAccount) + 1) + ") td:nth-child(4)").textContent);
    var toBalance = parseInt(document.querySelector("#accountTable tr:nth-child(" + (parseInt(toAccount) + 1) + ") td:nth-child(4)").textContent);
  
    if (amount <= fromBalance) {
      var updatedFromBalance = fromBalance - amount;
      var updatedToBalance = toBalance + amount;
  
      document.querySelector("#accountTable tr:nth-child(" + (parseInt(fromAccount) + 1) + ") td:nth-child(4)").textContent = updatedFromBalance;
      document.querySelector("#accountTable tr:nth-child(" + (parseInt(toAccount) + 1) + ") td:nth-child(4)").textContent = updatedToBalance;
  
      var transactionRow = document.createElement("tr");
      transactionRow.innerHTML = "<td>" + fromAccount + "</td>" +
                                 "<td>" + toAccount + "</td>" +
                                 "<td>" + amount + "</td>" +
                                 "<td>" + updatedFromBalance + "</td>";
  
      document.getElementById("transactionTable").appendChild(transactionRow);
      alert("Transaction Successfull");
    } 
    else {
      alert("Insufficient balance!");
    }
  }