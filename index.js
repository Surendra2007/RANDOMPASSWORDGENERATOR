let input = document.querySelector("input");
      let button = document.querySelector("button");
      button.addEventListener("click", () => {
        let data = "";
        let charctor =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*-?><+1234567890";
          
        for (let i = 0; i <= 12; i++) {
          let random = Math.floor(Math.random() * 74);
          data += charctor.charAt(random);
        }
        input.value=data;
      });
