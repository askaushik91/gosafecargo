<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YesGoCargo</title>

    <?php include'assets/includes/files.php' ?>
</head>

<body>
    <?php include'assets/includes/header.php' ?>

    <!--Banner Starts-->
    <div id="bannerBlock">
        <div class="container">
            <div class="col bannerForm">
                <form id="queryForm">
                    <h2>Get Quotation</h2>
                    <div class="formInner">
                        <ul>
                            <li>
                                <label for="nameField">Name</label>
                                <input type="text" id="nameField" name="fullName" title="Please enter your full name" required autocomplete="off" />
                            </li>

                            <li>
                                <label for="mobileField">Mobile No.</label>
                                <input type="text" id="mobileField" name="mobNumber" title="Please enter your mobile number" required autocomplete="off" maxlength="10" />
                            </li>

                            <li>
                                <label for="locFromField">Location From</label>
                                <input type="text" id="locFromField" name="fromLoc" title="Please enter your location from where you want us to pick up your cargo" required autocomplete="off" />
                            </li>

                            <li>
                                <label for="locToField">Location To</label>
                                <input type="text" id="locToField" name="toLoc" title="Please enter your location to where you want us to drop your cargo" required autocomplete="off" />
                            </li>

                            <li>
                                <button id="submitBtn" type="submit" title="Please click here to submit your query">Submit</button>
                            </li>

                            <label id="loader"></label>
						    <label id="info"></label>
                        </ul>
                    </div>
                </form>
            </div>

            <div class="col bannerImg">
                <h1>One Stop Solution For All Your <br />DeCamping Needs</h1>
                <!-- <img src="assets/media/images/banner_main.jpeg" title="YesGo Banner"/> -->
            </div>
        </div>
        <div class="overlayBg"></div>
    </div>

    <!--Services Starts-->
    <div id="serBlock">
        <div class="container">
            <div class="col services">
                <h1>What We Offer</h1>
                <div id="serList">
                    <span id="corporate" class="indiService">Corporate Shifting</span>
                    <span id="car" class="indiService">Car Carrier</span>
                    <span id="bike" class="indiService">Bike Carrier</span>
                    <span id="warehouse" class="indiService">Warehouse</span>
                    <span id="household" class="indiService">Household Shifting</span>
                    <span id="packing" class="indiService">Packing & Moving</span>
                </div>
            </div>
            <div class="col" id="serTab">
                <div class="detailInner">
                    <h2 id="serTabHead" class="col">Top Notch Services</h2>
                    <p id="serTabContent" class="col">Helping People Shift<br />Since 2019</p>
                </div>
            </div>
        </div>
    </div>

    <!--Testimonials Starts-->
    <div id="testiBlock">
        <div class="col leftBlock">
            <h1>Our Client's Opinions</h1>
            <div class="custRev">
                <h2 id="custName">Krishna</h2>
                <p id="custReply">The process was totally hasslefree. I'm glad that I chose yesgo for this.</p>
            </div>
        </div>
        <div class="col rightBlock">
            <img src="assets/media/images/testimonial.jpg" />
        </div>
        <div class="overlayBg"></div>
    </div>

    <!--Footer-->
    <?php include'assets/includes/footer.php' ?>

    
    <?php include'assets/includes/scripts.php' ?>
    <script src="assets/js/main.js"></script>
	<script src="formPost.js"></script>
</body>

</html>