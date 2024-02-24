
      // Define a date for the countdown
      var countDownDate = new Date("Feb 10, 2024 15:37:25").getTime();
      
      // Update the timer every one second
      var x = setInterval(function() {
      
        // Get the current date and time
        var now = new Date().getTime();
          
        // Calculate the distance between the current date and the countdown date
        var distance = countDownDate - now;
          
        // Calculate days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        // Display the result in an element with the class timer
        document.querySelector(".timer").innerHTML = days + " days " + hours + " hours "
        + minutes + " minutes " + seconds + " seconds ";
          
        // If the countdown is over, display a message
        if (distance < 0) {
          clearInterval(x);
          document.querySelector(".timer").innerHTML = "Our site is ready!";
        }
      }, 1000);