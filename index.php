<?php ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />

    <title>Login</title>
  </head>
  
  <body>
    <div id="loginPage" class="container">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card-body p-5 text-center">
            <div id="form-login" class="mb-md-5 mt-md-4 pb-5">
              <h2 class="fw-bold mb-2 text-uppercase text-secondary">
                Reading Test
              </h2>
              <div class="form-outline mb-4">
                <input
                  id="userName"
                  placeholder="User Name"
                  class="form-control"
                />
              </div>
              <div class="form-outline mb-4">
                <select
                  id="timer"
                  onchange="timeChange()"
                  class="browser-default custom-select"
                >
                  <option value="0" selected>Select Time</option>
                  <option value="30">30 Seconds</option>
                  <option value="60">60 Seconds</option>
                  <option value="90">90 Seconds</option>
                  <option value="120">120 Seconds</option>
                  <option value="180">180 Seconds</option>
                </select>
              </div>
              <a
                id="start-btn"
                href="#"
                class="btn btn-dark px-5"
                style="opacity: 0.3"
                >Start</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="controller/login.js"></script>
    <script src="service/timerCount.js"></script>

    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
